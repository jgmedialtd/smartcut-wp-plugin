<?php

namespace SmartCut\Cutlist\Settings;

/**
 * used site wide to get global settings
 * @return string[]
 */
function get_global_setting_fields()
{
    return  [

        //booleans
        'debug' => 'boolean',
        'hide_diagram' => 'boolean',
        'allow_offcuts' => 'boolean',
        'customer_cutlist' => 'boolean',
        'disable_banding' => 'boolean',
        'disable_orientation' => 'boolean',
        'disable_part_name' => 'boolean',
        'layout_dxf' => 'boolean',

        //machining booleans
        'enable_machining' => 'boolean',
        'machining_sides' => 'boolean',
        'machining_holes' => 'boolean',
        'machining_holes_depth' => 'boolean',
        'machining_hinge_holes' => 'boolean',
        'machining_radius_corners' => 'boolean',
        'machining_bevel_corners' => 'boolean',
        'machining_corners_enable_banding' => 'boolean',

        //strings
        'cut_preference' => 'string',
        'stock_type' => 'string',
        'pricing_strategy' => 'string',
        'banding_types' => 'string',
        'machining_corners_product' => 'string',
        'machining_holes_product' => 'string',
        'units' => 'string',
        'product_category' => 'string',
        'surcharge_type' => 'string',

        //machining strings
        'machining_holes_diameters' => 'string',
        'machining_holes_depths' => 'string',

        //integers
        'max_parts' => 'int',

        //floats
        'blade_width' => 'float',
        'stack_height' => 'float',
        'surcharge' => 'float',
        'min_banding_charge' => 'float',
        'cut_length_price' => 'float',
        'per_part_price' => 'float',
        'stock_trim_x1' => 'float',
        'stock_trim_x2' => 'float',
        'stock_trim_y1' => 'float',
        'stock_trim_y2' => 'float',

        //machining floats
        'machining_holes_default_diameter' => 'float',
        'machining_holes_min_diameter' => 'float',
        'machining_holes_max_diameter' => 'float',
        'machining_holes_default_depth' => 'float',
        'machining_holes_min_depth' => 'float',
        'machining_holes_max_depth' => 'float',

        'machining_hinge_holes_minimum_hole_distance' => 'float',
        'machining_hinge_holes_default_distance_from_edge' => 'float',
        'machining_hinge_holes_default_outer_spacing' => 'float',
        'machining_hinge_holes_default_hinge_length' => 'float',

        'machining_corners_min_value' => 'float',
        'machining_corners_max_value' => 'float',

        //hex
        'part_a_color' => 'hex',
        'part_b_color' => 'hex',
        'part_hover_color' => 'hex',
        'part_selected_color' => 'hex',
        'stock_color' => 'hex',
        'button_color' => 'hex',
        'button_text_color' => 'hex',
        'text_color' => 'hex',
    ];
}

function get_product_setting_fields()
{
    return [
        'disable_machining' => 'boolean'
    ];
}

function get_combined_setting_fields()
{

    return array_merge(get_global_setting_fields(), get_product_setting_fields());
}

function sanitize_input($input)
{

    $input = sanitize_text_field($input);
    $input = trim($input);
    return $input;
}

function sanitize_hex($input)
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

function sanitize_int($input, $min = null)
{

    $sanitized = sanitize_input($input);
    $sanitized = intval($sanitized);

    if ($min !== null) {
        if ($sanitized < $min) $sanitized = 1;
    }

    return $sanitized;
}

function sanitize_float($input, $min = null)
{

    $sanitized = sanitize_input($input);
    $sanitized = floatval($sanitized);

    if ($min !== null) {
        if ($sanitized < $min) $sanitized = 1;
    }

    return $sanitized;
}

/**
 * get an array of product categories from a comma separated string
 * @param string $cutlist_categories
 * @return string[]
 */
