<?php

namespace SmartCut\Admin;

include_once 'settings/field-factory.php';
include_once 'settings.php';

use SmartCut\Settings\Factory\FieldFactory;

function isProductAdminPage()
{

	global $pagenow;

	if ($pagenow === 'post.php' && isset($_GET['post']) && get_post_type(absint($_GET['post'])) === 'product') {
		return true;
	}

	return false;
}

/**
 * Add custom product tabs.
 */
function productTabs($tabs)
{
	$productId = get_the_ID();

	if (!\SmartCut\Helpers\isCutlist($productId)) return $tabs;

	$tabs['smartcut'] = array(
		'label'		=> 'SmartCut',
		'target'	=> 'smartcut-product-options',
		'class'		=> ['show_if_simple', 'show_if_variable'],
	);

	return $tabs;
}

add_filter('woocommerce_product_data_tabs', 'SmartCut\Admin\productTabs');


/**
 * save the product option fields
 */
function saveOptionFields($postId)
{
	if (!\SmartCut\Helpers\isCutlist($postId)) return;

	$prefix = \SmartCut\Settings\getPrefix('cutlist');

	$fields = \SmartCut\Settings\Fields\getSettingFields('product');

	foreach ($fields as $key => $definition) {
		$name = $prefix . $key;
		$value = isset($_POST[$name]) ? $_POST[$name] : null;

		// Use FieldFactory to create field and handle sanitization
		$field = FieldFactory::createField($key, $name, $definition);
		$sanitizedValue = $field->sanitize($value);

		update_post_meta($postId, $name, $sanitizedValue);
	}
}

add_action('woocommerce_process_product_meta_simple', 'SmartCut\Admin\saveOptionFields');
add_action('woocommerce_process_product_meta_variable', 'SmartCut\Admin\saveOptionFields');
