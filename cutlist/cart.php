<?php

namespace SmartCut\Cutlist\Cart;

use WC_Cart;
use WC_Order;
use WC_Order_Item_Product;

/**
 * Custom exception classes for better error handling
 */
class FileValidationException extends \Exception {};
class FileDownloadException extends \Exception {};
class FileUploadException extends \Exception {};

class CartManager
{
	/**
	 * Field grouping constants
	 * Define the different categories of fields in the system
	 */
	const GROUP_COMMON = 'common';        // Common fields shown in both input and output
	const GROUP_INPUT = 'input_only';     // Fields used only during input/processing
	const GROUP_MACHINING = 'machining';  // Machining-specific fields
	const GROUP_FILES = 'files';          // File-related fields

	/**
	 * Field type constants
	 * Define the different types of fields and their display/processing behavior
	 */
	const TYPE_PRICE = 'price';  // Fields that represent monetary values
	const TYPE_LINK = 'link';    // Fields that represent clickable links

	/**
	 * File handling constants
	 * Configure file upload constraints and accepted formats
	 */
	const VALID_FILE_EXTENSIONS = ['pdf', 'csv', 'dxf', 'ptx', 'zip'];
	const MAX_FILE_SIZE = 10 * 1024 * 1024;  // 10MB in bytes

	/**
	 * Retry mechanism constants
	 * Configure retry behavior for file operations
	 */
	const MAX_RETRY_ATTEMPTS = 3;
	const RETRY_DELAY = 1;  // Delay between retries in seconds

	/**
	 * Security constants
	 * Define security-related values for form handling
	 */
	const NONCE_ACTION = 'smartcut_add_to_cart';
	const NONCE_FIELD = 'smartcut_nonce';

	/**
	 * Cart field definitions
	 */
	private static $fields = [
		'job_id' => [
			'label' => 'Job ID',
			'group' => self::GROUP_COMMON,
			'display_order' => 1
		],
		'order_summary_pdf' => [
			'label' => 'Order summary',
			'group' => self::GROUP_COMMON,
			'type' => self::TYPE_LINK,
			'display_order' => 2
		],
		'layout_pdf' => [
			'label' => 'Layout PDF',
			'group' => self::GROUP_FILES,
			'display_order' => 3
		],
		'stock_summary' => [
			'label' => 'Stock summary',
			'group' => self::GROUP_COMMON,
			'display_order' => 4
		],
		'total_parts' => [
			'label' => 'Total parts',
			'group' => self::GROUP_COMMON,
			'display_order' => 5
		],

		// 'part_area' => ['label' => 'Part area', 'group' => self::GROUP_COMMON, 'display_order' => 3],
		'dimensions' => ['label' => 'Dimensions', 'group' => self::GROUP_COMMON, 'display_order' => 6],

		// Special fields
		'include_offcuts' => ['label' => 'Include offcuts', 'display_order' => 7],

		// Pricing fields
		'banding_price' => [
			'label' => 'Banding price',
			'group' => self::GROUP_COMMON,
			'type' => self::TYPE_PRICE,
			'display_order' => 8
		],
		'finish_price' => [
			'label' => 'Finish price',
			'group' => self::GROUP_COMMON,
			'type' => self::TYPE_PRICE,
			'display_order' => 9
		],
		'hardware_price' => [
			'label' => 'Hardware price',
			'group' => self::GROUP_INPUT,
			'type' => self::TYPE_PRICE,
			'display_order' => 10
		],
		'cut_length_price' => [
			'label' => 'Cut length price',
			'group' => self::GROUP_COMMON,
			'type' => self::TYPE_PRICE,
			'display_order' => 11
		],
		'per_part_price' => [
			'label' => 'Price per part',
			'group' => self::GROUP_COMMON,
			'type' => self::TYPE_PRICE,
			'display_order' => 12
		],
		'cut_to_size_surcharge' => [
			'label' => 'Cut to size surcharge',
			'group' => self::GROUP_COMMON,
			'type' => self::TYPE_PRICE,
			'display_order' => 13
		],

		// Machining fields
		'machining' => [
			'label' => 'Machining',
			'group' => self::GROUP_MACHINING,
			'display_order' => 14
		],
		'machining_price' => [
			'label' => 'Machining price',
			'group' => self::GROUP_MACHINING,
			'type' => self::TYPE_PRICE,
			'display_order' => 15
		],

		// Input only fields
		'total_cut_length' => [
			'label' => 'Cut length',
			'group' => self::GROUP_INPUT
		],
		'total_cuts' => [
			'label' => 'Total cuts',
			'group' => self::GROUP_INPUT
		],
		'custom_price' => [
			'label' => 'Custom price',
			'group' => self::GROUP_INPUT
		],

		// Files
		'files_zip' => [
			'label' => 'Files',
			'group' => self::GROUP_FILES,
			'private' => true
		],
	];