function get_product_categories($cutlist_categories)
{
    $cutlist_categories = explode(',', str_replace(' ', '', $cutlist_categories));

    $categories = [];

    foreach ($cutlist_categories as $category) {
        $categories[] = $category;
    }

    return $categories;
}

class Options
{
    private $options;
    private $fields;

    public function __construct()
    {
        add_action('admin_menu', array($this, 'add_plugin_page'));
        add_action('admin_init', array($this, 'page_init'));
        // $this->options = \get_option('smartcut_options');
        $this->fields = get_global_setting_fields();
    }


    public function add_plugin_page()
    {
        add_options_page(
            'SmartCut', // page_title
            'SmartCut', // menu_title
            'manage_options', // capability
            'smartcut', // menu_slug
            array($this, 'create_admin_page') // function
        );
    }

    public function create_admin_page()
    {

        $this->options = get_option('smartcut_options');

?>

        <div class="wrap">
            <h2>SmartCut</h2>
            <p>Version <strong><?php echo SMARTCUT_CURRENT_VERSION; ?></strong></p>
            <p>Please help configure SmartCut by adding your preferences below.</p>
            <p>Some of these settings can be overridden in the product admin page.</p>
            <br />
            <br />

            <h3>Quick start</h3>

            <ul>
                <li>• Use mm or inches for units - <strong>be consistent throughout</strong>.</li>
                <li>• When ready to go live, sign up for a subscription to the <a target="_blank" href="https://smartcut.dev/">SmartCut API</a>.</li>
                <li>• Set your domain in <a target="_blank" href="https://smartcut.dev/account">your account</a>.</li>
                <li>• Read the notes <a target="_blank" href="https://smartcut.dev/wp-plugin">here</a>.</li>
            </ul>

            <br />
            <br />

            <form method="post" action="options.php">
                <?php
                settings_fields('smartcut_group');
                do_settings_sections('smartcut-admin');
                submit_button();
                ?>
            </form>
        </div>
    <?php }


    public function add_settings_fields($fields, $section)
    {

        foreach ($fields as $field) {

            if (isset($field['callback'])) {
                $callback = $field['callback'];
            } else {
                $callback = array($this, 'create_input');
            }

            if (isset($field['callback_args'])) {
                $callback_args = $field['callback_args'];
            } else {
                $callback_args = null;
            }

            add_settings_field(
                $field['id'],
                $field['label'],
                $callback,
                'smartcut-admin',
                $section,
                $callback_args
            );
        }
    }

