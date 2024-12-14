<?php

namespace SmartCut\Settings\Fields;

defined('ABSPATH') || exit;

define('SMARTCUT_FIELDS', [

	// BOOLEAN
	//--------------------------------------------------------

	'debug' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['general', 'basic'],
		'label' => 'Debug Mode',
		'description' => 'Enable debug logging in the browser console (developers only).',
		'show' => ['global']
	],
	'hide_diagram' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['optimisation', 'inputs'],
		'label' => 'Hide Diagram',
		'description' => 'Hide the cutting diagram from users.',
		'show' => ['global']
	],
	'allow_offcuts' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['pricing', 'offcuts'],
		'label' => 'Allow Offcuts',
		'description' => 'Allow offcuts to be included in orders for free.',
		'show' => ['global']
	],
	'customer_cutlist' => [
		'type' => 'boolean',
		'default' => '1',
		'group' => ['files', 'order'],
		'label' => 'Customer PDF',
		'description' => 'Make the cut list PDF available to customers.',
		'show' => ['global']
	],
	'disable_banding' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['extras', 'general'],
		'label' => 'Disable Banding',
		'description' => 'Turn off banding options.',
		'show' => ['global', 'product']
	],
	'disable_finish' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['extras', 'general'],
		'label' => 'Disable Finish',
		'description' => 'Turn off finish options.',
		'show' => ['global', 'product']
	],
	'disable_orientation' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['optimisation', 'inputs'],
		'label' => 'Disable Orientation',
		'description' => 'Prevent users from rotating parts. Enabled by default.',
		'show' => ['global', 'product']
	],
	'disable_part_name' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['optimisation', 'inputs'],
		'label' => 'Disable Part Naming',
		'description' => 'Prevent users from naming parts. Enabled by default.',
		'show' => ['global', 'product']
	],
	'enable_import' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['optimisation', 'inputs'],
		'label' => 'Enable Import',
		'description' => 'Allow CSV import functionality.',
		'show' => ['global', 'product']
	],
	'layout_dxf' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['files', 'order'],
		'label' => 'DXF Layout',
		'description' => 'Enable DXF file export for cutting layouts.',
		'show' => ['global']
	],
	'layout_ptx' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['files', 'order'],
		'label' => 'PTX Layout',
		'description' => 'Enable PTX file export for beam saws.',
		'show' => ['global']
	],
	'enable_formula' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['formula', 'general'],
		'label' => 'Enable formula pricing',
		'description' => 'Enable formula pricing for products.',
		'show' => ['global', 'product']
	],
	'enable_machining' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['machining', 'general'],
		'label' => 'Enable Machining',
		'description' => 'Enable all machining features.',
		'show' => ['global']
	],
	'disable_machining' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['machining', 'general'],
		'label' => 'Disable Machining',
		'description' => 'Turn off machining options.',
		'show' => ['product']
	],
	'machining_sides' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['machining', 'general'],
		'label' => 'Two-Sided Machining',
		'description' => 'Enable machining on both sides of material.',
		'show' => ['global']
	],
	'machining_holes' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['machining', 'holes'],
		'label' => 'Enable Holes',
		'description' => 'Allow hole drilling operations.',
		'show' => ['global']
	],
	'machining_holes_depth' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['machining', 'holes'],
		'label' => 'Hole Depth Control',
		'description' => 'Enable control over hole depths.',
		'show' => ['global']
	],
	'machining_hinge_holes' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['machining', 'holes'],
		'label' => 'Hinge Holes',
		'description' => 'Enable specialized hinge hole patterns.',
		'show' => ['global']
	],
	'machining_radius_corners' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['machining', 'corners'],
		'label' => 'Radius Corners',
		'description' => 'Enable rounded corner machining.',
		'show' => ['global']
	],
	'machining_bevel_corners' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['machining', 'corners'],
		'label' => 'Bevel Corners',
		'description' => 'Enable beveled corner machining.',
		'show' => ['global']
	],
	'machining_corners_enable_banding' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['machining', 'corners'],
		'label' => 'Corner Banding',
		'description' => 'Enable banding on machined corners.',
		'show' => ['global']
	],

	'enable_image_upload' => [
		'type' => 'boolean',
		'default' => '0',
		'group' => ['files', 'inputs'],
		'label' => 'Enable Image Uploads',
		'description' => 'Allow the user to upload images for each part.',
		'show' => ['global', 'product']
	],

	// STRING
	//--------------------------------------------------------

	'banding_types' => [
		'type' => 'string',
		'default' => '',
		'group' => ['pricing', 'extras'],
		'label' => 'Banding Products',
		'description' => 'Available banding WooCommerce product slugs (comma-separated).',
		'show' => ['global', 'product']
	],
	'finish_types' => [
		'type' => 'string',
		'default' => '',
		'group' => ['pricing', 'extras'],
		'label' => 'Finish Products',
		'description' => 'Available finish WooCommerce product slugs (comma-separated).',
		'show' => ['global', 'product']
	],
	'machining_corners_product' => [
		'type' => 'string',
		'default' => '',
		'group' => ['pricing', 'machining'],
		'label' => 'Corner Product',
		'description' => 'WooCommerce product slug for corner machining charges.',
		'show' => ['global', 'product']
	],
	'machining_holes_product' => [
		'type' => 'string',
		'default' => '',
		'group' => ['pricing', 'machining'],
		'label' => 'Holes Product',
		'description' => 'WooCommerce product slug for hole drilling charges.',
		'show' => ['global', 'product']
	],
	'product_category' => [
		'type' => 'string',
		'default' => 'cut-list',
		'group' => ['general', 'basic'],
		'label' => 'Product Category',
		'description' => 'WooCommerce category slugs for cut list products (comma-separated).',
		'show' => ['global']
	],
	'machining_holes_diameters' => [
		'type' => 'string',
		'default' => '',
		'group' => ['machining', 'holes'],
		'label' => 'Hole Diameters',
		'description' => 'Available hole diameters (comma-separated).',
		'show' => ['global']
	],
	'machining_holes_depths' => [
		'type' => 'string',
		'default' => '',
		'group' => ['machining', 'holes'],
		'label' => 'Hole Depths',
		'description' => 'Available hole depths (comma-separated).',
		'show' => ['global']
	],

	// INTEGER
	//--------------------------------------------------------

	'max_parts' => [
		'type' => 'int',
		'default' => 100,
		'group' => ['general', 'basic'],
		'label' => 'Maximum Parts',
		'description' => 'Maximum number of parts allowed per order. Set to 0 for unlimited.',
		'show' => ['global']
	],
	'min_spacing' => [
		'type' => 'int',
		'default' => 0,
		'group' => ['optimisation', 'saw'],
		'label' => 'Minimum Spacing',
		'description' => 'Minimum space between parts for efficiency / CNC cutting.',
		'show' => ['global']
	],

	// FLOAT
	//--------------------------------------------------------

	'blade_width' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['optimisation', 'saw'],
		'label' => 'Blade Width',
		'description' => 'Width of the cutting blade in mm/inches.',
		'show' => ['global']
	],
	'stack_height' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['optimisation', 'saw'],
		'label' => 'Stack Height',
		'description' => 'Maximum height for stacked cutting with beam saws.',
		'show' => ['global']
	],
	'surcharge' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['pricing', 'surcharge'],
		'label' => 'Surcharge Amount',
		'description' => 'Additional fee amount.',
		'show' => ['global', 'product']
	],
	'min_dimension' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['optimisation', 'inputs'],
		'label' => 'Minimum dimension',
		'description' => 'The minimum permitted dimension.',
		'show' => ['global']
	],
	'min_banding_charge' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['pricing', 'extras'],
		'label' => 'Minimum Banding Charge',
		'description' => 'Minimum fee for any banding.',
		'show' => ['global']
	],
	'min_finish_charge' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['pricing', 'extras'],
		'label' => 'Minimum Finish Charge',
		'description' => 'Minimum fee for any finishing.',
		'show' => ['global']
	],
	'cut_length_price' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['pricing', 'strategy'],
		'label' => 'Cut Length Price',
		'description' => 'Price per unit length of cuts.',
		'show' => ['global', 'product']
	],
	'per_part_price' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['pricing', 'strategy'],
		'label' => 'Price Per Part',
		'description' => 'Additional fee per individual part.',
		'show' => ['global', 'product']
	],
	'stock_trim_x1' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['optimisation', 'stock'],
		'label' => 'L1 Side Trim',
		'description' => 'Trim on the longer side.',
		'show' => ['global']
	],
	'stock_trim_x2' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['optimisation', 'stock'],
		'label' => 'L2 Side Trim',
		'description' => 'Trim on the longer side.',
		'show' => ['global']
	],
	'stock_trim_y1' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['optimisation', 'stock'],
		'label' => 'W1 Side Trim',
		'description' => 'Trim on the shorter side.',
		'show' => ['global']
	],
	'stock_trim_y2' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['optimisation', 'stock'],
		'label' => 'W2 Side Trim',
		'description' => 'Trim on the shorter side.',
		'show' => ['global']
	],
	'part_trim' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['optimisation', 'parts'],
		'label' => 'Part Trim',
		'description' => 'Trim for each part side - negative values increase the part size.',
		'show' => ['global']
	],

	// MACHINING
	//--------------------------------------------------------
	'machining_holes_default_diameter' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['machining', 'holes'],
		'label' => 'Default Hole Diameter',
		'description' => 'Standard hole size.',
		'show' => ['global']
	],
	'machining_holes_min_diameter' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['machining', 'holes'],
		'label' => 'Minimum Hole Diameter',
		'description' => 'Smallest allowed hole size.',
		'show' => ['global']
	],
	'machining_holes_max_diameter' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['machining', 'holes'],
		'label' => 'Maximum Hole Diameter',
		'description' => 'Largest allowed hole size.',
		'show' => ['global']
	],
	'machining_holes_default_depth' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['machining', 'holes'],
		'label' => 'Default Hole Depth',
		'description' => 'Standard hole depth.',
		'show' => ['global']
	],
	'machining_holes_min_depth' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['machining', 'holes'],
		'label' => 'Minimum Hole Depth',
		'description' => 'Shallowest allowed hole.',
		'show' => ['global']
	],
	'machining_holes_max_depth' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['machining', 'holes'],
		'label' => 'Maximum Hole Depth',
		'description' => 'Deepest allowed hole.',
		'show' => ['global']
	],
	'machining_hinge_holes_minimum_hole_distance' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['machining', 'hinges'],
		'label' => 'Min Hole Spacing',
		'description' => 'Minimum distance between hinge holes.',
		'show' => ['global']
	],
	'machining_hinge_holes_default_distance_from_edge' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['machining', 'hinges'],
		'label' => 'Edge Distance',
		'description' => 'Default distance from edge to first hole.',
		'show' => ['global']
	],
	'machining_hinge_holes_default_outer_spacing' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['machining', 'hinges'],
		'label' => 'Outer Spacing',
		'description' => 'Default spacing for outer hinge holes.',
		'show' => ['global']
	],
	'machining_hinge_holes_default_hinge_length' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['machining', 'hinges'],
		'label' => 'Hinge Length',
		'description' => 'Default overall length for hinge pattern.',
		'show' => ['global']
	],
	'machining_corners_min_value' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['machining', 'corners'],
		'label' => 'Minimum Corner Size',
		'description' => 'Smallest allowed corner modification.',
		'show' => ['global']
	],
	'machining_corners_max_value' => [
		'type' => 'float',
		'default' => 0.0,
		'group' => ['machining', 'corners'],
		'label' => 'Maximum Corner Size',
		'description' => 'Largest allowed corner modification.',
		'show' => ['global']
	],

	// HEX
	//--------------------------------------------------------

	'part_a_color' => [
		'type' => 'hex',
		'default' => '#118ab2',
		'group' => ['colors', 'parts'],
		'label' => 'Part Base Color',
		'description' => 'Base color for parts in the diagram.',
		'show' => ['global']
	],
	'part_b_color' => [
		'type' => 'hex',
		'default' => '#118ab2',
		'group' => ['colors', 'parts'],
		'label' => 'Part Secondary Color',
		'description' => 'Seconday part color allows differentiation between parts.',
		'show' => ['global']
	],
	'part_hover_color' => [
		'type' => 'hex',
		'default' => '#29c778',
		'group' => ['colors', 'parts'],
		'label' => 'Part Hover Color',
		'description' => 'Color for part hover effects.',
		'show' => ['global']
	],
	'part_selected_color' => [
		'type' => 'hex',
		'default' => '#1bc319',
		'group' => ['colors', 'parts'],
		'label' => 'Part Selected Color',
		'description' => 'Color for selected parts.',
		'show' => ['global']
	],
	'stock_color' => [
		'type' => 'hex',
		'default' => '#ffd166',
		'group' => ['colors', 'stock'],
		'label' => 'Stock Color',
		'description' => 'Color for stock in the diagram.',
		'show' => ['global']
	],
	'button_color' => [
		'type' => 'hex',
		'default' => '#2c8d8f',
		'group' => ['colors', 'buttons'],
		'label' => 'Button Color',
		'description' => 'Color for buttons.',
		'show' => ['global']
	],
	'button_text_color' => [
		'type' => 'hex',
		'default' => '#FFFFFF',
		'group' => ['colors', 'buttons'],
		'label' => 'Button Text Color',
		'description' => 'Color for button text.',
		'show' => ['global']
	],
	'text_color' => [
		'type' => 'hex',
		'default' => '#FFFFFF',
		'group' => ['colors', 'text'],
		'label' => 'Text Color',
		'description' => 'Color for text in the interface. Used to label parts.',
		'show' => ['global']
	],

	// SELECT
	//--------------------------------------------------------

	'stock_type' => [
		'type' => 'select',
		'output' => 'string',
		'default' => 'sheet',
		'group' => ['optimisation', 'stock'],
		'label' => 'Stock Type',
		'description' => 'Type of stock material.',
		'options' => [
			'sheet' => 'Sheet',
			'linear' => 'Linear',
			'roll' => 'Roll',
		],
		'show' => ['global', 'product']
	],
	'cut_preference' => [
		'type' => 'select',
		'output' => 'string',
		'default' => '',
		'group' => ['optimisation', 'saw'],
		'label' => 'Cut Preference',
		'description' => 'Preferred cutting direction and method.',
		'options' => [
			'' => 'N/A',
			'length' => 'Length',
			'width' => 'Width',
			'efficiency' => 'Efficiency',
			'beam' => 'Beam saws',
		],
		'show' => ['global', 'product']
	],

	'stock_selection' => [
		'type' => 'select',
		'output' => 'string',
		'default' => 'efficiency',
		'group' => ['optimisation', 'stock'],
		'label' => 'Stock Selection',
		'description' => 'How the winning stock items are chosen.',
		'options' => [
			'efficiency' => 'Stock will be chosen based on efficiency',
			'smallest' => 'Smallest stock will be used first',
		],
		'show' => ['global']
	],
	'stock_grain' => [
		'type' => 'select',
		'output' => 'string',
		'default' => '',
		'group' => ['optimisation', 'stock'],
		'label' => 'Grain Direction',
		'description' => 'Default grain direction for materials.',
		'options' => [
			'' => 'No grain',
			'l' => 'Grain runs along longer side (length)',
			'w' => 'Grain runs along shorter side (width)',
		],
		'show' => ['global', 'product']
	],
	'pricing_strategy' => [
		'type' => 'select',
		'output' => 'string',
		'default' => 'full_stock',
		'group' => ['pricing', 'strategy'],
		'label' => 'Pricing Strategy',
		'description' => 'Method for calculating costs.',
		'options' => [
			'full_stock' => 'Full Stock',
			'part_area' => 'Part Area',
			'cut_length' => 'Cut Length',
			'full_stock_plus_cut_length' => 'Full Stock Plus Cut Length',
			'full_stock_plus_num_parts' => 'Full Stock Plus Number of Parts',
			'roll_length' => 'Roll length',
		],
		'show' => ['global', 'product']
	],
	'surcharge_type' => [
		'type' => 'select',
		'output' => 'string',
		'default' => 'none',
		'group' => ['pricing', 'surcharge'],
		'label' => 'Surcharge Type',
		'description' => 'How surcharges are applied.',
		'options' => [
			'none' => 'None',
			'once' => 'Once',
			'per_sheet' => 'Per Sheet',
		],
		'show' => ['global', 'product']
	],
	'units' => [
		'type' => 'select',
		'output' => 'string',
		'default' => 'decimal',
		'group' => ['general', 'basic'],
		'label' => 'Units',
		'description' => 'Unit system for measurements.',
		'options' => [
			'decimal' => 'Decimal / mm',
			'fraction' => 'Fractions / inches',
		],
		'show' => ['global']
	],
	'orientation_model' => [
		'type' => 'select',
		'output' => 'int',
		'default' => 0,
		'group' => ['optimisation', 'inputs'],
		'label' => 'Orientation Model',
		'description' => 'Part orientation calculation method.',
		'options' => [
			0 => 'Default',
			1 => 'L/W order controls orientation',
			2 => 'L aligns to grain direction',
		],
		'show' => ['global']
	],

	// SPECIAL
	//--------------------------------------------------------

	'formula_json' => [
		'show' => ['product'],
		'type' => 'json_upload',
		'default' => '',
		'group' => ['formula', 'general'],
		'label' => 'Formula JSON Upload',
		'description' => 'Upload a JSON file with formula pricing data.',
	],
]);

