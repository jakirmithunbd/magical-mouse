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
    }
}
