<?php

namespace SmartCut\Cutlist\Product;

function shouldActivate($product = null)
{

	if (!is_singular('product')) return false;

	if ($product) {
		if (!$product->is_in_stock()) return false;
	}

	return true;
}

/**
 * Convert a comma-separated string of type slugs into a cleaned array
 * @param string|array $typeString The input string or array of types
 * @param string $extraKey The type of extra data (e.g., 'banding', 'finish')
 * @return array Cleaned and validated array of slugs
 * @throws \InvalidArgumentException If the input is invalid
 */
function getExtraSlugs($typeString, $extraKey)
{
	// Handle empty input
	if (empty($typeString)) {
		return [];
	}

	// If input is already an array, skip string processing
	if (is_array($typeString)) {
		$typeArray = $typeString;
	} else {
		// Validate string input
		if (!is_string($typeString)) {
			throw new \InvalidArgumentException(
				sprintf(
					'Invalid input type for %s slugs. Expected string or array, got %s',
					$extraKey,
					gettype($typeString)
				)
			);
		}

		// Clean and split the string
		$typeString = trim($typeString);
		$typeString = str_replace([' ', '\n', '\r', '\t'], '', $typeString);
		$typeArray = explode(',', $typeString);
	}

	// Clean and validate each slug
	$cleanedArray = array_map(function ($slug) use ($extraKey) {
		// Basic sanitization
		$slug = trim($slug);
		$slug = sanitize_title($slug); // WordPress function to create valid slugs

		return $slug;
	}, $typeArray);

	// Filter out empty or invalid slugs
	$filteredArray = array_filter($cleanedArray, function ($slug) {
		return !empty($slug) && is_string($slug);
	});

	// Remove duplicates
	$uniqueArray = array_unique($filteredArray);

	// Reindex array
	$finalArray = array_values($uniqueArray);

	// Validate final array
	if (empty($finalArray)) {
		if (defined('WP_DEBUG') && WP_DEBUG) {
			trigger_error(
				sprintf(
					'No valid %s slugs found in input: %s',
					$extraKey,
					is_string($typeString) ? $typeString : print_r($typeString, true)
				),
				E_USER_WARNING
			);
		}
		return [];
	}

	return $finalArray;
}

/**
 * Get extra data for a product based on the specified key
 * @param string $productId The ID of the product
 * @param string $extraKey The type of extra data to retrieve (e.g., 'banding', 'finish', etc.)
 * @return array Extra data for the product
 * @throws \InvalidArgumentException If the extra_key is invalid or required components are missing
 */
function getExtraData($productId, $extraKey)
{
	// Validate inputs
	if (empty($productId)) {
		throw new \InvalidArgumentException('Product ID is required');
	}

	if (empty($extraKey)) {
		throw new \InvalidArgumentException('Extra key is required');
	}

	// Validate that the product exists
	$product = wc_get_product($productId);
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
	$isDisabled = \get_post_meta($productId, $disableKey, true);
	if ($isDisabled === '1') return null;

	// Check if this extra_key is supported in the settings
	$settingsKey = "{$extraKey}_types";

	// Get global settings for this extra feature
	$types = isset($options[$settingsKey]) ? $options[$settingsKey] : null;

	// Check for product-specific types that override global settings
	$productTypes = \get_post_meta($productId, $typesKey, true);

	if (!empty($productTypes)) $types = $productTypes;

	// If no types are defined, return empty
	if (empty($types)) return null;

	$extraData = [];

	try {
		// Get the slugs using the dynamic function name
		$slugs = getExtraSlugs($types, $extraKey);

		if (!is_array($slugs)) {
			throw new \InvalidArgumentException("Invalid slugs returned from 'getExtraSlugs'");
		}

		// Process each type
		foreach ($slugs as $slug) {
			$product = get_page_by_path($slug, OBJECT, 'product');

			if (empty($product)) continue;

			$product = \wc_get_product($product);

			if (!$product) continue;

			// Handle variable products
			//[] test keys are correct
			if ($product instanceof \WC_Product_Variable) {
				$variations = $product->get_available_variations();
				$attributes = $product->get_attributes();

				$options = [];

				foreach ($attributes as $attribute) {
					$attributeName = strtolower($attribute->get_name());
					$attributeOptions = array_map('strtolower', $attribute->get_options());
					$options[$attributeName] = $attributeOptions;
				}

				$extraData[$slug] = [
					'name' => $product->get_name(),
					'options' => $options,
					'variations' => []
				];

				foreach ($variations as $variation) {
					$variationId = $variation['variation_id'];
					$variationProduct = wc_get_product($variationId);

					if (!$variationProduct) {
						continue;
					}

					$price = $variationProduct->is_on_sale()
						? $variationProduct->get_sale_price()
						: $variationProduct->get_price();

					$attributes = $variationProduct->get_attributes();
					$attributes = array_map('strtolower', $attributes);

					$extraData[$slug]['variations'][$variationId] = [
						'name' => $variationProduct->get_name(),
						'price' => $price,
						'options' => $attributes
					];
				}
			}
			// Handle simple products
			else {
				$price = $product->is_on_sale()
					? $product->get_sale_price()
					: $product->get_price();

				$productName = $product->get_name();
				$productSlug = $product->get_slug();
				$optionName = strtolower($productName);

				$extraData[$slug] = [
					'name' => $productName,
					'price' => $price,
					'options' => [$productSlug => $optionName]
				];
			}
		}

		// If we processed everything but got no data, return meaningful message
		if (empty($extraData)) {
			return null;
		}

		return $extraData;
	} catch (\Exception $e) {
		return null;
	}
}