define('SMARTCUT_GROUPS', [
	'general' => [
		'basic' => ['title' => 'Basic Settings', 'description' => 'Configure basic settings'],
		'optimisation' => ['title' => 'Optimisation Settings', 'description' => 'Configure optimisation options'],
		'list' => ['title' => 'Cut List Settings', 'description' => 'Configure the cut list options'],
		'diagram' => ['title' => 'Diagram Settings', 'description' => 'Configure diagram display options'],
		'stock' => ['title' => 'Stock Settings', 'description' => 'Configure stock handling']
	],
	'optimisation' => [
		'parts' => ['title' => 'Part Settings', 'description' => 'Configure parts'],
		'stock' => ['title' => 'Stock Settings', 'description' => 'Configure stock'],
		'saw' => ['title' => 'Saw Settings', 'description' => 'Configure cutting preferences'],
		'inputs' => ['title' => 'Input Settings', 'description' => 'Configure the user input options'],
	],
	'pricing' => [
		'strategy' => ['title' => 'Pricing Strategy', 'description' => 'Configure pricing calculation method'],
		'surcharge' => ['title' => 'Surcharge Settings', 'description' => 'Configure surcharge options'],
		'extras' => ['title' => 'Extras Products', 'description' => 'Separate products control extras pricing'],
		'machining' => ['title' => 'Machining Products', 'description' => 'Separate products control machining pricing'],
		'offcuts' => ['title' => 'Offcuts', 'description' => 'Configure treatment of offcuts']
	],
	'extras' => [
		'general' => ['title' => 'Extra Options', 'description' => 'Configure additional options']
	],
	'files' => [
		'order' => ['title' => 'Cut list files', 'description' => 'Configure how cut list files are handled in the cart and order'],
		'inputs' => ['title' => 'User file handling', 'description' => 'Configure user managed files'],
	],
	'machining' => [
		'general' => ['title' => 'General Machining', 'description' => 'Basic machining options'],
		'holes' => ['title' => 'Hole Settings', 'description' => 'Configure hole drilling options'],
		'corners' => ['title' => 'Corner Settings', 'description' => 'Configure corner machining'],
		'hinges' => ['title' => 'Hinge Settings', 'description' => 'Configure hinge hole patterns']
	],
	'colors' => [
		'parts' => ['title' => 'Part Colors', 'description' => 'Configure colors for parts display'],
		'stock' => ['title' => 'Stock Colors', 'description' => 'Configure colors for stock materials'],
		'buttons' => ['title' => 'Button Colors', 'description' => 'Configure colors for interface buttons'],
		'text' => ['title' => 'Text Colors', 'description' => 'Configure colors for interface text']
	],
	'formula' => [
		'general' => ['title' => 'Formula Pricing', 'description' => 'Configure formula pricing settings']
	]
]);

