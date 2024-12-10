<?php

namespace SmartCut\Cutlist\Admin;

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly
}

include_once 'product.php';
include_once dirname(__DIR__) . '/settings/field-factory.php';
include_once dirname(__DIR__) . '/settings.php';

use SmartCut\Settings\Factory\FieldFactory;
use SmartCut\Settings\Fields\FieldGroupBuilder;
use SmartCut\Settings\Fields\ScriptHandler;

function checkProductAdminPage()
{

	if (!\SmartCut\Admin\isProductAdminPage()) {
		return;
	}

	$productId = absint($_GET['post']);
	if (!$productId) {
		return;
	}

	$messages = \SmartCut\Cutlist\Product\checkProductSetup($productId);

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
				'ℹ SmartCut - to set this as a cut-to-size product, add the category with the slug "' . $settings['product_category'] . '"',
				'notice notice-info is-dismissible'
			);
		}
	}

	\SmartCut\Helpers\adminNotice('SmartCut - no issues detected 😀', 'notice notice-success is-dismissible');
}

add_action('admin_notices', 'SmartCut\Cutlist\Admin\checkProductAdminPage');


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

		foreach (FIELDS as $fieldId => $fieldConfig) {
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
			'smartcut_' . $fieldId,
			FIELDS[$fieldId],
			'product'
		);

		$field->setValue(get_post_meta($this->productId, 'smartcut_' . $fieldId, true));
		$field->render();

		$this->maybeRenderScript($fieldId, 'smartcut_');
	}

	private function maybeRenderScript($fieldId)
	{
		foreach (SCRIPTS as $script) {
			if (in_array($fieldId, $script['dependencies'])) {
				if (function_exists($script['callback'])) {
					call_user_func($script['callback']);
				}
			}
		}
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
					$categories = ['select', 'text', 'number', 'boolean', 'json_upload'];
					foreach ($categories as $category) {
						foreach ($section['fields'][$category] as $fieldId) {
							$this->renderField($fieldId);
						}
					}
				}

				echo '</div>';
			}
			?>
		</div><?php
			}
		}

		function productTabContent()
		{
			$content = new ProductTabContent(get_the_ID());

			$content->render();
		}

		add_filter('woocommerce_product_data_panels', 'SmartCut\Cutlist\Admin\productTabContent'); // WC 2.6 and up