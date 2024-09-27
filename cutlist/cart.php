<?php

namespace SmartCut\Cutlist\Cart;

use WC_Cart;
use WC_Order;
use WC_Order_Item_Product;

/**
 * get the keys for all the keys used by smartcut
 * @param bool $inputs
 * @return string[]
 */
function get_field_keys($inputs = false)
{
    $options = get_option('smartcut_options');

    if ($inputs) {

        //these get added as fields to the product page and added to each cart item
        $fields = [
            __('Job ID', 'smartcut') => 'smartcut_job_id',
            __('Total parts', 'smartcut') => 'smartcut_total_parts',
			__('Stock summary', 'smartcut') => 'smartcut_stock_summary',
            __('Part area', 'smartcut') => 'smartcut_part_area',
            __('Cut length', 'smartcut') => 'smartcut_total_cut_length',
            __('Total cuts', 'smartcut') => 'smartcut_total_cuts',
            __('Cut length price', 'smartcut') => 'smartcut_cut_length_price',
            __('Price per part', 'smartcut') => 'smartcut_per_part_price',
            __('Banding price', 'smartcut') => 'smartcut_banding_price',
            __('Cut to size surcharge', 'smartcut') => 'smartcut_cut_to_size_surcharge',
            __('Custom price', 'smartcut') => 'smartcut_custom_price', //used to override the natural price
            __('Dimensions', 'smartcut') => 'smartcut_dimensions',
        ];

        if ($options['enable_machining'] === '1') {
            $fields[__('Machining', 'smartcut')]  = 'smartcut_machining'; //is machining present
            $fields[__('Machining price', 'smartcut')] = 'smartcut_machining_price';
        }

        return $fields;
    }

    //these fields get added to the order (underscore hides from the user but shows to the admin)
    $order_keys = [
        __('Job ID', 'smartcut') => 'smartcut_job_id',
        __('Total parts', 'smartcut') => 'smartcut_total_parts',
        __('Part area', 'smartcut') => 'smartcut_part_area',
        __('Cut length price', 'smartcut') => 'smartcut_cut_length_price',
        __('Price per part', 'smartcut') => 'smartcut_per_part_price',
        __('Banding price', 'smartcut') => 'smartcut_banding_price',
        __('Cut to size surcharge', 'smartcut') => 'smartcut_cut_to_size_surcharge',
        __('Dimensions', 'smartcut') => 'smartcut_dimensions',
		__('Stock summary', 'smartcut') => 'smartcut_stock_summary',
    ];

    if ($options['enable_machining'] === '1') {
        $fields[__('Machining', 'smartcut')]  = 'smartcut_machining'; //is machining present
        $fields[__('Machining price', 'smartcut')] = 'smartcut_machining_price';
    }

    //the _ prefix prevents being shown to user https://stackoverflow.com/questions/62364016/woocommerce_add_custom_meta_as_hidden_order_item_meta_for_internal_use
    //[] consider a single zip
    if ($options['customer_cutlist']) {
        $order_keys['Cut list PDF'] = get_file_key('pdf', 'layout', 'pdf');
        $order_keys['Cut list CSV'] = get_file_key('csv', 'parts', 'csv');
    } else {
        $order_keys['_Cut list PDF'] = get_file_key('pdf', 'layout', 'pdf');
        $order_keys['_Cut list CSV'] =  get_file_key('csv', 'parts', 'csv');
    }

    $order_keys['_Machining DXF'] = get_file_key('dxf', 'machining', 'zip');
    $order_keys['_Machining PDF'] = get_file_key('pdf', 'machining', 'pdf');
    $order_keys['_Layout DXF'] = get_file_key('dxf', 'layout', 'zip');

    //order
    return $order_keys;
}

/**
 * a consistent way of obtaining the key for a file from a cart object
 * @param string $type
 * @param string $file_extension
 * @return string
 */
function get_file_key($type, $option, $file_extension)
{
    $array =  ['smartcut', $type, $option, $file_extension];
    return implode('_', $array);
}


/**
 * add user fields to the product page
 * @return void
 */
function add_user_fields()
{
    $options = get_option('smartcut_options');
    if (isset($options['allow_offcuts']) && $options['allow_offcuts'] === '1') {

        \woocommerce_form_field('include_offcuts', [
            'type'          => 'checkbox',
            'label'         => __('Include offcuts', 'smartcut'),
            'required'  => false,
        ]);
    }
}

/**
 * add a custom text input field to the product page
 * @return void
 */
function add_hidden_fields()
{
    $keys = get_field_keys(true);

    if (is_array($keys)) {
        foreach ($keys as $key => $value) {
            printf('<input type="hidden" name="%s" id="%s" value="">', $value, str_replace('_', '-', $value));
        }
    };
}


/**
 * check if the job id is already in the cart, and abort if so
 * @param boolean $passed
 * @return boolean
 */