function validateFieldsAgainstGroups()
{
	$mismatches = [];

	foreach (SMARTCUT_FIELDS as $fieldId => $fieldConfig) {
		if (!isset($fieldConfig['group']) || !is_array($fieldConfig['group'])) {
			$mismatches[] = "{$fieldId}: missing group definition";
			continue;
		}

		$group = $fieldConfig['group'][0];
		$section = $fieldConfig['group'][1];

		if (!isset(SMARTCUT_GROUPS[$group])) {
			$mismatches[] = "{$fieldId}: group '{$group}' not found in SMARTCUT_GROUPS";
		} elseif (!isset(SMARTCUT_GROUPS[$group][$section])) {
			$mismatches[] = "{$fieldId}: section '{$section}' not found in group '{$group}'";
		}
	}

	if (!empty($mismatches)) {
		throw new \Exception("Invalid field mappings:\n- " . implode("\n- ", $mismatches));
	}
}

validateFieldsAgainstGroups();

function validateFieldDefaults()
{
	$issues = [];

	foreach (SMARTCUT_FIELDS as $fieldId => $fieldConfig) {
		if (!isset($fieldConfig['default'])) {
			$issues[] = "{$fieldId}: missing default value";
			continue;
		}

		if (!isset($fieldConfig['type'])) {
			$issues[] = "{$fieldId}: missing type definition";
			continue;
		}

		switch ($fieldConfig['type']) {
			case 'select':
				if (!isset($fieldConfig['options']) || !array_key_exists($fieldConfig['default'], $fieldConfig['options'])) {
					$issues[] = "{$fieldId}: default value not found in options list";
				}
				break;
			case 'int':
				if (!is_int($fieldConfig['default']) && !ctype_digit($fieldConfig['default'])) {
					$issues[] = "{$fieldId}: default value should be integer, got " . gettype($fieldConfig['default']);
				}
				break;
			case 'float':
				if (!is_float($fieldConfig['default']) && !is_numeric($fieldConfig['default'])) {
					$issues[] = "{$fieldId}: default value should be float, got " . gettype($fieldConfig['default']);
				}
				break;
			case 'string':
				if (!is_string($fieldConfig['default'])) {
					$issues[] = "{$fieldId}: default value should be string, got " . gettype($fieldConfig['default']);
				}
				break;
			case 'boolean':
				if (!in_array($fieldConfig['default'], ['0', '1'], true)) {
					$issues[] = "{$fieldId}: default value should be '0' or '1', got '{$fieldConfig['default']}'";
				}
				break;
			case 'hex':
				if (!preg_match('/^#[a-fA-F0-9]{6}$/', $fieldConfig['default'])) {
					$issues[] = "{$fieldId}: default value should be valid hex color (e.g. #FF0000), got '{$fieldConfig['default']}'";
				}
				break;
		}
	}

	if (!empty($issues)) {
		throw new \Exception("Invalid default values:\n- " . implode("\n- ", $issues));
	}
}

