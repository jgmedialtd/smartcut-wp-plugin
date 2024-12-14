<?php

namespace SmartCut\Product\Pricing;

defined('ABSPATH') || exit;

class PricingStrategy
{
	private $product;
	private $settings;
	private $strategy;

	public function __construct($product, array $settings)
	{
		$this->product = $product;
		$this->settings = $settings;
		$this->strategy = $settings['pricing_strategy'] ?? 'full_stock';
	}

	/**
	 * Get pricing strategy description
	 */
	public function getDescription(): string
	{
		$descriptions = [
			'part_area' => __('This product is priced by part area, so adding fractions of a stock to the cart is possible.', 'smartcut'),
			'full_stock_plus_cut_length' => __('This product is priced by full stock plus cut length.', 'smartcut'),
			'full_stock_plus_num_parts' => __('This product is priced by full stock plus number of parts.', 'smartcut'),
			'full_stock' => __('This product is priced by full sheet.', 'smartcut'),
			'cut_length' => __('This product is priced by cut length.', 'smartcut'),
			'roll_length' => __('This product is priced by roll length.', 'smartcut')
		];

		return $descriptions[$this->strategy] ?? $descriptions['full_stock'];
	}

	/**
	 * Render pricing table with extras
	 */
	public function renderPricingTable(array $bandingData = null, array $finishData = null): void
	{
		$components = $this->getPricingComponents();

		if ($bandingData) {
			$components[] = [
				'id' => 'smartcut-banding-total',
				'label' => __('Banding total', 'smartcut'),
				'initial_price' => 0
			];
		}

		if ($finishData) {
			$components[] = [
				'id' => 'smartcut-finish-total',
				'label' => __('Finish total', 'smartcut'),
				'initial_price' => 0
			];
		}

		if (isset($this->settings['enable_machining']) && $this->settings['enable_machining'] === '1') {
			$components[] = [
				'id' => 'smartcut-machining-total',
				'label' => __('Machining total', 'smartcut'),
				'initial_price' => 0
			];
		}

		if (empty($components)) {
			return;
		}

		echo '<table id="smartcut-pricing-table">';

		foreach ($components as $component) {
			printf(
				'<tr id="%s"><td class="price">%s</td><td>%s</td></tr>',
				esc_attr($component['id']),
				esc_html($component['label']),
				wc_price($component['initial_price'])
			);
		}

		echo '</table>';
	}

	/**
	 * Get base pricing components
	 */
	public function getPricingComponents()
	{
		$components = array();

		switch ($this->strategy) {
			case 'full_stock_plus_cut_length':
				$components[] = array(
					'id' => 'smartcut-cut-length-total',
					'label' => __('Cut length total', 'smartcut'),
					'initial_price' => 0
				);
				break;

			case 'full_stock_plus_num_parts':
				$components[] = array(
					'id' => 'smartcut-stock-total',
					'label' => __('Stock total', 'smartcut'),
					'initial_price' => 0
				);
				$components[] = array(
					'id' => 'smartcut-per-part-total',
					'label' => __('Part total', 'smartcut'),
					'initial_price' => 0
				);
				break;

			case 'roll_length':
				$components[] = array(
					'id' => 'smartcut-roll-length-total',
					'label' => __('Roll length total', 'smartcut'),
					'initial_price' => 0
				);
				break;
		}

		if ($this->hasSurcharge()) {
			$components[] = array(
				'id' => 'smartcut-surcharge-total',
				'label' => __('Cutting charge total', 'smartcut'),
				'initial_price' => 0
			);
		}

		return $components;
	}

	/**
	 * Calculate total price based on strategy
	 */
	public function calculatePrice(array $input): array
	{
		$basePrice = $this->calculateBasePrice($input);
		$surcharge = $this->hasSurcharge() ? $this->calculateSurcharge($input) : 0;

		return [
			'base_price' => $basePrice,
			'surcharge' => $surcharge,
			'total' => $basePrice + $surcharge
		];
	}

