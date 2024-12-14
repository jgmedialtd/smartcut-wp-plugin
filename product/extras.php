<?php

namespace SmartCut\Product\Extra;

defined('ABSPATH') || exit;

class ExtraProductsManager
{
	private $productId;
	private $settings;

	public function __construct(int $productId, array $settings)
	{
		$this->productId = $productId;
		$this->settings = $settings;
	}

	public function getExtraData(string $extraKey): ?array
	{
		if (empty($this->productId)) {
			throw new \InvalidArgumentException('Product ID is required');
		}

		if (empty($extraKey)) {
			throw new \InvalidArgumentException('Extra key is required');
		}

		// Validate that the product exists
		$product = wc_get_product($this->productId);
		if (!$product) {
			return null;
		}

		// Convert extra_key to necessary meta keys
		$disableKey = "disable_{$extraKey}";
		$typesKey = "smartcut_{$extraKey}_types";

		// Verify that the settings structure exists
		$options = \SmartCut\Settings\getGlobalSettings();

		if (!is_array($options)) {
			throw new \InvalidArgumentException('SmartCut settings are not properly configured');
		}

		// Check if the extra feature is disabled for this product
		$isDisabled = \get_post_meta($this->productId, $disableKey, true);
		if ($isDisabled === '1') return null;

		// Check if this extra_key is supported in the settings
		$settingsKey = "{$extraKey}_types";

		// Get global settings for this extra feature
		$types = isset($options[$settingsKey]) ? $options[$settingsKey] : null;

		// Check for product-specific types that override global settings
		$productTypes = \get_post_meta($this->productId, $typesKey, true);

		if (!empty($productTypes)) $types = $productTypes;

		// If no types are defined, return empty
		if (empty($types)) return null;

		$extraData = [];

		try {
			$slugs = $this->getExtraSlugs($types, $extraKey);

			if (!is_array($slugs)) {
				throw new \InvalidArgumentException("Invalid slugs returned from 'getExtraSlugs'");
			}

			foreach ($slugs as $slug) {
				$product = get_page_by_path($slug, OBJECT, 'product');
				if (empty($product)) continue;

				$product = \wc_get_product($product);
				if (!$product) continue;

				if ($product instanceof \WC_Product_Variable) {
					$extraData[$slug] = $this->processVariableProduct($product);
				} else {
					$extraData[$slug] = $this->processSimpleProduct($product);
				}
			}

			return empty($extraData) ? null : $extraData;
		} catch (\Exception $e) {
			return null;
		}
	}

	public function getMachiningPricing(): array
	{
		if (!isset($this->settings['enable_machining']) || $this->settings['enable_machining'] === '0') {
			return [];
		}

		$machining = [
			'corners' => $this->settings['machining_corners_product'] ?? null,
			'holes' => $this->settings['machining_holes_product'] ?? null
		];

		$machiningPrice = [];

		foreach ($machining as $type => $slug) {
			if (!$slug) continue;

			$product = get_page_by_path($slug, OBJECT, 'product');
			if (empty($product)) continue;

			$product = \wc_get_product($product);
			$price = $product->is_on_sale() ? $product->get_sale_price() : $product->get_price();
			$machiningPrice[$type] = floatval($price);
		}

		return $machiningPrice;
	}

	public function validateExtraTypes(): array
	{
		$messages = [];
		$extraTypes = ['banding', 'finish'];

		foreach ($extraTypes as $extraKey) {
			$typesKey = "{$extraKey}_types";

			if (isset($this->settings[$typesKey])) {
				$types = $this->getExtraSlugs($this->settings[$typesKey], $extraKey);
				if (!empty($types)) {
					$extraMessages = $this->checkExtraProductSetup($types, $extraKey);
					$messages = array_merge($messages, $extraMessages);
				}
			}
		}

		return $messages;
	}

