<?php

namespace SmartCut\Template;

defined('ABSPATH') || exit;

include_once dirname(__DIR__) . '/settings/field-factory.php';

use SmartCut\Settings\Factory\FieldFactory;

define('SMARTCUT_TEMPLATES', [

	'SC - Banding A' => [
		'is_extra' => true,
		'price' => 1,
		'content' => '<p>Pricing should be per meter / foot.</p>'
	],

	'SC - Banding B' => [
		'is_extra' => true,
		'price' => 2,
		'content' => '<p>Pricing should be per meter / foot.</p>'
	],

	'SC - Finish A' => [
		'is_extra' => true,
		'price' => 1,
		'content' => '<p>Pricing should be per square meter / foot.</p>'
	],

	'SC - Finish B' => [
		'is_extra' => true,
		'price' => 2,
		'content' => '<p>Pricing should be per square meter / foot.</p>'
	],

	'SC - Variable banding' => [
		'variable' => true,
		'is_extra' => true,
		'variations' => ['color', 'thickness'],
		'attributes' => ['color' => ['Red', 'Green', 'Blue'], 'thickness' => ['1mm', '2mm']],
		'price' => 1,
	],

	'SC - Variable finish' => [
		'variable' => true,
		'is_extra' => true,
		'variations' => ['type', 'option'],
		'attributes' => ['type' => ['Spray', 'Lacquer'], 'option' => ['Matt', 'Gloss']],
		'price' => 1,
	],

	'SC - Machining - holes' => [
		'is_machining' => true,
		'price' => 1,
	],

	'SC - Machining - corners' => [
		'is_machining' => true,
		'price' => 1,
	],

	//simple sheet - single size
	'SC - Simple sheet, price by full sheet' => [
		'length' => '2440',
		'width' => '1220',
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
		'price' => 100,
	],

	'SC - Simple sheet, price by cut length' => [
		'length' => '2440',
		'width' => '1220',
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
		'pricing_strategy' => 'cut_length',
		'price' => 1,
	],

	//simple sheet - single simple banding option
	'SC - Simple sheet, simple banding option, price by full sheet' => [
		'length' => '2440',
		'width' => '1220',
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
		'banding_types' => 'sc-banding-a',
		'price' => 100,
	],

	'SC - Simple sheet, simple finish option, price by full sheet' => [
		'length' => '2440',
		'width' => '1220',
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
		'finish_types' => 'sc-finish-a',
		'price' => 100,
	],

	'SC - Simple sheet with formula' => [
		'length' => '2440',
		'width' => '1220',
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
		'formula' => true,
		'price' => 100,
	],

	//simple sheet - multiple simple banding
	'SC - Simple sheet, multiple simple banding options, price by full sheet' => [
		'length' => '2440',
		'width' => '1220',
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
		'banding_types' => 'sc-banding-a,sc-banding-b',
		'price' => 100,
	],

	'SC - Simple sheet, multiple simple finish options, price by full sheet' => [
		'length' => '2440',
		'width' => '1220',
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
		'finish_types' => 'sc-finish-a,sc-finish-b',
		'price' => 100,
	],

	//simple sheet - variable banding
	'SC - Simple sheet with variable banding, price by full sheet' => [
		'length' => '2440',
		'width' => '1220',
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
		'banding_types' => 'sc-variable-banding',
		'price' => 100,
	],

	'SC - Simple sheet with variable finish, price by full sheet' => [
		'length' => '2440',
		'width' => '1220',
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
		'finish_types' => 'sc-variable-finish',
		'price' => 100,
	],

	//simple sheet - out of stock
	'SC - Simple sheet, out of stock' => [
		'length' => '2440',
		'width' => '30',
		'stock_type' => 'sheet',
		'price' => 100,
		'out_of_stock' => true,
	],

	//simple linear - single size
	'SC - Simple linear, price by full length' => [
		'length' => '3000',
		'width' => '30',
		'stock_type' => 'linear',
		'price' => 100,
	],

	'SC - Simple roll, price by length' => [
		'length' => '3000',
		'width' => '100',
		'stock_type' => 'roll',
		'cut_preference' => 'width',
		'pricing_strategy' => 'roll_length',
		'price' => 100,
	],

	'SC - Simple sheet, price by part area' => [
		'length' => '2440',
		'width' => '1220',
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
		'pricing_strategy' => 'part_area',
		'price' => 1,
	],

	//machining
	'SC - Simple sheet with machining, price by full sheet' => [
		'length' => '2440',
		'width' => '1220',
		'thickness' => ['10'],
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
		'machining_holes_product' => 'sc-machining-holes',
		'machining_corners_product' => 'sc-machining-corners',
		'price' => 100,
	],

	'SC - Simple sheet with machining & banding, price by full sheet' => [
		'length' => '2440',
		'width' => '1220',
		'thickness' => ['10'],
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
		'banding_types' => 'sc-banding-a,sc-banding-b',
		'machining_holes_product' => 'sc-machining-holes',
		'machining_corners_product' => 'sc-machining-corners',
		'price' => 100,
	],

	'SC - Multiple thicknesses, single stock size, multiple simple banding options, price by full sheet plus number of parts' => [
		'variable' => true,
		'variations' => ['thickness'],
		'banding_types' => 'sc-banding-a,sc-banding-b',
		'pricing_strategy' => 'full_stock_plus_num_parts',
		'per_part_price' => 1,
		'price' => 100,
		'length' => '2440',
		'width' => '1220',
		'thickness' => ['8', '12'],
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
		'content' => '<p>When using the <strong>Full sheet plus number of parts</strong> pricing strategy, the price per part is added to the full sheet price.</p>',
	],

	//thickness only - single stock dimensions
	'SC - Multiple thicknesses' => [
		'variable' => true,
		'variations' => ['thickness'],
		'price' => 100,
		'length' => '2440',
		'width' => '1220',
		'thickness' => ['8', '12'],
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
	],

	'SC - Multiple thicknesses with double' => [
		'variable' => true,
		'variations' => ['thickness'],
		'price' => 100,
		'length' => '2440',
		'width' => '1220',
		'thickness' => ['8', '12', '12,24'],
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
		'content' => '<p>This product allows for double thickness bonded sheets to be added to the same calculation.</p>',
	],

	'SC - Single thickness with double' => [
		'variable' => true,
		'variations' => ['thickness'],
		'price' => 100,
		'length' => '2440',
		'width' => '1220',
		'thickness' => ['12,24'],
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
		'content' => '<p>This product allows for double thickness bonded sheets to be added to the same calculation.</p>',
	],

	//no option to purchase full sheets

	'SC - Multiple thicknesses, multiple stock sizes, price by part area' => [
		'variable' => true,
		'variations' => ['thickness', 'size'],
		'price' => 100,
		'size' => ['100x100', '1000x1000', 'Cut to size'],
		'thickness' => ['8', '12'],
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
		'pricing_strategy' => 'part_area',
	],

	//option to purchase full sheet

	'SC - Multiple thicknesses, single stock size, option to purchase full sheet' => [
		'variable' => true,
		'variations' => ['thickness', 'size'],
		'price' => 100,
		'size' => ['1000x1000', 'Cut to size'],
		'thickness' => ['8', '12'],
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
	],

	'SC - Multiple thicknesses, multiple stock sizes, option to purchase full sheet' => [
		'variable' => true,
		'variations' => ['thickness', 'size'],
		'price' => 100,
		'size' => ['100x100', '1000x1000', 'Cut to size'],
		'thickness' => ['8', '12'],
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
	],

	'SC - Multiple thicknesses, multiple stock sizes, multiple simple banding options, price by full sheet plus cut length' => [
		'variable' => true,
		'variations' => ['thickness', 'size'],
		'banding_types' => 'sc-banding-a,sc-banding-b',
		'pricing_strategy' => 'full_stock_plus_cut_length',
		'cut_length_price' => 1,
		'price' => 100,
		'size' => ['100x100', '1000x1000', 'Cut to size'],
		'thickness' => ['8', '12'],
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
		'content' => '<p>When using the <strong>Full sheet plus cut length</strong> pricing strategy, the cut length price is added to the full sheet price. Pricing should be per meter / foot.</p>',
	],

	'SC - Multiple thicknesses, multiple stock sizes, multiple simple banding options, price by full sheet plus number of parts' => [
		'variable' => true,
		'variations' => ['thickness', 'size'],
		'banding_types' => 'sc-banding-a,sc-banding-b',
		'pricing_strategy' => 'full_stock_plus_num_parts',
		'per_part_price' => 1,
		'price' => 100,
		'size' => ['100x100', '1000x1000', 'Cut to size'],
		'thickness' => ['8', '12'],
		'stock_type' => 'sheet',
		'cut_preference' => 'length',
		'content' => '<p>When using the <strong>Full sheet plus number of parts</strong> pricing strategy, the price per part is added to the full sheet price.</p>',
	],

]);