/**
 * Get the associated products for a given product and extra type
 * @param string $productId The ID of the product
 * @param string $extraKey The type of extra data (e.g., 'banding', 'finish')
 * @return array Associative array of product data or error information
 * @throws \InvalidArgumentException If input parameters are invalid
 */
function getExtraProducts($productId, $extraKey)
{
	// Validate inputs
	if (empty($productId)) {
		throw new \InvalidArgumentException('Product ID is required');
	}

	if (empty($extraKey)) {
		throw new \InvalidArgumentException('Extra key is required');
	}

	// Convert extra_key to necessary meta keys
	$disableKey = "disable_{$extraKey}";
	$typesKey = "smartcut_{$extraKey}_types";
	$settingsKey = "{$extraKey}_types";

	try {
		// Check if feature is disabled for this product
		$isDisabled = \get_post_meta($productId, $disableKey, true);
		if ($isDisabled === '1') {
			return [
				'disabled' => true,
				'message' => sprintf('%s is disabled for this product', ucfirst($extraKey))
			];
		}

		// Get settings
		$options = \SmartCut\Settings\getGlobalSettings();
		if (!is_array($options) || !isset($options[$settingsKey])) {
			return [
				'error' => true,
				'message' => sprintf('No %s types configured in settings', $extraKey)
			];
		}

		// Get types from settings
		$types = $options[$settingsKey];

		// Check for product-specific types that override global settings
		$productTypes = \get_post_meta($productId, $typesKey, true);
		if (!empty($productTypes)) {
			$types = $productTypes;
		}

		if (empty($types)) {
			return [
				'error' => true,
				'message' => sprintf('No %s types defined', $extraKey)
			];
		}

		// Convert types to slugs using our generic function
		$slugs = getExtraSlugs($types, $extraKey);

		if (empty($slugs)) {
			return [
				'error' => true,
				'message' => sprintf('No valid %s slugs found', $extraKey)
			];
		}

		$extraData = [];

		// Process each product
		foreach ($slugs as $slug) {
			$product = get_page_by_path($slug, OBJECT, 'product');
			if (empty($product)) {
				continue;
			}

			$product = \wc_get_product($product);
			if (!$product) {
				continue;
			}

			$price = $product->is_on_sale()
				? $product->get_sale_price()
				: $product->get_price();

			$extraData[$slug] = [
				'name' => $product->get_name(),
				'price' => $price,
				'symbol' => \get_woocommerce_currency_symbol(),
				'type' => $extraKey,
				'slug' => $slug,
				'product_id' => $product->get_id()
			];
		}

		if (empty($extraData)) {
			return [
				'error' => true,
				'message' => sprintf('No valid %s products found', $extraKey)
			];
		}

		return [
			'success' => true,
			'data' => $extraData
		];
	} catch (\Exception $e) {
		return [
			'error' => true,
			'message' => sprintf('Error processing %s products: %s', $extraKey, $e->getMessage())
		];
	}
}

function getMachiningPricing($productId)

{
	$settings = \SmartCut\Settings\getProductSettings($productId);

	if (!isset($settings['enable_machining']) || $settings['enable_machining'] === '0') return [];

	$machining = [
		'corners' => isset($settings['machining_corners_product']) ? $settings['machining_corners_product'] : null,
		'holes' => isset($settings['machining_holes_product']) ? $settings['machining_holes_product'] : null
	];

	$machiningPrice = [];

	foreach ($machining as $type => $slug) {

		if (!$slug) continue;

		$product = get_page_by_path($slug, OBJECT, 'product');

		if (!empty($product)) {
			$product = \wc_get_product($product);

			$price = $product->is_on_sale() ? $product->get_sale_price() : $product->get_price();

			$machiningPrice[$type] = floatval($price);
		}
	}

	return $machiningPrice;
}


