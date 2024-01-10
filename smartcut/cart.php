<?php

namespace SmartCut\Cart;

use WC_Cart;

/**
 * add user fields to the product page
 */
function add_user_fields()
{
    if (\SmartCut\is_cutlist(get_the_ID())) {
        \SmartCut\Cutlist\Cart\add_user_fields();
    }
}

add_action('woocommerce_before_add_to_cart_button', 'SmartCut\Cart\add_user_fields');

/**
 * add a custom input field to the product page
 */
function add_hidden_fields()
{
    if (\SmartCut\is_cutlist(get_the_ID())) {
        \SmartCut\Cutlist\Cart\add_hidden_fields();
    }
}

add_action('woocommerce_after_add_to_cart_button', 'SmartCut\Cart\add_hidden_fields');

/**
 * add custom cart item data
 * @param array $cart_item_data
 * @param int $product_id
 * @param int $variation_id
 * @return array
 */
function add_cart_item_data($cart_item_data, $product_id, $variation_id)
{
    if (\SmartCut\is_cutlist($product_id)) {
        return \SmartCut\Cutlist\Cart\add_cart_item_data($cart_item_data, $product_id, $variation_id);
    }
    return $cart_item_data;
}

add_filter('woocommerce_add_cart_item_data', '\SmartCut\Cart\add_cart_item_data', 10, 3);

/**
 * prevent editing of cart quantity fields
 * @param int $product_quantity
 * @param mixed $cart_item_key
 * @param mixed $cart_item
 * @return mixed
 */
function hide_cart_quantity($product_quantity, $cart_item_key, $cart_item)
{
    if (\is_cart()) {
        $product_quantity = sprintf('%2$s <input type="hidden" name="cart[%1$s][qty]" value="%2$s" />', $cart_item_key, $cart_item['quantity']);
    }
    return $product_quantity;
}

add_filter('woocommerce_cart_item_quantity', '\SmartCut\Cart\hide_cart_quantity', 10, 3);

/**
 * add surcharges to the cart
 * @param WC_Cart $cart
 * @return void
 */
/* function add_product_surcharges($cart)
{
    \SmartCut\Cutlist\Cart\add_product_surcharges($cart);
}

add_action('woocommerce_cart_calculate_fees', '\SmartCut\Cart\add_product_surcharges', 10, 1); */

/**
 *
 * @param WC_Cart $cart
 * @return void
 */
function set_cart_price($cart)
{
    \SmartCut\Cutlist\Cart\set_cart_price($cart);
}

add_action('woocommerce_before_calculate_totals', 'SmartCut\Cart\set_cart_price', 10);


/**
 * display custom item data in the cart
 * @param array $item_data
 * @param array $cart_item_data
 * @return mixed
 */
function get_item_data($item_data, $cart_item_data)
{
    if (\SmartCut\is_cutlist($cart_item_data['product_id'])) {
        return \SmartCut\Cutlist\Cart\get_item_data($item_data, $cart_item_data);
    }
    return $item_data;
}
add_filter('woocommerce_get_item_data', 'SmartCut\Cart\get_item_data', 10, 2);


/**
 * add custom meta to order
 * @param WC_Order_Item_Product $item
 * @param string $cart_item_key
 * @param array $values
 * @param WC_Order $order
 * @return void
 */
function checkout_create_order_line_item($item, $cart_item_key, $values, $order)
{
    if (\SmartCut\is_cutlist($values['product_id'])) {
        \SmartCut\Cutlist\Cart\checkout_create_order_line_item($item, $cart_item_key, $values, $order);
    }
}
add_action('woocommerce_checkout_create_order_line_item', 'SmartCut\Cart\checkout_create_order_line_item', 10, 4);
