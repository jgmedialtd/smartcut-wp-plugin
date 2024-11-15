<?php

namespace SmartCut\Cutlist\Product;

function should_activate($product = null)
{

	if (!is_singular('product')) return false;

	if ($product) {
		if (!$product->is_in_stock()) return false;
	}

	return true;
}

/**
 * Convert a comma-separated string of type slugs into a cleaned array
 * @param string|array $type_string The input string or array of types
 * @param string $extra_key The type of extra data (e.g., 'banding', 'finish')
 * @return array Cleaned and validated array of slugs
 * @throws \InvalidArgumentException If the input is invalid
 */
function get_extra_slugs($type_string, $extra_key)
{
	// Handle empty input
	if (empty($type_string)) {
		return [];
	}

	// If input is already an array, skip string processing
	if (is_array($type_string)) {
		$type_array = $type_string;
	} else {
		// Validate string input
		if (!is_string($type_string)) {
			throw new \InvalidArgumentException(
				sprintf(
					'Invalid input type for %s slugs. Expected string or array, got %s',
					$extra_key,
					gettype($type_string)
				)
			);
		}

		// Clean and split the string
		$type_string = trim($type_string);
		$type_string = str_replace([' ', '\n', '\r', '\t'], '', $type_string);
		$type_array = explode(',', $type_string);
	}

	// Clean and validate each slug
	$cleaned_array = array_map(function ($slug) use ($extra_key) {
		// Basic sanitization
		$slug = trim($slug);
		$slug = sanitize_title($slug); // WordPress function to create valid slugs

		return $slug;
	}, $type_array);

	// Filter out empty or invalid slugs
	$filtered_array = array_filter($cleaned_array, function ($slug) {
		return !empty($slug) && is_string($slug);
	});

	// Remove duplicates
	$unique_array = array_unique($filtered_array);

	// Reindex array
	$final_array = array_values($unique_array);

	// Validate final array
	if (empty($final_array)) {
		if (defined('WP_DEBUG') && WP_DEBUG) {
			trigger_error(
				sprintf(
					'No valid %s slugs found in input: %s',
					$extra_key,
					is_string($type_string) ? $type_string : print_r($type_string, true)
				),
				E_USER_WARNING
			);
		}
		return [];
	}

	return $final_array;
}

/**
 * Get extra data for a product based on the specified key
 * @param string $product_id The ID of the product
 * @param string $extra_key The type of extra data to retrieve (e.g., 'banding', 'finish', etc.)
 * @return array Extra data for the product
 * @throws \InvalidArgumentException If the extra_key is invalid or required components are missing
 */
