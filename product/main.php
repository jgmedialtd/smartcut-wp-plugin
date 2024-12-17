<?php

namespace SmartCut\Product;

defined('ABSPATH') || exit;

include_once 'pricing.php';
include_once 'extras.php';

use SmartCut\Product\Pricing\PricingStrategy;
use WC_Product;
use WC_Variable_Product;

class Product
{
	private WC_Product $product;
	private int $productId;
	private bool $loaded = false;
	private $settings;
	private $pricingStrategy;
	private $extraManager;

	public function __construct($productId = null)
	{
		if ($productId) {
			$this->productId = $productId;
			$this->init(true);
		} else {
			add_action('wp', [$this, 'init'], 100, 0);
			add_action('wp_enqueue_scripts', [$this, 'initScripts']);
			add_action('wp_enqueue_scripts', [$this, 'enqueueStyles']);
		}
	}

	public function init(bool $manual = false): void
	{
		if ($this->loaded) return;
		$productId = get_the_ID();
		if ($productId === false) return;

		$this->productId = $productId;

		$product = \wc_get_product($this->productId);
		if (!$product) return;

		$this->product = $product;

		if (!$manual) {
			if (!$this->shouldActivate()) return;
		}

		$this->settings = \SmartCut\Settings\getProductSettings($this->productId);

		$this->pricingStrategy = new PricingStrategy($this->product, $this->settings);
		$this->extraManager = new Extra\ExtraProductsManager($this->productId, $this->settings);

		$bandingData = $this->extraManager->getExtraData('banding');
		$finishData = $this->extraManager->getExtraData('finish');

		$type = $this->product->get_type();
		$action = $type === 'variable' ? 'woocommerce_after_variations_table' : 'woocommerce_before_add_to_cart_form';

		if (!$manual) {
			add_action($action, function () use ($bandingData, $finishData) {
				$this->addHtml($bandingData, $finishData);
			}, 10);
		}

		$this->loaded = true;
	}

	private function initializePricingStrategy(): void
	{
		if (!$this->product || !$this->settings || $this->pricingStrategy) return;

		$this->pricingStrategy = new PricingStrategy($this->product, $this->settings);
	}

	public function shouldActivate(): bool
	{
		if (!is_singular('product')) return false;
		if (!\SmartCut\Helpers\isCutlist($this->productId)) return false;

		if ($this->product) {
			if (!$this->product->is_in_stock()) return false;
		}

		return true;
	}

	public function addHtml($bandingData, $finishData): void
	{
		if (!$this->pricingStrategy) {
			$this->initializePricingStrategy();
		}

		if (isset($this->settings['units_system']) && $this->settings['units_system'] === 'imperial') {
			printf('<p id="smartcut-intro-text">%s</p>', __('Add your cuts below. Units are inches.', 'smartcut'));
		} else {
			printf('<p id="smartcut-intro-text">%s</p>', __('Add your cuts below. Units are mm.', 'smartcut'));
		}

		require dirname(__DIR__) . '/ui/html/wrapper.php';

		// Use pricing strategy for pricing-related content
		printf(
			'<p id="smartcut-pricing-notes">%s</p>',
			$this->pricingStrategy->getDescription()
		);

		$this->pricingStrategy->renderPricingTable($bandingData, $finishData);
	}

	public function initScripts(): void
	{
		// if (!$this->productId) return;
		if (!$this->shouldActivate()) return;

		wp_enqueue_script(
			'smartcut-checkout',
			plugin_dir_url(dirname(__DIR__) . '/main-plugin-file.php') . 'ui/js/checkout/checkout.js',
			['jquery'],
			SMARTCUT_CURRENT_VERSION,
			true
		);

		wp_enqueue_script(
			'smartcut-upload',
			plugin_dir_url(dirname(__DIR__) . '/main-plugin-file.php') . 'ui/js/checkout/upload.js',
			['jquery'],
			SMARTCUT_CURRENT_VERSION,
			true
		);

		$errorMessages = $this->checkProductSetup();
		if (!empty($errorMessages)) {
			$this->handleSetupErrors($errorMessages);
			return;
		}

		$config = $this->buildConfig();
		$configJson = json_encode($config);

		$scriptSuccess = wp_add_inline_script(
			'smartcut-checkout',
			"window.smartcutConfig = $configJson;",
			'before'
		);

		if (!$scriptSuccess) {
			trigger_error('SmartCut - adding smartcutConfig failed', E_USER_WARNING);
		}
	}

