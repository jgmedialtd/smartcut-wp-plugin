<?php

namespace SmartCut\Admin;

defined('ABSPATH') || exit;

include_once dirname(__DIR__) . '/product/main.php';
include_once dirname(__DIR__) . '/settings/main.php';
include_once dirname(__DIR__) . '/settings/field-factory.php';

define('SMARTCUT_PREFIX', 'smartcut_');

use SmartCut\Settings\Factory\FieldFactory;
use SmartCut\Settings\Fields\FieldGroupBuilder;
use SmartCut\Settings\Fields\ScriptHandler;

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

	$fields = \SmartCut\Settings\Fields\getSettingFields('product');

	foreach ($fields as $key => $definition) {
		$name = SMARTCUT_PREFIX . $key;
		$value = isset($_POST[$name]) ? $_POST[$name] : null;

		// Use FieldFactory to create field and handle sanitization
		$field = FieldFactory::createField($key, $name, $definition, 'product');
		$sanitizedValue = $field->sanitize($value);

		update_post_meta($postId, $name, $sanitizedValue);
	}
}

add_action('woocommerce_process_product_meta_simple', 'SmartCut\Admin\saveOptionFields');
add_action('woocommerce_process_product_meta_variable', 'SmartCut\Admin\saveOptionFields');

function checkProductAdminPage()
{

	if (!isProductAdminPage()) {
		return;
	}

	$productId = absint($_GET['post']);
	if (!$productId) {
		return;
	}

	$productInstance = new \SmartCut\Product\Product($productId);
	$messages = $productInstance->checkProductSetup();

	if (isset($messages) && count($messages) > 0) {

		foreach ($messages as $message) {
			\SmartCut\Helpers\adminNotice('⚠️ SmartCut - ' . $message, 'notice notice-error');
		}

		return;
	} else {

		$settings = \SmartCut\Settings\getGlobalSettings();

		if (!isset($settings['product_category']) || empty($settings['product_category'])) {
			return;
		}

		if (!\SmartCut\Helpers\checkCategory($productId, $settings)) {

			return \SmartCut\Helpers\adminNotice(
				'SmartCut - to set this as a cut-to-size product, add the category with the slug "' . $settings['product_category'] . '"',
				'notice notice-info is-dismissible'
			);
		}
	}

	\SmartCut\Helpers\adminNotice('SmartCut - no issues detected 😀', 'notice notice-success is-dismissible');
}

add_action('admin_notices', 'SmartCut\Admin\checkProductAdminPage');

class ProductTabContent
{
	use FieldGroupBuilder;
	use ScriptHandler;

	private $productId;
	private $groups;

	public function __construct($productId)
	{
		$this->productId = $productId;
		$this->groups = $this->buildGroups();
	}

	private function buildGroups()
	{
		$groups = $this->initializeGroupStructure();

		foreach (SMARTCUT_FIELDS as $fieldId => $fieldConfig) {
			if (!isset($fieldConfig['show']) || !in_array('product', $fieldConfig['show'])) {
				continue;
			}

			if (!isset($fieldConfig['group']) || !is_array($fieldConfig['group'])) {
				continue;
			}

			$group = $fieldConfig['group'][0];
			$section = $fieldConfig['group'][1];

			if (!isset($groups[$group]['sections'][$section])) {
				continue;
			}

			$category = $this->categorizeField($fieldConfig);
			$groups[$group]['sections'][$section]['fields'][$category][] = $fieldId;
		}

		$this->cleanEmptyGroups($groups);
		return $groups;
	}

	private function renderField($fieldId)
	{
		if ($fieldId === 'formula_json') {
			\SmartCut\Formula\Admin\renderJsonUploadButton();
			return;
		}

		$field = FieldFactory::createField(
			$fieldId,
			SMARTCUT_PREFIX . $fieldId,
			SMARTCUT_FIELDS[$fieldId],
			'product'
		);

		$field->setValue(get_post_meta($this->productId, SMARTCUT_PREFIX . $fieldId, true));
		$field->render();

		$this->maybeRenderScript($fieldId, SMARTCUT_PREFIX);
	}

	public function render()
	{
		if (!\SmartCut\Helpers\isCutlist($this->productId)) {
			return;
		} ?>
		<div id='smartcut-product-options' class='panel woocommerce_options_panel hidden'>
	<?php
		foreach ($this->groups as $groupId => $group) {
			echo '<div class="options_group">';
			echo '<h3 style="margin-left: 12px;">' . esc_html($group['title']) . '</h3>';

			foreach ($group['sections'] as $sectionId => $section) {
				if (count($this->groups) > 1) {
					echo '<h4 style="margin-left: 12px;">' . esc_html($section['title']) . '</h4>';
				}

				// Render fields in specific order by category
				$categories = ['boolean', 'select', 'text', 'number', 'json_upload'];
				foreach ($categories as $category) {
					foreach ($section['fields'][$category] as $fieldId) {
						$this->renderField($fieldId);
					}
				}
			}

			echo '</div>';
		}
		echo '</div>';
	}
}

function productTabContent()
{
	$content = new ProductTabContent(get_the_ID());

	$content->render();
}

add_filter('woocommerce_product_data_panels', 'SmartCut\Admin\productTabContent'); // WC 2.6 and up
