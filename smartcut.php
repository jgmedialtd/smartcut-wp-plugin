<?php

/**
 * Plugin Name: SmartCut
 * Plugin URI: https://smartcut.dev
 * Description: Calculate cut lists & pricing for cut-to-size businesses.
 * Author: SmartCut
 * Requires at least: 6.0
 * Requires PHP: 7.0
 * WC requires at least: 8.0
 * Text Domain: smartcut
 * Version: 3.0.25
 * Author URI: https://smartcut.dev
 */

namespace SmartCut;

define('SMARTCUT_CURRENT_VERSION', '3.0.25'); // This needs to be kept in sync with the version above.

//composer
require __DIR__ . '/vendor/autoload.php';

use WC_Product_Variation;

//plugin update checker
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

//https://github.com/YahnisElsts/plugin-update-checker?tab=readme-ov-file#getting-started
$myUpdateChecker = PucFactory::buildUpdateChecker(
    'https://github.com/jgmedialtd/smartcut-wp-plugin',
    __FILE__,
    'smartcut'
);

$myUpdateChecker->setBranch('main');


//environment variables (from .htaccess)
$checkout_url = getenv('SMARTCUT_CHECKOUT_URL') ? getenv('SMARTCUT_CHECKOUT_URL') : 'https://cutlistevo.com/checkout-mini/';
$endpoint = getenv('SMARTCUT_ENDPOINT') ? getenv('SMARTCUT_ENDPOINT') : 'https://api.smartcut.dev/';

define('SMARTCUT_CHECKOUT_URL', $checkout_url);
define('SMARTCUT_ENDPOINT', $endpoint);

add_action('wp_enqueue_scripts', 'SmartCut\enqueue_product_styles');

function print_smartcut_version()
{
    return '<div>SmartCut version: ' . SMARTCUT_CURRENT_VERSION . '</div>';
}

add_shortcode('smartcut_version', 'SmartCut\print_smartcut_version');

add_filter('wp_script_attributes', static function (array $attr): array {
    if ('smartcut-checkout-js' === $attr['id']) {
        $attr['type'] = 'module';
    }
    return $attr;
}, 99999);

function admin_notice($message, $class = 'notice notice-warning is-dismissible')
{
    $user_id = get_current_user_id();
    if (!get_user_meta($user_id, 'smartcut_notice_dismissed')) {
        printf(
            '<div class="%s"><p>%s</p></div>',
            esc_attr($class),
            esc_html($message)
        );
    }
}

/* if (!is_woocommerce_active()) {
    add_action('admin_notices', function () {
        admin_notice('SmartCut requires WooCommerce to be active', 'notice notice-error is-dismissible');
    });
    return;
} */

function register_tools_page()
{
    add_submenu_page(
        'tools.php',
        'SmartCut Health',
        'SmartCut Health',
        'manage_options',
        'smartcut-health-check',
        'SmartCut\create_health_check_tools_page'
    );

    add_submenu_page(
        'tools.php',
        'SmartCut - create template products',
        'SmartCut Templates',
        'manage_options',
        'smartcut-template-products',
        'SmartCut\create_product_template_tools_page'
    );
};

