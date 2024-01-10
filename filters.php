<?php

namespace SmartCut\Filters;

/**
 * add links to the plugin's meta
 * @param array $links
 * @return array
 */
function plugin_row_meta($links)
{

    $docs_url = apply_filters('woocommerce_docs_url', 'https://smartcut.dev/wp-plugin');

    $row_meta = array(
        'docs'    => '<a href="' . esc_url($docs_url) . '" aria-label="' . esc_attr__('View WooCommerce documentation', 'woocommerce') . '">' . esc_html__('Docs', 'woocommerce') . '</a>',
    );

    return array_merge($links, $row_meta);
}

add_filter('plugin_row_meta', 'SmartCut\Filters\plugin_row_meta');


//add a class to the quantity input for js selection
add_filter('woocommerce_quantity_input_classes', function ($a) {
    array_push($a, 'smartcut-stock-quantity');
    return $a;
});

//reformat price to allow selection from JS layer
add_filter('wc_price', function ($a) {

    $decimal_separator = preg_quote(wc_get_price_decimal_separator(), '/');
    $thousand_separator = preg_quote(wc_get_price_thousand_separator(), '/');
    $decimals = wc_get_price_decimals();

    $pattern = "/\d{1,3}(?:{$thousand_separator}\d{3})*{$decimal_separator}\d{1,{$decimals}}/";

    preg_match($pattern, $a, $matches);

    if (!empty($matches)) {

        $price = $matches[0];

        $price_selector = "<span class='smartcut-price-selector'>{$price}</span>";

        $a = str_replace($price, $price_selector, $a);
    }

    return $a;
});
