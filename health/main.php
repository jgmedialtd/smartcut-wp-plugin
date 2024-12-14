<?php

namespace SmartCut\HealthCheck;

defined('ABSPATH') || exit;

class SmartCutHealthChecker
{
	private $notices = [];
	private $cutlistSettings;
	private $products;

	public function renderPage()
	{
		echo '<div class="smartcut-tools">';

		$this->checkSystemRequirements();

		if (!$this->checkWoocommerce()) {
			$this->renderSummary();
			echo '</div>';
			return;
		}

		if (!$this->checkSettings()) {
			$this->renderSummary();
			echo '</div>';
			return;
		}

		$this->checkTheme();
		$this->checkProblematicPlugins();
		$this->checkProducts();

		$this->renderSummary();
		echo '</div>';
	}

	private function addNotice($type, $message, $escape = true)
	{
		$class = "notice notice-$type";
		$icon = $this->getStatusIcon($type);
		$content = $escape ? esc_html($message) : $message;
		$this->notices[] = "<div class='$class'>
		<p>$icon $content</p></div>";
	}

	private function getStatusIcon($type)
	{
		switch ($type) {
			case 'success':
				return '✅';
			case 'error':
				return '⚠️';
			default:
				return '';
		}
	}

	private function checkSystemRequirements()
	{
		$phpVersion = phpversion();
		$meetsRequirement = version_compare($phpVersion, '7.1', '>=');

		if ($meetsRequirement) {
			$this->addNotice('success', sprintf('PHP version %s', $phpVersion));
		} else {
			$this->addNotice('error', sprintf('PHP version %s - SmartCut recommends PHP 7.1 or greater', $phpVersion));
		}
	}

	private function checkWoocommerce()
	{
		if (!\SmartCut\Helpers\isWoocommerceActive()) {
			$this->addNotice('error', 'WooCommerce must be active');
			return false;
		}
		return true;
	}

	private function checkTheme()
	{
		$theme = wp_get_theme();
		if ($theme->template === 'storefront') {
			$this->addNotice('success', 'Storefront theme detected - SmartCut is only compatible with themes which correctly implement WooCommerce.');
		} else {
			$this->addNotice('warning', 'SmartCut is only compatible with themes which correctly implement the WooCommerce actions & filters such as Storefront. Swap to Storefront if you are having problems.');
		}
	}

	private function checkProblematicPlugins()
	{
		$activePlugins = get_option('active_plugins');
		$allPlugins = get_plugins();
		$problematicTerms = ['autoptimize', 'cache', 'caching', 'optimize', 'optimise', 'optimizing', 'optimising'];
		$problematicPlugins = [];

		foreach ($activePlugins as $plugin) {
			$pluginData = $allPlugins[$plugin] ?? null;
			if ($pluginData && $this->containsProblematicTerms($pluginData['Name'], $problematicTerms)) {
				$problematicPlugins[] = $pluginData['Name'];
			}
		}

		if (!empty($problematicPlugins)) {
			$this->addNotice('warning', sprintf(
				'The following active plugins may cause issues: <strong>%s</strong>',
				implode(', ', $problematicPlugins)
			), false);
			$this->addNotice('warning', 'If you do choose to use the plugins above be very careful with javascript compression or changing the natural load order of scripts.');
		}
	}

	private function containsProblematicTerms($name, $terms)
	{
		$name = strtolower($name);
		foreach ($terms as $term) {
			if (strpos($name, $term) !== false) {
				return true;
			}
		}
		return false;
	}

	private function checkSettings()
	{
		$this->cutlistSettings = \SmartCut\Settings\getGlobalSettings();

		if (empty($this->cutlistSettings)) {
			$this->addNotice('error', 'No cut list settings found - head to Settings > SmartCut and save your preferences.');
			return false;
		}

		$category = $this->cutlistSettings['product_category'] ?? '';
		if (empty($category)) {
			$this->addNotice('error', 'No cut list product category found, ensure this is set in Settings > SmartCut');
			return false;
		}

		return true;
	}

	private function checkProducts()
	{
		$category = $this->cutlistSettings['product_category'];
		$categories = \SmartCut\Settings\getProductCategories($category);

		$this->validateCategories($categories);
		$this->products = $this->getCategoryProducts($categories);

		if (empty($this->products)) {
			$this->addNotice('error', sprintf(
				'No products found in the <strong>%s</strong> %s',
				esc_html($category),
				count($categories) > 1 ? 'categories' : 'category'
			), false);
			return;
		}

		$this->checkIndividualProducts();
	}

	private function validateCategories($categories)
	{
		foreach ($categories as $category) {
			if (!term_exists($category, 'product_cat')) {
				$this->addNotice('error', sprintf(
					'Product category with slug <strong>%s</strong> does not exist',
					esc_html($category)
				), false);
			}
		}
	}

	private function getCategoryProducts($categories)
	{
		$query = new \WP_Query([
			'post_type' => 'product',
			'post_status' => ['private', 'publish', 'draft'],
			'posts_per_page' => -1,
			'tax_query' => [[
				'taxonomy' => 'product_cat',
				'field' => 'slug',
				'terms' => $categories,
			]]
		]);

		return $query->get_posts();
	}

	private function checkIndividualProducts()
	{
		$issueCount = 0;

		$productInstance = new \SmartCut\Product\Product();

		foreach ($this->products as $product) {
			$messages = $productInstance->checkProductSetup($product->ID);

			if (empty($messages)) {
				$this->addNotice('success', $product->post_title);
				continue;
			}

			$issueCount++;
			$this->addNotice('error', sprintf(
				'<a href="%s" target="_blank">%s</a>',
				get_permalink($product->ID),
				$product->post_title
			), false);

			foreach ($messages as $message) {
				$this->addNotice('error', $message, false);
			}
		}

		$this->addNotice('info', sprintf(
			'Checked <strong>%d</strong> products, found <strong>%d</strong> issues',
			count($this->products),
			$issueCount
		), false);
	}

	private function renderSummary()
	{
		echo implode("\n", $this->notices);
		echo '<br>
<div class="notice notice-info">
	<h2>Checks complete</h2>
</div>';
	}
}
