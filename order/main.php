<?php

namespace SmartCut\Order;

defined('ABSPATH') || exit;

add_filter('woocommerce_order_item_get_formatted_meta_data', function ($formatted_meta, $item) {
	if (!is_admin()) {
		return $formatted_meta;
	}

	// Look for an item with the key "Job ID"
	foreach ($formatted_meta as $meta) {
		if ($meta->key === 'Job ID') {
			$admin_url = add_query_arg([
				'page' => 'smartcut-order-details',
				'item_id' => $item->get_id()
			], admin_url('admin.php'));

			$formatted_meta[] = new \WC_Meta_Data([
				'id' => 0,
				'key' => 'SmartCut Order Details',
				'value' => sprintf(
					'<a href="%s" target="_blank">View</a>',
					esc_url($admin_url)
				),
				'display_key' => 'SmartCut Order Details',
				'display_value' => sprintf(
					'<a href="%s" target="_blank">View</a>',
					esc_url($admin_url)
				)
			]);
			break;
		}
	}

	return $formatted_meta;
}, 10, 2);


add_action('admin_menu', function () {
	add_submenu_page(
		null, // Setting parent to null hides it from the menu
		'SmartCut Order Details',
		'SmartCut Order Details',
		'manage_woocommerce',
		'smartcut-order-details',
		'\SmartCut\Order\render_smartcut_order_details'
	);
});

function render_smartcut_order_details()
{
	if (!current_user_can('manage_woocommerce')) {
		wp_die(__('You do not have sufficient permissions to access this page.'));
	}

	$order_item_id = isset($_GET['item_id']) ? absint($_GET['item_id']) : 0;
	if (!$order_item_id) {
		wp_die(__('No order item specified'));
	}

	$order_item = \WC_Order_Factory::get_order_item($order_item_id);
	if (!$order_item) {
		wp_die(__('Order item not found'));
	}

	// Get all the meta data
	$meta_data = $order_item->get_meta_data();

	echo '<div class="wrap">';
	echo '<h1>SmartCut Order Details</h1>';

	// Display the details
	echo '<table class="widefat">';
	echo '<thead><tr><th>Field</th><th>Value</th></tr></thead>';
	echo '<tbody>';
	foreach ($meta_data as $meta) {
		$data = $meta->get_data();

		// Handle part images specially
		if ($data['key'] === '_Part images') {
			echo '<tr>';
			echo '<td>' . esc_html('Part Images') . '</td>';
			echo '<td>';

			$image_urls = explode(',', $data['value']);
			foreach ($image_urls as $url) {
				$url = trim($url);
				if (!empty($url)) {
					echo '<div style="margin-bottom: 10px;">';
					echo '<img src="' . esc_url($url) . '" style="max-width: 100px; height: auto;">';
					echo '<br><a href="' . esc_url($url) . '" target="_blank">View Full Size</a>';
					echo '</div>';
				}
			}

			echo '</td>';
			echo '</tr>';
			continue;
		}

		// Skip other private meta
		// if (substr($data['key'], 0, 1) === '_') continue;

		echo '<tr>';
		echo '<td>' . esc_html($data['key']) . '</td>';
		echo '<td>' . wp_kses_post($data['value']) . '</td>';
		echo '</tr>';
	}
	echo '</tbody>';
	echo '</table>';
	echo '</div>';
}