	private function processVariableProduct(\WC_Product_Variable $product): array
	{
		$variations = $product->get_available_variations();
		$attributes = $product->get_attributes();

		$options = [];
		foreach ($attributes as $attribute) {
			$attributeName = strtolower($attribute->get_name());
			$attributeOptions = array_map('strtolower', $attribute->get_options());
			$options[$attributeName] = $attributeOptions;
		}

		$variationsData = [];
		foreach ($variations as $variation) {
			$variationId = $variation['variation_id'];
			$variationProduct = wc_get_product($variationId);

			if (!$variationProduct) continue;

			$price = $variationProduct->is_on_sale()
				? $variationProduct->get_sale_price()
				: $variationProduct->get_price();

			$attributes = $variationProduct->get_attributes();
			$attributes = array_map('strtolower', $attributes);

			$variationsData[$variationId] = [
				'name' => $variationProduct->get_name(),
				'price' => $price,
				'options' => $attributes
			];
		}

		return [
			'name' => $product->get_name(),
			'options' => $options,
			'variations' => $variationsData
		];
	}

	private function processSimpleProduct(\WC_Product $product): array
	{
		$price = $product->is_on_sale()
			? $product->get_sale_price()
			: $product->get_price();

		$productName = $product->get_name();
		$productSlug = $product->get_slug();
		$optionName = strtolower($productName);

		return [
			'name' => $productName,
			'price' => $price,
			'options' => [$productSlug => $optionName]
		];
	}

	private function getExtraSlugs($typeString, $extraKey): array
	{
		if (empty($typeString)) {
			return [];
		}

		if (is_array($typeString)) {
			$typeArray = $typeString;
		} else {
			if (!is_string($typeString)) {
				throw new \InvalidArgumentException(
					sprintf(
						'Invalid input type for %s slugs. Expected string or array, got %s',
						$extraKey,
						gettype($typeString)
					)
				);
			}

			$typeString = trim($typeString);
			$typeString = str_replace([' ', '\n', '\r', '\t'], '', $typeString);
			$typeArray = explode(',', $typeString);
		}

		$cleanedArray = array_map(function ($slug) use ($extraKey) {
			$slug = trim($slug);
			$slug = sanitize_title($slug);
			return $slug;
		}, $typeArray);

		$filteredArray = array_filter($cleanedArray, function ($slug) {
			return !empty($slug) && is_string($slug);
		});

		$uniqueArray = array_unique($filteredArray);
		$finalArray = array_values($uniqueArray);

		if (empty($finalArray) && defined('WP_DEBUG') && WP_DEBUG) {
			trigger_error(
				sprintf(
					'No valid %s slugs found in input: %s',
					$extraKey,
					is_string($typeString) ? $typeString : print_r($typeString, true)
				),
				E_USER_WARNING
			);
		}

		return $finalArray;
	}

	private function checkExtraProductSetup(array $types, string $extraKey): array
	{
		$messages = [];
		$variableProducts = 0;
		$simpleProducts = 0;

		foreach ($types as $slug) {
			$productPage = get_page_by_path($slug, \OBJECT, 'product');
			if (!$productPage) {
				$messages[] = sprintf(
					'The %s type "%s" does not exist. Please create a product with this slug.',
					$extraKey,
					$slug
				);
				continue;
			}

			$product = wc_get_product($productPage->ID);
			if ($product->is_type('variable')) {
				$variableProducts++;
			} else {
				$simpleProducts++;
			}
		}

		if ($variableProducts > 0 && $simpleProducts > 0) {
			$messages[] = sprintf(
				'Variable %s products cannot be combined with simple %s products. A single variable %s product or multiple simple %s products are valid.',
				$extraKey,
				$extraKey,
				$extraKey,
				$extraKey
			);
		} elseif ($variableProducts > 1) {
			$messages[] = sprintf(
				'Only one variable %s product can be used at a time. A single variable %s product or multiple simple %s products are valid.',
				$extraKey,
				$extraKey,
				$extraKey
			);
		}

		return $messages;
	}
}