	/**
	 * Calculate base price according to strategy
	 */
	private function calculateBasePrice(array $input): float
	{
		switch ($this->strategy) {
			case 'part_area':
				return $this->calculatePartAreaPrice($input);

			case 'full_stock_plus_cut_length':
				return $this->calculateFullStockPlusCutLength($input);

			case 'full_stock_plus_num_parts':
				return $this->calculateFullStockPlusNumParts($input);

			case 'cut_length':
				return $this->calculateCutLength($input);

			case 'roll_length':
				return $this->calculateRollLength($input);

			case 'full_stock':
			default:
				return $this->calculateFullStock($input);
		}
	}

	/**
	 * Check if surcharge is enabled
	 */
	private function hasSurcharge(): bool
	{
		return isset($this->settings['surcharge_type'])
			&& $this->settings['surcharge_type'] !== 'none'
			&& isset($this->settings['surcharge']);
	}

	/**
	 * Calculate surcharge based on type and input
	 */
	private function calculateSurcharge(array $input): float
	{
		if (!$this->hasSurcharge()) {
			return 0.0;
		}

		$surchargeType = $this->settings['surcharge_type'];
		$surchargeAmount = floatval($this->settings['surcharge']);

		switch ($surchargeType) {
			case 'per_cut':
				return $surchargeAmount * ($input['num_cuts'] ?? 0);

			case 'per_part':
				return $surchargeAmount * ($input['num_parts'] ?? 0);

			case 'fixed':
				return $surchargeAmount;

			default:
				return 0.0;
		}
	}

	/**
	 * Validate pricing strategy configuration
	 * @return array Array of validation messages
	 */
	public function validateConfiguration()
	{
		$messages = array();
		$settings = $this->settings;

		// Check pricing strategy configuration
		switch ($this->strategy) {
			case 'full_stock_plus_cut_length':
				if (!isset($settings['cut_length_price'])) {
					$messages[] = 'When using the full sheet plus cut length pricing strategy, a price must be supplied for the cut length.';
				}
				break;

			case 'full_stock_plus_num_parts':
				if (!isset($settings['per_part_price'])) {
					$messages[] = 'When using the full sheet plus number of parts pricing strategy, a part price must be supplied.';
				}
				break;
		}

		// Check surcharge configuration
		if (
			isset($settings['surcharge_type']) &&
			$settings['surcharge_type'] !== 'none' &&
			!isset($settings['surcharge'])
		) {
			$messages[] = 'If a surcharge type is specified, a surcharge price must be supplied.';
		}

		return $messages;
	}

	// Individual pricing strategy calculations
	private function calculatePartAreaPrice(array $input): float
	{
		$basePrice = floatval($this->product->get_price());
		$area = ($input['length'] ?? 0) * ($input['width'] ?? 0);
		return $basePrice * $area;
	}

	private function calculateFullStockPlusCutLength(array $input): float
	{
		$stockPrice = floatval($this->product->get_price());
		$cutLengthPrice = floatval($this->settings['cut_length_price'] ?? 0);
		return $stockPrice + ($cutLengthPrice * ($input['cut_length'] ?? 0));
	}

	private function calculateFullStockPlusNumParts(array $input): float
	{
		$stockPrice = floatval($this->product->get_price());
		$partPrice = floatval($this->settings['per_part_price'] ?? 0);
		return $stockPrice + ($partPrice * ($input['num_parts'] ?? 0));
	}

	private function calculateCutLength(array $input): float
	{
		$basePrice = floatval($this->product->get_price());
		return $basePrice * ($input['cut_length'] ?? 0);
	}

	private function calculateRollLength(array $input): float
	{
		$basePrice = floatval($this->product->get_price());
		return $basePrice * ($input['roll_length'] ?? 0);
	}

	private function calculateFullStock(array $input): float
	{
		return floatval($this->product->get_price());
	}
}