class TemplateManager
{
	private $notices = [];
	private $fileIds = [];
	private $cutlistSettings;
	private $cutlistCategory;

	public function renderPage()
	{
		$this->renderHeader();

		if (!$this->checkWoocommerce()) {
			$this->renderFooter();
			echo '</div>';
			return;
		}

		if (!$this->checkSettings()) {
			$this->renderFooter();
			echo '</div>';
			return;
		}

		$this->handleFormSubmission();
		$this->uploadRequiredFiles();
		$this->createTemplates();
		$this->renderFooter();
	}

	private function renderHeader()
	{
		echo $this->getStyles();
		echo '<div class="smartcut-tools">';
		echo '<div class="smartcut-fixed-header">';
		echo '<h1 class="wp-heading-inline">SmartCut Templates</h1>';
		$this->renderRecreateForm();
		echo '</div>';
	}

	private function getStyles()
	{
		return '<style>
            .smartcut-fixed-header {
                position: sticky;
                top: 32px;
                margin-left: -20px;
                margin-right: -20px;
                background: white;
                padding: 20px;
                z-index: 100;
                border-bottom: 1px solid #ccc;
                margin-bottom: 20px;
            }
        </style>';
	}

	private function renderRecreateForm()
	{
		echo '<form method="post" id="recreate-form">';
		wp_nonce_field('smartcut_recreate_templates');
		echo '<p><button type="submit" name="smartcut_recreate_templates" class="button button-primary" onclick="alert(\'Recreating the templates can take a little while, please do not refresh the page\')">Recreate templates</button></p>';
		echo '</form>';
	}

