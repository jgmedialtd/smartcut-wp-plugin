<?php

namespace SmartCut\Settings;

defined('ABSPATH') || exit;

include_once 'field-factory.php';
include_once 'fields.php';

require_once dirname(__DIR__) . '/health/main.php';
require_once dirname(__DIR__) . '/templates/main.php';
require_once dirname(__DIR__) . '/product-admin/main.php';

use SmartCut\Settings\Factory\FieldFactory;
use SmartCut\Settings\Fields\FieldGroupBuilder;
use SmartCut\Settings\Fields\ScriptHandler;

define('SMARTCUT_OPTIONS_KEY', 'smartcut_options');

/**
 * get an array of product categories from a comma separated string
 * @param string $cutlistCategories
 * @return string[]
 */
function getProductCategories($cutlistCategories)
{
	$cutlistCategories = explode(',', str_replace(' ', '', $cutlistCategories));

	$categories = [];

	foreach ($cutlistCategories as $category) {
		$categories[] = $category;
	}

	return $categories;
}

function getTypedValue(string $type, $value)
{
	switch ($type) {
		case 'boolean':
			return $value === '1';
		case 'integer':
			return (int)$value;
		case 'float':
			return (float)$value;
		case 'hex':
			return sanitize_hex_color($value) ?: '#000000';
		default:
			return $value;
	}
}

function getTypedSettings($settings)
{
	$typedSettings = [];

	foreach ($settings as $key => $value) {
		if (!isset(SMARTCUT_FIELDS[$key])) {
			$typedSettings[$key] = $value;
			continue;
		}

		$type = SMARTCUT_FIELDS[$key]['type'];

		if ($type === 'select') {
			$type = SMARTCUT_FIELDS[$key]['output'] ?? 'string';
		}

		$typedValue = getTypedValue($type, $value);
		$typedSettings[$key] = $typedValue;
	}

	return $typedSettings;
}

/**
 * get the settings for a given smartcut type
 * @param string $type
 * @return array
 */
function getGlobalSettings()
{
	$options = get_option(SMARTCUT_OPTIONS_KEY);

	// If not array or empty, return defaults
	if (!is_array($options)) {
		$defaults = SettingsManager::getDefaultOptions();
		update_option(SMARTCUT_OPTIONS_KEY, $defaults);
		return $defaults;
	}

	// Validate each option against its type definition
	$fields = \SmartCut\Settings\Fields\getSettingFields();
	foreach ($options as $key => $value) {
		if (isset($fields[$key])) {
			$type = $fields[$key]['type'];
			if (!validateOptionType($value, $type)) {
				$options[$key] = $fields[$key]['default'] ?? null;
			}
		}
	}

	return $options;
}

function validateOptionType($value, $type): bool
{
	switch ($type) {
		case 'boolean':
			return in_array($value, ['0', '1', true, false], true);
		case 'integer':
			return is_numeric($value);
		case 'float':
			return is_numeric($value);
		case 'hex':
			return preg_match('/^#[a-f0-9]{6}$/i', $value);
		default:
			return true; // String values
	}
}

/**
 * get the product settings, with product settings overriding global settings
 * @param string $productId
 * @return array
 */
function getProductSettings($productId = null)
{
	$productId = $productId ? $productId : get_the_ID();

	if (!$productId) return [];

	$settingsFields = \SmartCut\Settings\Fields\getSettingFields('all');
	$settings = getGlobalSettings();

	//product settings
	foreach ($settingsFields as $key => $field) {
		$name = SMARTCUT_PREFIX . $key;

		if (!in_array('product', $field['show'])) continue;
		if (!metadata_exists('post', $productId, $name)) continue;

		$productSetting = \get_post_meta($productId, $name, true);

		if ($productSetting === \SmartCut\Settings\Factory\Field::GLOBAL_VALUE) continue;

		//special cases - these are numeric fields which cannot have the value '' - so we need to check if the user has set them to use global settings
		if (in_array($key, ['cut_length_price', 'per_part_price', 'surcharge', 'offcut_min_length', 'offcut_min_width'])) {

			$shouldContinue = false;

			switch ($key) {
				case 'cut_length_price':
				case 'per_part_price': {
						$parentSetting = \get_post_meta($productId, SMARTCUT_PREFIX . 'pricing_strategy', true);
						if ($parentSetting === \SmartCut\Settings\Factory\Field::GLOBAL_VALUE) $shouldContinue = true;
					}
					break;
				case 'surcharge': {
						$parentSetting = \get_post_meta($productId, SMARTCUT_PREFIX. 'surcharge_type', true);
						if ($parentSetting === \SmartCut\Settings\Factory\Field::GLOBAL_VALUE) $shouldContinue = true;
					}
					break;
				case 'offcut_min_length':
				case 'offcut_min_width': { {
							$parentSetting = \get_post_meta($productId, SMARTCUT_PREFIX. 'enable_offcut_pricing', true);
							if ($parentSetting === \SmartCut\Settings\Factory\Field::GLOBAL_VALUE) $shouldContinue = true;
						}
					}
					break;
			}


			if ($shouldContinue) continue;
		}

		//legacy
		if ($productSetting === 'global') continue;

		$settings[$key] = $productSetting;
	}

	return getTypedSettings($settings);
}

