<?php

namespace SmartCut\Settings\Factory;

defined('ABSPATH') || exit;

/**
 * Field definition value object
 */
class FieldDefinition
{
	private $type;
	private $label;
	private $description;
	private $options;
	private $output;
	private $min;
	private $max;
	private $step;
	private $defaultValue;

	public static function fromArray(array $definition): self
	{
		$instance = new self();
		$instance->type = $definition['type'];
		$instance->label = $definition['label'];
		$instance->description = $definition['description'] ?? '';
		$instance->options = $definition['options'] ?? [];
		$instance->output = $definition['output'] ?? 'string';
		$instance->min = $definition['min'] ?? null;
		$instance->max = $definition['max'] ?? null;
		$instance->step = $definition['step'] ?? null;
		$instance->defaultValue = $definition['default'] ?? null;
		return $instance;
	}

	public function getType(): string
	{
		return $this->type;
	}

	public function getLabel(): string
	{
		return $this->label;
	}

	public function getDescription(): string
	{
		return $this->description;
	}

	public function getOptions(): array
	{
		return $this->options;
	}

	public function getOutput(): string
	{
		return $this->output;
	}

	public function getMin()
	{
		return $this->min;
	}

	public function getMax()
	{
		return $this->max;
	}

	public function getStep()
	{
		return $this->step;
	}

	public function getDefaultValue()
	{
		return $this->defaultValue;
	}
}

/**
 * Field Factory
 */
class FieldFactory
{
	const TYPE_BOOLEAN = 'boolean';
	const TYPE_INTEGER = 'int';
	const TYPE_FLOAT = 'float';
	const TYPE_STRING = 'string';
	const TYPE_SELECT = 'select';
	const TYPE_HEX = 'hex';
	const TYPE_JSON_UPLOAD = 'json_upload';

	public static function createField($id, $name, $definition, $context = 'settings')
	{
		$definition = FieldDefinition::fromArray($definition);

		return $context === 'product'
			? self::createWcField($id, $name, $definition)
			: self::createWpField($id, $name, $definition);
	}

	private static function createWcField($id, $name, FieldDefinition $definition)
	{
		switch ($definition->getType()) {
			case self::TYPE_BOOLEAN:
				return new WCBooleanField(
					$id,
					$name,
					$definition->getLabel(),
					$definition->getDescription()
				);
			case self::TYPE_INTEGER:
			case self::TYPE_FLOAT:
				return new WCNumberField(
					$id,
					$name,
					$definition->getLabel(),
					$definition->getDescription(),
					$definition->getType() === self::TYPE_INTEGER ? 1 : 0.01
				);
			case self::TYPE_STRING:
				return new WCTextField(
					$id,
					$name,
					$definition->getLabel(),
					$definition->getDescription()
				);
			case self::TYPE_SELECT:
				return new WCSelectField(
					$id,
					$name,
					$definition->getLabel(),
					$definition->getOptions(),
					$definition->getDescription(),
					$definition->getOutput()
				);
			case self::TYPE_HEX:
				return new WCColorField(
					$id,
					$name,
					$definition->getLabel(),
					$definition->getDescription()
				);
			default:
				throw new \InvalidArgumentException("Unknown field type: {$definition->getType()}");
		}
	}

	private static function createWpField($id, $name, FieldDefinition $definition)
	{
		switch ($definition->getType()) {
			case self::TYPE_BOOLEAN:
				return new BooleanField(
					$id,
					$name,
					$definition->getLabel(),
					$definition->getDescription()
				);
			case self::TYPE_INTEGER:
				return new NumberField(
					$id,
					$name,
					$definition->getLabel(),
					$definition->getDescription(),
					0,    // min
					null, // max
					1     // step
				);
			case self::TYPE_FLOAT:
				return new NumberField(
					$id,
					$name,
					$definition->getLabel(),
					$definition->getDescription(),
					0,     // min
					null,  // max
					0.01   // step
				);
			case self::TYPE_STRING:
				return new TextField(
					$id,
					$name,
					$definition->getLabel(),
					$definition->getDescription()
				);
			case self::TYPE_SELECT:
				return new SelectField(
					$id,
					$name,
					$definition->getLabel(),
					$definition->getOptions(),
					$definition->getDescription(),
					$definition->getOutput()
				);
			case self::TYPE_HEX:
				return new ColorField(
					$id,
					$name,
					$definition->getLabel(),
					$definition->getDescription()
				);
			case 'json_upload':
				return new JsonUploadField(
					$id,
					$name,
					$definition->getLabel(),
					$definition->getDescription()
				);
			default:
				throw new \InvalidArgumentException("Unknown field type: {$definition->getType()}");
		}
	}
}

/**
 * Type handling trait
 */
trait HandleFieldTypes
{
	protected function convertToType($value, string $type)
	{
		// Validate the value first
		if (!$this->isValidForType($value, $type)) {
			return $this->getDefaultForType($type);
		}

		switch ($type) {
			case 'integer':
				return (int) $value;
			case 'float':
				return (float) $value;
			case 'boolean':
				return filter_var($value, FILTER_VALIDATE_BOOLEAN);
			case 'string':
			default:
				return (string) $value;
		}
	}