	private function checkWoocommerce()
	{
		if (!\SmartCut\Helpers\isWoocommerceActive()) {
			$this->addNotice('error', 'WooCommerce must be active');
			return false;
		}
		return true;
	}

	private function checkSettings()
	{
		$this->cutlistSettings = \SmartCut\Settings\getGlobalSettings();

		if (empty($this->cutlistSettings)) {
			$this->addNotice('error', 'No cut list settings found - head to Settings > SmartCut and save your preferences.');
			return false;
		}

		$cutlistCategories = \SmartCut\Settings\getProductCategories($this->cutlistSettings['product_category']);

		if (!empty($cutlistCategories)) {
			$this->cutlistCategory = $cutlistCategories[0];
		}

		if (empty($this->cutlistCategory)) {
			$this->addNotice('error', 'No cut list product category found, ensure this is set in Settings > SmartCut');
			return false;
		}

		return true;
	}

	private function handleFormSubmission()
	{
		if (isset($_POST['smartcut_recreate_templates']) && check_admin_referer('smartcut_recreate_templates')) {
			$this->deleteExistingTemplates();
		}
	}

	private function deleteExistingTemplates()
	{
		$this->addNotice('info', 'Deleting existing templates...', false);

		foreach (SMARTCUT_TEMPLATES as $name => $productData) {
			$args = [
				'post_type' => 'product',
				'post_status' => \wp_get_environment_type() === 'development' ? 'publish' : 'private',
				'title' => $name,
				'posts_per_page' => -1
			];

			$query = new \WP_Query($args);

			if ($query->have_posts()) {
				while ($query->have_posts()) {
					$query->the_post();
					$product = wc_get_product(get_the_ID());

					if ($product) {
						if ($product->is_type('variable')) {
							foreach ($product->get_children() as $variationId) {
								wp_delete_post($variationId, true);
							}
						}
						wp_delete_post($product->get_id(), true);
						$this->addNotice('success', sprintf('🗑 Deleted "%s"', $name));
					}
				}
			}
			wp_reset_postdata();
		}
	}