validateFieldDefaults();

trait FieldGroupBuilder
{
	private function categorizeField($fieldConfig)
	{
		if ($fieldConfig['type'] === 'select') {
			return 'select';
		} elseif ($fieldConfig['type'] === 'boolean') {
			return 'boolean';
		} elseif (in_array($fieldConfig['type'], ['int', 'float'])) {
			return 'number';
		} elseif ($fieldConfig['type'] === 'json_upload') {
			return 'json_upload';
		}
		return 'text'; // default
	}

	private function initializeCategories()
	{
		return [
			'select' => [],
			'text' => [],
			'number' => [],
			'boolean' => [],
			'json_upload' => []
		];
	}

	private function initializeGroupStructure()
	{
		$groups = [];

		foreach (SMARTCUT_GROUPS as $groupId => $groupSections) {
			$groups[$groupId] = [
				'title' => ucfirst($groupId),
				'sections' => []
			];

			foreach ($groupSections as $sectionId => $sectionInfo) {
				$groups[$groupId]['sections'][$sectionId] = [
					'title' => $sectionInfo['title'],
					'fields' => $this->initializeCategories()
				];
			}
		}

		return $groups;
	}

	private function cleanEmptyGroups(&$groups)
	{
		foreach ($groups as $groupId => &$group) {
			foreach ($group['sections'] as $sectionId => $section) {
				$hasFields = false;
				foreach ($section['fields'] as $category => $fields) {
					if (!empty($fields)) {
						$hasFields = true;
						break;
					}
				}
				if (!$hasFields) {
					unset($group['sections'][$sectionId]);
				}
			}
			if (empty($group['sections'])) {
				unset($groups[$groupId]);
			}
		}
	}
}