function create_product_template_tools_page()
{

    echo '<div class="smartcut-tools">';

    echo '<h1 class="wp-heading-inline">SmartCut Templates</h1>';

    if (!is_woocommerce_active()) {
        echo '<p><span class="warning">⚠️</span> WooCommerce must be active</p>';
        return;
    };

    $cutlist_settings = get_settings('cutlist');

    if (!isset($cutlist_settings) || count($cutlist_settings) === 0) {
        echo '<p><span class="warning">⚠️</span> No cut list settings found - head to Settings > SmartCut and save your preferences.</p>';
        return;
    }

    $cutlist_categories = \SmartCut\Cutlist\Settings\get_product_categories($cutlist_settings['product_category']);

    if (count($cutlist_categories)) {
        $cutlist_category = $cutlist_categories[0];
    }

    if (!$cutlist_category) {
        echo '<p><span class="warning">⚠️</span> No cut list product category found, ensure this is set in Settings > SmartCut</p>';
        return;
    }

    //add smartcut logo to the media library if it isn't already there

    // The URL of the image in the plugin's assets folder
    $image_url = plugins_url('assets/smartcut-logo.png', __FILE__);

    $logo_id = attachment_url_to_postid($image_url);

    if ($logo_id === 0) {

        // Download the image and save it in the media library
        $logo_id = media_sideload_image($image_url, 0, 'SmartCut logo', 'id');

        // If there was an error, $media will be a WP_Error object
        if (is_wp_error($logo_id)) {
            printf('<p><span class="warning">⚠️</span> Error uploading logo: %s</p>', $logo_id->get_error_message());
            $logo_id = 0;
        } else {
            echo '<p>✅ Product image uploaded successfully</p>';
        }
    } else {
        echo '<p>✅ Product image already exists in the media library</p>';
    }

    $template_products = [

        'SC - Banding A' => [
            'is_banding' => true,
            'price' => 1,
            'content' => '<p>Pricing should be per meter / foot.</p>'
        ],

        'SC - Banding B' => [
            'is_banding' => true,
            'price' => 2,
            'content' => '<p>Pricing should be per meter / foot.</p>'
        ],

        'SC - Machining - holes' => [
            'is_machining' => true,
            'price' => 1,
        ],

        'SC - Machining - corners' => [
            'is_machining' => true,
            'price' => 1,
        ],


        //simple sheet - single size
        'SC - Simple sheet, price by full sheet' => [
            'length' => '2440',
            'width' => '1220',
            'stock_type' => 'sheet',
            'cut_preference' => 'length',
            'price' => 100,
        ],

        //simple sheet - out of stock
        'SC - Simple sheet, out of stock' => [
            'length' => '2440',
            'width' => '30',
            'stock_type' => 'sheet',
            'price' => 100,
            'out_of_stock' => true,
        ],

        //simple linear - single size
        'SC - Simple linear, price by full length' => [
            'length' => '2440',
            'width' => '30',
            'stock_type' => 'linear',
            'price' => 100,
        ],

        'SC - Simple sheet, price by part area' => [
            'length' => '2440',
            'width' => '1220',
            'stock_type' => 'sheet',
            'cut_preference' => 'length',
            'pricing_strategy' => 'part_area',
            'price' => 1,
        ],

        'SC - Simple sheet with banding, price by full sheet' => [
            'length' => '2440',
            'width' => '1220',
            'stock_type' => 'sheet',
            'cut_preference' => 'length',
            'banding_types' => 'sc-banding-a,sc-banding-b',
            'price' => 100,
        ],

        //machining
        'SC - Simple sheet with machining, price by full sheet' => [
            'length' => '2440',
            'width' => '1220',
            'thickness' => ['10'],
            'stock_type' => 'sheet',
            'cut_preference' => 'length',
            'machining_holes_product' => 'sc-machining-holes',
            'machining_corners_product' => 'sc-machining-corners',
            'price' => 100,
        ],

        //simple sheet - multiple sizes
        'SC - Simple sheet, multiple stock sizes, charge by part area' => [
            'price' => 10,
            'size' => ['100x100', '1000x1000'],
            'stock_type' => 'sheet',
            'cut_preference' => 'length',
            'content' => '<p>To charge by part area, set the product price to price per square meter / foot.</p><p>If using multiple stock sizes in a simple product, there is no option to price the sizes differently. Use a variable product to achieve this.</p>',
            'pricing_strategy' => 'part_area'
        ],

        'SC - Multiple thicknesses, single stock size, price by full sheet plus number of parts & banding' => [
            'variable' => true,
            'variations' => ['thickness'],
            'banding_types' => 'sc-banding-a,sc-banding-b',
            'pricing_strategy' => 'full_sheet_plus_num_parts',
            'per_part_price' => 1,
            'price' => 100,
            'length' => '2440',
            'width' => '1220',
            'thickness' => ['8', '12'],
            'stock_type' => 'sheet',
            'cut_preference' => 'length',
            'content' => '<p>When using the <strong>Full sheet plus number of parts</strong> pricing strategy, the price per part is added to the full sheet price.</p>',
        ],

        //thickness only - single stock dimensions
        'SC - Multiple thicknesses' => [
            'variable' => true,
            'variations' => ['thickness'],
            'price' => 100,
            'length' => '2440',
            'width' => '1220',
            'thickness' => ['8', '12'],
            'stock_type' => 'sheet',
            'cut_preference' => 'length',
        ],

        'SC - Multiple thicknesses with double' => [
            'variable' => true,
            'variations' => ['thickness'],
            'price' => 100,
            'length' => '2440',
            'width' => '1220',
            'thickness' => ['8', '12', '12,24'],
            'stock_type' => 'sheet',
            'cut_preference' => 'length',
            'content' => '<p>This product allows for double thickness bonded sheets to be added to the same calculation.</p>',
        ],

        'SC - Single thickness with double' => [
            'variable' => true,
            'variations' => ['thickness'],
            'price' => 100,
            'length' => '2440',
            'width' => '1220',
            'thickness' => ['12,24'],
            'stock_type' => 'sheet',
            'cut_preference' => 'length',
            'content' => '<p>This product allows for double thickness bonded sheets to be added to the same calculation.</p>',
        ],

        //no option to buy different full sheets
        'SC - Multiple thicknesses, multiple stock sizes, price by part area, no option to purchase full sheet' => [
            'variable' => true,
            'variations' => ['thickness'],
            'price' => 10,
            'size' => ['100x100', '1000x1000'],
            'thickness' => ['8', '12'],
            'stock_type' => 'sheet',
            'cut_preference' => 'length',
            '<p>If using multiple stock sizes in a variable product without giving the user the option to purchase the full board there is no option to price the sizes differently.</p>',
            'pricing_strategy' => 'part_area',
        ],

        //option to purchase full sheet
        'SC - Multiple thicknesses, multiple stock sizes, option to purchase full sheet' => [
            'variable' => true,
            'variations' => ['thickness', 'size'],
            'price' => 100,
            'size' => ['100x100', '1000x1000', 'Cut to size'],
            'thickness' => ['8', '12'],
            'stock_type' => 'sheet',
            'cut_preference' => 'length',
        ],

        'SC - Multiple thicknesses, multiple stock sizes, price by full sheet plus cut length & banding' => [
            'variable' => true,
            'variations' => ['thickness', 'size'],
            'banding_types' => 'sc-banding-a,sc-banding-b',
            'pricing_strategy' => 'full_sheet_plus_cut_length',
            'cut_length_price' => 1,
            'price' => 100,
            'size' => ['100x100', '1000x1000', 'Cut to size'],
            'thickness' => ['8', '12'],
            'stock_type' => 'sheet',
            'cut_preference' => 'length',
            'content' => '<p>When using the <strong>Full sheet plus cut length</strong> pricing strategy, the cut length price is added to the full sheet price. Pricing should be per meter / foot.</p>',
        ],

        'SC - Multiple thicknesses, multiple stock sizes, price by full sheet plus number of parts & banding' => [
            'variable' => true,
            'variations' => ['thickness', 'size'],
            'banding_types' => 'sc-banding-a,sc-banding-b',
            'pricing_strategy' => 'full_sheet_plus_num_parts',
            'per_part_price' => 1,
            'price' => 100,
            'size' => ['100x100', '1000x1000', 'Cut to size'],
            'thickness' => ['8', '12'],
            'stock_type' => 'sheet',
            'cut_preference' => 'length',
            'content' => '<p>When using the <strong>Full sheet plus number of parts</strong> pricing strategy, the price per part is added to the full sheet price.</p>',
        ],

    ];

    function add_table_row($data = [])
    {

        $row = '<tr>';

        foreach ($data as $value) {
            $row .= sprintf('<td>%s</td>', $value);
        }

        $row .= '</tr>';

        return $row;
    }

    foreach ($template_products as $name => $product_data) {

        $args = array(
            'post_type' => 'product',
            'post_status' => 'any',
            'title' => $name,
            'posts_per_page' => 1
        );

        $query = new \WP_Query($args);

        $product_post = null;

        if ($query->have_posts()) {
            $query->the_post();
            $product_post = get_post();
        }

        wp_reset_postdata();

        if ($product_post) {
            printf('<p>✅ "%s" already exists</p>', $name);
            continue;
        } else {

            printf('<p>Creating %s...</p>', $name);

            $variable_product = isset($product_data['variable']) && $product_data['variable'] === true;

            if ($variable_product) $product = new \WC_Product_Variable();
            else $product = new \WC_Product();


            $product->set_name($name);
            $product->set_status('private');

            //out of stock
            if (isset($product_data['out_of_stock']) && $product_data['out_of_stock'] === true) {
                $product->set_stock_status('outofstock');
            }

            if ($logo_id) $product->set_image_id($logo_id);

            $content = '<p>Dimensions are set in Attributes. Other settings available in the SmartCut menu.</p>';

            if (isset($product_data['content'])) $content .= $product_data['content'];

            $content .= '<table><tr><th>Attribute</th><th>Value</th></tr>';

            if (isset($product_data['length'])) $content .= add_table_row(['Length', $product_data['length']]);
            if (isset($product_data['width'])) $content .= add_table_row(['Width', $product_data['width']]);
            if (isset($product_data['thickness']) && is_array($product_data['thickness'])) $content .= add_table_row(['Thickness', implode(', ', $product_data['thickness'])]);
            if (isset($product_data['size']) && is_array($product_data['size'])) $content .= add_table_row(['Size', implode(', ', $product_data['size'])]);
            if (isset($product_data['stock_type'])) $content .= add_table_row(['Stock type', $product_data['stock_type']]);
            if (isset($product_data['cut_preference'])) $content .= add_table_row(['Cut preference', $product_data['cut_preference']]);
            if (isset($product_data['pricing_strategy'])) $content .= add_table_row(['Pricing strategy', $product_data['pricing_strategy']]);
            if (isset($product_data['cut_length_price'])) $content .= add_table_row(['Cut length price', $product_data['cut_length_price']]);
            if (isset($product_data['per_part_price'])) $content .= add_table_row(['Price per part', $product_data['per_part_price']]);
            if (isset($product_data['banding_types'])) $content .= add_table_row(['Edge banding types', $product_data['banding_types']]);
            if (isset($product_data['machining_holes_product'])) $content .= add_table_row(['Holes', $product_data['machining_holes_product']]);
            if (isset($product_data['machining_corners_product'])) $content .= add_table_row(['Corners', $product_data['machining_corners_product']]);
            if (isset($product_data['surcharge_type'])) $content .= add_table_row(['Surcharge type', $product_data['surcharge_type']]);
            if (isset($product_data['surcharge'])) $content .= add_table_row(['Surcharge', $product_data['surcharge']]);

            $content .= '</table>';

            $product->set_description($content);

            //category
            if (!isset($product_data['is_banding']) && !isset($product_data['is_machining'])) {

                $category = get_term_by('slug', $cutlist_category, 'product_cat');

                if ($category) {
                    $category_id = $category->term_id;
                    $product->set_category_ids([$category_id]);
                }
            }

            $attributes = [];

            //attributes
            if (isset($product_data['length'])) $attributes['length'] = $product_data['length'];
            if (isset($product_data['width'])) $attributes['width'] = $product_data['width'];
            if (isset($product_data['thickness']) && is_array($product_data['thickness'])) $attributes['thickness'] = implode(' | ', $product_data['thickness']);
            if (isset($product_data['size']) && is_array($product_data['size'])) $attributes['size'] = implode(' | ', $product_data['size']);

            $product_attributes = [];

            foreach ($attributes as $attribute_name => $attribute_value) {

                $product_attribute = new \WC_Product_Attribute();
                $product_attribute->set_options([$attribute_value]);
                $product_attribute->set_name($attribute_name);
                $product_attribute->set_visible(true);

                if ($variable_product) {

                    if (isset($product_data['variations']) && in_array($attribute_name, $product_data['variations'])) {
                        $product_attribute->set_variation(true);
                    }
                }
                $product_attributes[] = $product_attribute;
            }

            $product->set_attributes($product_attributes);

            //smartcut product settings
            $fields = \SmartCut\Cutlist\Settings\get_combined_setting_fields();

            $settings = [
                'stock_type' => isset($product_data['stock_type']) ? $product_data['stock_type'] : 'sheet',
                'cut_preference' =>  isset($product_data['cut_preference']) ? $product_data['cut_preference'] : 'length',
                'banding_types' => isset($product_data['banding_types']) ? $product_data['banding_types'] : '',
                'machining_holes_product' => isset($product_data['machining_holes_product']) ? $product_data['machining_holes_product'] : '',
                'machining_corners_product' => isset($product_data['machining_corners_product']) ? $product_data['machining_corners_product'] : '',
                'pricing_strategy' => isset($product_data['pricing_strategy']) ? $product_data['pricing_strategy'] : 'full_sheet',
                'cut_length_price' => isset($product_data['cut_length_price']) ? $product_data['cut_length_price'] : '0.00',
                'per_part_price' => isset($product_data['per_part_price']) ? $product_data['per_part_price'] : '0.00',
                'surcharge_type' => isset($product_data['surcharge_type']) ? $product_data['surcharge_type'] : 'none',
                'surcharge' => isset($product_data['surcharge']) ? $product_data['surcharge'] : '0.00',
                'disable_machining' => isset($product_data['machining_holes_product']) || isset($product_data['machining_corners_product']) ? '0' : '1',
            ];

            foreach ($settings as $key => $setting) {

                if (!isset($fields[$key])) {
                    trigger_error('The field key ' . $key . ' is not present in the settings fields.', E_USER_WARNING);
                }

                $key = 'smartcut_' . $key;

                $product->update_meta_data($key, $setting);
            }
            $price = isset($product_data['price']) ? $product_data['price'] : 100;


            if (!$variable_product) {

                $product->set_regular_price(isset($product_data['price']) ? number_format($product_data['price'], 2, '.') : number_format($price, 2, '.'));
            }

            $product->save();

            $product_id = $product->get_id();

            if ($variable_product) {

                $product_data['variations'] = isset($product_data['variations']) ? $product_data['variations'] : [];

                //thickness only
                if (count($product_data['variations']) === 1) {
                    foreach ($product_data['variations'] as $key => $attribute_name) {

                        foreach ($product_data[$attribute_name] as $thickness) {
                            $variation = new WC_Product_Variation();
                            $variation->set_parent_id($product_id);
                            //set the thickness as the variation description
                            $variation->set_description($attribute_name . ': ' . $thickness);
                            $variation->set_attributes([
                                $attribute_name => $thickness,
                            ]);
                            $variation->set_regular_price(number_format($price, 2, '.'));
                            $variation->save();
                            $price = $price + 100;
                        }
                    }

                    //thickness & size
                } else if (count($product_data['variations']) === 2) {

                    foreach ($product_data['variations'] as $key => $attribute_name) {

                        $next_key = $key + 1;
                        $next_name = isset($product_data['variations'][$next_key]) ? $product_data['variations'][$next_key] : null;

                        if (!$next_name) break;


                        foreach ($product_data[$attribute_name] as $thickness) {
                            foreach ($product_data[$next_name] as $size) {

                                $variation = new WC_Product_Variation();
                                $variation->set_parent_id($product_id);
                                //set the thickness as the variation description
                                $variation->set_description(ucfirst($attribute_name) . ': ' . $thickness);
                                $variation->set_attributes([
                                    $attribute_name => $thickness,
                                    $next_name => $size,
                                ]);

                                $variation->set_regular_price(number_format($size !== 'Cut to size' ? $price : 0, 2, '.'));
                                $variation->save();
                                $price = $size !== 'Cut to size' ? $price + 100 : 0;
                            }
                        }
                    }
                }
            }

            printf('<p>✅ Created "%s"</p>', $name);
        }
    }

    echo '<br /><h2>Templates complete</h2>';

    echo '</div>';
}