/**
 * add the html for the cutlist to the product page
 * @param array $bandingData
 * @return void
 */
function addHtml($bandingData, $finishData)
{
	$settings = \SmartCut\Settings\getProductSettings();

	if ($settings['units'] === 'fraction') {
		printf('<p id="smartcut-intro-text">%s</p>', __('Add your cuts below. Units are inches.', 'smartcut'));
	} else {
		printf('<p id="smartcut-intro-text">%s</p>', __('Add your cuts below. Units are mm.', 'smartcut'));
	}
	include 'html/wrapper.php';

	$pricingNotes = null;
	switch ($settings['pricing_strategy']) {
		case 'part_area':
			$pricingNotes = __('This product is priced by part area, so adding fractions of a sheet to the cart is possible.', 'smartcut');
			break;
		case 'full_sheet_plus_cut_length':
			$pricingNotes = __('This product is priced by full sheet plus cut length.', 'smartcut');
			break;
		case 'full_sheet_plus_num_parts':
			$pricingNotes = __('This product is priced by full sheet plus number of parts.', 'smartcut');
			break;
		case 'full_sheet':
			$pricingNotes = __('This product is priced by full sheet.', 'smartcut');
			break;
		case 'cut_length':
			$pricingNotes = __('This product is priced by cut length.', 'smartcut');
			break;
		default:
			$pricingNotes =  __('This product is priced by full sheet.', 'smartcut');
			break;
	}

	printf('<p id="smartcut-pricing-notes">%s</p>', $pricingNotes);

	$bandingEnabled = $bandingData && (!isset($settings['disable_banding']) || $settings['disable_banding'] !== '1');

	$finishEnabled = $finishData && (!isset($settings['disable_finish']) || $settings['disable_finish'] !== '1');

	$machiningEnabled = isset($settings['enable_machining']) && $settings['enable_machining'] === '1';

	//additional pricing

	echo '<table id="smartcut-pricing-table">';

	if ($settings['pricing_strategy'] === 'full_sheet_plus_cut_length') :

		echo '<tr id="smartcut-cut-length-total">';
		printf('<td class="price">%s</td><td>%s</td>', __('Cut length total', 'smartcut'), wc_price(0));
		echo '</tr>';
	endif;

	if ($settings['pricing_strategy'] === 'full_sheet_plus_num_parts') :

		echo '<tr id="smartcut-stock-total">';
		printf('<td class="price">%s</td><td>%s</td>', __('Stock total', 'smartcut'), wc_price(0));
		echo '</tr>';

		echo '<tr id="smartcut-per-part-total">';
		printf('<td class="price">%s</td><td>%s</td>', __('Part total', 'smartcut'), wc_price(0));
		echo '</tr>';

	endif;

	if ($bandingEnabled) :

		echo '<tr id="smartcut-banding-total">';
		printf('<td class="price">%s</td><td>%s</td></tr>', __('Banding total', 'smartcut'), wc_price(0));
		echo '</tr>';

	endif;

	if ($finishEnabled) :

		echo '<tr id="smartcut-finish-total">';
		printf('<td class="price">%s</td><td>%s</td></tr>', __('Finish total', 'smartcut'), wc_price(0));
		echo '</tr>';

	endif;

	if ($machiningEnabled) :
		echo '<tr id="smartcut-machining-total">';
		printf('<td class="price">%s</td><td>%s</td></tr>', __('Machining total', 'smartcut'), wc_price(0));
		echo '</tr>';

	endif;

	if ($settings['surcharge_type'] !== 'none') :

		echo '<tr id="smartcut-surcharge-total">';
		printf('<td class="price">%s</td><td>%s</td>', __('Cutting charge total', 'smartcut'), wc_price(0));
		echo '</tr>';

	endif;

	echo '</table>';
}

function init()
{
	$postId = get_the_ID();

	$product = \wc_get_product($postId);

	if (!$product) return;

	if (!shouldActivate($product)) return;

	$bandingData = getExtraData($postId, 'banding');
	$finishData = getExtraData($postId, 'finish');

	$type = $product->get_type();

	$action = $type === 'variable' ? 'woocommerce_after_variations_table' : 'woocommerce_before_add_to_cart_form';

	//add the necessary user facing html to the product page
	add_action($action, function () use ($bandingData, $finishData) {
		addHtml($bandingData, $finishData);
	}, 10);
}

