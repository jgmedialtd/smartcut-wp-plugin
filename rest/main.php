<?php
add_action('rest_api_init', function () {
	register_rest_route('smartcut/v1', '/file-upload', array(
		'methods' => 'POST',
		'callback' => 'handle_smartcut_uploads',
		'permission_callback' => 'check_upload_permissions'
	));
});

/**
 * Check if user has permission to upload files
 */
function check_upload_permissions(WP_REST_Request $request)
{
	// Verify the WP REST API nonce
	$nonce = $request->get_header('X-WP-Nonce');
	$nonce_verified = wp_verify_nonce($nonce, 'wp_rest');

	if (!$nonce_verified) {
		return new WP_Error(
			'rest_cookie_invalid_nonce',
			__('Cookie check failed'),
			array('status' => 403)
		);
	}

	// Check if user has upload permissions
	return current_user_can('upload_files');
}

/**
 * Handle file uploads with enhanced security and error handling
 */
function handle_smartcut_uploads($request)
{
	if (!isset($_FILES['files'])) {
		return new WP_Error('no_files', 'No files were sent', array('status' => 400));
	}

	// Define allowed file types with their MIME types and extensions
	$allowed_types = array(
		'image' => array(
			'mime' => array('image/jpeg', 'image/jpg', 'image/png'),
			'ext' => array('jpg', 'jpeg', 'png')
		),
		'pdf' => array(
			'mime' => array('application/pdf'),
			'ext' => array('pdf')
		)
	);

	// Maximum file size in bytes (e.g., 5MB)
	$max_file_size = 5 * 1024 * 1024;

	$uploaded_urls = array();
	$files = $_FILES['files'];

	// Reformat files array if multiple files
	if (!is_array($files['name'])) {
		$files = array(
			'name' => array($files['name']),
			'type' => array($files['type']),
			'tmp_name' => array($files['tmp_name']),
			'error' => array($files['error']),
			'size' => array($files['size'])
		);
	}

	// Process each file
	for ($i = 0; $i < count($files['name']); $i++) {
		$file = array(
			'name' => sanitize_file_name($files['name'][$i]),
			'type' => $files['type'][$i],
			'tmp_name' => $files['tmp_name'][$i],
			'error' => $files['error'][$i],
			'size' => $files['size'][$i]
		);

		// Initial error checking
		if ($file['error'] !== UPLOAD_ERR_OK) {
			$uploaded_urls[] = array(
				'success' => false,
				'error' => 'Upload error: ' . get_upload_error_message($file['error'])
			);
			continue;
		}

		// Size check
		if ($file['size'] > $max_file_size) {
			$uploaded_urls[] = array(
				'success' => false,
				'error' => 'File size exceeds limit'
			);
			continue;
		}

		// Verify file type
		$file_ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
		$allowed_mimes = array_merge(...array_column($allowed_types, 'mime'));
		$allowed_extensions = array_merge(...array_column($allowed_types, 'ext'));

		if (!in_array($file['type'], $allowed_mimes) || !in_array($file_ext, $allowed_extensions)) {
			$uploaded_urls[] = array(
				'success' => false,
				'error' => 'Invalid file type'
			);
			continue;
		}

		// Double-check MIME type
		$finfo = finfo_open(FILEINFO_MIME_TYPE);
		$mime_type = finfo_file($finfo, $file['tmp_name']);
		finfo_close($finfo);

		if (!in_array($mime_type, $allowed_mimes)) {
			$uploaded_urls[] = array(
				'success' => false,
				'error' => 'File type mismatch'
			);
			continue;
		}

		// Handle the upload
		require_once(ABSPATH . 'wp-admin/includes/file.php');
		require_once(ABSPATH . 'wp-admin/includes/image.php');

		$upload = wp_handle_upload($file, array(
			'test_form' => false,
			'unique_filename_callback' => 'wp_unique_filename'
		));

		if (isset($upload['error'])) {
			$uploaded_urls[] = array(
				'success' => false,
				'error' => $upload['error']
			);
			continue;
		}

		// Add file to media library
		$attachment = array(
			'post_mime_type' => $file['type'],
			'post_title' => preg_replace('/\.[^.]+$/', '', $file['name']),
			'post_content' => '',
			'post_status' => 'inherit'
		);

		$attach_id = wp_insert_attachment($attachment, $upload['file']);

		if (is_wp_error($attach_id)) {
			$uploaded_urls[] = array(
				'success' => false,
				'error' => 'Failed to add to media library'
			);
			continue;
		}

		// Generate attachment metadata
		/* if (strpos($file['type'], 'image/') === 0) {
			wp_update_attachment_metadata($attach_id, wp_generate_attachment_metadata($attach_id, $upload['file']));
		} */

		$uploaded_urls[] = array(
			'success' => true,
			'sourceUrl' => $upload['url'],
			'fileType' => $file['type'],
			'attachmentId' => $attach_id
		);
	}

	return new WP_REST_Response($uploaded_urls, 200);
}

/**
 * Process image uploads with resizing
 */
function process_image_upload($file_path)
{
	$max_size = 2000;
	$image_size = getimagesize($file_path);

	if ($image_size === false) {
		return new WP_Error('invalid_image', 'Invalid image file');
	}

	if ($image_size[0] > $max_size || $image_size[1] > $max_size) {
		$editor = wp_get_image_editor($file_path);

		if (is_wp_error($editor)) {
			return $editor;
		}

		$result = $editor->resize($max_size, $max_size, false);

		if (is_wp_error($result)) {
			return $result;
		}

		$result = $editor->save($file_path);

		if (is_wp_error($result)) {
			return $result;
		}
	}

	return true;
}

/**
 * Get human-readable upload error messages
 */
function get_upload_error_message($error_code)
{
	switch ($error_code) {
		case UPLOAD_ERR_INI_SIZE:
			return 'The uploaded file exceeds the upload_max_filesize directive in php.ini';
		case UPLOAD_ERR_FORM_SIZE:
			return 'The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form';
		case UPLOAD_ERR_PARTIAL:
			return 'The uploaded file was only partially uploaded';
		case UPLOAD_ERR_NO_FILE:
			return 'No file was uploaded';
		case UPLOAD_ERR_NO_TMP_DIR:
			return 'Missing a temporary folder';
		case UPLOAD_ERR_CANT_WRITE:
			return 'Failed to write file to disk';
		case UPLOAD_ERR_EXTENSION:
			return 'File upload stopped by extension';
		default:
			return 'Unknown upload error';
	}
}