    public function page_init()
    {

        $this->options = get_option('smartcut_options');


        register_setting(
            'smartcut_group',
            'smartcut_options',
            array($this, 'get_values')
        );

        //general settings
        add_settings_section(
            'setting_section',
            'Cut list configuration',
            function () {
                echo 'Configure the SmartCut API';
            },
            'smartcut-admin'
        );

        $this->add_settings_fields([
            [
                'id' => 'blade_width',
                'label' => 'Blade width',
                'callback_args' => ['blade_width']
            ],
            [
                'id' => 'stock_type',
                'label' => 'Stock type',
                'callback' => array($this, 'create_drop_down'),
                'callback_args' => ['stock_type', null, [
                    'sheet' => 'Sheet',
                    'linear' => 'Linear',
                    'roll' => 'Roll',
                ]],

            ],
            [
                'id' => 'cut_preference',
                'label' => 'Cut preference',
                'callback' => array($this, 'create_drop_down'),
                'callback_args' => ['cut_preference', null, [
                    '' => 'N/A',
                    'length' => 'Length',
                    'width' => 'Width',
                    'efficiency' => 'Efficiency',
                    'beam' => 'Beam saws',
                ]]
            ],
            [
                'id' => 'stack_height',
                'label' => 'Stack height',
                'callback_args' => ['stack_height', 'Set the maximum height of a stack of identical stock', 'stack_height_script']
            ],
            [
                'id' => 'units',
                'label' => 'Units',
                'callback' => array($this, 'create_drop_down'),
                'callback_args' => ['units', null, [
                    'decimal' => 'Decimal / mm',
                    'fraction' => 'Fractions / inches',
                ]]
            ],
            [
                'id' => 'max_parts',
                'label' => 'Max parts',
                'callback_args' => ['max_parts', 'Set to the max number of parts in your API plan or set to zero for unlimited']
            ],
            [
                'id' => 'disable_orientation',
                'label' => 'Disable part orientation',

                'callback_args' => ['disable_orientation', 'Remove the option to allow users to set the rotation of parts']
            ],
            [
                'id' => 'disable_part_name',
                'label' => 'Disable part name',

                'callback_args' => ['disable_part_name', 'Remove the option to allow users to name their parts']
            ],
            [
                'id' => 'layout_dxf',
                'label' => 'Layout DXF',

                'callback_args' => ['layout_dxf', 'Add a DXF file to the order with the layout of the parts']
            ],
            [
                'id' => 'debug',
                'label' => 'Debug',

                'callback_args' => ['debug', 'Show debug info in the browser console']
            ],

        ], 'setting_section');

        //shop settings
        add_settings_section(
            'shop_section',
            'Shop options',
            function () {
                echo 'Customize the shopping experience';
            },
            'smartcut-admin'
        );

        $this->add_settings_fields([
            [
                'id' => 'allow_offcuts',
                'label' => 'Allow offcuts',
                'callback_args' => ['allow_offcuts', 'Allow offcuts to be included']
            ],
            [
                'id' => 'product_category',
                'label' => 'Product category',
                'callback_args' => ['product_category', 'The slug(s) of the product categories to show the cut list tool. Use commas to separate with no spaces.']
            ],

            [
                'id' => 'hide_diagram',
                'label' => 'Cutting diagram',
                'callback_args' => ['hide_diagram', 'Hide the cutting diagram from the user']
            ],
            [
                'id' => 'customer_cutlist',
                'label' => 'Provide PDF to user',
                'callback_args' => ['customer_cutlist', 'Add a link to the PDF cutlist to the customer order so they can view it']
            ],


        ], 'shop_section');

        //pricing
        add_settings_section(
            'pricing_section',
            'Pricing settings',
            function () {
                echo 'Prices should include or exclude tax depending on your WooCommerce settings';
            },
            'smartcut-admin'
        );

        $this->add_settings_fields([
            [
                'id' => 'pricing_strategy',
                'label' => 'Stock pricing strategy',
                'callback' => array($this, 'create_drop_down'),
                'callback_args' => array('pricing_strategy', null, [
                    'full_sheet' => 'Full sheet',
                    'part_area' => 'Part area',
                    'cut_length' => 'Cut length',
                    'full_sheet_plus_cut_length' => 'Full sheet plus cut length',
                    'full_sheet_plus_num_parts' => 'Full sheet plus number of parts',
                ])
            ],

            [
                'id' => 'cut_length_price',
                'label' => 'Cut length price ',
                'callback_args' => ['cut_length_price', 'Price per meter / foot if using the <strong>Full sheet plus cut length</strong> pricing strategy. Use the format 1.23.', 'cut_length_price_script'],
            ],
            [
                'id' => 'per_part_price',
                'label' => 'Price per part ',
                'callback_args' => ['per_part_price', 'Price per part if using the <strong>Full sheet plus number of parts</strong> pricing strategy. Use the format 1.23.', 'per_part_price_script'],
            ],
            [
                'id' => 'surcharge_type',
                'label' => 'Cut to size surcharge type',
                'callback' => array($this, 'create_drop_down'),
                'callback_args' => array('surcharge_type', null, [
                    'none' => 'None',
                    'once' => 'Once',
                    'per_sheet' => 'Per sheet',
                ])
            ],
            [
                'id' => 'surcharge',
                'label' => 'Surcharge',
                'callback_args' => ['surcharge', 'Added using the logic set above. In the format 1.23', 'surcharge_script']
            ],
            [
                'id' => 'banding_types',
                'label' => 'Banding types',
                'callback_args' => ['banding_types', 'Banding pricing is controlled by individual banding products. This field includes the slugs of your banding products. Separate with a comma.']
            ],
            [
                'id' => 'min_banding_charge',
                'label' => 'Minimum banding charge',
                'callback_args' => ['min_banding_charge', 'Minimum charge for banding. Set to zero for no minimum.']
            ],
            [
                'id' => 'machining_holes_product',
                'label' => 'Holes',
                'callback_args' => ['machining_holes_product', 'Hole pricing is controlled by an individual hole product. This field includes the slug of your hole product.']
            ],
            [
                'id' => 'machining_corners_product',
                'label' => 'Corners',
                'callback_args' => ['machining_corners_product', 'Corner pricing is controlled by an individual corner product. This field includes the slug of your corner product.']
            ],


        ], 'pricing_section');

        //trim
        add_settings_section(
            'trim_section',
            'Stock trim',
            function () {
                echo 'Add trim cuts to your stock';
            },
            'smartcut-admin'
        );

        $this->add_settings_fields([
            [
                'id' => 'stock_trim_x1',
                'label' => 'L1',
                'callback_args' => ['stock_trim_x1']
            ],
            [
                'id' => 'stock_trim_x2',
                'label' => 'L2',
                'callback_args' => ['stock_trim_x2']
            ],
            [
                'id' => 'stock_trim_y1',
                'label' => 'W1',
                'callback_args' => ['stock_trim_y1']
            ],
            [
                'id' => 'stock_trim_y2',
                'label' => 'W1',
                'callback_args' => ['stock_trim_y2']
            ],


        ], 'trim_section');

        //machining
        add_settings_section(
            'machining_section',
            'Machining options',
            function () {
                echo 'Settings for the machining options. All numbers to use the format 1.23';
            },
            'smartcut-admin'
        );

        $this->add_settings_fields([
            [
                'id' => 'enable_machining',
                'label' => 'Enable machining',
                'callback_args' => ['enable_machining']
            ],

            //sides
            [
                'id' => 'machining_sides',
                'label' => 'Enable machining on both sides',
                'callback_args' => ['machining_sides']
            ],

            //holes
            [
                'id' => 'machining_holes',
                'label' => 'Enable drilled holes',
                'callback_args' => ['machining_holes']
            ],


            [
                'id' => 'machining_holes_default_diameter',
                'label' => 'Default diameter',
                'callback_args' => ['machining_holes_default_diameter', 'Default diameter for drilled holes.']
            ],
            [
                'id' => 'machining_holes_diameters',
                'label' => 'Diameter options',
                'callback_args' => ['machining_holes_diameters', 'Diameter options for drilled holes (creates a drop down). Separate with a comma. Format is 1.23. Leave blank for user input.']
            ],
            [
                'id' => 'machining_holes_min_diameter',
                'label' => 'Min diameter',
                'callback_args' => ['machining_holes_min_diameter', 'Minimum diameter for drilled holes. Set to zero for no minimum.']
            ],
            [
                'id' => 'machining_holes_max_diameter',
                'label' => 'Max diameter',
                'callback_args' => ['machining_holes_max_diameter', 'Maximum diameter for drilled holes. Set to zero for no maximum.']
            ],
            [
                'id' => 'machining_holes_depth',
                'label' => 'Enable hole depth',
                'callback_args' => ['machining_holes_depth', 'If disabled, we assume holes through the stock.']
            ],
            [
                'id' => 'machining_holes_depths',
                'label' => 'Depth options',
                'callback_args' => ['machining_holes_depths', 'Depth options for drilled holes (creates a drop down). Separate with a comma. Format is 1.23. Leave blank for user input.']
            ],
            [
                'id' => 'machining_holes_default_depth',
                'label' => 'Default depth',
                'callback_args' => ['machining_holes_default_depth', 'Default depth for drilled holes.']
            ],
            [
                'id' => 'machining_holes_min_depth',
                'label' => 'Min depth',
                'callback_args' => ['machining_holes_min_depth', 'Minimum depth for drilled holes. Set to zero for no minimum.']
            ],
            [
                'id' => 'machining_holes_max_depth',
                'label' => 'Max depth',
                'callback_args' => ['machining_holes_max_depth', 'Maximum depth for drilled holes. Set to zero for no maximum.']
            ],


            //hinge holes
            [
                'id' => 'machining_hinge_holes',
                'label' => 'Enable drilled hinge holes',
                'callback_args' => ['machining_hinge_holes']
            ],
            [
                'id' => 'machining_hinge_holes_minimum_hole_distance',
                'label' => 'Minimum hole distance',
                'callback_args' => ['machining_hinge_holes_minimum_hole_distance', 'Minimum distance between holes.']
            ],
            [
                'id' => 'machining_hinge_holes_default_distance_from_edge',
                'label' => 'Default distance from edge',
                'callback_args' => ['machining_hinge_holes_default_distance_from_edge', 'Default distance from the edge of the material.']
            ],
            [
                'id' => 'machining_hinge_holes_default_outer_spacing',
                'label' => 'Default outer spacing',
                'callback_args' => ['machining_hinge_holes_default_outer_spacing', 'Default spacing between the outer edge and the first hole.']
            ],
            [
                'id' => 'machining_hinge_holes_default_hinge_length',
                'label' => 'Default hinge length',
                'callback_args' => ['machining_hinge_holes_default_hinge_length', 'Default length for hinges.']
            ],

            //corners
            //types & enabled inferred from radius and bevel values
            [
                'id' => 'machining_radius_corners',
                'label' => 'Enable radius corners',
                'callback_args' => ['machining_radius_corners', 'Enable curved radius corner cuts.']
            ],
            [
                'id' => 'machining_bevel_corners',
                'label' => 'Enable bevel corners',
                'callback_args' => ['machining_bevel_corners', 'Enable straight bevel corner cuts.']
            ],
            [
                'id' => 'machining_corners_min_value',
                'label' => 'Minimum corner size',
                'callback_args' => ['machining_corners_min_value', 'Minimum corner size. Set to zero for no minimum.']
            ],
            [
                'id' => 'machining_corners_max_value',
                'label' => 'Maximum corner size',
                'callback_args' => ['machining_corners_max_value', 'Maximum corner size. Set to zero for no maximum.']
            ],
            [
                'id' => 'machining_corners_enable_banding',
                'label' => 'Enable Banding',
                'callback_args' => ['machining_corners_enable_banding', 'Enable banding on each corner.']
            ],


        ], 'machining_section');

        //color
        add_settings_section(
            'color_section',
            'Colors',
            function () {
                echo "Use hex colors in the format '#ffffff' without the quotes";
            },
            'smartcut-admin'
        );

        $this->add_settings_fields([
            [
                'id' => 'part_a_color',
                'label' => 'Part A color',
                'callback_args' => ['part_a_color']
            ],

            [
                'id' => 'part_b_color',
                'label' => 'Part B color',
                'callback_args' => ['part_b_color']
            ],

            [
                'id' => 'part_hover_color',
                'label' => 'Part hover color',
                'callback_args' => ['part_hover_color']
            ],

            [
                'id' => 'part_selected_color',
                'label' => 'Part selected color',
                'callback_args' => ['part_selected_color']
            ],

            [
                'id' => 'stock_color',
                'label' => 'Stock color',
                'callback_args' => ['stock_color']
            ],

            [
                'id' => 'button_color',
                'label' => 'Button color',
                'callback_args' => ['button_color']
            ],

            [
                'id' => 'button_text_color',
                'label' => 'Button text color',
                'callback_args' => ['button_text_color']
            ],

            [
                'id' => 'text_color',
                'label' => 'Text color',
                'callback_args' => ['text_color']
            ],


        ], 'color_section');
    }