	protected function isValidForType($value, string $type): bool
	{
		if ($value === null || $value === '') {
			return false;
		}

		switch ($type) {
			case 'integer':
				// Check if it's a valid integer string or number
				return is_numeric($value) && (string)(int)$value === (string)$value;

			case 'float':
				// Check if it's a valid float
				return is_numeric($value);

			case 'boolean':
				// Accept various boolean representations
				return in_array($value, [true, false, 1, 0, '1', '0', 'true', 'false'], true);

			case 'string':
				// Almost anything can be a string
				return true;

			default:
				return false;
		}
	}

	protected function getDefaultForType(string $type)
	{
		switch ($type) {
			case 'integer':
				return 0;
			case 'float':
				return 0.0;
			case 'boolean':
				return false;
			case 'string':
				return '';
			case 'hex':
				return '#000000';
			default:
				return null;
		}
	}
}

/**
 * Base Field class
 */
abstract class Field
{
	protected $id;
	protected $name;
	protected $label;
	protected $description;
	protected $value;
	protected $validationRules = [];

	public function __construct($id, $name, $label, $description = '')
	{
		$this->id = $id;
		$this->name = $name;
		$this->label = $label;
		$this->description = $description;
	}

	public function getId()
	{
		return $this->id;
	}

	public function getName()
	{
		return $this->name;
	}

	public function getLabel()
	{
		return $this->label;
	}

	public function setValue($value)
	{
		$this->value = $value;
	}

	abstract public function render();
	abstract public function sanitize($value);
}

/**
 * Base Select Field
 */
abstract class BaseSelectField extends Field
{
	use HandleFieldTypes;

	protected $options;
	protected $output;
	private $stringOptionKeys;

	const VALID_OUTPUT_TYPES = ['string', 'int', 'float', 'boolean'];

	public function __construct($id, $name, $label, $options, $description = '', $output = 'string')
	{
		if (!in_array($output, self::VALID_OUTPUT_TYPES, true)) {
			throw new \InvalidArgumentException("Invalid output type: $output. Expected one of: " . implode(', ', self::VALID_OUTPUT_TYPES));
		}
		parent::__construct($id, $name, $label, $description);
		$this->output = $output;
		$this->options = $options;
	}

	protected function getStringOptionKeys(): array
	{
		if ($this->stringOptionKeys === null) {
			$this->stringOptionKeys = array_map('strval', array_keys($this->options));
		}
		return $this->stringOptionKeys;
	}

	public function sanitize($value)
	{
		if (!in_array((string)$value, $this->getStringOptionKeys(), true)) {
			return $this->getDefaultValue();
		}

		return $this->convertToType($value, $this->output);
	}

	protected function getDefaultValue()
	{
		return '';
	}
}

/**
 * WordPress Fields
 */
class SelectField extends BaseSelectField
{
	public function render()
	{
		$output = sprintf(
			'<select name="%s" id="%s">',
			esc_attr($this->name),
			esc_attr($this->id)
		);

		$currentTypedValue = $this->sanitize($this->value);

		foreach ($this->options as $value => $label) {
			$typedValue = $this->sanitize($value);
			$selected = $currentTypedValue === $typedValue ? 'selected' : '';

			$output .= sprintf(
				'<option value="%s" %s>%s</option>',
				esc_attr($value),
				$selected,
				esc_html($label)
			);
		}

		$output .= '</select>';

		if ($this->description) {
			$output .= sprintf(
				'<p class="description">%s</p>',
				esc_html($this->description)
			);
		}

		return $output;
	}
}

class BooleanField extends Field
{
	public function sanitize($value)
	{
		return $value ? '1' : '0';
	}

	public function render()
	{
		$checked = $this->value === '1' ? 'checked' : '';
		return sprintf(
			'<input class="checkbox" type="checkbox" name="%s" id="%s" %s value="1">
             <span>%s</span>',
			esc_attr($this->name),
			esc_attr($this->id),
			$checked,
			esc_html($this->description)
		);
	}
}

class NumberField extends Field
{
	protected $min;
	protected $max;
	protected $step;

	public function __construct($id, $name, $label, $description = '', $min = 0, $max = null, $step = 'any')
	{
		parent::__construct($id, $name, $label, $description);
		$this->min = $min;
		$this->max = $max;
		$this->step = $step;
	}

	public function sanitize($value)
	{
		return is_numeric($value) ? $value : 0;
	}

	public function render()
	{
		return sprintf(
			'<input type="number" name="%s" id="%s" value="%s" min="%s" %s step="%s">
             <p class="description">%s</p>',
			esc_attr($this->name),
			esc_attr($this->id),
			esc_attr($this->value),
			esc_attr($this->min),
			$this->max ? sprintf('max="%s"', esc_attr($this->max)) : '',
			esc_attr($this->step),
			esc_html($this->description)
		);
	}
}

class TextField extends Field
{
	public function sanitize($value)
	{
		return sanitize_text_field($value);
	}