function validate_cart($passed)
{
    // get the data being added to the cart
    $job_id = isset($_POST['smartcut_job_id']) ? $_POST['smartcut_job_id'] : null;

    if (!$job_id) return $passed;

    //sometimes the cart item data is already set
    $current_cart_contents = WC()->cart->get_cart();

    //run the loop in reverse as the latest item is most likely to be repeated
    $cart_contents = array_reverse($current_cart_contents, true);
    foreach ($cart_contents as $key => $value) {
        if (isset($value['smartcut_job_id']) && $value['smartcut_job_id'] === $job_id) {
            $passed = false;
            wc_add_notice(__('This cut list is already in your cart.', 'smartcut'), 'error');
        }
    }

    return $passed;
}

add_filter('woocommerce_add_to_cart_validation', 'SmartCut\Cutlist\Cart\validate_cart', 10, 3);

/**
 * add custom cart item data
 * @param array $cart_item_data
 * @return array
 */
function add_cart_item_data($cart_item_data)
{

    $job_id = isset($_POST['smartcut_job_id']) ? $_POST['smartcut_job_id'] : null;
    if (!$job_id) return $cart_item_data;

    //sometimes the cart item data is already set
    $current_cart_contents = WC()->cart->get_cart();

    //run the loop in reverse as the latest item is most likely to be repeated
    $cart_contents = array_reverse($current_cart_contents, true);
    foreach ($cart_contents as $key => $value) {
        if (isset($value['smartcut_job_id']) && $value['smartcut_job_id'] === $job_id) {
            wc_add_notice(__('Add to cart process stopped.', 'smartcut'), 'error');
        }
    }

    $keys = get_field_keys(true);

    if (is_array($keys)) {

        //attach fields to the cart item data
        foreach ($keys as $key) {
            if (isset($_POST[$key])) {
                $value = sanitize_text_field($_POST[$key]);
                $cart_item_data[$key] = $value;
            }
        }
    }

    //include_offcuts is set by woocommerce checkbox so smartcut prefix not needed
    if (isset($_POST['include_offcuts'])) {
        $value = sanitize_text_field($_POST['include_offcuts']);
        $cart_item_data['include_offcuts'] = $value === '1' ? __('Yes', 'smartcut') : __('No', 'smartcut');
    }

    //create the files
    $file_types = ['pdf', 'csv'];
    $file_options = ['layout', 'parts'];

    $settings = \SmartCut\get_settings('cutlist');

    //add DXF
    if (isset($settings['layout_dxf']) && $settings['layout_dxf'] === "1") {
        $file_types[] = 'dxf';
        $file_options[] = 'layout';
    }

    //add machining
    if (isset($cart_item_data['smartcut_machining']) && $cart_item_data['smartcut_machining'] === 'true') {
        $file_types[] = 'pdf';
        $file_options[] = 'machining';
        $file_types[] = 'dxf';
        $file_options[] = 'machining';
    }

    $file_query = http_build_query(['types' => $file_types, 'options' => $file_options, 'id' => $job_id]);
    $response = wp_remote_get(SMARTCUT_ENDPOINT . "export-checkout/multiple/?$file_query");

    $response_code = wp_remote_retrieve_response_code($response);
    $response = wp_remote_retrieve_body($response);

    if ($response_code === 200) {
        $cart_item_data = attach_files_to_cart($job_id, $response, $file_types, $file_options, $cart_item_data);
    } else {
        trigger_error("SmartCut - creating files failed for job $job_id with response $response_code", E_USER_WARNING);
    }

    return $cart_item_data;
}

function attach_files_to_cart($job_id, $file_list, $file_types, $file_options, $cart_item_data)
{

    if (!$job_id || !$file_list) {
        throw new \Exception('SmartCut - list of files does not exist or is empty');
    }

    $file_list = explode(',', $file_list);

    if (!isset($file_list) || !count($file_list)) {
        throw new \Exception('SmartCut - list of files does not exist or is empty');
    }

    foreach ($file_list as $index => $url) {

        $file = wp_remote_get($url);
        $info = pathinfo($url);
        $file_name = $info['filename'];
        $file_extension = $info['extension'];

        $response_code = wp_remote_retrieve_response_code($file);

        if ($response_code === 200) {

            $body = wp_remote_retrieve_body($file);
            $uploads_dir = wp_get_upload_dir();
            $uploads_path = $uploads_dir['path'];

            //file may have already been saved
            if (!file_exists("$uploads_path/$file_name.$file_extension")) {

                //save the file to the library
                $upload = wp_upload_bits("$file_name.$file_extension", null, $body);

                if ($upload && isset($upload['error']) && !$upload['error']) {
                    $file_url = $upload['url'];
                } else {
                    throw new \Exception('SmartCut - failed to upload file via wp_upload_bits');
                }
            } else {

                $uploads_url = $uploads_dir['url'];
                $file_url = "$uploads_url/$file_name.$file_extension";
            }

            if ($file_url) {
                //attach the id of the asset to the cart item
                $type = $file_types[$index];
                $option = $file_options[$index];
                $key = get_file_key($type, $option, $file_extension);
                $cart_item_data[$key] = $file_url;
            } else {
                throw new \Exception("SmartCut - failed to attach $file_extension file to cart for $file_name with response $response_code");
            }
        } else {
            throw new \Exception("SmartCut - failed to get $file_extension file from server with response $response_code");
        }
    }



    return $cart_item_data;
}

