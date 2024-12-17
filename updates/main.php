<?php

namespace SmartCut\Updates;

defined('ABSPATH') || exit;

class UpdateManager
{
	public const UPDATE_TRANSIENT = 'smartcut_update_result';
	public const UPDATE_LOCK_TRANSIENT = 'smartcut_updating_settings';
	private const VERSION_OPTION = 'smartcut_version';

	private $settingsMap = [
		'pricing_strategy' => [
			'map_type' => 'value',
			'values' => [
				'full_sheet' => 'full_stock',
				'full_sheet_plus_num_parts' => 'full_stock_plus_num_parts',
				'full_sheet_plus_cut_length' => 'full_stock_plus_cut_length'
			]
		],
		'disable_banding' => [
			'map_type' => ['setting_key', 'value'],
			'new_key' => 'enable_banding',
			'values' => [
				'0' => '1',
				'1' => '0',
			]
		],
		'disable_finish' => [
			'map_type' => ['setting_key', 'value'],
			'new_key' => 'enable_finish',
			'values' => [
				'0' => '1',
				'1' => '0',
			]
		],
		'disable_machining' => [
			'map_type' => ['setting_key', 'value'],
			'new_key' => 'enable_machining',
			'values' => [
				'0' => '1',
				'1' => '0',
			]
		],
		'disable_part_name' => [
			'map_type' => ['setting_key', 'value'],
			'new_key' => 'enable_part_name',
			'values' => [
				'0' => '1',
				'1' => '0',
			]
		],
		'disable_orientation' => [
			'map_type' => ['setting_key', 'value'],
			'new_key' => 'enable_orientation',
			'values' => [
				'0' => '1',
				'1' => '0',
			]
		]

	];

	public function __construct()
	{
		add_action(SMARTCUT_UPDATE_ACTION, [$this, 'performScheduledUpdates']);
	}

	public function scheduleUpdate(): bool
	{
		if (!as_next_scheduled_action(SMARTCUT_UPDATE_ACTION)) {
			as_schedule_single_action(
				time(),
				SMARTCUT_UPDATE_ACTION,
				[],
				SMARTCUT_UPDATE_GROUP
			);
			return true;
		}
		return false;
	}

	public function performScheduledUpdates(): void
	{
		try {
			$result = $this->updateLegacyOptions();

			update_option(self::VERSION_OPTION, SMARTCUT_CURRENT_VERSION);

			set_transient(self::UPDATE_TRANSIENT, [
				'success' => $result['success'],
				'products_updated' => $result['products_updated'],
				'errors' => $result['errors']
			], 30);
		} catch (\Exception $e) {
			error_log('[SmartCut] Update failed: ' . $e->getMessage());
			throw $e;
		}
	}

	private function updateLegacyOptions(): array
	{
		if (!$this->canStartUpdate()) {
			return $this->getBlockedUpdateResponse();
		}

		$this->lockUpdate();

		try {
			$results = $this->performUpdate();
		} catch (\Exception $e) {
			$results = $this->handleUpdateError($e);
		} finally {
			$this->unlockUpdate();
		}

		return $results;
	}

	private function canStartUpdate(): bool
	{
		return !get_transient(self::UPDATE_LOCK_TRANSIENT);
	}

	private function lockUpdate(): void
	{
		set_transient(self::UPDATE_LOCK_TRANSIENT, true, 5 * MINUTE_IN_SECONDS);
	}

	private function unlockUpdate(): void
	{
		delete_transient(self::UPDATE_LOCK_TRANSIENT);
	}

	private function getBlockedUpdateResponse(): array
	{
		return [
			'success' => false,
			'global_updated' => false,
			'products_updated' => 0,
			'errors' => ['Update already in progress']
		];
	}

	private function performUpdate(): array
	{
		$results = [
			'success' => true,
			'global_updated' => false,
			'products_updated' => 0,
			'errors' => []
		];

		try {
			$this->updateGlobalOptions($results);
			$this->updateProductOptions($results);
		} catch (\Exception $e) {
			$results['errors'][] = "Migration failed: " . $e->getMessage();
			$results['success'] = false;
		}

		return $results;
	}

	private function updateGlobalOptions(array &$results): void
	{
		try {
			$options = get_option(SMARTCUT_OPTIONS_KEY, array());
			$new_options = $this->processOptionsWithMap($options);

			if ($new_options !== $options) {
				$updated = update_option(SMARTCUT_OPTIONS_KEY, $new_options);
				$results['global_updated'] = $updated;
			}
		} catch (\Exception $e) {
			$results['errors'][] = "Global settings update failed: " . $e->getMessage();
			$results['success'] = false;
		}
	}

	private function updateProductOptions(array &$results): void
	{
		try {
			$product_ids = $this->getProductIds();

			if (empty($product_ids)) {
				$results['errors'][] = "No products found to update";
				return;
			}

			foreach ($product_ids as $product_id) {
				$this->updateSingleProduct($product_id, $results);
			}
		} catch (\Exception $e) {
			$results['errors'][] = "Product update process failed: " . $e->getMessage();
			$results['success'] = false;
		}
	}

	private function getProductIds(): array
	{
		return get_posts([
			'post_type' => 'product',
			'posts_per_page' => -1,
			'post_status' => 'any',
			'fields' => 'ids',
		]);
	}

	private function updateSingleProduct(int $product_id, array &$results): void
	{
		try {
			foreach ($this->settingsMap as $old_key => $mapping) {
				$this->processProductSetting($product_id, $old_key, $mapping, $results);
			}
		} catch (\Exception $e) {
			$results['errors'][] = "Failed to update product ID {$product_id}: " . $e->getMessage();
		}
	}

