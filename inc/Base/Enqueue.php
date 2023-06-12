<?php
/**
 * @package  WPMagicMouse
*/
namespace Inc\Base; 
use Inc\Base\BaseController;

class Enqueue extends BaseController

{
    public function register() 
    {
        add_action( 'admin_enqueue_scripts', [$this, 'enqueue'] );
        add_action( 'wp_enqueue_scripts', [$this, 'frontend_enqueue'] );
        add_action('customize_preview_init', [$this, 'customizer_assets']);
        add_action('wp_footer', [$this, 'footer_assets'], 100);
    }

    function enqueue()
    {
        wp_enqueue_style('admin_style', $this->plugin_url . 'assets/css/admin.css');
        wp_enqueue_script('admin_script', $this->plugin_url . 'assets/js/admin.js');
    }


    function frontend_enqueue()
    {
        wp_enqueue_style('magic_css', $this->plugin_url . 'assets/css/magic-mouse.css', array(), time(), false);
        wp_enqueue_script('magic_js', $this->plugin_url . 'assets/js/magic-mouse.js', array(), time(), true);
        
        $outer_height = get_option('wpmm_cursor_height');
        $outer_width = get_option('wpmm_cursor_width');
        $hover_effect = get_option('hover_effect_settings');
        $default_cursor = get_option('default_cursor');

        $mouse_script = <<<EOD
            magicMouse({
                "outerStyle": "disable",
                "hoverEffect": "{$hover_effect}",
                "hoverItemMove": false,
                "defaultCursor": false,
                "outerWidth": {$outer_width},
                "outerHeight": {$outer_height}
            });
        EOD;
        wp_add_inline_script('magic_js', $mouse_script);

        //$cursor_color = get_option('cursor_color');
        $mouse_style = <<<EOD
            #magicMouseCursor {
                border: 1px solid #85BFBC;
                background: transparent;
                border-radius: 50%;
            }
        EOD;
        wp_add_inline_style('magic_css', $mouse_style);
    }

    public function footer_assets() {

    }

    public function customizer_assets() {
        wp_enqueue_script('cust-customizer-js', get_theme_file_uri( '/assets/js/customizer.js' ), array('jquery'), time(), true);
    }
}