/**
 * these surcharges are shown in the cart totals
 * @param WC_Cart $cart
 * @deprecated - now setting each cart item individually using set_cart_price
 * @return void
 */
/* function add_product_surcharges($cart)
{
    if (is_admin() && !defined('DOING_AJAX')) return;

    $surcharges = ['Cut to size surcharge' => 'smartcut_cut_to_size_surcharge'];

    foreach ($cart->cart_contents as $key => $item) {

        foreach ($surcharges as $name => $surcharge) {

            $surcharge_price = isset($item[$surcharge]) ? floatval($item[$surcharge]) : 0;

            if ($surcharge_price) {
                $cart->add_fee(__($name, 'smartcut'), floatval($item[$surcharge]), true, '');
            }
        }
    }
} */


/**
 * set the price of the cart item to include banding, cut length and surcharges
 * @param WC_Cart $cart
 * @var WC_Product $product
 * @return void
 */
function set_cart_price($cart)
{

    if (is_admin() && !defined('DOING_AJAX')) return;

    $added_costs = ['smartcut_cut_length_price', 'smartcut_per_part_price', 'smartcut_banding_price', 'smartcut_machining_price', 'smartcut_cut_to_size_surcharge'];

    foreach ($cart->get_cart() as $cart_item) {

        $product = $cart_item['data'];
        $quantity = $cart_item['quantity'];
        $price = 0;

        //get the initial price
        if (array_key_exists('smartcut_custom_price', $cart_item) && !empty($cart_item['smartcut_custom_price'])) {
            $price = floatval($cart_item['smartcut_custom_price']);
        } else {
            $price = floatval($product->get_price());
        }

        //add the surcharges
        foreach ($added_costs as $key) {

            if (!array_key_exists($key, $cart_item) || empty($cart_item[$key])) continue;

            //divide by quantity to get the price per basket item
            $price += (floatval($cart_item[$key]) / $quantity);
        }

        $product->set_price($price);
    }
}


/**
 * display custom item data in the cart
 * @param array $item_data
 * @param array $cart_item_data
 * @return mixed
 */
function get_item_data($item_data, $cart_item_data)
{

    $keys = [
        // __('Total cuts', 'smartcut') => 'smartcut_total_cuts',
		__('Stock', 'smartcut') => 'smartcut_stock_summary',
        __('Total parts', 'smartcut') => 'smartcut_total_parts',
        __('Include offcuts', 'smartcut') => 'include_offcuts',
        __('Dimensions', 'smartcut') => 'smartcut_dimensions',
        __('Banding price', 'smartcut') => 'smartcut_banding_price',
        __('Cut length price', 'smartcut') => 'smartcut_cut_length_price',
        __('Price per part', 'smartcut') => 'smartcut_per_part_price',
        __('Cut to size surcharge', 'smartcut') => 'smartcut_cut_to_size_surcharge',
        __('Machining', 'smartcut') => 'smartcut_machining',
        __('Machining price', 'smartcut') => 'smartcut_machining_price',
    ];

    foreach ($keys as $name => $value) {

        if (isset($cart_item_data[$value])) {

            if ($value === 'smartcut_banding_price' || $value === 'smartcut_machining_price' || $value === 'smartcut_cut_length_price' || $value === 'smartcut_per_part_price' || $value === 'smartcut_cut_to_size_surcharge') {

                if (empty($cart_item_data[$value]) || floatval($cart_item_data[$value]) === 0) continue;

                $item_data[] = array(
                    'key' => $name,
                    'value' => number_format(floatval($cart_item_data[$value]), 2)
                );
            } else {

                $item_data[] = array(
                    'key' => $name,
                    'value' => \wc_clean($cart_item_data[$value])
                );
            }
        }
    }

    return $item_data;
}


/**
 * add custom meta to order
 * @param WC_Order_Item_Product $item
 * @param string $cart_item_key
 * @param array $values
 * @param WC_Order $order
 * @return void
 */
function checkout_create_order_line_item($item, $cart_item_key, $values, $order)
{

    $keys = get_field_keys(false);

    //add the offcuts field, which is added via WooCommerce checkbox
    $keys[__('Include offcuts', 'smartcut')] = 'include_offcuts';

    foreach ($keys as $name => $value) {
        if (isset($values[$value])) {
            $item->add_meta_data(
                $name,
                stripslashes($values[$value]),
                true
            );
        }
    }
}

/* function add_to_cart_js($cart_item_key, $product_id, $quantity, $variation_id, $variation, $cart_item_data)
{
?>
    <script type="text/javascript">
        debugger;
        var event = new Event('added_to_cart');
        document.body.dispatchEvent(event);
    </script>
<?php
}
add_action('woocommerce_add_to_cart', 'SmartCut\Cutlist\Cart\add_to_cart_js', 10, 6); */
