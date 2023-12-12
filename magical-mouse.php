<?php
/*
 * Plugin Name:       Magical Mouse
 * Plugin URI:
 * Description:       This is a plugin for adding custom cursor with animation in WordPress website
 * Stable tag: 1.0
 * Version: 1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            CodeConfig
 * Author URI:        https://codeconfig.dev
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       magical-mouse
 * Domain Path:       /languages
 */

if (
    !defined('ABSPATH')
) exit;

// Define constants
define( 'MAGICAL_MOUSE_VERSION', '1.0.0' );
define( 'MAGICAL_MOUSE_FILE', __FILE__ );
define( 'MAGICAL_MOUSE_PATH', dirname( __FILE__ ) );
define( 'MAGICAL_MOUSE_INC', MAGICAL_MOUSE_PATH . '/inc' );
define( 'MAGICAL_MOUSE_URL', plugin_dir_url( __FILE__ ) );
define( 'MAGICAL_MOUSE_ASSETS', MAGICAL_MOUSE_URL . 'assets' );

// Check if the file exists before requiring it

if ( realpath( MAGICAL_MOUSE_INC . '/magical-mouse-base.php' ) ) {
    require_once MAGICAL_MOUSE_INC . '/magical-mouse-base.php';
}