	/**
	 * Attach files to cart with improved error handling
	 */
	private static function attachFileToCart(string $jobId, string $url, string $type, array $cartItemData): array
	{
		if (!filter_var($url, FILTER_VALIDATE_URL)) {
			throw new FileValidationException("Invalid URL: $url");
		}

		if (empty($jobId) || !preg_match('/^[a-zA-Z0-9-]+$/', $jobId)) {
			throw new FileValidationException("Invalid job ID");
		}

		$info = pathinfo($url);
		if (empty($info['extension'])) {
			throw new FileValidationException("Unable to obtain file extension");
		}

		$file = self::remoteGetWithRetry($url);

		$responseCode = wp_remote_retrieve_response_code($file);

		if (is_wp_error($file) || $responseCode !== 200) {
			throw new FileDownloadException("Failed to download file from $url, the response code was $responseCode");
		}

		$content = wp_remote_retrieve_body($file);
		if (strlen($content) > self::MAX_FILE_SIZE) {
			throw new FileValidationException(sprintf(
				"File too large: %s MB (max: %s MB)",
				round(strlen($content) / 1048576, 1),
				round(self::MAX_FILE_SIZE / 1048576, 1)
			));
		}

		$filename = sprintf(
			'smartcut-%s-%s-%s.%s',
			sanitize_file_name($jobId),
			$type,
			uniqid(),
			strtolower($info['extension'])
		);

		$uploadsDir = wp_get_upload_dir();
		if (!empty($uploadsDir['error'])) {
			throw new FileUploadException("Upload directory error: " . $uploadsDir['error']);
		}

		$upload = wp_upload_bits($filename, null, $content);
		if (!empty($upload['error'])) {
			throw new FileUploadException("Upload failed: " . $upload['error']);
		}

		$fileKey = self::getFileKey($type, $info['extension']);
		$cartItemData[$fileKey] = $upload['url'];

		return $cartItemData;
	}


	/**
	 * Validate cart with nonce verification
	 */
	public static function validateCart(bool $passed, $productId = null, $quantity = null)
	{
		if (!isset($_POST[self::NONCE_FIELD]) || !wp_verify_nonce($_POST[self::NONCE_FIELD], self::NONCE_ACTION)) {
			wc_add_notice('Security check failed.', 'error');
			return false;
		}

		$jobId = isset($_POST['smartcut_job_id']) ? sanitize_text_field($_POST['smartcut_job_id']) : '';
		if (!$jobId) return $passed;

		$transientKey = 'smartcut_job_' . md5($jobId);
		$exists = get_transient($transientKey);

		if ($exists) {
			wc_add_notice(__('Cut list already in cart.', 'smartcut'), 'error');
			return false;
		}

		foreach (WC()->cart->get_cart() as $item) {
			if (isset($item['smartcut_job_id']) && $item['smartcut_job_id'] === $jobId) {
				set_transient($transientKey, true, 600);
				wc_add_notice(__('Cut list already in cart.', 'smartcut'), 'error');
				return false;
			}
		}

		return $passed;
	}