	private function uploadRequiredFiles()
	{
		$files = [
			[
				'url' => plugins_url('assets/smartcut-logo.png', __FILE__),
				'type' => 'image',
				'title' => 'SmartCut logo'
			],
			[
				'url' => plugins_url('formula/smartcut-formula-example.json', __FILE__),
				'type' => 'application/json',
				'title' => 'SmartCut example formula'
			]
		];

		foreach ($files as $file) {
			$this->handleFileUpload($file);
		}
	}

	private function handleFileUpload($file)
	{
		$filename = basename($file['url']);
		$existingAttachment = $this->getAttachmentByFilename($filename);

		if ($existingAttachment) {
			$this->fileIds[$file['title']] = $existingAttachment->ID;
			$this->addNotice('success', sprintf('%s exists in the media library', $file['title']));
			return;
		}

		$tmp = download_url($file['url']);
		if (is_wp_error($tmp)) {
			$this->addNotice('error', sprintf('Error downloading %s: %s', $file['title'], $tmp->get_error_message()));
			return;
		}

		$fileArray = [
			'name' => $filename,
			'type' => $file['type'],
			'tmp_name' => $tmp,
			'error' => 0,
			'size' => filesize($tmp)
		];

		$fileId = media_handle_sideload($fileArray, 0, $file['title']);
		if (is_wp_error($fileId)) {
			$this->addNotice('error', sprintf('Error uploading %s: %s', $file['title'], $fileId->get_error_message()));
			@unlink($tmp);
			return;
		}

		$this->fileIds[$file['title']] = $fileId;
		$this->addNotice('success', sprintf('%s uploaded successfully', $file['title']));
	}

	private function getAttachmentByFilename($filename)
	{
		global $wpdb;

		$attachment_id = $wpdb->get_var($wpdb->prepare(
			"SELECT post_id FROM $wpdb->postmeta
			WHERE meta_key = '_wp_attached_file'
			AND meta_value LIKE %s",
			'%' . $wpdb->esc_like($filename)
		));

		return $attachment_id ? get_post($attachment_id) : false;
	}

	private function createTemplates()
	{
		$this->addNotice('info', 'Creating templates', false);

		foreach (SMARTCUT_TEMPLATES as $name => $productData) {
			$this->createTemplate($name, $productData);
		}
	}

	private function createTemplate($name, $productData)
	{
		if ($this->templateExists($name)) {
			$this->addNotice('info', sprintf('"%s" exists', $name));
			return;
		}

		$product = $this->createProduct($name, $productData);
		$this->setupProductAttributes($product, $productData);
		$this->setupProductSettings($product, $productData);

		if (!empty($productData['variable'])) {
			$this->createVariations($product, $productData);
		}

		$this->addNotice('success', sprintf('Created "%s"', $name));
	}

	private function templateExists($name)
	{
		$query = new \WP_Query([
			'post_type' => 'product',
			'post_status' => 'any',
			'title' => $name,
			'posts_per_page' => 1
		]);

		return $query->have_posts();
	}

	private function createProduct($name, $productData)
	{
		$product = isset($productData['variable']) ? new \WC_Product_Variable() : new \WC_Product();
		$product->set_name($name);
		$product->set_status(\wp_get_environment_type() === 'development' ? 'publish' : 'private');

		if (isset($productData['out_of_stock'])) {
			$product->set_stock_status('outofstock');
		}

		if (isset($this->fileIds['SmartCut logo'])) {
			$product->set_image_id($this->fileIds['SmartCut logo']);
		}

		$this->setProductDescription($product, $productData);
		$this->setProductCategory($product, $productData);

		if (empty($productData['variable'])) {
			$product->set_regular_price(number_format($productData['price'] ?? 100, 2, '.'));
		}

		$product->save();
		return $product;
	}

	private function setProductDescription($product, $productData)
	{
		$content = $this->generateProductDescription($productData);
		$product->set_description($content);
	}

	private function generateProductDescription($productData)
	{
		$content = '';

		if (!isset($productData['is_extra']) && !isset($productData['is_machining'])) {
			$content .= '<p>Dimensions are set in Attributes. Other settings available in the SmartCut menu.</p>';
		}

		if (isset($productData['content'])) {
			$content .= $productData['content'];
		}

		$content .= $this->generateAttributesTable($productData);

		return $content;
	}

