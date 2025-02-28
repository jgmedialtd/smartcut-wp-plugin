<?php
/*
 * Plugin Name: SmartCut
 * Plugin URI: https://smartcut.dev
 * Description: Calculate cut lists & pricing for cut-to-size businesses.
 * Author: SmartCut
 * Requires at least: 6.0
 * Requires PHP: 7.4
 * WC requires at least: 8.0
 * Text Domain: smartcut
 * Version: 4.2.26
 * Author URI: https://smartcut.dev
 */

namespace SmartCut;

defined('ABSPATH') || exit;

require_once plugin_dir_path(__FILE__) . 'vendor/autoload.php';

include_once 'settings/main.php';
include_once 'cart/main.php';
include_once 'order/main.php';
include_once 'helpers/main.php';
include_once 'rest/main.php';
include_once 'updates/main.php';

// Environment variables with validation
$checkoutUrl = filter_var(
	getenv('SMARTCUT_CHECKOUT_URL') ?: 'https://cutlistevo.com/checkout-mini/',
	FILTER_VALIDATE_URL
) ?: 'https://cutlistevo.com/checkout-mini/';

$endpoint = filter_var(
	getenv('SMARTCUT_ENDPOINT') ?: 'https://api.smartcut.dev/',
	FILTER_VALIDATE_URL
) ?: 'https://api.smartcut.dev/';

// Constants
define('SMARTCUT_PLUGIN_PATH', plugin_dir_path(__FILE__));
define('SMARTCUT_CURRENT_VERSION', '4.2.26');
define('SMARTCUT_CHECKOUT_URL', $checkoutUrl);
define('SMARTCUT_ENDPOINT', $endpoint);
define('SMARTCUT_SCRIPTS', ['smartcut-checkout-js', 'smartcut-upload-js']);
define('SMARTCUT_UPDATE_ACTION', 'smartcut_run_updates');
define('SMARTCUT_UPDATE_GROUP', 'smartcut-updates');

use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

class Plugin
{
	private const VERSION_OPTION = 'smartcut_version';

	private static $instance = null;
	private $globalSettings = [];
	private $productSettings = [];
	private $updateManager;

