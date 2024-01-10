<?php

namespace SmartCut\Widgets;

//[] not working for linear / roll products

function register()
{
    register_widget('SmartCut\Widgets\Cart_Cutlist');
}

add_action('widgets_init', 'SmartCut\Widgets\register');

class Cart_Cutlist extends \WP_Widget
{
    public function __construct()
    {
        parent::__construct(
            'sc-cutlist',
            'SmartCut - Cut list',
            array('description' => __('Display all of your cuts in a single list', 'smartcut'))
        );
    }


    public function widget($args, $instance)
    {

?>
        <div class="smartcut-widget">
            <?php

            if (!class_exists('WooCommerce')) {
                return _e('WooCommerce must be active', 'smartcut');
            }

            $wc = \WC();

            if (!$wc) return;

            $cart = \WC()->cart;

            if (!$cart) return;

            $cart_items = \WC()->cart->get_cart();

            if (!$cart_items) return;

            $all_dimensions = array();

            foreach ($cart_items as $key => $value) {
                $product = $value['data'];
                $name = $product->get_name();
                $dimensions = isset($value['smartcut_dimensions']) ? explode(', ', $value['smartcut_dimensions']) : array();
                array_unshift($dimensions, $name);

                if ($dimensions) {
                    $all_dimensions[$key] = $dimensions;
                }
            }

            ?>
            <div>
                <div class="title"><?php _e('Your cut list', 'smartcut') ?></div>
                <ul>
                    <?php

                    // _e('Your parts list:', 'smartcut')
                    foreach ($all_dimensions as $cart_key => $dimensions_array) :
                    ?>
                        <li>

                            <?php foreach ($dimensions_array as $index => $value) : ?>
                                <?php if ($index === 0) : ?>
                                    <div class="product-name">
                                        <div><?php echo $value; ?></div>
                                    </div>
                                <?php else : ?>
                                    <div class="item"><?php echo $value; ?></div>
                                <?php endif ?>
                            <?php endforeach; ?>
                        </li>
                    <?php
                    endforeach;
                    ?>
                </ul>
                <a class="cart-link" href="<?php echo esc_url(\wc_get_cart_url()); ?>">View Cart</a>
            </div>
        </div>
<?php
    }
}
