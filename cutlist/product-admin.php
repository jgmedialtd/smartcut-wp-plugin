<?php

namespace SmartCut\Cutlist\Admin;

include_once 'product.php';

function is_product_admin_page()
{

	global $pagenow;

	if ($pagenow === 'post.php' && isset($_GET['post']) && get_post_type(absint($_GET['post'])) === 'product') {
		return true;
	}

	return false;
}

function check_product_admin_page()
{

	if (!is_product_admin_page()) return;

	$product_id = absint($_GET['post']);
	if (!$product_id) {
		return;
	}

	$messages = \SmartCut\Cutlist\Product\check_product_setup($product_id);

	if (isset($messages) && count($messages) > 0) {

		foreach ($messages as $message) {
			\SmartCut\admin_notice('⚠️ SmartCut - ' . $message, 'notice notice-error');
		}

		return;
	} else {

		$settings = \SmartCut\get_settings('cutlist');

		if (!isset($settings['product_category']) || empty($settings['product_category'])) return;

		if (!\SmartCut\check_category($product_id, $settings)) {

			return \SmartCut\admin_notice('ℹ SmartCut - to set this as a cut-to-size product, add the category with the slug "' . $settings['product_category'] . '"', 'notice notice-info is-dismissible');
		}
	}

	\SmartCut\admin_notice('SmartCut - no issues detected 😀', 'notice notice-success is-dismissible');
}

add_action('admin_notices', 'SmartCut\Cutlist\Admin\check_product_admin_page');


/**
 * Add a custom product tab.
 */
function product_tab($tabs)
{

	$product_id = get_the_ID();

	if (!\SmartCut\is_cutlist($product_id)) return $tabs;

	$tabs['smartcut'] = array(
		'label'		=> 'SmartCut',
		'target'	=> 'smartcut-product-options',
		'class'		=> ['show_if_simple', 'show_if_variable'],
	);

	return $tabs;
}
add_filter('woocommerce_product_data_tabs', 'SmartCut\Cutlist\Admin\product_tab');

function create_input($fields, $key, $label, $description = null, $script_callback = null)
{

	if (!$key) return;

	$name = 'smartcut_' . $key;
	$type = isset($fields[$key]) ? $fields[$key] : null;

	if (!$type) return trigger_error('No field type definition found for key ' . $key);

	$value = get_post_meta(get_the_ID(), $name, true);

	$input_type = null;

	switch ($type) {
		case 'text':
		case 'hex':
		case 'float':
			$input_type = 'text';
			break;
		case 'boolean':
			$input_type = 'checkbox';
			break;
		case 'int':
			$input_type = 'number';
			break;
		default:
			$input_type = 'text';
			break;
	}

	echo '<p class="form-field">';

	printf('<label style="margin-right: 20px;" for="%s">%s</label>', $name, $label);

	if ($input_type === 'checkbox') {

		$checked = $value === '1';

		printf(
			'<input type="checkbox" name="%s" id="%s" %s value="1">',
			$name,
			$name,
			$checked ? 'checked' : '',
		);
	}

	if ($input_type === 'number') {

		$value = $value ? $value : 0;

		printf(
			'<input type="number" name="%s" id="%s" value="%s">',
			$name,
			$name,
			$value,
		);
	}

	if ($input_type === 'text') {

		$value = $value ? $value : '';

		printf(
			'<input type="text" name="%s" id="%s" value="%s">',
			$name,
			$name,
			$value,
		);
	}

	echo '</p>';

	if ($description) {
		printf('<div class="info">%s</div>', $description);
	}

	if ($script_callback) {
		call_user_func($script_callback);
	}
}

function create_drop_down($fields, $key, $label, $options, $description = null, $script_callback = null)
{

	$type = isset($fields[$key]) ? $fields[$key] : null;

	if (!$type) return trigger_error('No field type definition found for key ' . $key);

	$name = 'smartcut_' . $key;

	echo '<p class="form-field">';

	printf(
		'<label style="margin-right: 20px;" for="%s">%s</label>',
		$name,
		$label
	);

	printf(
		'<select name="%s" id="%s">',
		$name,
		$name
	);

	foreach ($options as $option_key => $text) {

		$selected = selected(
			get_post_meta(get_the_ID(), $name, true),
			$option_key,
			false
		);
		printf(
			'<option value="%s" %s>%s</option>',
			$option_key,
			$selected,
			$text
		);
	}

	echo '</select></p>';

	if ($description) {
		printf('<div class="info">%s</div>', $description);
	}

	if ($script_callback) {
		call_user_func($script_callback);
	}
}

