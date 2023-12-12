<?php
if (!defined('ABSPATH')) exit;
/**
 * Magical Mouse
 */
final class Magical_MOUSE_BASE {

    /**
     * The single instance of the class.
     * @var
     * @since 1.0.0
     * @static
     */
    private static $instance = null;

    /**
     * Ensure Singletone instance in this class.
     * @return Magical_MOUSE_BASE|null
     * @since 1.0.0
     * @static
     */
    public static function instance(): ?Magical_MOUSE_BASE {
        if ( is_null( self::$instance ) ) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    public function __construct() {
        $this->init_includes();
        $this->init_hooks();

        register_activation_hook( MAGICAL_MOUSE_FILE, [$this, 'activate'] );
        register_deactivation_hook( MAGICAL_MOUSE_FILE, [$this, 'deactivate'] );
    }

    public function activate() {
        flush_rewrite_rules();
    }

    public function deactivate() {

        flush_rewrite_rules();
    }

    private function include_classes( $fileNames ) {
        if ( is_array( $fileNames ) ) {
            foreach ( $fileNames as $fileName ) {
                $path = MAGICAL_MOUSE_INC . "/class-{$fileName}.php";
                if ( file_exists( $path ) ) {
                    require_once $path;
                }
            }
        }

    }

    /**
     * Include Classes
     * @return void
     * @since 1.0.0
     */

    /**
     * Includes requried files
     * @return void
     * @since 1.0.0
     */
    private function init_includes(): void {
        $include_files = [
            'custimizer',
            'enqueue',
        ];

        $this->include_classes( $include_files );
    }

    /**
     * Add required action hooks
     * @return void
     * @since 1.0.0
     */
    private function init_hooks(): void {
        add_action( 'plugins_loaded', [$this, 'Magical_load_text_domain'] );
    }

    /**
     * Load plugin textdomain
     * @return void
     * @since 1.0.0
     */
    public function Magical_load_text_domain(): void {
        load_plugin_textdomain( 'magical-mouse', false, dirname( plugin_basename( MAGICAL_MOUSE_FILE ) ) . '/languages' );
    }
}

if ( ! function_exists( 'Magical_MOUSE_BASE' ) ) {
    function Magical_MOUSE_BASE() {
        return Magical_MOUSE_BASE::instance();
    }
}

Magical_MOUSE_BASE();
