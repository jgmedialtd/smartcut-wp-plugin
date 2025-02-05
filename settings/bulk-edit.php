<?php

namespace SmartCut\Settings\BulkEdit;

use SmartCut\Settings\Factory\FieldFactory;

defined('ABSPATH') || exit;

class SmartCut_Bulk_Meta_Editor
{
	private $product_fields;
	private $field_instances;

	public function __construct()
	{
		$this->product_fields = \SmartCut\Settings\Fields\getSettingFields('product');
		$this->initializeFields();

		// Add bulk edit actions
		add_action('admin_footer-edit.php', array($this, 'addBulkActions'));
		add_action('bulk_edit_custom_box', array($this, 'addBulkEditFields'), 10, 2);

		// Hook into WordPress bulk edit action
		add_action('bulk_edit_posts', array($this, 'bulkEditSave'));
	}

	private function initializeFields()
	{
		$this->field_instances = [];

		foreach ($this->product_fields as $field_id => $field_config) {

			//skip certain fields
			if ($field_id === 'formula_json') {
				continue;
			}

			$field_name = SMARTCUT_PREFIX . $field_id;
			try {
				$this->field_instances[$field_id] = FieldFactory::createField(
					$field_id,
					$field_name,
					$field_config,
					'product'
				);
			} catch (\Exception $e) {
				error_log("SmartCut: Failed to create field {$field_id}: " . $e->getMessage());
			}
		}
	}

	public function addBulkActions()
	{
		global $post_type;
		if ($post_type === 'product') {
?>
			<script type="text/javascript">
				jQuery(document).ready(function($) {
					// Save original bulk edit function
					var originalBulkEdit = inlineEditPost.bulkEdit;

					// Override bulk edit function
					inlineEditPost.bulkEdit = function(id) {
						// Call original bulk edit function
						originalBulkEdit.apply(this, arguments);

						// Get the bulk edit row
						var bulkRow = $('#bulk-edit');

						// Get the post IDs being edited
						var postIds = [];
						var inputs = document.getElementsByName('post[]');
						for (var i = 0; i < inputs.length; i++) {
							if (inputs[i].checked) {
								postIds.push(inputs[i].value);
							}
						}

						// Add post IDs to a hidden field
						if (!bulkRow.find('#post_ids').length) {
							bulkRow.find('.inline-edit-save').append(
								'<input type="hidden" id="post_ids" name="post_ids" value="">'
							);
						}
						bulkRow.find('#post_ids').val(postIds.join(','));
					}
				});
			</script>
		<?php
		}
	}

	public function addBulkEditFields($column_name, $post_type)
	{
		if ($post_type !== 'product' || $column_name !== 'name') {
			return;
		}

		wp_nonce_field('smartcut_bulk_edit_nonce', 'smartcut_bulk_edit_nonce');
		?>
		<div id="smartcut-bulk-edit" class="inline-edit-group">
			<h4 class="title"><?php _e('SmartCut Settings', 'smartcut'); ?></h4>

			<div class="inline-edit-col">
				<?php foreach ($this->field_instances as $field_id => $field): ?>
					<div class="form-field">
						<label>
							<span class="title"><?php echo esc_html($field->getLabel()); ?></span>
							<?php
							$field->setValue(null);
							$original_name = $field->getName();
							$field->name = $original_name;
							$field->render();
							$field->name = $original_name;
							?>
						</label>
						<?php if (!empty($this->product_fields[$field_id]['description'])): ?>
							<span class="description tips" data-tip="<?php echo esc_attr($this->product_fields[$field_id]['description']); ?>">
								<?php echo esc_html($this->product_fields[$field_id]['description']); ?>
							</span>
						<?php endif; ?>
					</div>
				<?php endforeach; ?>
			</div>
		</div>

		<style>
			#smartcut-bulk-edit {
				clear: both;
				padding: 5px;
				border: 3px solid #073b4c;
				border-radius: 5px;
				box-sizing: border-box;
				margin-bottom: 1em;
				margin-top: 1em;
			}

			#smartcut-bulk-edit .inline-edit-group {
				padding: 0.5em 0;
			}

			#smartcut-bulk-edit .group-title {
				margin: 1em 0 0.5em;
				padding: 0.5em 0;
				border-bottom: 1px solid #eee;
			}

			#smartcut-bulk-edit .form-field {
				margin: 0.5em 0;
				position: relative;
			}

			#smartcut-bulk-edit .form-field label {
				margin: 0;
				padding: 0;
			}

			#smartcut-bulk-edit .form-field input,
			#smartcut-bulk-edit .form-field select {
				display: block;
			}

			#smartcut-bulk-edit .form-field .title {
				width: 150px;
				padding: 0;
				margin: 0 0 0 -162px;
				position: absolute;
			}

			#smartcut-bulk-edit .description {
				display: block;
				clear: both;
				margin: 0.2em 0 0;
				color: #666;
				font-style: italic;
				font-size: 12px;
			}

			#smartcut-bulk-edit select,
			#smartcut-bulk-edit input[type="text"],
			#smartcut-bulk-edit input[type="number"] {
				width: 100%;
				max-width: 300px;
			}
		</style>
<?php
	}

	public function bulkEditSave($post_ids)
	{
		// Verify nonce
		if (
			!isset($_REQUEST['smartcut_bulk_edit_nonce']) ||
			!wp_verify_nonce($_REQUEST['smartcut_bulk_edit_nonce'], 'smartcut_bulk_edit_nonce')
		) {
			return;
		}

		// Get post IDs if not provided
		if (empty($post_ids)) {
			$post_ids = (!empty($_REQUEST['post_ids'])) ? explode(',', $_REQUEST['post_ids']) : array();
		}

		// Make sure we have posts to update
		if (empty($post_ids) || !is_array($post_ids)) {
			return;
		}

		// Loop through each post
		foreach ($post_ids as $post_id) {
			// Verify this is a product
			if (get_post_type($post_id) !== 'product') {
				continue;
			}

			// Check permissions
			if (!current_user_can('edit_post', $post_id)) {
				continue;
			}

			// Update each field if it was changed
			foreach ($this->field_instances as $field_id => $field) {
				$field_name = $field->getName();

				if (isset($_REQUEST[$field_name]) && $_REQUEST[$field_name] !== '') {
					$value = $_REQUEST[$field_name];
					$sanitized_value = $field->sanitize($value);
					update_post_meta($post_id, $field_name, $sanitized_value);
				}
			}
		}
	}
}

// Initialize the bulk editor
function InitBulkMetaEditor()
{
	new SmartCut_Bulk_Meta_Editor();
}
add_action('admin_init', 'SmartCut\Settings\BulkEdit\InitBulkMetaEditor');