/**
 * tab contents
 * id must match 'target' set in product_tab
 */
function product_tab_content()
{
	$product_id = get_the_ID();
	$fields = \SmartCut\Cutlist\Settings\get_combined_setting_fields();

	if (!\SmartCut\is_cutlist($product_id)) return;
?>
	<div id='smartcut-product-options' class='panel woocommerce_options_panel hidden'>
		<div class='options_group'>
			<?php

			create_drop_down(
				$fields,
				'stock_type',
				'Stock type',
				[
					'global' => __('Use global setting', 'smartcut'),
					'sheet' => 'Sheet',
					'linear' => 'Linear',
					'roll' => 'Roll',
				]
			);

			create_drop_down(
				$fields,
				'cut_preference',
				'Cut preference',
				[
					'' => 'N/A',
					'global' => __('Use global setting', 'smartcut'),
					'length' => 'Length',
					'width' => 'Width',
					'efficiency' => 'Efficiency',
					'beam' => 'Beam saws',
				],
				null,
				'SmartCut\Cutlist\Admin\cut_preference_script'
			);

			create_input(
				$fields,
				'banding_types',
				'Banding types',
				'☝ Slugs of your banding products. Separate with commas. Leave blank to use global settings.'
			);

			create_input(
				$fields,
				'finish_types',
				'Finish types',
				'☝ Slugs of your fininsh products. Separate with commas. Leave blank to use global settings.'
			);

			create_input(
				$fields,
				'disable_banding',
				'Disable banding'
			);

			create_input(
				$fields,
				'disable_finish',
				'Disable finish'
			);

			create_input(
				$fields,
				'disable_orientation',
				'Disable part orientation'
			);

			create_input(
				$fields,
				'disable_part_name',
				'Disable part name'
			);

			create_input(
				$fields,
				'enable_import',
				'Enable CSV import'
			);

			create_drop_down(
				$fields,
				'pricing_strategy',
				'Pricing strategy',
				[
					'global' => __('Use global setting', 'smartcut'),
					'full_sheet' => 'Full sheet',
					'part_area' => 'Part area',
					'cut_length' => 'Cut length',
					'full_sheet_plus_cut_length' => 'Full sheet plus cut length',
					'full_sheet_plus_num_parts' => 'Full sheet plus number of parts',
				]
			);

			create_input(
				$fields,
				'cut_length_price',
				__('Cut length price'),
				'☝ Only used for the <strong>Full sheet plus cut length</strong> pricing strategy. Leave blank to use global setting. Use the format 1.23.',
				'SmartCut\Cutlist\Admin\cut_length_price_script'
			);

			create_input($fields, 'per_part_price', __('Price per part'), '☝ Only used for the <strong>Full sheet plus number of parts</strong> pricing strategy. Leave blank to use global setting. Use the format 1.23.', 'SmartCut\Cutlist\Admin\per_part_price_script');

			create_drop_down(
				$fields,
				'surcharge_type',
				'Cut to size surcharge type',
				[
					'global' => __('Use global setting', 'smartcut'),
					'none' => 'None',
					'once' => 'Once',
					'per_sheet' => 'Per sheet',
				]
			);

			create_input($fields, 'surcharge', __('Cut to size surcharge'), '☝ Use the format 1.23', 'SmartCut\Cutlist\Admin\surcharge_script');

			//[] add machining fields
			create_input(
				$fields,
				'disable_machining',
				'Disable machining '
			);

			create_input(
				$fields,
				'machining_holes_product',
				'Holes',
				'☝ Slug of your holes product. Leave blank to use global settings.'
			);

			create_input(
				$fields,
				'machining_corners_product',
				'Corners',
				'☝ Slug of your corner product. Leave blank to use global settings.'
			);

			?>
		</div>
	</div>
<?php
}

add_filter('woocommerce_product_data_panels', 'SmartCut\Cutlist\Admin\product_tab_content'); // WC 2.6 and up

/**
 * save the product option fields
 */