function create_product_variation($product_id, $variation_data)
{

    $product = wc_get_product($product_id);

    $variation_post = [
        'post_title'    => $product->get_title(),
        'post_name'     => 'product-' . $product_id . '-variation',
        'post_status'   => 'draft',
        'post_parent'   => $product_id,
        'post_type'     => 'product_variation',
        'guid'          => $product->get_permalink()
    ];

    $variation_id = wp_insert_post($variation_post);

    $variation = new \WC_Product_Variation($variation_id);

    foreach ($variation_data['attributes'] as $attribute => $term_name) {

        $taxonomy = 'pa_' . $attribute;

        if (!taxonomy_exists($taxonomy)) {

            register_taxonomy(

                $taxonomy,

                'product_variation',

                array(
                    'hierarchical' => false,
                    'label' => ucfirst($attribute),
                    'query_var' => true,
                    'rewrite' => array('slug' => sanitize_title($attribute)),
                )

            );
        }

        if (!term_exists($term_name, $taxonomy)) {

            wp_insert_term($term_name, $taxonomy);
        }

        $term_slug = get_term_by('name', $term_name, $taxonomy)->slug;

        $post_term_names =  wp_get_post_terms($product_id, $taxonomy, array('fields' => 'names'));

        if (!in_array($term_name, $post_term_names)) {

            wp_set_post_terms($product_id, $term_name, $taxonomy, true);
        }

        update_post_meta($variation_id, 'attribute_' . $taxonomy, $term_slug);
    }

    if (!empty($variation_data['sku']))

        $variation->set_sku($variation_data['sku']);

    if (empty($variation_data['sale_price'])) {

        $variation->set_price($variation_data['regular_price']);
    } else {

        $variation->set_price($variation_data['sale_price']);

        $variation->set_sale_price($variation_data['sale_price']);
    }

    $variation->set_regular_price($variation_data['regular_price']);

    if (!empty($variation_data['stock_qty'])) {

        $variation->set_stock_quantity($variation_data['stock_qty']);

        $variation->set_manage_stock(true);

        $variation->set_stock_status('');
    } else {

        $variation->set_manage_stock(false);
    }

    $variation->set_weight('');

    $variation->save();
}