add_action('wp', 'SmartCut\Cutlist\Product\init', 100);

function getAttributeValue($attribute, $attributes)
{
	if (!isset($attributes[$attribute])) return null;

	$attribute = $attributes[$attribute];
	$data = $attribute->get_data();

	if (!isset($data)) return null;

	$value = $data['value'];

	if (!isset($value)) return null;

	return $value;
}

/**
 * Check extra product type setup for variable/simple product combinations
 * @param array $types Array of product slugs
 * @param string $extraKey The type of extra data (e.g., 'banding', 'finish')
 * @return array Array of error messages
 */
function checkExtraProductSetup($types, $extraKey)
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

/**
 * Check product setup and return any warning messages
 * @param int|null $productId
 * @return array Array of warning messages
 */
function checkProductSetup($productId = null)
{
	if (!$productId) return [];

	$product = wc_get_product($productId);
	$messages = [];

	$productSettings = \SmartCut\Settings\getProductSettings($productId);

	// Product category
	if (!\SmartCut\Helpers\checkCategory($productId, $productSettings)) return [];

	// Check extra product types (banding and finish)
	$extraTypes = ['banding', 'finish'];

	foreach ($extraTypes as $extraKey) {
		$typesKey = "{$extraKey}_types";

		if (isset($productSettings[$typesKey])) {
			$types = getExtraSlugs($productSettings[$typesKey], $extraKey);
			if (!empty($types)) {
				$extraMessages = checkExtraProductSetup($types, $extraKey);
				$messages = array_merge($messages, $extraMessages);
			}
		}
	}

	// Prices
	if (isset($productSettings['pricing_strategy'])) {

		$pricingStrategy = $productSettings['pricing_strategy'];

		if ($pricingStrategy === 'full_sheet_plus_cut_length') {
			if (!isset($productSettings['cut_length_price'])) {
				$messages[] = 'When using the full sheet plus cut length pricing strategy, a price must be supplied for the cut length.';
			}
		}

		if ($pricingStrategy === 'full_sheet_plus_num_parts') {
			if (!isset($productSettings['per_part_price'])) {
				$messages[] = 'When using the full sheet plus number of parts pricing strategy, a part price must be supplied.';
			}
		}
	}

	if (isset($productSettings['surcharge_type'])) {

		if ($productSettings['surcharge_type'] !== 'none') {
			if (!isset($productSettings['surcharge'])) {
				$messages[] = 'If a surcharge type is specified, a surcharge price must be supplied.';
			}
		}
	}

	// Attributes
	$requiredAttributes = ['length', 'width'];

	$productAttributes = $product->get_attributes();

	if (isset($productAttributes['thickness'])) {

		$thicknessOptions = $productAttributes['thickness']->get_options();

		foreach ($thicknessOptions as $thickness) {
			if (!preg_match('/^(\d+(\.\d+)?|(\d+(\.\d+)?,)+\d+(\.\d+)?)$/', $thickness)) {
				$messages[] = sprintf('The thickness attribute %s is not formatted correctly. It should use numbers only with no units, or numbers separated by a comma with no spaces.', $thickness);
			}
		}
	}

	if (isset($productAttributes['size'])) {

		$sizeValues = $productAttributes['size']->get_options();

		if (count($sizeValues) > 1) {
			if (!$product->is_type('variable')) {
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
			if (isset($productAttributes[$attribute])) {
				$messages[] = 'If using the size attribute, you must not also use dimension attributes.';
				break;
			}
		}
	} else {
		// Check for the presence of the correct attributes
		$missingAttributes = [];

		foreach ($requiredAttributes as $attribute) {
			if (!isset($productAttributes[$attribute])) {
				$missingAttributes[] = $attribute;
			} else {
				$values = $productAttributes[$attribute]->get_options();

				if (count($values) === 1) {
					if (!preg_match('/^\d+$/', $values[0])) {
						$messages[] = sprintf('The %s attribute is not formatted correctly. It should use numbers only with no units.', $attribute);
					}
				} else {
					$messages[] = sprintf('The %s attribute is not formatted correctly. It must have only one value.', $attribute);
				}
			}
		}

		if (count($missingAttributes) > 0) {
			$missingAttributes = array_map('strtoupper', $missingAttributes);
			$messages[] = sprintf('The following required product attributes have not been set: %s', implode(', ', $missingAttributes));
		}
	}

	return $messages;
}

function getFormulaUrl($attachmentId)
{
	return $attachmentId ? wp_get_attachment_url($attachmentId) : null;
}

function enqueueScripts()
{
	$productId = get_the_ID();

	if (!$productId) return;

	//get the product attribute data
	$product = \wc_get_product($productId);

	if (!shouldActivate($product)) return;

	wp_enqueue_script(
		'smartcut-checkout',
		plugins_url('js/checkout/checkout.js', __FILE__),
		['jquery'],
		SMARTCUT_CURRENT_VERSION,
		true
	);

	$errorMessages = checkProductSetup($productId);

	if (count($errorMessages) > 0) {

		foreach ($errorMessages as $errorMessage) {
			wc_add_notice(__('Smartcut - product setup error: ', 'smartcut') . $errorMessage, 'error');
		}

		$errorMessages = implode(', ', $errorMessages);

		return trigger_error('SmartCut - product setup errors: ' . $errorMessages, E_USER_WARNING);
	}

	$attributes = $product->get_attributes();

	/**
	 * @var \WC_Product_Variable $product
	 * @var \WC_Product_Variation[] $variations
	 */
	if ($product->is_type('variable')) {

		$variations = $product->get_available_variations('objects');
	}

	$config = ["stock_name" => $product->get_title()];

	$dimensions = ['l' => 'length', 'w' => 'width', 't' => 'thickness'];

	foreach ($dimensions as $dimension => $attributeKey) {

		$attributeValue = getAttributeValue($attributeKey, $attributes);
		if (isset($attributeValue) && strpos($attributeValue, '|') === false) $dimensions[$dimension] = intval($attributeValue);
		else $dimensions[$dimension] = null;
		$config[$dimension] = $dimensions[$dimension];
	}

	//detect multiple sizes, which is set with the 'size' attribute
	$config['multiple_sizes'] = false;
	$size = getAttributeValue('size', $attributes);

	if (isset($size) && $size !== null) {
		$config['multiple_sizes'] = true;
		$config['size'] = $size;
		unset($config['l']);
		unset($config['w']);
	}

	$settings = \SmartCut\Settings\getProductSettings($productId, 'cutlist');

	//[] formula url
	if (isset($settings['enable_formula']) && $settings['enable_formula'] === true) {
		$settings['formula_url'] = getFormulaUrl($settings['formula_json']);
	}

	//variation data
	if (isset($variations)) {

		//format variation data for use by js
		$variations = array_map(function ($item) {

			return [
				'price' => $item->get_price(),
				'display_price' => \wc_get_price_to_display($item), //including taxes etc
				'attributes' => $item->get_attributes()
			];
		}, $variations);

		$config['variations'] = $variations;
	} else {
		// Set the price of the product if variations are not set
		$config['price'] = $product->get_price();
	}

	$inputFields = \SmartCut\Cutlist\Cart\CartManager::getFieldKeys(true, $productId);
	$inputFields = array_values($inputFields);

	$config['input_fields'] = $inputFields;
	$config['settings'] = $settings;
	$config['banding_data'] = getExtraData($productId, 'banding');
	$config['finish_data'] = getExtraData($productId, 'finish');
	$config['machining_pricing'] = getMachiningPricing($productId);
	$config['product_type'] = $product->get_type();
	$config['is_in_stock'] = $product->is_in_stock();
	$config['thousands_separator'] = wc_get_price_thousand_separator();
	$config['decimal_separator'] = wc_get_price_decimal_separator();
	$config['number_of_decimals'] = wc_get_price_decimals();
	$config['currency_symbol'] = get_woocommerce_currency_symbol();
	$config['currency_position'] = get_option('woocommerce_currency_pos');
	$config['locale'] = get_locale();
	$config['version'] = SMARTCUT_CURRENT_VERSION;

	// Add the configuration as an inline script
	$configJson = json_encode($config);
	$scriptSuccess = wp_add_inline_script('smartcut-checkout', "window.smartcutConfig = $configJson;", 'before');
	if (!$scriptSuccess) trigger_error('SmartCut - adding smartcutConfig failed', E_USER_WARNING);
}

add_action('wp_enqueue_scripts', 'SmartCut\Cutlist\Product\enqueueScripts');

function enqueueStyles()
{
	if (!shouldActivate()) return;

	wp_enqueue_style(
		'smartcut-style',
		plugins_url('../css/product.css', __FILE__),
		array(),
		SMARTCUT_CURRENT_VERSION
	);

	wp_enqueue_style(
		'smartcut-checkout-style',
		plugins_url('../cutlist/css/checkout/style.css', __FILE__),
		array(),
		SMARTCUT_CURRENT_VERSION
	);
}

add_action('wp_enqueue_scripts', 'SmartCut\Cutlist\Product\enqueueStyles');
