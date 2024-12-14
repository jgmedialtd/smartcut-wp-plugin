<?php

namespace SmartCut\Formula\Admin;

defined('ABSPATH') || exit;

function renderJsonUploadButton()
{
	if (!wp_script_is('media-upload')) {
		wp_enqueue_media();
	}

	$attachmentId = get_post_meta(get_the_ID(), 'smartcut_formula_json', true);
	$filename = $attachmentId ? get_the_title($attachmentId) : '';

	wp_nonce_field('smartcut_json_upload', 'smartcut_json_nonce');
?>
	<div class="options_group">
		<div class="json-upload-wrapper" style="padding: 10px;">
			<button type="button" class="button json-upload-button">
				<?php esc_html_e('Add formula JSON', 'smartcut'); ?>
			</button>
			<?php if ($filename) : ?>
				<div id="smartcut-formula-json-file-name"><?php esc_html_e('File name', 'smartcut'); ?>: <strong><?php echo esc_html($filename); ?>.json</strong></div>
			<?php else : ?>
				<div id="smartcut-formula-json-file-name">No JSON uploaded.</div>
			<?php endif; ?>

			<input type="hidden"
				id="formula_json"
				name="smartcut_formula_json"
				value="<?php echo esc_attr($attachmentId); ?>">
		</div>
		<?php includeMediaUploaderJs(); ?>
	</div>
<?php
}

function includeMediaUploaderJs()
{
?>
	<script>
		jQuery(document).ready(function($) {
			let mediaUploader;

			$('.json-upload-button').on('click', function(e) {
				e.preventDefault();

				if (mediaUploader) {
					mediaUploader.open();
					return;
				}

				mediaUploader = wp.media({
					title: '<?php esc_html_e('Select JSON File', 'smartcut'); ?>',
					button: {
						text: '<?php esc_html_e('Attach JSON', 'smartcut'); ?>'
					},
					multiple: false,
					library: {
						type: 'application/json'
					}
				});

				mediaUploader.on('select', function() {
					const attachment = mediaUploader.state().get('selection').first().toJSON();
					$('#smartcut-formula-json-file-name').html(
						'<?php esc_html_e('Selected file:', 'smartcut'); ?> ' +
						attachment.filename
					);
					$('#formula_json').val(attachment.id);
				});

				mediaUploader.open();
			});
		});
	</script>
<?php
}

function saveJsonAttachment($productId, $attachmentId = null)
{
	if (!current_user_can('edit_post', $productId)) {
		return;
	}

	if (
		!isset($_POST['smartcut_json_nonce']) ||
		!wp_verify_nonce(sanitize_text_field($_POST['smartcut_json_nonce']), 'smartcut_json_upload')
	) {
		return;
	}

	$attachmentId = isset($_POST['smartcut_formula_json']) ?
		absint($_POST['smartcut_formula_json']) :
		$attachmentId;

	if ($attachmentId && validateJsonFile($attachmentId)) {
		update_post_meta($productId, 'smartcut_formula_json', $attachmentId);
	} else {
		delete_post_meta($productId, 'smartcut_formula_json');
	}
}

function validateJsonFile($attachmentId)
{
	if (!$attachmentId) {
		return false;
	}

	$filePath = get_attached_file($attachmentId);
	if (!$filePath || !file_exists($filePath)) {
		return false;
	}

	$content = file_get_contents($filePath);
	if ($content === false) {
		return false;
	}

	$json = json_decode($content, true);
	if (json_last_error() !== JSON_ERROR_NONE) {
		error_log('JSON validation failed: ' . json_last_error_msg());
		return false;
	}

	// Optional: Add schema validation here
	return true;
}

function getJsonSpec($productId)
{
	if (!$productId) {
		return null;
	}

	$attachmentId = get_post_meta($productId, 'smartcut_formula_json', true);
	if (!$attachmentId) {
		return null;
	}

	try {
		$filePath = get_attached_file($attachmentId);
		if (!$filePath || !file_exists($filePath)) {
			error_log("JSON file not found for attachment ID: $attachmentId");
			return null;
		}

		$content = file_get_contents($filePath);
		if ($content === false) {
			error_log("Failed to read JSON file: $filePath");
			return null;
		}

		$json = json_decode($content, true);
		if (json_last_error() !== JSON_ERROR_NONE) {
			error_log("JSON decode error: " . json_last_error_msg());
			return null;
		}

		return $json;
	} catch (\Exception $e) {
		error_log("JSON data retrieval failed: " . $e->getMessage());
		return null;
	}
}

add_action('woocommerce_process_product_meta', 'SmartCut\Formula\Admin\saveJsonAttachment');