	public static function getInstance(): self
	{
		if (self::$instance === null) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	private function __construct()
	{
		$this->updateManager = new \SmartCut\Updates\UpdateManager();
		$this->initHooks();
		$this->initUpdateChecker();
		$this->loadSettings();
	}

	public static function activate(): void
	{
		$settingsManager = new \SmartCut\Settings\SettingsManager();

		if (!get_option(SMARTCUT_OPTIONS_KEY)) {
			add_option(SMARTCUT_OPTIONS_KEY, $settingsManager->getDefaultOptions());
		}

		$plugin = self::getInstance();
		$plugin->versionBasedUpdates(null, [], true);
	}

	public static function deactivate(): void
	{
		\SmartCut\Updates\UpdateManager::cleanup();
	}

	private function loadSettings(): void
	{
		try {
			$settings = \SmartCut\Settings\getGlobalSettings();
			$this->globalSettings = is_array($settings) ? $settings : [];
		} catch (\Exception $e) {
			$this->log('Failed to load settings', $e->getMessage());
			$this->globalSettings = [];
		}
	}

	public function getGlobalSettings(): array
	{
		return $this->globalSettings;
	}

	public function getProductSettings(int $productId): array
	{
		if (!isset($this->productSettings[$productId])) {
			$this->productSettings[$productId] = get_post_meta($productId, '_smartcut_settings', true) ?: [];
		}
		return $this->productSettings[$productId];
	}

	public function versionBasedUpdates($upgrader_object, $options, $force = false): void
	{
		// Early return checks
		if (!$force && ($options['action'] !== 'update' || $options['type'] !== 'plugin')) {
			return;
		}

		$thisPlugin = plugin_basename(__FILE__);

		if (!$force && (!isset($options['plugins']) || !in_array($thisPlugin, $options['plugins']))) {
			return;
		}

		$version = get_option(self::VERSION_OPTION);

		if ($version === SMARTCUT_CURRENT_VERSION && !$force) {
			return;
		}

		$this->updateManager->scheduleUpdate();
	}

	private function initHooks(): void
	{
		// Init hooks
		add_action('init', [$this, 'init']);
		add_action('wp', [$this, 'initProduct']);

		// Script based
		add_action('wp_enqueue_scripts', [$this, 'enqueueAssets']);
		add_action('admin_enqueue_scripts', [$this, 'enqueueAdminAssets']);

		// JSON upload
		add_filter('upload_mimes', [$this, 'allowJsonUploads']);
		add_filter('wp_check_filetype_and_ext', [$this, 'validateJsonUpload'], 10, 4);

		// Remove cart notices
		add_filter('woocommerce_cart_item_removed_notice_type', '__return_false', 999);
		add_action('woocommerce_init', function () {
			remove_action('woocommerce_cart_item_removed', [WC()->cart, 'removed_from_cart_notice'], 10);
		}, 999);

		// Version based updates
		add_action('upgrader_process_complete', [$this, 'versionBasedUpdates'], 10, 2);
		add_action('admin_notices', [$this, 'displayUpdateNotice']);

		// Image handling
		add_filter('wp_handle_upload_prefilter', [$this, 'handleImageUpload']);
	}

	public function displayUpdateNotice(): void
	{
		if (!current_user_can('manage_options')) {
			return;
		}

		$result = get_transient(\SmartCut\Updates\UpdateManager::UPDATE_TRANSIENT);
		if (!$result) {
			return;
		}

		delete_transient(\SmartCut\Updates\UpdateManager::UPDATE_TRANSIENT);

		$type = $result['success'] ? 'success' : 'warning';
		$message = $this->formatUpdateMessage($result);

		printf(
			'<div class="notice notice-%1$s is-dismissible"><p>%2$s</p></div>',
			esc_attr($type),
			wp_kses_post($message)
		);
	}

	private function formatUpdateMessage(array $result): string
	{
		if ($result['success']) {
			$message = 'SmartCut settings update completed successfully';
			if (!empty($result['products_updated'])) {
				$message .= sprintf(
					'. %d products were updated',
					intval($result['products_updated'])
				);
			}
			return $message . '.';
		}

		$message = 'SmartCut update completed with some issues:';
		if (!empty($result['errors'])) {
			$message .= '<ul class="ul-disc">';
			foreach ($result['errors'] as $error) {
				$message .= '<li>' . esc_html($error) . '</li>';
			}
			$message .= '</ul>';
		}
		return $message;
	}

	public function handleImageUpload($file): array
	{
		if (defined('REST_REQUEST') && REST_REQUEST) {
			$headers = getallheaders();
			if (isset($headers['Smartcut-Image-Upload'])) {
				add_filter('big_image_size_threshold', function () {
					return 2000;
				});
			}
		}
		return $file;
	}

	private function initUpdateChecker(): void
	{
		$checker = PucFactory::buildUpdateChecker(
			'https://github.com/jgmedialtd/smartcut-wp-plugin',
			__FILE__,
			'smartcut'
		);
		$checker->setBranch('main');
	}

	public function init(): void
	{
		if (!\SmartCut\Helpers\isWoocommerceActive()) {
			return;
		}

		include_once 'widgets/main.php';
		include_once 'settings/main.php';
		include_once 'settings/fields.php';
		include_once 'filters/main.php';
	}

	public function initProduct(): void
	{
		if (!\SmartCut\Helpers\isWoocommerceActive()) {
			return;
		}

		$productId = get_the_ID();

		if (\is_product() && \SmartCut\Helpers\isCutlist($productId)) {
			include_once 'product/main.php';
		}
	}

	public function initOther(): void
	{
		if (!\SmartCut\Helpers\isWoocommerceActive()) {
			return;
		}

		if (is_admin()) {
			include_once 'product-admin/main.php';
			include_once 'product-admin/formula.php';
			include_once 'settings/bulk-edit.php';
		}
	}

	public function enqueueAssets(): void
	{
		wp_enqueue_style(
			'smartcut-site-wide-style',
			plugins_url('/css/site-wide.css', __FILE__),
			[],
			SMARTCUT_CURRENT_VERSION
		);

		if (is_singular('product')) {
			wp_enqueue_style(
				'smartcut-product-style',
				plugins_url('/css/product.css', __FILE__),
				[],
				SMARTCUT_CURRENT_VERSION
			);
		}
	}

	public function enqueueAdminAssets($hook): void
	{
		wp_enqueue_style(
			'smartcut-admin-style',
			plugins_url('/css/admin.css', __FILE__),
			[],
			SMARTCUT_CURRENT_VERSION
		);
	}

	public function printVersion(): string
	{
		return wp_kses_post('<div>SmartCut version: ' . SMARTCUT_CURRENT_VERSION . '</div>');
	}

	public function allowJsonUploads($mimes): array
	{
		$mimes['json'] = 'application/json';
		return $mimes;
	}

	public function validateJsonUpload($data, $file, $filename, $mimes)
	{
		if (!empty($data['ext']) && !empty($data['type'])) {
			return $data;
		}

		$filetype = wp_check_filetype($filename, $mimes);

		if ('json' === $filetype['ext']) {
			$data['ext'] = 'json';
			$data['type'] = 'application/json';
		}

		return $data;
	}

	public function log(string $message, mixed $data): void
	{
		error_log('[SmartCut] ' . $message);
		error_log('[SmartCut] ' . (is_string($data) ? $data : print_r($data, true)));
	}

	public function ensureScriptModule(array $attr): array
	{
		if (in_array($attr['id'], SMARTCUT_SCRIPTS)) {
			$attr['type'] = 'module';
		}
		return $attr;
	}

	public function fallbackScriptModule(string $tag, string $handle): string
	{
		if (in_array($handle, SMARTCUT_SCRIPTS)) {
			return strpos($tag, 'type="module"') !== false
				? $tag
				: str_replace('></script>', ' type="module"></script>', $tag);
		}
		return $tag;
	}
}

// Initialize plugin
$plugin = Plugin::getInstance();

// Add activation/deactivation hooks
register_activation_hook(__FILE__, [Plugin::class, 'activate']);
register_deactivation_hook(__FILE__, [Plugin::class, 'deactivate']);

// Add hooks that need instance methods
add_filter('wp_script_attributes', [$plugin, 'ensureScriptModule'], 99999);
add_filter('script_loader_tag', [$plugin, 'fallbackScriptModule'], 999999, 2);

add_action('wp_loaded', [$plugin, 'initOther'], 10);
add_action('init', [\SmartCut\Cart\CartManager::class, 'clearCart'], 20, 0);

add_shortcode('smartcut_version', [$plugin, 'printVersion']);

// Autoptimize configurations
add_filter('autoptimize_js_do_minify', '__return_false');
add_filter('autoptimize_js_include_inline', '__return_false');
add_filter('autoptimize_filter_noptimize', '__return_true');

// WooCommerce stock amount filter
add_action('init', function () {
	if (class_exists('WooCommerce')) {
		remove_filter('woocommerce_stock_amount', 'intval');
		add_filter('woocommerce_stock_amount', 'floatval');
	}
}, 999999);