function create_health_check_tools_page()
{

    echo '<div class="smartcut-tools">';

    echo '<h1 class="wp-heading-inline">SmartCut Health</h1>';

    phpversion() >= '7.0' ? printf('<p>✅ PHP version %s</p>', phpversion()) : printf('<p class="issue"><span class="warning">⚠️</span> PHP version %s - SmartCut recommends PHP 7.0 or greater</p>', phpversion());

    if (!is_woocommerce_active()) {
        echo '<p class="issue"><span class="warning">⚠️</span> WooCommerce must be active</p>';
        return;
    }

    $theme = wp_get_theme();
    if ($theme->template === 'storefront') {
        echo '<p>✅ Storefront theme detected - SmartCut is only compatable with themes which correctly implement WooCommerce.</p>';
    } else {
        echo '<p class="issue">SmartCut is only compatable with themes which correctly implement the WooCommerce actions & filters such as Storefront. Swap to Storefront if you are having problems.</p>';
    }

    $active_plugins = get_option('active_plugins');
    $all_plugins = get_plugins();
    $dodgy_words = ['autoptimize', 'cache', 'caching', 'optimize', 'optimise', 'optimizing', 'optimising'];
    $bad_plugins = [];

    foreach ($all_plugins as $key => $plugin) {
        //if active
        if (in_array($key, $active_plugins)) {
            foreach ($dodgy_words as $word) {
                if (strpos(strtolower($plugin['Name']), $word) !== false) {
                    $bad_plugins[] = $plugin['Name'];
                    break;
                }
            }
        }
    }

    if (count($bad_plugins) > 0) {
        printf('<p class="issue">The following active plugins may cause issues <strong>%s</strong></p>', implode(', ', $bad_plugins));
        echo '<p class="issue">☝ If you do choose to use the plugins above be very careful with javascript compression or changing the natural load order of scripts.</p>';
    }

    $cutlist_settings = get_settings('cutlist');

    if (!isset($cutlist_settings) || count($cutlist_settings) === 0) {
        echo '<p><span class="warning">⚠️</span> No cut list settings found - head to Settings > SmartCut and save your preferences.</p>';
        return;
    }

    $cutlist_category = isset($cutlist_settings['product_category']) ? $cutlist_settings['product_category'] : '';

    if (!$cutlist_category) {
        echo '<p><span class="warning">⚠️</span> No cut list product category found, ensure this is set in Settings > SmartCut</p>';
        return;
    }

    $cutlist_categories = \SmartCut\Cutlist\Settings\get_product_categories($cutlist_category);
    $num_cutlist_categories = count($cutlist_categories);

    $args = array(
        'post_type' => 'product',
        'post_status' => ['private', 'publish', 'draft'],
        'posts_per_page' => -1,
        'tax_query' => [
            [
                'taxonomy' => 'product_cat',
                'field' => 'slug',
                'terms' => $cutlist_categories,
            ]
        ]
    );

    $products = get_posts($args);

    $number_products = count($products);

    if (!$number_products) {

        printf('<p><span class="warning">⚠️</span> No products found in the <strong>%s</strong> %s</p>', $cutlist_category, ($num_cutlist_categories > 1 ? 'categories' : 'category'));
        return;
    }

    printf('<p>Found <strong>%d</strong> products in the <strong>"%s"</strong> %s...</p>', $number_products, $cutlist_category, ($num_cutlist_categories > 1 ? 'categories' : 'category'));

    foreach ($cutlist_categories as $category) {
        $category_exists = term_exists($category, 'product_cat');
        if (!$category_exists) {
            printf('<p class="issue"><span class="warning">⚠️</span> Product category with slug <strong>%s</strong> does not exist</p>', $category);
        }
    }

    echo '<br /><table class="smartcut-table">';

    $count = 0;
    $issue_count = 0;

    foreach ($products as $product) {

        $count++;

        //get the product id
        $product_id = $product->ID;

        $product_messages = \SmartCut\Cutlist\Product\check_product_setup($product_id);

        if (count($product_messages) === 0) {
            printf('<tr><td>✅ %s</td></tr>', $product->post_title);
            continue;
        };

        $issue_count++;

        printf('<tr><td><span class="warning">⚠️</span><a href="%s" target="_blank">%s</a></td></tr>', get_permalink($product_id), $product->post_title);

        foreach ($product_messages as $message) printf('<tr><td class="issue">%s</td></tr>', $message);
    }

    echo '</table>';

    printf('<br /><p>Checked <strong>%d</strong> products, found <strong>%d</strong> issues</p>', $count, $issue_count);

    echo '<br /><h2>Checks complete</h2>';

    echo '</div>';
};