	public function render()
	{
		return sprintf(
			'<input type="text" name="%s" id="%s" value="%s">
            <p class="description">%s</p>',
			esc_attr($this->name),
			esc_attr($this->id),
			esc_attr($this->value),
			esc_html($this->description)
		);
	}
}

class ColorField extends Field
{
	protected $defaultValue;

	public function __construct($id, $name, $label, $description = '', $defaultValue = '#000000')
	{
		parent::__construct($id, $name, $label, $description);

		// Validate default value
		$sanitizedDefault = $this->sanitize($defaultValue);
		if (!$sanitizedDefault) {
			$sanitizedDefault = '#000000';
		}
		$this->defaultValue = $sanitizedDefault;
		$this->value = $this->defaultValue;
	}

	public function sanitize($value)
	{
		// If empty, return default
		if (empty($value)) {
			return $this->defaultValue;
		}

		// Ensure hashtag prefix
		$value = '#' . ltrim($value, '#');

		// Convert shorthand (3 chars) to full (6 chars)
		if (strlen($value) === 4) {
			$value = '#' . $value[1] . $value[1] . $value[2] . $value[2] . $value[3] . $value[3];
		}

		// Validate format using WordPress function
		$sanitized = sanitize_hex_color($value);

		return $sanitized ?: $this->defaultValue;
	}

	public function render()
	{
		return sprintf(
			'<input type="color" name="%s" id="%s" value="%s">
             <p class="description">%s</p>',
			esc_attr($this->name),
			esc_attr($this->id),
			esc_attr($this->value),
			esc_html($this->description)
		);
	}
}

/**
 * WooCommerce Fields
 */
class WCSelectField extends BaseSelectField
{
	protected function getDefaultValue()
	{
		return 'global';
	}

	public function __construct($id, $name, $label, $options, $description = '', $output = 'string')
	{
		parent::__construct($id, $name, $label, $options, $description, $output);
		$this->options = array_merge(
			['global' => 'Use Global Setting'],
			$this->options
		);
	}

	public function render()
	{
		$currentTypedValue = $this->sanitize($this->value);

		$displayValue = $currentTypedValue;
		if ($currentTypedValue !== 'global' && !is_string($currentTypedValue)) {
			$displayValue = (string)$currentTypedValue;
		}

		woocommerce_wp_select([
			'id' => $this->name,
			'label' => $this->label,
			'desc_tip' => true,
			'description' => $this->description,
			'options' => $this->options,
			'value' => $displayValue ?: 'global'
		]);
	}
}

class WCTextField extends Field
{
	public function __construct($id, $name, $label, $description = '')
	{
		$description = trim($description . ' Leave blank to use global option.');
		parent::__construct($id, $name, $label, $description);
	}

	public function sanitize($value)
	{
		return sanitize_text_field($value);
	}

	public function render()
	{
		woocommerce_wp_text_input([
			'id' => $this->name,
			'label' => $this->label,
			'desc_tip' => true,
			'description' => $this->description,
			'value' => $this->value
		]);
	}
}

class WCNumberField extends Field
{
	protected $step;

	public function __construct($id, $name, $label, $description = '', $step = 'any')
	{
		parent::__construct($id, $name, $label, $description);
		$this->step = $step;
	}

	public function sanitize($value)
	{
		return is_numeric($value) ? $value : 0;
	}

	public function render()
	{
		woocommerce_wp_text_input([
			'id' => $this->name,
			'label' => $this->label,
			'desc_tip' => true,
			'description' => $this->description,
			'type' => 'number',
			'custom_attributes' => [
				'step' => $this->step
			],
			'value' => $this->value
		]);
	}
}

class WCBooleanField extends Field
{
	public function sanitize($value)
	{
		return $value ? '1' : '0';
	}

	public function render()
	{
		woocommerce_wp_checkbox([
			'id' => $this->name,
			'label' => $this->label,
			'desc_tip' => true,
			'description' => $this->description,
			'value' => $this->value,
			'cbvalue' => '1'
		]);
	}
}

class WCColorField extends Field
{
	public function sanitize($value)
	{
		return sanitize_hex_color($value) ?: '#000000';
	}

	public function render()
	{
		woocommerce_wp_text_input([
			'id' => $this->name,
			'label' => $this->label,
			'desc_tip' => true,
			'description' => $this->description,
			'type' => 'color',
			'value' => $this->value
		]);
	}
}

class JsonUploadField extends Field
{
	protected $maxSize;

	public function __construct($id, $name, $label, $description = '', $maxSize = 5242880) // 5MB default
	{
		parent::__construct($id, $name, $label, $description);
		$this->maxSize = $maxSize;
	}

	public function sanitize($value)
	{
		if (empty($value)) {
			return '';
		}

		// Basic validation that it's a valid attachment ID
		if (!is_numeric($value) || get_post_type($value) !== 'attachment') {
			return '';
		}

		return $value;
	}

	public function render()
	{
		// Ensure media scripts are loaded
		if (!wp_script_is('media-upload')) {
			wp_enqueue_media();
		}

		\SmartCut\Formula\Admin\renderJsonUploadButton();
	}
}