function get_extra_data($product_id, $extra_key)
{
	// Validate inputs
	if (empty($product_id)) {
		throw new \InvalidArgumentException('Product ID is required');
	}

	if (empty($extra_key)) {
		throw new \InvalidArgumentException('Extra key is required');
	}

	// Validate that the product exists
	$product = wc_get_product($product_id);
	if (!$product) {
		return null;
	}

	// Convert extra_key to necessary meta keys
	$disable_key = "disable_{$extra_key}";
	$types_key = "smartcut_{$extra_key}_types";

	// Verify that the settings structure exists
	$options = \SmartCut\get_settings('cutlist');
	if (!is_array($options)) {
		throw new \InvalidArgumentException('SmartCut settings are not properly configured');
	}

	// Check if the extra feature is disabled for this product
	$is_disabled = \get_post_meta($product_id, $disable_key, true);
	if ($is_disabled === '1') {
		return null;
	}

	// Check if this extra_key is supported in the settings
	$settings_key = "{$extra_key}_types";

	// Get global settings for this extra feature
	$types = isset($options[$settings_key]) ? $options[$settings_key] : null;

	// Check for product-specific types that override global settings
	$product_types = \get_post_meta($product_id, $types_key, true);
	if (!empty($product_types)) {
		$types = $product_types;
	}

	// If no types are defined, return empty with message
	if (empty($types)) {
		return null;
	}

	$extra_data = [];

	try {
		// Get the slugs using the dynamic function name
		$slugs = get_extra_slugs($types, $extra_key);

		if (!is_array($slugs)) {
			throw new \InvalidArgumentException("Invalid slugs returned from 'get_extra_slugs'");
		}

		// Process each type
		foreach ($slugs as $slug) {
			$product = get_page_by_path($slug, OBJECT, 'product');
			if (empty($product)) {
				continue;
			}

			$product = \wc_get_product($product);
			if (!$product) {
				continue;
			}

			// Handle variable products
			if ($product instanceof \WC_Product_Variable) {
				$variations = $product->get_available_variations();
				$attributes = $product->get_attributes();

				$options = [];
				foreach ($attributes as $attribute) {
					$attribute_name = strtolower($attribute->get_name());
					$attribute_options = array_map('strtolower', $attribute->get_options());
					$options[$attribute_name] = $attribute_options;
				}

				$extra_data[$slug] = [
					'name' => $product->get_name(),
					'options' => $options,
					'variations' => []
				];

				foreach ($variations as $variation) {
					$variation_id = $variation['variation_id'];
					$variation_product = wc_get_product($variation_id);

					if (!$variation_product) {
						continue;
					}

					$price = $variation_product->is_on_sale()
						? $variation_product->get_sale_price()
						: $variation_product->get_price();

					$attributes = $variation_product->get_attributes();
					$attributes = array_map('strtolower', $attributes);

					$extra_data[$slug]['variations'][$variation_id] = [
						'name' => $variation_product->get_name(),
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

				$product_name = $product->get_name();
				$option_name = strtolower($product_name);
				$option_key = str_replace(' ', '-', $option_name);

				$extra_data[$slug] = [
					'name' => $product_name,
					'price' => $price,
					'options' => [$option_key => $option_name]
				];
			}
		}

		// If we processed everything but got no data, return meaningful message
		if (empty($extra_data)) {
			return null;
		}

		return $extra_data;
	} catch (\Exception $e) {
		return null;
	}
}

/**
 * Get the associated products for a given product and extra type
 * @param string $product_id The ID of the product
 * @param string $extra_key The type of extra data (e.g., 'banding', 'finish')
 * @return array Associative array of product data or error information
 * @throws \InvalidArgumentException If input parameters are invalid
 */
function get_extra_products($product_id, $extra_key)
{
	// Validate inputs
	if (empty($product_id)) {
		throw new \InvalidArgumentException('Product ID is required');
	}

	if (empty($extra_key)) {
		throw new \InvalidArgumentException('Extra key is required');
	}

	// Convert extra_key to necessary meta keys
	$disable_key = "disable_{$extra_key}";
	$types_key = "smartcut_{$extra_key}_types";
	$settings_key = "{$extra_key}_types";

	try {
		// Check if feature is disabled for this product
		$is_disabled = \get_post_meta($product_id, $disable_key, true);
		if ($is_disabled === '1') {
			return [
				'disabled' => true,
				'message' => sprintf('%s is disabled for this product', ucfirst($extra_key))
			];
		}

		// Get settings
		$options = \SmartCut\get_settings('cutlist');
		if (!is_array($options) || !isset($options[$settings_key])) {
			return [
				'error' => true,
				'message' => sprintf('No %s types configured in settings', $extra_key)
			];
		}

		// Get types from settings
		$types = $options[$settings_key];

		// Check for product-specific types that override global settings
		$product_types = \get_post_meta($product_id, $types_key, true);
		if (!empty($product_types)) {
			$types = $product_types;
		}

		if (empty($types)) {
			return [
				'error' => true,
				'message' => sprintf('No %s types defined', $extra_key)
			];
		}

		// Convert types to slugs using our generic function
		$slugs = get_extra_slugs($types, $extra_key);

		if (empty($slugs)) {
			return [
				'error' => true,
				'message' => sprintf('No valid %s slugs found', $extra_key)
			];
		}

		$extra_data = [];

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

			$extra_data[$slug] = [
				'name' => $product->get_name(),
				'price' => $price,
				'symbol' => \get_woocommerce_currency_symbol(),
				'type' => $extra_key,
				'slug' => $slug,
				'product_id' => $product->get_id()
			];
		}

		if (empty($extra_data)) {
			return [
				'error' => true,
				'message' => sprintf('No valid %s products found', $extra_key)
			];
		}

		return [
			'success' => true,
			'data' => $extra_data
		];
	} catch (\Exception $e) {
		return [
			'error' => true,
			'message' => sprintf('Error processing %s products: %s', $extra_key, $e->getMessage())
		];
	}
}

function get_machining_pricing($product_id)

{
	$settings = get_product_settings($product_id);

	if (!isset($settings['enable_machining']) || $settings['enable_machining'] === '0') return [];

	$machining = [
		'corners' => isset($settings['machining_corners_product']) ? $settings['machining_corners_product'] : null,
		'holes' => isset($settings['machining_holes_product']) ? $settings['machining_holes_product'] : null
	];

	$machining_price = [];

	foreach ($machining as $type => $slug) {

		if (!$slug) continue;

		$product = get_page_by_path($slug, OBJECT, 'product');

		if (!empty($product)) {
			$product = \wc_get_product($product);

			$price = $product->is_on_sale() ? $product->get_sale_price() : $product->get_price();

			$machining_price[$type] = floatval($price);
		}
	}

	return $machining_price;
}

/**
 * get the product settings, with product settings overriding global settings
 * @param string $product_id
 * @return array
 */
function get_product_settings($product_id = null)
{
	$product_id = $product_id ? $product_id : get_the_ID();

	if (!$product_id) return;

	$settings_fields = \SmartCut\Cutlist\Settings\get_global_setting_fields();
	$global_settings = \SmartCut\get_settings('cutlist');

	foreach ($settings_fields as $key => $type) {

		$name = 'smartcut_' . $key;
		$product_setting = \get_post_meta($product_id, $name, true);

		//override the global setting
		if ($product_setting && !empty($product_setting) && $product_setting !== 'global') {
			$global_settings[$key] = $product_setting;
		}
	}

	//special cases for 'disable' options - these are needed for some new features for they're not autmatically enabled on existing sites
	foreach (['machining'] as $key) {
		$product_setting_name = 'smartcut_disable_' . $key;
		$global_setting_name = 'enable_' . $key;
		$product_setting = \get_post_meta($product_id, $product_setting_name, true);
		if ($product_setting === '1') $global_settings[$global_setting_name] = '0';
	}

	return $global_settings;
}

/**
 * add the html for the cutlist to the product page
 * @param array $banding_data
 * @return void
 */
function add_html($banding_data, $finish_data)
{
	$settings = get_product_settings();

	if ($settings['units'] === 'fraction') {
		printf('<p id="smartcut-intro-text">%s</p>', __('Add your cuts below. Units are inches.', 'smartcut'));
	} else {
		printf('<p id="smartcut-intro-text">%s</p>', __('Add your cuts below. Units are mm.', 'smartcut'));
	}
	include 'html/wrapper.php';

	$pricing_notes = null;
	switch ($settings['pricing_strategy']) {
		case 'part_area':
			$pricing_notes = __('This product is priced by part area, so adding fractions of a sheet to the cart is possible.', 'smartcut');
			break;
		case 'full_sheet_plus_cut_length':
			$pricing_notes = __('This product is priced by full sheet plus cut length.', 'smartcut');
			break;
		case 'full_sheet_plus_num_parts':
			$pricing_notes = __('This product is priced by full sheet plus number of parts.', 'smartcut');
			break;
		case 'full_sheet':
			$pricing_notes = __('This product is priced by full sheet.', 'smartcut');
			break;
		case 'cut_length':
			$pricing_notes = __('This product is priced by cut length.', 'smartcut');
			break;
		default:
			$pricing_notes =  __('This product is priced by full sheet.', 'smartcut');
			break;
	}

	printf('<p id="smartcut-pricing-notes">%s</p>', $pricing_notes);

	$banding_enabled = $banding_data && (!isset($settings['disable_banding']) || $settings['disable_banding'] !== '1');

	$finish_enabled = $finish_data && (!isset($settings['disable_finish']) || $settings['disable_finish'] !== '1');

	$machining_enabled = isset($settings['enable_machining']) && $settings['enable_machining'] === '1';

	//additional pricing

	echo '<table id="smartcut-pricing-table">';

	if ($banding_enabled) :

		printf('<tr id="smartcut-banding-total"><td class="price">%s</td><td>%s</td></tr>', __('Banding total', 'smartcut'), wc_price(0));

	endif;

	if ($finish_enabled) :

		printf('<tr id="smartcut-finish-total"><td class="price">%s</td><td>%s</td></tr>', __('Finish total', 'smartcut'), wc_price(0));

	endif;

	if ($machining_enabled) :
		printf('<tr id="smartcut-machining-total"><td class="price">%s</td><td>%s</td></tr>', __('Machining total', 'smartcut'), wc_price(0));

	endif;

	if ($settings['pricing_strategy'] === 'full_sheet_plus_cut_length') :

		echo '<tr id="smartcut-cut-length-total">';
		printf('<td class="price">%s</td><td>%s</td>', __('Cut length total', 'smartcut'), wc_price(0));
		echo '</tr>';
	endif;

	if ($settings['pricing_strategy'] === 'full_sheet_plus_num_parts') :

		echo '<tr id="smartcut-per-part-total">';
		printf('<td class="price">%s</td><td>%s</td>', __('Part total', 'smartcut'), wc_price(0));
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
	$post_id = get_the_ID();

	$product = \wc_get_product($post_id);

	if (!$product) return;

	if (!should_activate($product)) return;

	$banding_data = get_extra_data($post_id, 'banding');
	$finish_data = get_extra_data($post_id, 'finish');

	$type = $product->get_type();

	$action = $type === 'variable' ? 'woocommerce_after_variations_table' : 'woocommerce_before_add_to_cart_form';

	//add the necessary user facing html to the product page
	add_action($action, function () use ($banding_data, $finish_data) {
		add_html($banding_data, $finish_data);
	}, 10);
}

add_action('wp', 'SmartCut\Cutlist\Product\init', 100);

function get_attribute_value($attribute, $attributes)
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
 * @param string $extra_key The type of extra data (e.g., 'banding', 'finish')
 * @return array Array of error messages
 */
function check_extra_product_setup($types, $extra_key)
{
	$messages = [];
	$variable_products = 0;
	$simple_products = 0;

	foreach ($types as $slug) {
		$product_page = get_page_by_path($slug, \OBJECT, 'product');
		if (!$product_page) {
			$messages[] = sprintf(
				'The %s type "%s" does not exist. Please create a product with this slug.',
				$extra_key,
				$slug
			);
			continue;
		}

		$product = wc_get_product($product_page->ID);
		if ($product->is_type('variable')) {
			$variable_products++;
		} else {
			$simple_products++;
		}
	}

	if ($variable_products > 0 && $simple_products > 0) {
		$messages[] = sprintf(
			'Variable %s products cannot be combined with simple %s products. A single variable %s product or multiple simple %s products are valid.',
			$extra_key,
			$extra_key,
			$extra_key,
			$extra_key
		);
	} else if ($variable_products > 1) {
		$messages[] = sprintf(
			'Only one variable %s product can be used at a time. A single variable %s product or multiple simple %s products are valid.',
			$extra_key,
			$extra_key,
			$extra_key
		);
	}

	return $messages;
}

/**
 * Check product setup and return any warning messages
 * @param int|null $product_id
 * @return array Array of warning messages
 */
function check_product_setup($product_id = null)
{
	if (!$product_id) return [];

	$product = wc_get_product($product_id);
	$messages = [];

	$product_settings = get_product_settings($product_id);

	// Product category
	if (!\SmartCut\check_category($product_id, $product_settings)) return [];

	// Check extra product types (banding and finish)
	$extra_types = ['banding', 'finish'];

	foreach ($extra_types as $extra_key) {
		$types_key = "{$extra_key}_types";

		if (isset($product_settings[$types_key])) {
			$types = get_extra_slugs($product_settings[$types_key], $extra_key);
			if (!empty($types)) {
				$extra_messages = check_extra_product_setup($types, $extra_key);
				$messages = array_merge($messages, $extra_messages);
			}
		}
	}

	// Prices
	$pricing_strategy = $product_settings['pricing_strategy'];

	if (isset($pricing_strategy) && $pricing_strategy === 'full_sheet_plus_cut_length') {
		if (!isset($product_settings['cut_length_price'])) {
			$messages[] = 'When using the full sheet plus cut length pricing strategy, a price must be supplied for the cut length.';
		}
	}

	if (isset($pricing_strategy) && $pricing_strategy === 'full_sheet_plus_num_parts') {
		if (!isset($product_settings['per_part_price'])) {
			$messages[] = 'When using the full sheet plus number of parts pricing strategy, a part price must be supplied.';
		}
	}

	$surcharge_type = $product_settings['surcharge_type'];

	if (isset($surcharge_type) && $surcharge_type !== 'none') {
		if (!isset($product_settings['surcharge'])) {
			$messages[] = 'If a surcharge type is specified, a surcharge price must be supplied.';
		}
	}

	// Attributes
	$required_attributes = ['length', 'width'];

	$product_attributes = $product->get_attributes();

	if (isset($product_attributes['thickness'])) {
		$thickness_options = $product_attributes['thickness']->get_options();

		foreach ($thickness_options as $thickness) {
			if (!preg_match('/^(\d+(\.\d+)?|(\d+(\.\d+)?,)+\d+(\.\d+)?)$/', $thickness)) {
				$messages[] = sprintf('The thickness attribute %s is not formatted correctly. It should use numbers only with no units, or numbers separated by a comma with no spaces.', $thickness);
			}
		}
	}

	if (isset($product_attributes['size'])) {
		$size_values = $product_attributes['size']->get_options();

		if (count($size_values) > 1) {
			if (!$product->is_type('variable')) {
				$messages[] = 'You are using the size attribute with a simple product - this means individual stock sizes cannot be priced separately. If this is intentional, it is safe to ignore this message.';
			}
		}

		foreach ($size_values as $size) {
			if (!preg_match('/^\D+$/', $size)) {
				if (!preg_match('/\d+x\d+/', $size)) {
					$messages[] = sprintf('The size attribute %s must be in the format 2440x1220', $size);
				}
			}
		}

		if (empty($size_values)) {
			$messages[] = 'The size attribute has no values. Please add some values to the size attribute.';
		} else if (count($size_values) < 2) {
			$messages[] = 'If using the size attribute, you must have at least 2 values. Otherwise, use dimension attributes such as length.';
		}

		foreach ($required_attributes as $attribute) {
			if (isset($product_attributes[$attribute])) {
				$messages[] = 'If using the size attribute, you must not also use dimension attributes.';
				break;
			}
		}
	} else {
		// Check for the presence of the correct attributes
		$missing_attributes = [];

		foreach ($required_attributes as $attribute) {
			if (!isset($product_attributes[$attribute])) {
				$missing_attributes[] = $attribute;
			} else {
				$values = $product_attributes[$attribute]->get_options();

				if (count($values) === 1) {
					if (!preg_match('/^\d+$/', $values[0])) {
						$messages[] = sprintf('The %s attribute is not formatted correctly. It should use numbers only with no units.', $attribute);
					}
				} else {
					$messages[] = sprintf('The %s attribute is not formatted correctly. It must have only one value.', $attribute);
				}
			}
		}

		if (count($missing_attributes) > 0) {
			$missing_attributes = array_map('strtoupper', $missing_attributes);
			$messages[] = sprintf('The following required product attributes have not been set: %s', implode(', ', $missing_attributes));
		}
	}

	return $messages;
}

function enqueue_scripts()
{
	$product_id = get_the_ID();

	if (!$product_id) return;

	//get the product attribute data
	$product = \wc_get_product($product_id);

	if (!should_activate($product)) return;

	wp_enqueue_script(
		'smartcut-checkout',
		plugins_url('js/checkout/checkout.js', __FILE__),
		['jquery'],
		SMARTCUT_CURRENT_VERSION,
		true
	);

	$error_messages = check_product_setup($product_id);

	if (count($error_messages) > 0) {

		foreach ($error_messages as $error_message) {
			wc_add_notice(__('Smartcut - product setup error: ', 'smartcut') . $error_message, 'error');
		}

		$error_messages = implode(', ', $error_messages);

		return trigger_error('SmartCut - product setup errors: ' . $error_messages, E_USER_WARNING);
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

	foreach ($dimensions as $dimension => $attribute_key) {

		$attribute_value = get_attribute_value($attribute_key, $attributes);
		if (isset($attribute_value) && strpos($attribute_value, '|') === false) $dimensions[$dimension] = intval($attribute_value);
		else $dimensions[$dimension] = null;
		$config[$dimension] = $dimensions[$dimension];
	}

	//detect multiple sizes, which is set with the 'size' attribute
	$config['multiple_sizes'] = false;
	$size = get_attribute_value('size', $attributes);

	if (isset($size) && $size !== null) {
		$config['multiple_sizes'] = true;
		$config['size'] = $size;
		unset($config['l']);
		unset($config['w']);
	}

	$settings = get_product_settings();

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
	}

	$input_fields = \SmartCut\Cutlist\Cart\get_field_keys(true);
	$input_fields = array_values($input_fields);

	$settings_fields = \SmartCut\Cutlist\Settings\get_global_setting_fields();

	$config['settings_fields'] = $settings_fields;
	$config['input_fields'] = $input_fields;
	$config['settings'] = $settings;
	$config['banding_data'] = get_extra_data($product_id, 'banding');
	$config['finish_data'] = get_extra_data($product_id, 'finish');
	$config['machining_pricing'] = get_machining_pricing($product_id);
	$config['product_type'] = $product->get_type();
	$config['is_in_stock'] = $product->is_in_stock();
	$config['thousands_separator'] = wc_get_price_thousand_separator();
	$config['decimal_separator'] = wc_get_price_decimal_separator();
	$config['number_of_decimals'] = wc_get_price_decimals();
	$config['currency_symbol'] = get_woocommerce_currency_symbol();
	$config['currency_position'] = get_option('woocommerce_currency_pos');
	$config['locale'] = get_locale();
	$config['version'] = SMARTCUT_CURRENT_VERSION;

	//send the data the script in the config variable
	$localize_script = wp_localize_script("smartcut-checkout", "smartcutConfig", $config);

	if (!$localize_script) trigger_error('SmartCut - localize script failed', E_USER_WARNING);
}

add_action('wp_enqueue_scripts', 'SmartCut\Cutlist\Product\enqueue_scripts');


function enqueue_styles()
{
	if (!should_activate()) return;

	wp_enqueue_style(
		'smartcut-style',
		plugins_url('../css/product.css', __FILE__),
		array(),
		SMARTCUT_CURRENT_VERSION,
	);

	wp_enqueue_style(
		'smartcut-checkout-style',
		plugins_url('../cutlist/css/checkout/style.css', __FILE__),
		array(),
		SMARTCUT_CURRENT_VERSION,
	);
}

add_action('wp_enqueue_scripts', 'SmartCut\Cutlist\Product\enqueue_styles');