    public function get_values($input)
    {
        $sanitary_values = array();

        foreach ($this->fields as $key => $type) {

            if (isset($input[$key])) {

                switch ($type) {
                    case 'string':
                    case 'boolean':
                        $sanitary_values[$key] = sanitize_input($input[$key]);
                        break;
                    case 'float':
                        $sanitary_values[$key] = sanitize_float($input[$key], 0);
                        break;
                    case 'int':
                        $sanitary_values[$key] = sanitize_int($input[$key], 0);
                        break;
                    case 'hex':
                        $sanitary_values[$key] = sanitize_hex($input[$key]);
                        break;
                }
            } else {
                switch ($type) {
                    case 'string':
                    case 'hex':
                        $sanitary_values[$key] = '';
                        break;
                    case 'boolean':
                        $sanitary_values[$key] = '0';
                        break;
                    case 'float':
                    case 'int':
                        $sanitary_values[$key] = 0;
                        break;
                }
            }
        }

        //check the product category(ies) exists
        $product_categories = get_product_categories($input['product_category']);

        foreach ($product_categories as $category) {
            $category_exists = term_exists($category, 'product_cat');
            if (!$category_exists) {
                add_settings_error('product_category', 'product_category', "Product category with slug '$category' does not exist", 'error');
            }
        }

        return $sanitary_values;
    }

