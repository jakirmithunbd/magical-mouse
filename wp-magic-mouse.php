<?php
/**
 * WpMagicMouse
*/ 

/*
 * Plugin Name:       WP Magic Mouse
 * Plugin URI:        
 * Description:       This is a plugin for adding custom cursor with animation in WordPress website
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Jakir
 * Author URI:        https://wpwebdevs.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wpmm
 * Domain Path:       /languages
*/

defined( 'ABSPATH' ) or die( 'Hey, what are you doing here? You silly human!' );

if ( file_exists(dirname( __FILE__ ) . '/vendor/autoload.php') ) {
    require_once dirname( __FILE__ ) . '/vendor/autoload.php';
}

/**
 * The code that runs during plugin activation
 */

register_activation_hook( __FILE__, 'activate_wpmm_plugin' );
function activate_wpmm_plugin() {
	Inc\Base\Activate::activate();
}

/**
 * The code that runs during plugin deactivation
 */
function deactivate_wpmm_plugin() {
	Inc\Base\Deactivate::deactivate();
}
register_deactivation_hook( __FILE__, 'deactivate_wpmm_plugin' );

/**
 * Initialize all the core classes of the plugin
 */
if ( class_exists( 'Inc\\Init' ) ) {
	Inc\Init::register_services();
}