	/**
	 * Optimized cart item data handling with cached settings
	 */
	public static function addCartItemData(array $cartItemData, int $productId): array
	{
		try {
			$jobId = sanitize_text_field($_POST['smartcut_job_id'] ?? '');
			if (!$jobId) {
				return $cartItemData;
			}

			// Verify nonce
			if (!wp_verify_nonce($_POST[self::NONCE_FIELD] ?? '', self::NONCE_ACTION)) {
				return $cartItemData;
			}

			// Add fields from POST data
			foreach (self::getFieldKeys(true, $productId) as $key) {
				if (isset($_POST[$key]) && !empty($_POST[$key])) {
					$cartItemData[$key] = sanitize_text_field($_POST[$key]);
				}
			}

			// Handle offcuts
			if (isset($_POST['include_offcuts'])) {
				$cartItemData['include_offcuts'] = sanitize_text_field($_POST['include_offcuts']) === '1'
					? __('Yes', 'smartcut')
					: __('No', 'smartcut');
			}

			// Handle file attachments and order summary PDF
			$cartItemData = self::handleFileAttachments($cartItemData, $jobId);

			// The order summary is generated on the front end and then send as a blob via a form field
			if (isset($_POST['smartcut_order_summary_pdf'])) {
				$cartItemData = self::attachBlobToCart($_POST['smartcut_order_summary_pdf'], $cartItemData);
			}

			return $cartItemData;
		} catch (\Exception $e) {
			if ($e instanceof FileValidationException) {
				$errorPrefix = 'File validation issue - ';
			} elseif ($e instanceof FileDownloadException) {
				$errorPrefix = 'File download issue - ';
			} elseif ($e instanceof FileUploadException) {
				$errorPrefix = 'File upload issue - ';
			} else {
				$errorPrefix = '';
			}

			throw new \Exception('Could not add to cart: ' . $errorPrefix . ' ' . $e->getMessage());
		}
	}

	/**
	 * Optimized price calculation with caching
	 */
	public static function setCartPrice(WC_Cart $cart): void
	{
		if (is_admin() && !defined('DOING_AJAX')) {
			return;
		}

		static $priceFields = null;
		if ($priceFields === null) {
			$priceFields = array_keys(array_filter(
				self::$fields,
				function ($field) {
					return ($field['type'] ?? '') === self::TYPE_PRICE;
				}
			));
			$addedCosts = array_map([self::class, 'getFieldKey'], $priceFields);
		}

		foreach ($cart->get_cart() as $cartItem) {
			$product = $cartItem['data'];
			$quantity = $cartItem['quantity'];

			$basePrice = self::hasCustomPrice($cartItem)
				? floatval($cartItem['smartcut_custom_price'])
				: floatval($product->get_price());

			$surcharges = array_reduce(
				$addedCosts,
				function ($total, $key) use ($cartItem, $quantity) {
					return empty($cartItem[$key])
						? $total
						: $total + (floatval($cartItem[$key]) / $quantity);
				},
				0
			);

			$product->set_price($basePrice + $surcharges);
		}
	}

	/**
	 * Add optimized form fields with proper security
	 */
	public static function addHiddenFields($productId = null)
	{
		$fieldKeys = self::getFieldKeys(true, $productId);
		$output = '';
		foreach ($fieldKeys as $value) {
			$output .= sprintf(
				'<input type="hidden" name="%1$s" id="%2$s" value="">',
				esc_attr($value),
				esc_attr(str_replace('_', '-', $value))
			);
		}
		echo $output;
	}

	/**
	 * Helper methods for field and file handling
	 */
	private static function getFieldKey(string $key): string
	{
		return 'smartcut_' . $key;
	}

	private static function getFileKey(string $type, $fileExtension): string
	{
		return implode('_', ['smartcut', $type, $fileExtension]);
	}

	private static function getFileName(string $key): string
	{
		$cleanKey = str_replace('smartcut_', '', $key);
		foreach (self::$fields as $fieldKey => $field) {
			if ($field['group'] === self::GROUP_FILES && $fieldKey === $cleanKey) {
				return $field['label'];
			}
		}
		return ucfirst($cleanKey);
	}

	private static function fileExistsInUrl(string $url): bool
	{
		return (bool) preg_match('/\.(' . implode('|', self::VALID_FILE_EXTENSIONS) . ')$/', $url);
	}

	private static function getLocalFilePath(string $url, array $uploadDir): string
	{
		return str_replace($uploadDir['baseurl'], $uploadDir['basedir'], $url);
	}

	private static function isMachiningEnabled(array $settings): bool
	{
		return isset($settings['enable_machining']) && $settings['enable_machining'] === '1';
	}

