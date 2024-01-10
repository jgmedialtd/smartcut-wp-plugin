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
 * get a banding type array from a string
 * @param string $banding_type_string
 * @return string[]
 */
function get_banding_slugs($banding_type_string)
{
    //remove spaces
    $banding_type_string = str_replace(' ', '', $banding_type_string);

    //convert to array
    $banding_type_array = explode(',', $banding_type_string);

    //filter empty items
    $banding_type_array = array_filter($banding_type_array, function ($item) {
        return $item;
    });

    return $banding_type_array;
}

/**
 * get the banding data for a product
 * @param string $product_id
 * @return array
 */
function get_banding_data($product_id)
{

    $disable_banding = \get_post_meta($product_id, 'disable_banding', true);

    if ($disable_banding === '1') return [];

    $options = \SmartCut\get_settings('cutlist');

    $banding_types = isset($options['banding_types']) ? $options['banding_types'] : null;

    $product_banding_types = \get_post_meta($product_id, 'smartcut_banding_types', true);

    if (!empty($product_banding_types)) $banding_types = $product_banding_types;

    $banding_data = [];

    //convert to array
    if (!empty($banding_types)) {

        $banding_types = get_banding_slugs($banding_types);

        $banding_data = [];

        //get the price and name of each banding_types
        foreach ($banding_types as $slug) {

            $product = get_page_by_path($slug, OBJECT, 'product');
            if (!empty($product)) {
                $product = \wc_get_product($product);

                $price = $product->get_price();
                if ($product->is_on_sale()) $price = $product->get_sale_price();

                $banding_data[$slug] = ['name' => $product->get_name(), 'price' => $price, 'symbol' => \get_woocommerce_currency_symbol()];
            }
        }
    }

    return $banding_data;
};

/**
 * get the banding products for a product
 * @param string $product_id
 * @return array
 */
function get_banding_products($product_id)
{

    $disable_banding = \get_post_meta($product_id, 'disable_banding', true);

    if ($disable_banding === '1') return [];

    $options = \SmartCut\get_settings('cutlist');

    $banding_types = $options['banding_types'];

    $product_banding_types = \get_post_meta($product_id, 'smartcut_banding_types', true);

    if (!empty($product_banding_types)) $banding_types = $product_banding_types;

    $banding_data = [];

    //convert to array
    if (!empty($banding_types)) {

        $banding_types = get_banding_slugs($banding_types);

        $banding_data = [];

        //get the price and name of each banding_types
        foreach ($banding_types as $slug) {

            $product = get_page_by_path($slug, OBJECT, 'product');
            if (!empty($product)) {
                $product = \wc_get_product($product);

                $price = $product->get_price();
                if ($product->is_on_sale()) $price = $product->get_sale_price();

                $banding_data[$slug] = ['name' => $product->get_name(), 'price' => $price, 'symbol' => \get_woocommerce_currency_symbol()];
            }
        }
    }

    return $banding_data;
};

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
function add_html($banding_data)
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

    if ($banding_enabled) :

        echo '<div id="smartcut-banding-key">';
        printf('<div class="title">%s</div>', __('Banding key:', 'smartcut'));
        $count = 0;
        foreach ($banding_data as $slug => $data) :
            $count++;
            printf('<div class="line"><span class="index"><strong>%s</strong></span>: <span class="name">%s<span class="price"> - %s <span class="per">%s</span></span></div>', $count, $data['name'], wc_price($data['price']), $settings['units'] === 'fraction' ? __('per foot', 'smartcut') : __('per meter', 'smartcut'));
        endforeach;
        echo '</div>';

    endif;

    //additional pricing

    echo '<table id="smartcut-pricing-table">';


    if ($banding_enabled) :

        printf('<tr id="smartcut-banding-total"><td class="price">%s</td><td>%s</td></tr>', __('Banding total', 'smartcut'), wc_price(0));

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
        printf('<td class="price">%s</td><td>%s</td>', __('Surcharge total', 'smartcut'), wc_price(0));
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

    $banding_data = get_banding_data($post_id);
    $options = \SmartCut\get_settings('cutlist');

    $type = $product->get_type();

    //add the necessary user facing html to the product page
    if ($type === 'variable') {
        add_action('woocommerce_after_variations_table', function () use ($banding_data, $options) {
            add_html($banding_data);
        }, 10);
    } else {
        add_action('woocommerce_before_add_to_cart_form', function () use ($banding_data, $options) {
            add_html($banding_data);
        }, 10);
    }
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
 * check the product setup
 * @param string $product_id
 * @return array
 */
function check_product_setup($product_id = null)
{
    if (!$product_id) return [];

    $product = wc_get_product($product_id);
    $messages = [];

    $product_settings = get_product_settings($product_id);

    //product category
    if (!\SmartCut\check_category($product_id, $product_settings)) return [];

    //banding
    if (isset($product_settings['banding_types'])) {
        $banding_types = get_banding_slugs($product_settings['banding_types']);
        foreach ($banding_types as $slug) {
            $banding_product_page = get_page_by_path($slug, \OBJECT, 'product');
            if (!$banding_product_page) $messages[] = sprintf('The banding type "%s" does not exist. Please create a product with this slug.', $slug);
        }
    }

    //prices
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

    //attributes
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

        //check the format of the dimensions attributes
        foreach ($size_values as $size) {
            //if not all non-digits
            if (!preg_match('/^\D+$/', $size)) {
                //check if formatted correctly
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

        //check for the presence of the correct attributes
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

    $env = wp_get_environment_type();


    wp_enqueue_script(
        'smartcut-checkout',
        plugins_url('js/checkout/checkout.js', __FILE__),
        [],
        SMARTCUT_CURRENT_VERSION,
        true
    );

    $error_messages = check_product_setup($product_id);

    if (count($error_messages) > 0) {

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
                'display_price' => \wc_get_price_to_display($item),
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
    $config['banding_data'] = get_banding_data($product_id);
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