	private function buildConfig(): array
	{
		$attributes = $this->product->get_attributes();
		$config = [
			"stock_name" => $this->product->get_title(),
			"stock_sku" => $this->product->get_sku(),
		];

		// Add dimensions
		$this->addDimensionsToConfig($config, $attributes);

		// Add size configuration
		$this->addSizeToConfig($config, $attributes);

		// Add pricing strategy configuration
		if ($this->pricingStrategy) {
			$config['pricing'] = [
				'strategy' => $this->settings['pricing_strategy'] ?? 'full_stock',
				'description' => $this->pricingStrategy->getDescription(),
				'components' => $this->pricingStrategy->getPricingComponents()
			];
		}

		// Add variations if applicable
		if ($this->product->is_type('variable')) {
			$config['variations'] = $this->getVariationsConfig();
		} else {
			$config['price'] = $this->product->get_price();
		}

		// Add rest of configuration
		$settings = \SmartCut\Settings\getProductSettings($this->productId);
		if (isset($settings['enable_formula']) && $settings['enable_formula'] === true) {
			$settings['formula_url'] = $this->getFormulaUrl($settings['formula_json']);
		}

		$inputFields = \SmartCut\Cart\CartManager::getFields(true, $this->productId, true);

		return array_merge($config, [
			'input_fields' => array_values($inputFields),
			'settings' => $settings,
			'banding_data' => $this->extraManager->getExtraData('banding'),
			'finish_data' => $this->extraManager->getExtraData('finish'),
			'machining_pricing' => $this->extraManager->getMachiningPricing(),
			'product_type' => $this->product->get_type(),
			'is_in_stock' => $this->product->is_in_stock(),
			'thousands_separator' => wc_get_price_thousand_separator(),
			'decimal_separator' => wc_get_price_decimal_separator(),
			'number_of_decimals' => wc_get_price_decimals(),
			'currency_symbol' => get_woocommerce_currency_symbol(),
			'currency_position' => get_option('woocommerce_currency_pos'),
			'locale' => get_locale(),
			'version' => SMARTCUT_CURRENT_VERSION,
			'nonce' => wp_create_nonce('wp_rest'),
			'siteUrl' => get_site_url(),

		]);
	}

	private function addDimensionsToConfig(array &$config, array $attributes): void
	{
		$dimensions = ['l' => 'length', 'w' => 'width', 't' => 'thickness'];

		foreach ($dimensions as $dimension => $attributeKey) {
			$attributeValue = $this->getAttributeValue($attributeKey, $attributes);
			if (isset($attributeValue) && strpos($attributeValue, '|') === false) {
				$dimensions[$dimension] = intval($attributeValue);
			} else {
				$dimensions[$dimension] = null;
			}
			$config[$dimension] = $dimensions[$dimension];
		}
	}

	private function addSizeToConfig(array &$config, array $attributes): void
	{
		$config['multiple_sizes'] = false;
		$size = $this->getAttributeValue('size', $attributes);

		if (isset($size) && $size !== null) {
			$config['multiple_sizes'] = true;
			$config['size'] = $size;
			unset($config['l']);
			unset($config['w']);
		}
	}

	private function getVariationsConfig(): array
	{
		if (!$this->product instanceof \WC_Product_Variable) {
			return [];
		}

		return array_map(function ($item) {
			return [
				'price' => $item->get_price(),
				'display_price' => \wc_get_price_to_display($item),
				'attributes' => $item->get_attributes()
			];
		}, $this->product->get_available_variations('objects'));
	}

	private function handleSetupErrors(array $errorMessages): void
	{
		foreach ($errorMessages as $errorMessage) {
			wc_add_notice(
				__('Smartcut - product setup error: ', 'smartcut') . $errorMessage,
				'error'
			);
		}

		$errorMessages = implode(', ', $errorMessages);
		trigger_error('SmartCut - product setup errors: ' . $errorMessages, E_USER_WARNING);
	}

	public function enqueueStyles(): void
	{
		if (!$this->shouldActivate()) return;

		wp_enqueue_style(
			'smartcut-style',
			plugin_dir_url(dirname(__DIR__) . '/smartcut.php') . 'css/product.css',
			array(),
			SMARTCUT_CURRENT_VERSION
		);

		wp_enqueue_style(
			'smartcut-checkout-style',
			plugin_dir_url(dirname(__DIR__) . '/smartcut.php') . 'ui/css/checkout/style.css',
			array(),
			SMARTCUT_CURRENT_VERSION
		);
	}

	private function getAttributeValue($attribute, $attributes)
	{
		if (!isset($attributes[$attribute])) return null;

		$attribute = $attributes[$attribute];
		$data = $attribute->get_data();

		if (!isset($data)) return null;

		$value = $data['value'];

		if (!isset($value)) return null;

		return $value;
	}