	private static function hasCustomPrice(array $cartItem): bool
	{
		return array_key_exists('smartcut_custom_price', $cartItem)
			&& !empty($cartItem['smartcut_custom_price']);
	}

	/**
	 * Get field keys based on context (inputs vs order fields)
	 * @param bool $inputs Whether to get input fields or cart / order fields
	 * @param int|null $productId Product ID for settings
	 * @return array Associative array of field keys
	 */
	public static function getFieldKeys(bool $inputs = false, ?string $productId = null): array
	{
		$settings = \SmartCut\Settings\getProductSettings($productId);
		$fields = [];

		foreach (self::$fields as $key => $field) {
			$group = $field['group'] ?? '';

			if (self::shouldSkipField($inputs, $group, $key, $settings)) {
				continue;
			}

			$fields[$field['label']] = self::getFieldKey($key);
		}

		// Handle file fields for non-input mode
		if (!$inputs) {
			$prefix = ($settings['customer_cutlist'] ?? false) ? '' : '_';
			$files = [
				['layout', 'pdf', $prefix . 'Cut list PDF'],
				['files', 'zip', $prefix . 'Files'],
			];

			foreach ($files as [$type, $ext, $label]) {
				$fields[__($label, 'smartcut')] = self::getFileKey($type, $ext);
			}
		}

		return $fields;
	}

	private static function shouldSkipField(bool $inputs, string $group, string $key, array $settings): bool
	{
		if ($inputs) {
			return ($group === self::GROUP_FILES) ||
				($group === self::GROUP_MACHINING && !self::isMachiningEnabled($settings));
		}

		return $group === self::GROUP_INPUT ||
			$key === 'include_offcuts' ||
			($group === self::GROUP_MACHINING && !self::isMachiningEnabled($settings));
	}

	public static function getItemData(array $itemData, array $cartItemData): array
	{
		$settings = \SmartCut\Settings\getProductSettings();
		$displayFields = [];

		foreach (self::$fields as $key => $field) {
			if (!self::shouldDisplayField($field, $key, $settings)) {
				continue;
			}

			$fullKey = $key === 'include_offcuts' ? $key : self::getFieldKey($key);
			if (!isset($cartItemData[$fullKey])) {
				continue;
			}

			$value = $cartItemData[$fullKey];

			$displayFields[] = [
				'key' => $field['label'],
				'value' => self::formatFieldValue($field, $value),
				'display' => false,
				'display_order' => $field['display_order'] ?? null
			];
		}

		usort($displayFields, function ($a, $b) {
			return $a['display_order'] <=> $b['display_order'];
		});

		return array_merge($itemData, $displayFields);
	}

	private static function shouldDisplayField(array $field, string $key, array $settings): bool
	{
		if ($key === 'layout_pdf') return $settings['customer_cutlist'] ?? false;

		$group = $field['group'] ?? '';

		if ($group === self::GROUP_INPUT) {
			return false;
		}

		if ($key === 'include_offcuts') {
			return false;
		}

		if ($group === self::GROUP_MACHINING && !self::isMachiningEnabled($settings)) {
			return false;
		}

		if ($key === 'layout_pdf' && ($settings['customer_cutlist'] ?? false)) {
			return false;
		}

		if (!isset($field['display_order'])) {
			return false;
		}

		return true;
	}

	private static function formatFieldValue(array $field, string $value)
	{
		$type = $field['type'] ?? '';
		$group = $field['group'] ?? '';

		if ($type === self::TYPE_PRICE) {
			return empty($value) || floatval($value) === 0 ?
				null :
				wc_price(floatval($value));
		}

		if ($type === self::TYPE_LINK || $group === self::GROUP_FILES) {
			return sprintf(
				'<a href="%s" target="_blank">%s</a>',
				esc_url($value),
				__('View file', 'smartcut')
			);
		}

		return \wc_clean($value);
	}