define('SMARTCUT_SETTINGS_SCRIPTS', [
	'cut_preference' => [
		'callback' => 'SmartCut\Settings\Fields\cut_preference_script',
		'dependencies' => ['stock_type'] // Fields this script interacts with
	],
	'cut_length_price' => [
		'callback' => 'SmartCut\Settings\Fields\cut_length_price_script',
		'dependencies' => ['pricing_strategy']
	],
	'per_part_price' => [
		'callback' => 'SmartCut\Settings\Fields\per_part_price_script',
		'dependencies' => ['pricing_strategy']
	],
	'surcharge' => [
		'callback' => 'SmartCut\Settings\Fields\surcharge_script',
		'dependencies' => ['surcharge_type']
	]
]);

trait ScriptHandler
{
	private function maybeRenderScript($fieldId, $fieldPrefix = '')
	{
		// Remove prefix to match SMARTCUT_SETTINGS_SCRIPTS dependencies
		$baseFieldId = str_replace($fieldPrefix, '', $fieldId);

		foreach (SMARTCUT_SETTINGS_SCRIPTS as $script) {
			if (in_array($baseFieldId, $script['dependencies'])) {
				if (function_exists($script['callback'])) {
					call_user_func($script['callback']);
				}
			}
		}
	}
}

/**
 * Used site-wide to get global settings
 * @param string $type
 * @param array $fields
 * @return array
 */
