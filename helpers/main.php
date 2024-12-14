<?php

namespace SmartCut\Helpers;

defined('ABSPATH') || exit;

function isWoocommerceActive()
{

	if (class_exists('woocommerce')) {
		return true;
	} else {
		return false;
	}
}

/**
 * detect if a product is a cutlist product
 * @param int $productId
 * @return bool
 */
function isCutlist($productId)
{
	$options = \SmartCut\Settings\getGlobalSettings();
	return checkCategory($productId, $options);
}

function isFormula($productId)
{
	$options = \SmartCut\Settings\getProductSettings($productId);
	if (isset($options['enable_formula']) && $options['enable_formula'] === '1') return true;
	return false;
}

/**
 * check the category of a product matches the set option
 * @param int $productId
 * @param array $options
 * @return bool
 */
function checkCategory($productId, $options)
{

	if (!isset($options['product_category'])) return false;

	$productCategories = \SmartCut\Settings\getProductCategories($options['product_category']);

	$terms = get_the_terms($productId, 'product_cat');

	//check if in the correct category
	if (is_array($terms)) {
		foreach ($terms as $term) {
			if (in_array($term->slug, $productCategories)) return true;
		}
	}

	return false;
}

function adminNotice($message, $class = 'notice notice-warning is-dismissible')
{
	$userId = get_current_user_id();
	if (!get_user_meta($userId, 'smartcut_notice_dismissed')) {
		printf(
			'<div class="%s"><p>%s</p></div>',
			esc_attr($class),
			esc_html($message)
		);
	}
}