	public static function checkoutCreateOrderLineItem(WC_Order_Item_Product $item, string $cartItemKey, array $values, WC_Order $order): void
	{
		$settings = \SmartCut\Settings\getProductSettings($item->get_product_id());
		$metaData = [];

		foreach (self::$fields as $key => $field) {
			$group = $field['group'] ?? '';
			$fullKey = self::getFieldKey($key);
			$isPrivate = isset($field['private']) && $field['private'] === true;

			$skipField =
				$group === self::GROUP_INPUT ||
				($group === self::GROUP_MACHINING && !self::isMachiningEnabled($settings));

			if ($skipField || !isset($values[$fullKey])) {
				continue;
			}

			$value = $values[$fullKey];
			$isFile = $group === self::GROUP_FILES;
			$isLink = ($field['type'] ?? '') === self::TYPE_LINK;

			$metaValue = $isFile || $isLink
				? sprintf('<a href="%s" target="_blank">View</a>', esc_url($value))
				: stripslashes($value);

			$metaKey = $isFile ? self::getFileName($fullKey) : $field['label'];

			//the _ prefix prevents being shown to user https://stackoverflow.com/questions/62364016/woocommerce_add_custom_meta_as_hidden_order_item_meta_for_internal_use
			if ($isPrivate) $metaKey = '_' . $metaKey;

			$displayOrder = $field['display_order'] ?? 999;

			$metaData[] = [
				'key' => $metaKey,
				'value' => $metaValue,
				'order' => $displayOrder
			];
		}

		if (isset($values['include_offcuts'])) {
			$metaData[] = [
				'key' => __('Include offcuts', 'smartcut'),
				'value' => stripslashes($values['include_offcuts']),
				'order' => self::$fields['include_offcuts']['display_order'] ?? 999
			];
		}

		usort($metaData, function ($a, $b) {
			return $a['order'] <=> $b['order'];
		});

		foreach ($metaData as $meta) {
			$item->add_meta_data($meta['key'], $meta['value'], true);
		}
	}

	/**
	 * Add nonce field to the form
	 */
	public static function addUserFields(): void
	{
		// Add nonce field before other fields
		wp_nonce_field(self::NONCE_ACTION, self::NONCE_FIELD);

		// Original user fields code
		$options = \SmartCut\Settings\getGlobalSettings();
		if (isset($options['allow_offcuts']) && $options['allow_offcuts'] === '1') {
			\woocommerce_form_field('include_offcuts', [
				'type' => 'checkbox',
				'label' => __('Include offcuts', 'smartcut'),
				'required' => false,
			]);
		}
	}

	/**
	 * Handle file attachments for cart items with improved validation and error handling
	 *
	 * @param array $cartItemData Current cart item data
	 * @param string $jobId Job identifier
	 * @return array Updated cart item data
	 * @throws FileValidationException|FileDownloadException|FileUploadException
	 */
	private static function handleFileAttachments(array $cartItemData, string $jobId): array
	{
		// Validate job ID
		if (!preg_match('/^[a-zA-Z0-9-]+$/', $jobId)) {
			throw new FileValidationException("Invalid job ID format");
		}

		//Assemble the query to export-checkout/multiple
		$fileTypes = ['pdf', 'csv'];
		$fileOptions = ['layout', 'parts'];
		$settings = \SmartCut\Settings\getGlobalSettings();

		// dxf
		if ($settings['layout_dxf'] ?? false === "1") {
			$fileTypes[] = 'dxf';
			$fileOptions[] = 'layout';
		}

		//ptx
		if ($settings['layout_ptx'] ?? false === "1") {
			$fileTypes[] = 'ptx';
			$fileOptions[] = 'layout';
		}

		// Add machining files if required
		if (($cartItemData['smartcut_machining'] ?? '') === 'true') {
			array_push($fileTypes, 'pdf', 'dxf');
			array_push($fileOptions, 'machining', 'machining');
		}

		// Build query
		$queryParams = [
			'types' => $fileTypes,
			'options' => $fileOptions,
			'id' => $jobId
		];

		if ($settings['customer_cutlist'] ?? false === "1") {
			// Remove PDF and layout from arrays
			$pdfIndex = array_search('pdf', $fileTypes);

			if ($pdfIndex !== false) {
				unset($fileTypes[$pdfIndex]);
				unset($fileOptions[$pdfIndex]);

				$fileTypes = array_values($fileTypes);
				$fileOptions = array_values($fileOptions);
			}

			$queryParams['types'] = $fileTypes;
			$queryParams['options'] = $fileOptions;
		}

		$response = self::remoteGetWithRetry(SMARTCUT_ENDPOINT . "export-checkout/multiple/?" . http_build_query($queryParams));

		$cartItemData = self::attachFileToCart(
			$jobId,
			wp_remote_retrieve_body($response),
			'files',
			$cartItemData
		);

		if ($settings['customer_cutlist'] ?? false === "1") {
			// Handle separate layout PDF download
			$pdfQueryParams = [
				'type' => 'pdf',
				'option' => 'layout',
				'id' => $jobId
			];

			$pdfResponse = self::remoteGetWithRetry(SMARTCUT_ENDPOINT . "export-checkout/single/?" . http_build_query($pdfQueryParams));

			// Attach the PDF separately
			$cartItemData = self::attachFileToCart(
				$jobId,
				wp_remote_retrieve_body($pdfResponse),
				'layout',
				$cartItemData
			);
		}

		return $cartItemData;
	}