function getSettingFields($type = 'global', $fields = null)
{

	$validTypes = ['global', 'product', 'all'];

	if (!in_array($type, $validTypes, true)) {
		throw new \InvalidArgumentException("Invalid type: $type. Expected one of: " . implode(', ', $validTypes));
	}


	if ($type === 'all') {
		$filtered = SMARTCUT_FIELDS;
	} else {
		$filtered = array_filter(SMARTCUT_FIELDS, function ($field) use ($type) {
			return isset($field['show']) && in_array($type, $field['show']);
		});
	}

	if ($fields) {
		return array_map(function ($field) {
			return $field['type'] ?? null;
		}, $filtered);
	}

	return $filtered;
}

function cutPreferenceScript()
{
?>
	<script>
		jQuery(document).ready(function($) {
			// Handle both product and settings contexts
			var stockTypeField = $('#smartcut_stock_type');
			var cutPreferenceField = $('#smartcut_cut_preference');
			var cutPreferenceOptions = cutPreferenceField.find('option');

			stockTypeField.change(function() {
				updateCutPreference(true);
			});

			function disableCutPreferenceOptions() {
				cutPreferenceField.val('');
				cutPreferenceField.prop('disabled', true);
			}

			function enableCutPreferenceOptions(selectValue = false) {
				cutPreferenceField.prop('disabled', false);
				cutPreferenceField.find('option[value=""]').prop('disabled', true);
				if (selectValue) {
					cutPreferenceField.find(`option[value="${selectValue}"]`).prop('selected', true);
				}
			}

			function updateCutPreference(preselect = false) {
				var stockType = stockTypeField.val();

				switch (stockType) {
					case 'global':
						enableCutPreferenceOptions('global');
						break;
					case 'sheet':
						enableCutPreferenceOptions('length');
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

function surchargeScript()
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

function cutLengthPriceScript()
{
?>
	<script>
		jQuery(document).ready(function($) {
			var pricingStrategyField = $('#smartcut_pricing_strategy');
			var cutLengthPriceField = $('#smartcut_cut_length_price');

			function toggleCutLengthPriceField() {
				if (pricingStrategyField.val() === 'full_stock_plus_cut_length') {
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

function perPartPriceScript()
{
?>
	<script>
		jQuery(document).ready(function($) {
			var pricingStrategyField = $('#smartcut_pricing_strategy');
			var pricingField = $('#smartcut_per_part_price');

			function togglePerPartPriceField() {
				if (pricingStrategyField.val() === 'full_stock_plus_num_parts') {
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