add_action('admin_menu', 'SmartCut\register_tools_page');

function enqueue_product_styles()
{
    wp_enqueue_style(
        'smartcut-site-wide-style',
        plugins_url('/css/site-wide.css', __FILE__),
        array(),
        SMARTCUT_CURRENT_VERSION,
    );

    if (!is_singular('product')) return;

    wp_enqueue_style(
        'smartcut-product-style',
        plugins_url('/css/product.css', __FILE__),
        array(),
        SMARTCUT_CURRENT_VERSION,
    );
}

function enqueue_admin_style($hook)
{
    wp_enqueue_style(
        'smartcut-admin-style',
        plugins_url('/css/admin.css', __FILE__),
        array(),
        SMARTCUT_CURRENT_VERSION,
    );
}
add_action('admin_enqueue_scripts', 'SmartCut\enqueue_admin_style');

include_once 'sc-widgets.php';

function init()
{

    if (!is_woocommerce_active()) return;

    include_once 'cutlist/settings.php';
    include_once 'filters.php';
}

add_action('init', 'SmartCut\init');

/**
 * detect if a product is a cutlist product
 * @param int $product_id
 * @return bool
 */
function is_cutlist($product_id)
{

    $options = get_settings('cutlist');
    return check_category($product_id, $options);
}

