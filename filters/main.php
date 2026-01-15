<?php

namespace SmartCut\Filters;

defined('ABSPATH') || exit;

/**
 * add links to the plugin's meta
 * @param array $links
 * @return array
 */
function pluginRowMeta($links)
{
	$docsUrl = apply_filters('woocommerce_docs_url', 'https://store.smartcut.dev/setting-up-your-store/');

	$rowMeta = array(
		'docs'    => '<a href="' . esc_url($docsUrl) . '" aria-label="' . esc_attr__('View WooCommerce documentation', 'woocommerce') . '">' . esc_html__('Docs', 'woocommerce') . '</a>',
	);

	return array_merge($links, $rowMeta);
}

add_filter('plugin_row_meta', 'SmartCut\Filters\pluginRowMeta');


//add a class to the quantity input for js selection
add_filter('woocommerce_quantity_input_classes', function ($a) {
	array_push($a, 'smartcut-stock-quantity');
	return $a;
});

//reformat price to allow selection from JS layer
add_filter('wc_price', function ($a) {

	$decimalSeparator = preg_quote(wc_get_price_decimal_separator(), '/');
	$thousandSeparator = preg_quote(wc_get_price_thousand_separator(), '/');
	$decimals = wc_get_price_decimals();

	$pattern = "/\d{1,3}(?:{$thousandSeparator}\d{3})*{$decimalSeparator}\d{1,{$decimals}}/";

	preg_match($pattern, $a, $matches);

	if (!empty($matches)) {

		$price = $matches[0];

		$priceSelector = "<span class='smartcut-price-selector'>{$price}</span>";

		$a = str_replace($price, $priceSelector, $a);
	}

	return $a;
});

//remove smartcut-price-selector class from the 'before' price on sale items
add_filter('woocommerce_format_sale_price', function ($price) {
	//match content inside <del> tags and remove the smartcut-price-selector class
	return preg_replace_callback('/<del[^>]*>(.*?)<\/del>/s', function ($matches) {
		$cleaned = str_replace("class='smartcut-price-selector'", '', $matches[1]);
		return '<del>' . $cleaned . '</del>';
	}, $price);
}, 20);