	/**
	 * Download files with retry logic
	 *
	 * @param string $url URL to download from
	 * @return array|WP_Error Response from wp_remote_get
	 * @throws FileDownloadException
	 */
	private static function remoteGetWithRetry(string $url)
	{
		$attempts = 0;
		$lastResponseCode = null;

		while ($attempts <  self::MAX_RETRY_ATTEMPTS) {
			$response = wp_remote_get($url);
			$responseCode = wp_remote_retrieve_response_code($response);

			if ($responseCode === 200) {
				return $response;
			}

			$attempts++;
			$lastResponseCode = $responseCode;

			if ($attempts < self::MAX_RETRY_ATTEMPTS) {
				sleep(self::RETRY_DELAY);
			}
		}

		throw new FileDownloadException(sprintf(
			"Failed to download cut list files after %d attempts. Last response code: %d",
			self::MAX_RETRY_ATTEMPTS,
			$lastResponseCode
		));
	}

	private static function attachBlobToCart(string $base64_data, array $cartItemData): array
	{
		if (empty($base64_data)) {
			return $cartItemData;
		}

		$pdfContent = base64_decode($base64_data);
		$fileName = 'order-summary-' . uniqid();
		$upload = wp_upload_bits("$fileName.pdf", null, $pdfContent);

		if ($upload && empty($upload['error'])) {
			$cartItemData['smartcut_order_summary_pdf'] = $upload['url'];
		} else {
			throw new \Exception(
				'Failed to upload order summary PDF: ' . ($upload['error'] ?? 'Unknown error')
			);
		}

		return $cartItemData;
	}

	public static function isCartItemCutToSize(array $cartItem): bool
	{
		return isset($cartItem['smartcut_job_id']) && !empty($cartItem['smartcut_job_id']);
	}

	public static function disableCartQuantity(string $productQuantity, string $cartItemKey, array $cartItem): string
	{

		if (\is_cart() && self::isCartItemCutToSize($cartItem)) {
			return sprintf('%2$s <input type="hidden" name="cart[%1$s][qty]" value="%2$s" />', $cartItemKey, $cartItem['quantity']);
		}

		return $productQuantity;
	}

	/**
	 * Common file cleanup method that can be used by both cart and order cleanup
	 */
	private static function cleanupFiles(array $filesToClean, array $uploadDir, int $batchSize = 100): array
	{
		$filesDeleted = 0;
		$deletedFiles = [];

		foreach (array_chunk($filesToClean, $batchSize) as $batch) {
			foreach ($batch as $fileUrl) {
				if (!self::fileExistsInUrl($fileUrl)) {
					continue;
				}

				$filePath = self::getLocalFilePath($fileUrl, $uploadDir);
				if (!file_exists($filePath)) {
					continue;
				}

				if (wp_delete_file($filePath)) {
					$filesDeleted++;
					$deletedFiles[] = basename($filePath);
				}
			}
		}

		return [
			'count' => $filesDeleted,
			'files' => $deletedFiles
		];
	}