	private function getFormulaUrl($attachmentId)
	{
		return $attachmentId ? wp_get_attachment_url($attachmentId) : null;
	}

	public function checkProductSetup(): array
	{
		if (!isset($this->productId)) return [];

		$messages = [];
		$productSettings = \SmartCut\Settings\getProductSettings($this->productId);

		// Product category
		if (!\SmartCut\Helpers\checkCategory($this->productId, $productSettings)) {
			return [];
		}

		// Check extra product types (banding and finish)
		$this->extraManager->validateExtraTypes($messages);

		// Check pricing configuration
		$this->checkPricingSetup($messages, $productSettings);

		// Check product attributes
		$this->checkProductAttributes($messages);

		return $messages;
	}

	private function checkPricingSetup(array &$messages, array $productSettings): void
	{
		if (!$this->pricingStrategy) {
			return;
		}

		// Let the pricing strategy validate its configuration
		$pricingMessages = $this->pricingStrategy->validateConfiguration();
		if (!empty($pricingMessages)) {
			$messages = array_merge($messages, $pricingMessages);
		}
	}

	private function checkProductAttributes(array &$messages): void
	{
		$requiredAttributes = ['length', 'width'];
		$productAttributes = $this->product->get_attributes();

		// Check thickness attribute
		if (isset($productAttributes['thickness'])) {
			$this->validateThicknessAttribute($messages, $productAttributes['thickness']);
		}

		// Check size attribute
		if (isset($productAttributes['size'])) {
			$this->validateSizeAttribute($messages, $productAttributes['size'], $requiredAttributes);
		} else {
			$this->validateDimensionAttributes($messages, $productAttributes, $requiredAttributes);
		}
	}

	private function validateThicknessAttribute(array &$messages, $thickness): void
	{
		$thicknessOptions = $thickness->get_options();

		foreach ($thicknessOptions as $thickness) {
			if (!preg_match('/^(\d+(\.\d+)?|(\d+(\.\d+)?,)+\d+(\.\d+)?)$/', $thickness)) {
				$messages[] = sprintf(
					'The thickness attribute %s is not formatted correctly. It should use numbers only with no units, or numbers separated by a comma with no spaces.',
					$thickness
				);
			}
		}
	}

	private function validateSizeAttribute(array &$messages, $sizeAttribute, array $requiredAttributes): void
	{
		$sizeValues = $sizeAttribute->get_options();

		if (count($sizeValues) > 1) {
			if (!$this->product->is_type('variable')) {
				$messages[] = 'You are using the size attribute with a simple product - this means individual stock sizes cannot be priced separately. If this is intentional, it is safe to ignore this message.';
			}
		}

		foreach ($sizeValues as $size) {
			if (!preg_match('/^\D+$/', $size)) {
				if (!preg_match('/\d+x\d+/', $size)) {
					$messages[] = sprintf('The size attribute %s must be in the format 2440x1220', $size);
				}
			}
		}

		if (empty($sizeValues)) {
			$messages[] = 'The size attribute has no values. Please add some values to the size attribute.';
		} elseif (count($sizeValues) < 2) {
			$messages[] = 'If using the size attribute, you must have at least 2 values. Otherwise, use dimension attributes such as length.';
		}

		foreach ($requiredAttributes as $attribute) {
			if (isset($this->product->get_attributes()[$attribute])) {
				$messages[] = 'If using the size attribute, you must not also use dimension attributes.';
				break;
			}
		}
	}

	private function validateDimensionAttributes(array &$messages, array $productAttributes, array $requiredAttributes): void
	{
		$missingAttributes = [];

		foreach ($requiredAttributes as $attribute) {
			if (!isset($productAttributes[$attribute])) {
				$missingAttributes[] = $attribute;
			} else {
				$values = $productAttributes[$attribute]->get_options();

				if (count($values) === 1) {
					if (!preg_match('/^\d+$/', $values[0])) {
						$messages[] = sprintf(
							'The %s attribute is not formatted correctly. It should use numbers only with no units.',
							$attribute
						);
					}
				} else {
					$messages[] = sprintf(
						'The %s attribute is not formatted correctly. It must have only one value.',
						$attribute
					);
				}
			}
		}

		if (!empty($missingAttributes)) {
			$missingAttributes = array_map('strtoupper', $missingAttributes);
			$messages[] = sprintf(
				'The following required product attributes have not been set: %s',
				implode(', ', $missingAttributes)
			);
		}
	}
}

// Initialize the Product class
new Product();