	private function processProductSetting(int $product_id, string $old_key, array $mapping, array &$results): void
	{
		$map_types = (array)$mapping['map_type'];

		$old_meta_key = SMARTCUT_PREFIX . $old_key;
		$new_meta_key = SMARTCUT_PREFIX .
			(in_array('setting_key', $map_types) ? $mapping['new_key'] : $old_key);

		$product_setting = get_post_meta($product_id, $old_meta_key, true);

		// Check if the meta exists, even if it's an empty string
		if (metadata_exists('post', $product_id, $old_meta_key)) {

			$new_value = $this->mapValue($product_setting, $mapping);

			if (in_array('setting_key', $map_types)) {
				delete_post_meta($product_id, $old_meta_key);
			}

			$updated = update_post_meta(
				$product_id,
				$new_meta_key,
				$new_value
			);

			if ($updated) {
				$results['products_updated']++;
			}
		}
	}
	private function processOptionsWithMap(array $options): array
	{
		$new_options = $options;

		foreach ($this->settingsMap as $old_key => $mapping) {
			if (isset($options[$old_key])) {
				$map_types = (array)$mapping['map_type'];

				$new_key = in_array('setting_key', $map_types) ? $mapping['new_key'] : $old_key;
				$new_value = $this->mapValue($options[$old_key], $mapping);

				if (in_array('setting_key', $map_types)) {
					unset($new_options[$old_key]);
				}

				$new_options[$new_key] = $new_value;
			}
		}

		return $new_options;
	}

	private function mapValue($value, array $mapping): string
	{
		$map_types = (array)$mapping['map_type'];
		return (in_array('value', $map_types) && isset($mapping['values'][$value]))
			? $mapping['values'][$value]
			: $value;
	}

	private function handleUpdateError(\Exception $e): array
	{
		return [
			'success' => false,
			'global_updated' => false,
			'products_updated' => 0,
			'errors' => ['Update failed: ' . $e->getMessage()]
		];
	}

	public static function cleanup(): void
	{
		delete_transient(self::UPDATE_TRANSIENT);
		delete_transient(self::UPDATE_LOCK_TRANSIENT);
		as_unschedule_all_actions(SMARTCUT_UPDATE_ACTION);
	}
}

class UpdateNoticeManager
{
	public const UPDATE_STATUS_OPTION = 'smartcut_update_status';

	public function __construct()
	{
		add_action('admin_notices', [$this, 'displayUpdateNotice']);
		add_action('admin_init', [$this, 'checkUpdateStatus']);
	}

	public function checkUpdateStatus(): void
	{
		// Check transient first for immediate post-update status
		$update_result = get_transient(UpdateManager::UPDATE_TRANSIENT);

		if ($update_result) {
			// Store the result persistently
			update_option(self::UPDATE_STATUS_OPTION, [
				'status' => $update_result['success'] ? 'completed' : 'failed',
				'products_updated' => $update_result['products_updated'],
				'errors' => $update_result['errors'],
				'timestamp' => time()
			]);

			// Clear the transient as we've stored it persistently
			delete_transient(UpdateManager::UPDATE_TRANSIENT);
		}

		// Check if update is in progress
		if (get_transient(UpdateManager::UPDATE_LOCK_TRANSIENT)) {
			update_option(self::UPDATE_STATUS_OPTION, [
				'status' => 'in_progress',
				'timestamp' => time()
			]);
		}
	}

	public function displayUpdateNotice(): void
	{
		$status = get_option(self::UPDATE_STATUS_OPTION);

		if (!$status) {
			return;
		}

		switch ($status['status']) {
			case 'in_progress':
				$this->renderInProgressNotice($status);
				break;
			case 'completed':
				$this->renderCompletedNotice($status);
				break;
			case 'failed':
				$this->renderFailedNotice($status);
				break;
		}

		// Clear completed/failed status after displaying
		if (in_array($status['status'], ['completed', 'failed'])) {
			// Only clear if the notice is at least 30 seconds old to ensure visibility
			if (time() - $status['timestamp'] > 30) {
				delete_option(self::UPDATE_STATUS_OPTION);
			}
		}
	}

	private function renderInProgressNotice(array $status): void
	{
?>
		<div class="notice notice-warning">
			<p>
				<?php esc_html_e('SmartCut update in progress...', 'smartcut'); ?>
				<br>
				<?php esc_html_e('Please wait while SmartCut updates your settings. This may take a few minutes.', 'smartcut'); ?>
			</p>
		</div>
	<?php
	}

	private function renderCompletedNotice(array $status): void
	{
	?>
		<div class="notice notice-success is-dismissible">
			<p>
				<?php esc_html_e('SmartCut update completed.', 'smartcut'); ?>
				<?php esc_html_e('You may now save new settings.', 'smartcut'); ?>
				<br>
				<?php if ($status['products_updated'] > 0):
					printf(
						esc_html__('Successfully updated %d products.', 'smartcut'),
						intval($status['products_updated'])
					);
				endif; ?>
			</p>
		</div>
	<?php

		delete_transient(UpdateManager::UPDATE_TRANSIENT);
	}

	private function renderFailedNotice(array $status): void
	{
	?>
		<div class="notice notice-error is-dismissible">
			<p>
				<?php esc_html_e('SmartCut update failed.', 'smartcut'); ?>
				<br>
				<?php if (!empty($status['errors'])): ?>
					<?php foreach ($status['errors'] as $error): ?>
						<code><?php echo esc_html($error); ?></code><br>
					<?php endforeach; ?>
				<?php endif; ?>
				<?php esc_html_e('Please try again or contact support if the problem persists.', 'smartcut'); ?>
			</p>
		</div>
<?php

		delete_transient(UpdateManager::UPDATE_TRANSIENT);
	}
}


new UpdateNoticeManager();