function save_option_fields($post_id)
{
	if (!\SmartCut\is_cutlist($post_id)) return;

	$fields = \SmartCut\Cutlist\Settings\get_combined_setting_fields();

	foreach ($fields as $key => $type) {

		$key = 'smartcut_' . $key;
		if (isset($_POST[$key])) {

			switch ($type) {
				case 'string':
				case 'boolean':
					update_post_meta($post_id, $key, \SmartCut\Cutlist\Settings\sanitize_input($_POST[$key]));
					break;
				case 'float':
					update_post_meta($post_id, $key, \SmartCut\Cutlist\Settings\sanitize_float($_POST[$key], 0));
					break;
				case 'int':
					update_post_meta($post_id, $key, \SmartCut\Cutlist\Settings\sanitize_int($_POST[$key], 0));
					break;
				case 'hex':
					update_post_meta($post_id, $key, \SmartCut\Cutlist\Settings\sanitize_hex($_POST[$key]));
					break;
			}
		} else {
			switch ($type) {
				case 'string':
				case 'hex':
					update_post_meta($post_id, $key, '');
					break;
				case 'boolean':
					update_post_meta($post_id, $key, '0');
					break;
				case 'float':
				case 'int':
					update_post_meta($post_id, $key, 0);
					break;
			}
		}
	}
}

add_action('woocommerce_process_product_meta_simple', 'SmartCut\Cutlist\Admin\save_option_fields');
add_action('woocommerce_process_product_meta_variable', 'SmartCut\Cutlist\Admin\save_option_fields');

function cut_preference_script()
{

?>
	<script>
		jQuery(document).ready(function($) {
			//cut preference logic
			var stockTypeField = $('#smartcut_stock_type');
			var cutPreferenceField = $('#smartcut_cut_preference');
			var cutPreferenceOptions = $('#smartcut_cut_preference option');

			stockTypeField.change(function() {
				updateCutPreference(true);
			});

			function disableCutPreferenceOptions() {
				cutPreferenceField.val('');
				cutPreferenceField.prop('disabled', true);
			}

			function enableCutPreferenceOptions(preselect = false) {

				//enable the rest
				cutPreferenceField.prop('disabled', false);

				//disable none as an option
				cutPreferenceOptions.eq(0).prop('disabled', true);

				if (preselect) {
					cutPreferenceOptions.eq(1).prop('selected', true);
				}


			}

			function updateCutPreference(preselect = false) {

				var stockType = stockTypeField.val();

				switch (stockType) {
					case 'sheet':
						enableCutPreferenceOptions(preselect);
						break;
					case 'linear':
					case 'roll':
						disableCutPreferenceOptions();
						break;
					default:
						break;
				}

			};

			updateCutPreference();
		});
	</script>
<?php
}

function surcharge_script()
{

?>
	<script>
		jQuery(document).ready(function($) {
			var surchargeTypeField = $('#smartcut_surcharge_type');
			var surchargeField = $('#smartcut_surcharge');

			function toggleSurchargeField() {
				if (surchargeTypeField.val() === 'none' || surchargeTypeField.val() === 'global') {
					surchargeField.val('');
					surchargeField.prop('disabled', true);
				} else {

					surchargeField.prop('disabled', false);
				}
			}
			toggleSurchargeField();

			surchargeTypeField.change(function() {
				toggleSurchargeField();
			});
		});
	</script>
<?php
}

function cut_length_price_script()
{
?>
	<script>
		jQuery(document).ready(function($) {
			var pricingStrategyField = $('#smartcut_pricing_strategy');
			var cutLengthPriceField = $('#smartcut_cut_length_price');

			function toggleCutLengthPriceField() {
				if (pricingStrategyField.val() === 'full_sheet_plus_cut_length') {
					cutLengthPriceField.prop('disabled', false);
				} else {
					cutLengthPriceField.val('');
					cutLengthPriceField.prop('disabled', true);
				}
			}

			toggleCutLengthPriceField();

			pricingStrategyField.change(function() {
				toggleCutLengthPriceField();
			});
		});
	</script>
<?php
}

function per_part_price_script()
{
?>
	<script>
		jQuery(document).ready(function($) {
			var pricingStrategyField = $('#smartcut_pricing_strategy');
			var pricingField = $('#smartcut_per_part_price');

			function togglePerPartPriceField() {
				if (pricingStrategyField.val() === 'full_sheet_plus_num_parts') {
					pricingField.prop('disabled', false);
				} else {
					pricingField.val('');
					pricingField.prop('disabled', true);
				}
			}

			togglePerPartPriceField();

			pricingStrategyField.change(function() {
				togglePerPartPriceField();
			});
		});
	</script>
<?php
}