/**
 * check the category of a product matches the set option
 * @param int $product_id
 * @param array $options
 * @return bool
 */
function check_category($product_id, $options)
{

    if (!isset($options['product_category'])) return false;

    $product_categories = \SmartCut\Cutlist\Settings\get_product_categories($options['product_category']);

    $terms = get_the_terms($product_id, 'product_cat');

    //check if in the correct category
    if (is_array($terms)) {
        foreach ($terms as $term) {
            if (in_array($term->slug, $product_categories)) return true;
        }
    }

    return false;
}


function initProduct()
{

    if (!is_woocommerce_active()) return;

    $product_id = get_the_ID();

    if (\is_product()) {

        if (is_cutlist($product_id)) {
            include_once 'cutlist/product.php';
        }
    }
}

add_action('wp', 'SmartCut\initProduct', 1);

function initOther()
{

    if (!is_woocommerce_active()) return;

    include_once 'cutlist/cart.php';
    include_once 'cart.php';

    if (is_admin()) {

        include_once 'cutlist/product-admin.php';
    }
}

add_action('wp_loaded', 'SmartCut\initOther', 10);

/**
 * get the settings for a given smartcut type
 * @param string $type
 * @return array
 */
function get_settings($type)
{
    if (!$type) return false;

    if (!$type || $type === 'cutlist') {
        $options = get_option('smartcut_options');

        if (is_array($options)) {

            $options = array_filter($options, function ($val) {
                return $val;
            });
        }
    }

    return is_array($options) ? $options : [];
}

function log($message, $data)
{

    error_log($message);

    if (is_array($data) || is_object($data)) {
        error_log(print_r($data, true));
    } else {
        error_log($data);
    }
}

function is_woocommerce_active()
{

    if (class_exists('woocommerce')) {
        return true;
    } else {
        return false;
    }
}


function clear_cart_url()
{
    if (isset($_GET['cc'])) {
        global $woocommerce;
        $woocommerce->cart->empty_cart();
    }
}

add_action('init', 'SmartCut\clear_cart_url');

function remove_filters()
{
    if (is_woocommerce_active()) {
        remove_filter('woocommerce_stock_amount', 'intval');
        add_filter('woocommerce_stock_amount', 'floatval');
    }
}

add_action('init', 'SmartCut\remove_filters', 999999);


//autoptimize config
add_filter('autoptimize_js_do_minify', function () {
    return false;
}, 10, 1);

add_filter('autoptimize_js_include_inline', function () {
    return false;
}, 10, 1);

add_filter('autoptimize_filter_noptimize', function () {
    return true;
}, 10, 1);
