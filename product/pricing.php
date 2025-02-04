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

		if (isset($this->settings['enable_banding']) && $this->settings['enable_banding'] && $bandingData) {
			$components[] = [
				'id' => 'smartcut-banding-total',
				'label' => __('Banding total', 'smartcut'),
				'initial_price' => 0
			];
		}

		if (isset($this->settings['enable_finish']) && $this->settings['enable_finish'] && $finishData) {
			$components[] = [
				'id' => 'smartcut-finish-total',
				'label' => __('Finish total', 'smartcut'),
				'initial_price' => 0
			];
		}

		if (isset($this->settings['enable_machining']) && $this->settings['enable_machining'] === true) {
			$components[] = [
				'id' => 'smartcut-machining-total',
				'label' => __('Machining total', 'smartcut'),
				'initial_price' => 0
			];
		}

		//area pricing
		if (isset($this->settings['pricing_strategy']) && $this->settings['pricing_strategy'] === 'part_area') {

			$components[] = [
				'id' => 'smartcut-area-total',
				'label' => __('Part area', 'smartcut'),
				'initial_price' => 0
			];

			if (isset($this->settings['enable_offcut_pricing']) && $this->settings['enable_offcut_pricing'] === true) {

				$components[] = [
					'id' => 'smartcut-offcut-area-total',
					'label' => __('Offcut area', 'smartcut'),
					'initial_price' => 0
				];
			}
		}


		if (empty($components)) {
			return;
		}

		//draw the table
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

		$is_variable = $this->product->is_type('variable');

		if (($is_variable && !in_array($this->strategy, ['part_area'], true)) || (!$is_variable && !in_array($this->strategy, ['full_stock_plus_cut_length', 'full_stock_plus_num_parts', 'full_stock', 'part_area'], true))) {

			$components[] = array(
				'id' => 'smartcut-stock-total',
				'label' => __('Stock total', 'smartcut'),
				'initial_price' => 0
			);
		}

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
	 * Check if surcharge is enabled
	 */
	private function hasSurcharge(): bool
	{
		return isset($this->settings['surcharge_type'])
			&& $this->settings['surcharge_type'] !== 'none'
			&& isset($this->settings['surcharge']);
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
}