	private function generateAttributesTable($productData)
	{
		$table = '<table><tr><th>Attribute</th><th>Value</th></tr>';

		$attributes = [
			'Length' => 'length',
			'Width' => 'width',
			'Thickness' => ['thickness', true],
			'Size' => ['size', true],
			'Stock type' => 'stock_type',
			'Cut preference' => 'cut_preference',
			'Pricing strategy' => 'pricing_strategy',
			'Cut length price' => 'cut_length_price',
			'Price per part' => 'per_part_price',
			'Edge banding types' => 'banding_types',
			'Finish types' => 'finish_types',
			'Holes' => 'machining_holes_product',
			'Corners' => 'machining_corners_product',
			'Surcharge type' => 'surcharge_type',
			'Surcharge' => 'surcharge'
		];

		foreach ($attributes as $label => $key) {
			if (is_array($key)) {
				$value = $productData[$key[0]] ?? null;
				if ($value && is_array($value)) {
					$table .= $this->addTableRow([$label, implode(', ', $value)]);
				}
			} else {
				$value = $productData[$key] ?? null;
				if ($value) {
					$table .= $this->addTableRow([$label, $value]);
				}
			}
		}

		return $table . '</table>';
	}

	private function addTableRow($data = [])
	{
		$row = '<tr>';
		foreach ($data as $value) {
			$row .= sprintf('<td>%s</td>', $value);
		}
		return $row . '</tr>';
	}

	private function setProductCategory($product, $productData)
	{
		if ((!isset($productData['is_extra']) || !$productData['is_extra']) &&
			(!isset($productData['is_machining']) || !$productData['is_machining'])
		) {
			$category = get_term_by('slug', $this->cutlistCategory, 'product_cat');
			if ($category) {
				$product->set_category_ids([$category->term_id]);
			}
		}
	}

	private function setupProductAttributes($product, $productData)
	{
		$attributes = [];

		// Add standard attributes
		if (!empty($productData['length'])) $attributes['length'] = $productData['length'];
		if (!empty($productData['width'])) $attributes['width'] = $productData['width'];
		if (!empty($productData['thickness'])) $attributes['thickness'] = implode(' | ', $productData['thickness']);
		if (!empty($productData['size'])) $attributes['size'] = implode(' | ', $productData['size']);

		// Add custom attributes
		if (!empty($productData['attributes'])) {
			foreach ($productData['attributes'] as $name => $value) {
				$attributes[$name] = is_array($value) ? implode(' | ', $value) : $value;
			}
		}

		$productAttributes = [];
		foreach ($attributes as $name => $value) {
			$attribute = new \WC_Product_Attribute();
			$attribute->set_options([$value]);
			$attribute->set_name($name);
			$attribute->set_visible(true);

			if (
				!empty($productData['variable']) &&
				!empty($productData['variations']) &&
				in_array($name, $productData['variations'])
			) {
				$attribute->set_variation(true);
			}

			$productAttributes[] = $attribute;
		}

		$product->set_attributes($productAttributes);
	}

	private function setupProductSettings(\WC_Product $product, $productData)
	{

		$fields = \SmartCut\Settings\Fields\getSettingFields('product');


		$settings = [
			'stock_type' => $productData['stock_type'] ?? 'sheet',
			'cut_preference' => $productData['cut_preference'] ?? 'length',
			'banding_types' => $productData['banding_types'] ?? '',
			'finish_types' => $productData['finish_types'] ?? '',
			'machining_holes_product' => $productData['machining_holes_product'] ?? '',
			'machining_corners_product' => $productData['machining_corners_product'] ?? '',
			'pricing_strategy' => $productData['pricing_strategy'] ?? 'full_stock',
			'cut_length_price' => $productData['cut_length_price'] ?? '0.00',
			'per_part_price' => $productData['per_part_price'] ?? '0.00',
			'surcharge_type' => $productData['surcharge_type'] ?? 'none',
			'surcharge' => $productData['surcharge'] ?? '0.00',
			'enable_machining' => isset($productData['machining_holes_product']) || isset($productData['machining_corners_product']) ? true : false,
			'enable_formula' => isset($productData['formula']) ? true : false,
			'formula_json' => isset($productData['formula']) ? $this->fileIds['SmartCut example formula'] ?? '' : '',
		];

		foreach ($settings as $key => $value) {
			if (!isset($fields[$key])) {
				trigger_error("The field key {$key} is not present in the settings fields.", E_USER_WARNING);
				continue;
			}

			$field = FieldFactory::createField(
				$key,
				SMARTCUT_PREFIX . $key,
				$fields[$key],
				'product'
			);

			$sanitizedValue = $field->sanitize($value);

			$product->update_meta_data(SMARTCUT_PREFIX . $key, $sanitizedValue);
		}

		$product->save();
	}