    /**
     * create a drop down with optional description and a script
     * @param array $args
     * @return void
     */
    public function create_drop_down($args)
    {

        $key = isset($args[0]) ? $args[0] : null;
        $description = isset($args[1]) ? $args[1] : null;
        $options = isset($args[2]) ? $args[2] : null;
        $script_callback = isset($args[3]) ? $args[3] : null;

        printf(
            '<select name="smartcut_options[%s]" id="%s">',
            $key,
            $key
        );

        foreach ($options  as $option_key => $text) {

            $selected = $this->selected($key, $option_key);

            printf(
                '<option value="%s" %s>%s</option>',
                $option_key,
                $selected,
                $text
            );
        }

        printf('</select>');

        if (isset($description)) {

            printf(
                '<p><label for="%s">%s</label></p>',
                $option_key,
                $description
            );
        }

        if ($script_callback) {
            call_user_func(array($this, $script_callback));
        }
    }

    /**
     * check if the option is selected
     * @param mixed $options_key
     * @param mixed $value
     * @return string
     */
    public function selected($options_key, $value)
    {
        if (!isset($this->options[$options_key])) return '';
        if ($this->options[$options_key] === $value) return 'selected';
        return '';
    }

    /**
     * create a simple input with optional description and a script
     * @param array $args
     * @return void
     */
    public function create_input($args)
    {

        $key = isset($args[0]) ? $args[0] : null;
        $description = isset($args[1]) ? $args[1] : null;
        $script_callback = isset($args[2]) ? $args[2] : null;

        if (!$key) return;

        $type = $this->fields[$key];

        if (!$type) return trigger_error('No field type definition found for key ' . $key);

        $input_type = null;
        switch ($type) {
            case 'text':
            case 'hex':
                $input_type = 'text';
                break;
            case 'boolean':
                $input_type = 'checkbox';
                break;
            case 'float':
                $input_type = 'float';
                break;
            case 'int':
                $input_type = 'int';
                break;
            default:
                $input_type = 'text';
                break;
        }

        if ($input_type === 'checkbox') {

            $checked = isset($this->options[$key]) && $this->options[$key] === '1';

            printf(
                '<input type="checkbox" name="smartcut_options[%s]" id="%s" %s value="1">',
                $key,
                $key,
                $checked ? 'checked' : '',
            );
        }

        if ($input_type === 'float') {

            $value = isset($this->options[$key]) ? esc_attr($this->options[$key]) : '';

            printf(
                '<input type="number" name="smartcut_options[%s]" id="%s" value="%s" min="0" step="any">',
                $key,
                $key,
                $value,
            );
        }

        if ($input_type === 'int') {

            $value = isset($this->options[$key]) ? esc_attr($this->options[$key]) : '';

            printf(
                '<input type="number" name="smartcut_options[%s]" id="%s" value="%s" min="0" step="1">',
                $key,
                $key,
                $value,
            );
        }

        if ($input_type === 'text') {

            $value = isset($this->options[$key]) ? esc_attr($this->options[$key]) : '';

            printf(
                '<input type="text" name="smartcut_options[%s]" id="%s" value="%s">',
                $key,
                $key,
                $value,
            );
        }

        if (isset($description)) {

            if ($input_type === 'checkbox') {
                printf(
                    '<label for="%s">%s</label>',
                    $key,
                    $description
                );
            } else {
                printf(
                    '<p><label for="%s">%s</label></p>',
                    $key,
                    $description
                );
            }
        }

        if ($script_callback) {
            call_user_func(array($this, $script_callback));
        }
    }


