<?php

/**
 * Plugin Name: SmartCut
 * Plugin URI: https://smartcut.dev
 * Description: Calculate cut lists & pricing for cut-to-size businesses.
 * Author: SmartCut
 * Requires at least: 6.0
 * Requires PHP: 7.4
 * WC requires at least: 8.0
 * Text Domain: smartcut
 * Version: 4.1.1
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

//environment variables (from .htaccess)
$checkoutUrl = getenv('SMARTCUT_CHECKOUT_URL') ? getenv('SMARTCUT_CHECKOUT_URL') : 'https://cutlistevo.com/checkout-mini/';
$endpoint = getenv('SMARTCUT_ENDPOINT') ? getenv('SMARTCUT_ENDPOINT') : 'https://api.smartcut.dev/';

//constants
define('SMARTCUT_PLUGIN_PATH', plugin_dir_path(__FILE__));
define('SMARTCUT_CURRENT_VERSION', '4.1.1'); // This needs to be kept in sync with the version above.
define('SMARTCUT_CHECKOUT_URL', $checkoutUrl);
define('SMARTCUT_ENDPOINT', $endpoint);
define('SMARTCUT_SCRIPTS', ['smartcut-checkout-js', 'smartcut-upload-js']);

use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

class Plugin
{
	private static $instance = null;
	private $globalSettings = [];
	private $productSettings = [];

	public static function getInstance()
	{
		if (self::$instance === null) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	private function __construct()
	{
		$this->initHooks();
		$this->initUpdateChecker();
		$this->loadSettings();

		add_action('admin_notices', [$this, 'displayUpdateNotice']);
	}

	private function loadSettings(): void
	{
		$settings = \SmartCut\Settings\getGlobalSettings();
		$this->globalSettings = is_array($settings) ? $settings : [];
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
		if (!$force && ($options['action'] !== 'update' || $options['type'] !== 'plugin')) {
			return;
		}

		$thisPlugin = plugin_basename(__FILE__);

		// Check if our plugin was updated
		if (!$force && (!isset($options['plugins']) || !in_array($thisPlugin, $options['plugins']))) {
			return;
		}

		$version = get_option('smartcut_version');

		if ($version === SMARTCUT_CURRENT_VERSION) return;

		$result = \SmartCut\Settings\updateLegacyOptions();
		update_option('smartcut_version', SMARTCUT_CURRENT_VERSION);

		// Store update result for admin notice
		set_transient('smartcut_update_result', [
			'success' => $result['success'],
			'products_updated' => $result['products_updated'],
			'errors' => $result['errors']
		], 30);
	}

	public function displayUpdateNotice(): void
	{
		$result = get_transient('smartcut_update_result');
		if (!$result) {
			return;
		}

		delete_transient('smartcut_update_result');

		$type = $result['success'] ? 'success' : 'warning';

		if ($result['success']) {
			$message = 'SmartCut update completed successfully';

			if ($result['products_updated'] > 0) {
				$message .= sprintf(
					'. %d products were updated successfully',
					intval($result['products_updated'])
				);
			}

			$message .= '.';
		} else {
			$message = 'SmartCut update completed with some issues:';
			if (!empty($result['errors'])) {
				$message .= '<ul class="ul-disc">';
				foreach ($result['errors'] as $error) {
					$message .= '<li>' . esc_html($error) . '</li>';
				}
				$message .= '</ul>';
			}
		}

		printf(
			'<div class="notice notice-%1$s is-dismissible"><p>%2$s</p></div>',
			esc_attr($type),
			wp_kses_post($message)
		);
	}

	private function initHooks(): void
	{
		add_action('wp_enqueue_scripts', [$this, 'enqueueAssets']);
		add_action('admin_enqueue_scripts', [$this, 'enqueueAdminAssets']);
		add_action('init', [$this, 'init']);
		add_action('wp', [$this, 'initProduct']);
		add_action('upgrader_process_complete', [$this, 'versionBasedUpdates'], 10, 2);

		add_filter('upload_mimes', [$this, 'allowJsonUploads']);
		add_filter('wp_check_filetype_and_ext', [$this, 'validateJsonUpload'], 10, 4);
		add_filter('wp_script_attributes', [$this, 'ensureScriptModule'], 99999);
		add_filter('script_loader_tag', [$this, 'fallbackScriptModule'], 999999, 2);

		add_filter('woocommerce_cart_item_removed_notice_type', '__return_false', 999);
		add_action('woocommerce_init', function () {
			remove_action('woocommerce_cart_item_removed', [WC()->cart, 'removed_from_cart_notice'], 10);
		}, 999);

		//prevent our uploaded images from being resized
		add_filter('intermediate_image_sizes_advanced', function ($sizes) {
			if (defined('REST_REQUEST') && REST_REQUEST) {
				$headers = getallheaders();
				if (isset($headers['Smartcut-Image-Upload'])) {
					return array();
				}
			}
			return $sizes;
		});

		//resize large uploaded images
		add_filter('wp_handle_upload_prefilter', function ($file) {
			// Only for our REST uploads with specific header
			if (defined('REST_REQUEST') && REST_REQUEST) {
				$headers = getallheaders();
				if (isset($headers['Smartcut-Image-Upload'])) {
					// Set max dimensions
					add_filter('big_image_size_threshold', function () {
						return 2000; // Max width/height in pixels
					});
				}
			}
			return $file;
		});
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
		error_log($message);
		error_log(is_string($data) ? $data : print_r($data, true));
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

// Plugin activation
register_activation_hook(__FILE__, function () {
	$settingsManager = new \SmartCut\Settings\SettingsManager();

	if (!get_option(SMARTCUT_OPTIONS_KEY)) {
		add_option(SMARTCUT_OPTIONS_KEY, $settingsManager->getDefaultOptions());
	}
});

// Initialize plugin
$plugin = Plugin::getInstance();

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