	private function createVariations($product, $productData)
	{
		$variations = $productData['variations'] ?? [];
		$price = $productData['price'] ?? 100;

		if (in_array('thickness', $variations)) {
			if (!in_array('size', $variations)) {
				$this->createThicknessVariations($product, $productData, $price);
			} else {
				$this->createThicknessSizeVariations($product, $productData, $price);
			}
		}

		// Handle other attribute combinations
		if (!empty($productData['attributes'])) {
			$this->createAttributeVariations($product, $productData);
		}
	}

	private function createThicknessVariations($product, $productData, $price)
	{
		if (empty($productData['thickness']) || !is_array($productData['thickness'])) {
			return;
		}

		foreach ($productData['thickness'] as $thickness) {
			$variation = new \WC_Product_Variation();
			$variation->set_parent_id($product->get_id());
			$variation->set_description("thickness: {$thickness}");
			$variation->set_attributes(['thickness' => $thickness]);
			$variation->set_regular_price(number_format($price, 2, '.'));
			$variation->save();
			$price += 100;
		}
	}

	private function createThicknessSizeVariations($product, $productData, $price)
	{
		if (
			empty($productData['thickness']) || empty($productData['size']) ||
			!is_array($productData['thickness']) || !is_array($productData['size'])
		) {
			return;
		}

		foreach ($productData['thickness'] as $thickness) {
			foreach ($productData['size'] as $size) {
				$variation = new \WC_Product_Variation();
				$variation->set_parent_id($product->get_id());
				$variation->set_description("Thickness: {$thickness}");
				$variation->set_attributes([
					'thickness' => $thickness,
					'size' => $size,
				]);
				$variation->set_regular_price(number_format($price, 2, '.'));
				$variation->save();
				$price += 100;
			}
		}
	}

	private function createAttributeVariations($product, $productData)
	{
		$combinations = $this->generateAttributeCombinations($productData['attributes']);
		$price = $productData['price'] ?? 100;

		foreach ($combinations as $combination) {
			$variation = new \WC_Product_Variation();
			$variation->set_parent_id($product->get_id());

			// Create description from all attributes
			$descriptionParts = [];
			foreach ($combination as $attribute => $value) {
				$descriptionParts[] = ucfirst($attribute) . ': ' . $value;
			}
			$variation->set_description(implode(', ', $descriptionParts));

			$variation->set_attributes($combination);
			$variation->set_regular_price(number_format($price, 2, '.'));
			$variation->save();

			$price += 1;
		}
	}

	private function generateAttributeCombinations($attributes)
	{
		// Convert attributes to array of arrays for combination generator
		$input = [];
		foreach ($attributes as $attribute => $values) {
			$input[] = array_map(function ($value) use ($attribute) {
				return [$attribute => $value];
			}, (array)$values);
		}

		// Generate Cartesian product
		$result = [[]];
		foreach ($input as $values) {
			$append = [];
			foreach ($result as $product) {
				foreach ($values as $item) {
					$append[] = array_merge($product, $item);
				}
			}
			$result = $append;
		}

		return $result;
	}

	private function addNotice($type, $message, $escape = true)
	{
		$class = "notice notice-$type";
		$icon = $this->getStatusIcon($type);
		$content = $escape ? esc_html($message) : $message;
		$this->notices[] = "<div class='{$class}'><p>{$icon} {$content}</p></div>";
	}

	private function getStatusIcon($type)
	{
		switch ($type) {
			case 'success':
				return '✅';
			case 'error':
				return '⚠️';
			case 'warning':
				return '⚠️';
			default:
				return '';
		}
	}

	private function renderFooter()
	{
		echo implode("\n", $this->notices);
		echo '<br><div class="notice notice-info"><h2>Templates complete</h2></div>';
		echo '</div>';
	}
}