function sanitizeInput($input)
{

	$input = sanitize_text_field($input);
	$input = trim($input);
	return $input;
}

function sanitizeHex($input)
{

	$input = sanitize_text_field($input);
	$input = trim($input);
	if (!str_starts_with($input, '#')) {
		return '';
	}
	if (strlen($input) !== 7) {
		return '';
	}
	return $input;
}

function sanitizeInt($input, $min = null)
{

	$sanitized = sanitizeInput($input);
	$sanitized = intval($sanitized);

	if ($min !== null) {
		if ($sanitized < $min) $sanitized = 1;
	}

	return $sanitized;
}

function sanitizeFloat($input, $min = null)
{

	$sanitized = sanitizeInput($input);
	$sanitized = floatval($sanitized);

	if ($min !== null) {
		if ($sanitized < $min) $sanitized = 1;
	}

	return $sanitized;
}

// Usage in your settings page setup:
class SmartCutSettings
{
	use FieldGroupBuilder;
	private $settingsManager;

	public function __construct()
	{
		$this->settingsManager = new SettingsManager();
		$this->initializePages();

		// Add the tool pages
		$this->settingsManager->addPage(new HealthCheckPage());
		$this->settingsManager->addPage(new TemplateProductsPage());
	}

	private function getFieldGroups()
	{
		$groups = $this->initializeGroupStructure();

		foreach (SMARTCUT_FIELDS as $fieldId => $fieldConfig) {
			if (!isset($fieldConfig['show']) || !in_array('global', $fieldConfig['show'])) {
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

	private function initializePages()
	{
		$fields = \SmartCut\Settings\Fields\getSettingFields();
		$fieldGroups = $this->getFieldGroups();

		foreach (SMARTCUT_GROUPS as $group => $sections) {
			if (!isset($fieldGroups[$group])) {
				continue;
			}

			$slug = $group === 'general' ? 'smartcut' : 'smartcut-' . $group;

			$page = new SettingsPage(
				ucfirst($group) . ' Settings',
				ucfirst($group),
				$slug
			);

			foreach ($sections as $sectionId => $sectionInfo) {
				if (isset($fieldGroups[$group]['sections'][$sectionId])) {
					$page->addSection(
						$sectionId,
						$sectionInfo['title'],
						$sectionInfo['description']
					);

					// Add fields in the desired order: select, text, number, boolean, json_upload
					$categories = ['select', 'text', 'number', 'boolean', 'json_upload'];
					foreach ($categories as $category) {
						foreach ($fieldGroups[$group]['sections'][$sectionId]['fields'][$category] as $fieldId) {
							if (isset($fields[$fieldId])) {
								$field = FieldFactory::createField(
									SMARTCUT_PREFIX . $fieldId,
									SMARTCUT_OPTIONS_KEY . "[$fieldId]",
									$fields[$fieldId]
								);
								$page->addField($sectionId, $field);
							}
						}
					}
				}
			}

			$this->settingsManager->addPage($page);
		}
	}
}

/**
 * Settings page management
 */
class SettingsManager
{
	private $pages = [];
	private $options;

	public function __construct()
	{
		// Load options with proper default handling
		$this->options = getGlobalSettings();

		add_action('admin_menu', [$this, 'registerMenu']);
		add_action('admin_init', [$this, 'registerSettings']);

		//handle manual resetting of settings
		add_action('admin_post_smartcut_reset_settings', [$this, 'handleResetSettings']);

		//handle manual triggering of settings updates
		add_action('admin_post_smartcut_trigger_updates', function () {
			if (!current_user_can('manage_options')) wp_die('Unauthorized');

			if (
				!isset($_POST['smartcut_update_nonce']) ||
				!wp_verify_nonce($_POST['smartcut_update_nonce'], 'smartcut_trigger_updates')
			) {
				wp_die('Invalid nonce');
			}

			// Schedule update using same format
			if (!as_next_scheduled_action(SMARTCUT_UPDATE_ACTION)) {
				as_schedule_single_action(
					time(),
					SMARTCUT_UPDATE_ACTION,
					[],
					SMARTCUT_UPDATE_GROUP
				);

				// Set initial warning message - use UPDATE_LOCK_TRANSIENT duration
				set_transient(
					'smartcut_update_message',
					'Settings update process has been triggered. Do NOT update global or product settings until this is complete.',
					5 * MINUTE_IN_SECONDS
				);

				// Set a flag to show we've just triggered the update
				set_transient('smartcut_update_triggered', true, 30);
			}

			// Get the page slug from the referer URL
			$referer = wp_get_referer();
			$page = parse_url($referer, PHP_URL_QUERY);
			parse_str($page, $query_vars);
			$page_slug = $query_vars['page'] ?? '';

			// Redirect without additional parameters
			wp_safe_redirect(admin_url('admin.php?page=' . $page_slug));
			exit;
		});
	}

	public function handleResetSettings()
	{
		// Verify nonce
		if (
			!isset($_POST['smartcut_reset_nonce']) ||
			!wp_verify_nonce($_POST['smartcut_reset_nonce'], 'smartcut_reset_settings')
		) {
			wp_die('Invalid request');
		}

		// Check permissions
		if (!current_user_can('manage_options')) {
			wp_die('Unauthorized');
		}

		// Reset options to defaults
		update_option(SMARTCUT_OPTIONS_KEY, $this->getDefaultOptions());

		// Redirect back with message
		$redirectUrl = add_query_arg([
			'page' => 'smartcut',
			'settings-reset' => 'true'
		], admin_url('admin.php'));

		wp_redirect($redirectUrl);
		exit;
	}


	public static function getDefaultOptions($type = 'global')
	{
		$defaults = [];

		$fields = \SmartCut\Settings\Fields\getSettingFields($type);

		foreach ($fields as $fieldId => $fieldConfig) {
			if (isset($fieldConfig['default'])) {
				$defaults[$fieldId] = $fieldConfig['default'];
			}
		}

		return $defaults;
	}

	public function registerSettings()
	{
		register_setting(
			'smartcut_group',
			SMARTCUT_OPTIONS_KEY,
			[
				'sanitize_callback' => [$this, 'sanitizeOptions'],
				'default' => $this->getDefaultOptions()
			]
		);

		// Initialize pages with current options
		foreach ($this->pages as $page) {
			$page->initialize($this->options);  // Pass the current options to each page
		}
	}


	public function sanitizeOptions($input)
	{
		if (!is_array($input)) {
			return $this->getDefaultOptions();
		}

		$allOptions = getGlobalSettings();  // Get existing options
		$fields = \SmartCut\Settings\Fields\getSettingFields();

		$referer = wp_get_referer();
		if ($referer) {
			parse_str(parse_url($referer, PHP_URL_QUERY), $params);
		} else {
			$params = [];
		}

		$currentPage = $this->pages[$params['page'] ?? ''] ?? null;
		$currentPageFields = $currentPage ? array_keys($currentPage->getFields()) : [];

		// First process all submitted values
		foreach ($input as $key => $value) {
			if (isset($fields[$key])) {
				$field = FieldFactory::createField(
					SMARTCUT_PREFIX . $key,
					SMARTCUT_OPTIONS_KEY . "[$key]",
					$fields[$key]
				);
				$allOptions[$key] = $field->sanitize($value);
			}
		}

		// Then handle unchecked boolean fields
		foreach ($currentPageFields as $fieldId) {
			$baseId = str_replace(SMARTCUT_PREFIX, '', $fieldId);
			if (isset($fields[$baseId]) && $fields[$baseId]['type'] === 'boolean' && !isset($input[$baseId])) {
				$allOptions[$baseId] = '0';
			}
		}

		return $allOptions;
	}

	private function sanitizeValue($value, $type)
	{
		switch ($type) {
			case 'boolean':
				return empty($value) ? '0' : '1';
			case 'string':
				return sanitize_text_field($value);
			case 'integer':
				return intval($value);
			case 'float':
				return floatval($value);
			case 'hex':
				return sanitize_hex_color($value) ?: '#000000';
			default:
				return $value;
		}
	}

	public function addPage(SettingsPage $page)
	{
		$this->pages[$page->getSlug()] = $page;
	}

	public function registerMenu()
	{
		$generalPage = $this->pages['smartcut'] ?? null;

		if (!$generalPage) {
			return;
		}

		// Circular saw SVG icon (base64 encoded)
		$icon = 'data:image/svg+xml;base64,' . base64_encode('
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="rgba(240,246,252,0.6)"><path d="M46.5 292.6L2 256.5l3.2-25.6-2.4-2.4 1.4-6.2s3.8 2.1 7.6 4.1c3.8 2 7.6 3.9 7.6 3.9l-.9 4.5s12.6 13.5 26.8 3.4c7.7-5.5 1.2-19.5 1.2-19.5L17.1 169.6l11.8-23-1.4-3 3.5-5.4s2.8 3.3 5.7 6.5c2.9 3.2 5.8 6.3 5.8 6.3l-2.3 3.9s7.2 17 24.1 12.4c9.2-2.5 7.8-17.9 7.8-17.9L61.1 93.1 80 75.5l-.3-3.3 5.1-3.9s1.5 4.1 3.2 8c1.6 4 3.3 7.9 3.3 7.9l-3.6 2.9s1 18.5 18.4 19.9c9.4 .8 13.4-14.1 13.4-14.1l9-56.6 23.8-10 .8-3.2 6.1-1.9s.1 4.3 .2 8.6c.2 4.3 .4 8.6 .4 8.6l-4.3 1.5s-5.4 17.7 10.5 25c8.6 3.9 17.5-8.7 17.5-8.7L211.4 5.9l25.8-1.3 1.9-2.8 6.4 .3s-1.4 4.1-2.7 8.2s-2.5 8.2-2.5 8.2l-4.6-.1s-11.1 14.8 1.3 27c6.8 6.6 19.4-2.2 19.4-2.2L299.6 5.7l24.7 7.6 2.8-1.9 5.9 2.4s-2.7 3.4-5.3 6.8c-2.7 3.4-5.2 6.8-5.2 6.8l-4.3-1.6s-15.5 10.1-8 25.9c4.1 8.5 18.9 4.6 18.9 4.6l53.5-20.5 20.6 15.6 3.2-.9 4.7 4.3s-3.7 2.2-7.3 4.5c-3.6 2.3-7.2 4.6-7.2 4.6l-3.5-3s-18 4.2-16.4 21.6c.9 9.4 16.2 10.8 16.2 10.8l57.3-1 14 21.7 3.3 .3 3 5.7s-4.3 .8-8.4 1.7c-4.2 .9-8.4 1.9-8.4 1.9l-2.2-4s-18.4-2.2-22.8 14.7c-2.4 9.2 11.6 15.7 11.6 15.7l54.2 18.7 5.8 25.2 3 1.4 .8 6.3s-4.3-.7-8.5-1.3s-8.5-1.1-8.5-1.1l-.7-4.5s-16.5-8.4-26.4 6c-5.4 7.8 5.5 18.7 5.5 18.7L510 255.5l-3.2 25.6 2.4 2.4-1.4 6.2s-3.8-2.1-7.6-4.1c-3.8-2-7.6-3.9-7.6-3.9l.9-4.5s-12.6-13.5-26.8-3.4c-7.7 5.5-1.2 19.5-1.2 19.5l29.5 49.1-11.8 23 1.4 3-3.5 5.4s-2.8-3.3-5.7-6.5c-2.9-3.2-5.8-6.3-5.8-6.3l2.3-3.9s-7.2-17-24.1-12.4c-9.2 2.5-7.8 17.9-7.8 17.9l10.9 56.2L432 436.5l.3 3.3-5.1 3.9s-1.5-4.1-3.2-8c-1.6-4-3.3-7.9-3.3-7.9l3.6-2.9s-1-18.5-18.4-19.9c-9.4-.8-13.4 14.1-13.4 14.1l-9 56.6-23.8 10-.8 3.2-6.1 1.9s-.1-4.3-.2-8.6c-.2-4.3-.4-8.6-.4-8.6l4.3-1.5s5.4-17.7-10.5-25c-8.6-3.9-17.5 8.7-17.5 8.7l-27.8 50.1-25.8 1.3-1.9 2.8-6.4-.3s1.4-4.1 2.7-8.2s2.5-8.2 2.5-8.2l4.6 .1s11.1-14.8-1.3-27c-6.8-6.6-19.4 2.2-19.4 2.2l-43.2 37.6-24.7-7.6-2.8 1.9-5.9-2.4s2.7-3.4 5.3-6.8c2.7-3.4 5.2-6.8 5.2-6.8l4.3 1.6s15.5-10.1 8-25.9c-4.1-8.5-18.9-4.6-18.9-4.6l-53.5 20.5-20.6-15.6-3.2 .9-4.7-4.3s3.7-2.2 7.3-4.5c3.6-2.3 7.2-4.6 7.2-4.6l3.5 3s18-4.2 16.4-21.6c-.9-9.4-16.2-10.8-16.2-10.8l-57.3 1L47.7 398l-3.3-.3-3-5.7s4.3-.8 8.4-1.7c4.2-.9 8.4-1.9 8.4-1.9l2.2 4s18.4 2.2 22.8-14.7c2.4-9.2-11.6-15.7-11.6-15.7L17.5 343.4l-5.8-25.2-3-1.4-.8-6.3s4.3 .7 8.5 1.3s8.5 1.1 8.5 1.1l.7 4.5s16.5 8.4 26.4-6c5.4-7.8-5.5-18.7-5.5-18.7zM256 213.6a42.4 42.4 0 1 0 0 84.7 42.4 42.4 0 1 0 0-84.7z"/></svg>');

		// Add main menu item
		add_menu_page(
			'SmartCut',           // page title
			'SmartCut',           // menu title
			'manage_options',      // capability
			'smartcut',           // menu slug
			null,                 // callback
			$icon                 // menu icon
		);

		// Add each page as a submenu item
		foreach ($this->pages as $slug => $page) {
			add_submenu_page(
				'smartcut',           // parent slug
				$page->getTitle(),   // page title
				$page->getMenuTitle(), // menu title
				'manage_options',     // capability
				$page->getSlug(),   // menu slug
				[$page, 'render']    // callback
			);
		}
	}
}

class SettingsPage
{
	use ScriptHandler;

	protected $title;
	protected $menuTitle;
	protected $slug;
	protected $sections = [];
	protected $fields = [];

	public function __construct($title, $menuTitle, $slug)
	{
		$this->title = $title;
		$this->menuTitle = $menuTitle;
		$this->slug = $slug;
	}

	public function getTitle()
	{
		return $this->title;
	}

	public function getMenuTitle()
	{
		return $this->menuTitle;
	}

	public function getSlug()
	{
		return $this->slug;
	}

	public function getFields()
	{
		return $this->fields;
	}

	public function addSection($id, $title, $description = '')
	{
		$this->sections[$id] = [
			'title' => $title,
			'description' => $description
		];
		return $this;
	}

	public function addField($sectionId, \SmartCut\Settings\Factory\Field $field)
	{
		$this->fields[$field->getId()] = [
			'section' => $sectionId,
			'field' => $field
		];
		return $this;
	}

	public function sanitize($input)
	{
		$sanitized = [];
		foreach ($this->fields as $id => $data) {
			if (isset($input[$id])) {
				$sanitized[$id] = $data['field']->sanitize($input[$id]);
			}
		}
		return $sanitized;
	}

	public function initialize($options)
	{
		// Register sections
		foreach ($this->sections as $id => $section) {
			add_settings_section(
				$id,
				$section['title'],
				function () use ($section) {
					if ($section['description']) {
						echo '<p>' . esc_html($section['description']) . '</p>';
					}
				},
				$this->slug
			);
		}

		// Register fields
		foreach ($this->fields as $id => $data) {
			$field = $data['field'];
			$baseId = str_replace(SMARTCUT_PREFIX, '', $id);

			// Important: Set the current value from options
			if (isset($options[$baseId])) {
				$field->setValue($options[$baseId]);
			} else {
				// If no value in options, check if there's a default in SMARTCUT_FIELDS
				if (isset(SMARTCUT_FIELDS[$baseId]['default'])) {
					$field->setValue(SMARTCUT_FIELDS[$baseId]['default']);
				}
			}

			// If it's a boolean field, add a hidden input
			if (isset(SMARTCUT_FIELDS[$baseId]) && SMARTCUT_FIELDS[$baseId]['type'] === 'boolean') {
				add_settings_field(
					$id,
					$field->getLabel(),
					function () use ($field, $id) {
						// Add hidden field to ensure the option exists in POST data
						echo '<input type="hidden" name="' . esc_attr($field->getName()) . '" value="0" />';
						echo $field->render();
						$this->maybeRenderScript($id, SMARTCUT_PREFIX);
					},
					$this->slug,
					$data['section']
				);
			} else {
				add_settings_field(
					$id,
					$field->getLabel(),
					function () use ($field, $id) {
						echo $field->render();
						$this->maybeRenderScript($id, SMARTCUT_PREFIX);
					},
					$this->slug,
					$data['section']
				);
			}
		}
	}

	public function render()
	{
		if (!isset($_GET['page']) || $_GET['page'] !== $this->slug) {
			return;
		}

		// Check and display any stored messages
		$stored_message = get_transient('smartcut_update_message');
		if ($stored_message) {
			add_settings_error(
				'smartcut_messages',
				'smartcut_update_triggered',
				$stored_message,
				'updated'
			);
			delete_transient('smartcut_update_message');
		}

?>
		<div class="wrap">
			<h1><?php echo esc_html($this->title); ?></h1>
			<?php settings_errors(); ?>

			<form method="post" action="options.php">
				<?php
				settings_fields('smartcut_group');
				do_settings_sections($this->slug);
				submit_button();
				?>
			</form>

			<div style="margin-top: 30px;">
				<!-- Reset Settings Form -->
				<form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>"
					onsubmit="return confirm('Are you sure you want to reset all settings to defaults? This cannot be undone.');"
					style="display: inline-block; margin-right: 10px;">
					<input type="hidden" name="action" value="smartcut_reset_settings">
					<?php wp_nonce_field('smartcut_reset_settings', 'smartcut_reset_nonce'); ?>
					<?php submit_button('Reset All Settings', 'delete', 'smartcut-reset-submit', false); ?>
				</form>

				<!-- Update Settings Form -->
				<form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>"
					style="display: inline-block;">
					<input type="hidden" name="action" value="smartcut_trigger_updates">
					<?php wp_nonce_field('smartcut_trigger_updates', 'smartcut_update_nonce'); ?>
					<?php submit_button('Run Legacy Settings Update', 'secondary', 'smartcut-update-submit', false); ?>
				</form>
			</div>
		</div>
<?php
	}
}
class HealthCheckPage extends SettingsPage
{
	private $healthChecker;

	public function __construct()
	{
		parent::__construct(
			'SmartCut Health',      // page title
			'Health Check',         // menu title
			'smartcut-health-check' // slug
		);

		$this->healthChecker = new \SmartCut\HealthCheck\SmartCutHealthChecker();
	}

	public function render()
	{
		if (!current_user_can('manage_options')) {
			wp_die('Unauthorized');
		}

		// Render the health check page using our new class
		$this->healthChecker->renderPage();
	}
}

class TemplateProductsPage extends SettingsPage
{
	private $templateManager;

	public function __construct()
	{
		parent::__construct(
			'SmartCut - Create Template Products', // page title
			'Templates',                           // menu title
			'smartcut-template-products'           // slug
		);

		$this->templateManager = new \SmartCut\Template\TemplateManager();
	}

	public function render()
	{
		if (!current_user_can('manage_options')) {
			wp_die('Unauthorized');
		}

		$this->templateManager->renderPage();
	}
}

if (is_admin()) new SmartCutSettings();