    public function surcharge_script()
    {

    ?>
        <script>
            jQuery(document).ready(function($) {
                var surchargeTypeField = $('#surcharge_type');
                var surchargeField = $('#surcharge');

                function toggleSurchargeField() {
                    if (surchargeTypeField.val() === 'none') {
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

    public function stack_height_script()
    {

    ?>
        <script>
            jQuery(document).ready(function($) {
                var cutPreferenceField = $('#cut_preference');
                var stackHeightField = $('#stack_height');

                function toggleStackHeightField() {
                    if (cutPreferenceField.val() === 'beam') {
                        stackHeightField.prop('disabled', false);
                    } else {
                        stackHeightField.val('');
                        stackHeightField.prop('disabled', true);
                    }
                }
                toggleStackHeightField();

                cutPreferenceField.change(function() {
                    toggleStackHeightField();
                });
            });
        </script>
    <?php
    }

    public function cut_length_price_script()
    {
    ?>
        <script>
            jQuery(document).ready(function($) {

                //cut preference logic
                var stockTypeField = $('#stock_type');
                var cutPreferenceField = $('#cut_preference');
                var cutPreferenceOptions = $('#cut_preference option');

                stockTypeField.change(function() {
                    updateCutPreference(true);
                });

                function disableCutPreferenceOptions() {
                    cutPreferenceField.val('');
                    cutPreferenceField.prop('disabled', true);
                }

                function enableCutPreferenceOptions(preselect = false) {

                    //enable the rest
                    cutPreferenceField.prop('disabled', false);

                    //disable none as an option
                    cutPreferenceOptions.eq(0).prop('disabled', true);

                    if (preselect) {
                        cutPreferenceOptions.eq(1).prop('selected', true);
                    }

                }

                function updateCutPreference(preselect = false) {

                    var stockType = stockTypeField.val();

                    switch (stockType) {
                        case 'sheet':
                            enableCutPreferenceOptions(preselect);
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


                //pricing strategy logic
                var pricingStrategyField = $('#pricing_strategy');
                var pricingField = $('#cut_length_price');

                function toggleCutLengthPriceField() {
                    if (pricingStrategyField.val() === 'full_sheet_plus_cut_length') {
                        pricingField.prop('disabled', false);
                    } else {
                        pricingField.val('');
                        pricingField.prop('disabled', true);
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

    public function per_part_price_script()
    {
    ?>
        <script>
            jQuery(document).ready(function($) {
                var pricingStrategyField = $('#pricing_strategy');
                var pricingField = $('#per_part_price');

                function togglePerPartPriceField() {
                    if (pricingStrategyField.val() === 'full_sheet_plus_num_parts') {
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


    public function stock_trim_callback($name)
    {

        printf(
            "<input class='regular-text' type='number' min='0' name='smartcut_options[$name]' id='$name' value='%s'>",
            isset($this->options[$name]) ? esc_attr($this->options[$name]) : ''
        );
    }
}
if (is_admin())
    $smartcut = new Options();

/*
 * Retrieve this value with:
 * $options = get_option( 'smartcut_options' ); // Array of All Options
 */