	public static function cleanupCartItemFiles(array $removedItem): void
	{
		if (empty($removedItem)) return;

		try {
			if (!empty($removedItem['smartcut_job_id'])) {
				delete_transient('smartcut_job_' . md5($removedItem['smartcut_job_id']));
			}

			$uploadsDir = wp_get_upload_dir();
			if (!empty($uploadsDir['error'])) {
				throw new \Exception("Unable to get upload directory: " . $uploadsDir['error']);
			}

			$filesToClean = [];

			// Add order summary PDF
			$orderSummaryKey = self::getFieldKey('order_summary_pdf');
			if (!empty($removedItem[$orderSummaryKey])) {
				$filesToClean[] = $removedItem[$orderSummaryKey];
			}

			// Add file group fields
			foreach (self::$fields as $fieldKey => $field) {
				if (isset($field['group']) && $field['group'] === self::GROUP_FILES) {
					$cartKey = self::getFieldKey($fieldKey);
					if (!empty($removedItem[$cartKey])) {
						$filesToClean[] = $removedItem[$cartKey];
					}
				}
			}

			self::cleanupFiles($filesToClean, $uploadsDir);
		} catch (\Exception $e) {
			throw new \WP_Error(
				'smartcut_cart_file_deletion_failed',
				sprintf('Could not delete cart files: %s', $e->getMessage())
			);
		}
	}

	public static function cleanupOrderFiles(int $orderId): void
	{
		$order = new WC_Order($orderId);

		if (!$order) {
			return;
		}

		try {
			$uploadDir = wp_upload_dir();
			if (!empty($uploadDir['error'])) {
				throw new \Exception("Unable to get upload directory: {$uploadDir['error']}");
			}

			$filesToClean = [];

			// Extract file URLs from order item meta
			foreach ($order->get_items() as $item) {
				foreach ($item->get_meta_data() as $meta) {
					$data = $meta->get_data();
					if (!is_string($data['value'])) {
						continue;
					}

					preg_match('/href="([^"]+)"/', $data['value'], $matches);
					if (!empty($matches[1])) {
						$filesToClean[] = $matches[1];
					}
				}
			}

			self::cleanupFiles($filesToClean, $uploadDir);
		} catch (\Exception $e) {
			throw new \WP_Error(
				'smartcut_order_file_deletion_failed',
				sprintf('Could not delete order files: %s', $e->getMessage())
			);
		}
	}

	public static function clearCart(): void
	{
		if (!isset($_GET['cc'])) return;

		if (function_exists('WC')) {
			$cart = WC()->cart;
			if ($cart) {
				$cart->empty_cart();
			}
		}

		wp_redirect(remove_query_arg('cc'));
		exit;
	}
}

// Main WooCommerce hooks
add_filter('woocommerce_add_to_cart_validation', [CartManager::class, 'validateCart'], 10, 3);
add_filter('woocommerce_add_cart_item_data', [CartManager::class, 'addCartItemData'], 10, 2);
add_action('woocommerce_before_calculate_totals', [CartManager::class, 'setCartPrice'], 10, 1);
add_filter('woocommerce_get_item_data', [CartManager::class, 'getItemData'], 10, 2);
add_filter('woocommerce_cart_item_quantity', [CartManager::class, 'disableCartQuantity'], 10, 3);

add_action('woocommerce_checkout_create_order_line_item', [CartManager::class, 'checkoutCreateOrderLineItem'], 10, 4);
add_action('woocommerce_before_add_to_cart_button', [CartManager::class, 'addUserFields']);
add_action('woocommerce_before_add_to_cart_button', [CartManager::class, 'addHiddenFields']);

// Handle order deletion
add_action('before_delete_post', function (int $postId): void {
	if (get_post_type($postId) === 'shop_order') {
		CartManager::cleanupOrderFiles($postId);
	}
}, 1, 1);

// Handle individual item removal
add_action('woocommerce_cart_item_removed', function (string $cartItemKey, WC_Cart $cart): void {
	$removedItem = $cart->removed_cart_contents[$cartItemKey] ?? null;

	if ($removedItem) {
		CartManager::cleanupCartItemFiles($removedItem);
	}
}, 10, 2);

// Handle full cart emptied
add_action('woocommerce_before_cart_emptied', function (): void {
	$cart = WC()->cart;
	if (!$cart) return;

	foreach ($cart->get_cart() as $cartKey => $cartItem) {
		CartManager::cleanupCartItemFiles($cartItem);
	}
});
