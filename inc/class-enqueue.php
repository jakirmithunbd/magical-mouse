<?php

if (!defined('ABSPATH')) exit;

if ( ! class_exists( 'Magical_MOUSE_Enqueue' ) ) {
    /**
     * The enqueue class;
     */
    class Magical_MOUSE_Enqueue {
        protected static $instance = null;
        public function __construct() {
            add_action( 'wp_enqueue_scripts', [$this, 'frontend_enqueue'] );
            add_action( 'customize_preview_init', [$this, 'customizer_assets'] );
        }

        function frontend_enqueue() {
            wp_enqueue_style( 'magical_css', MAGICAL_MOUSE_ASSETS . '/css/magical-mouse.css', [], time(), false );
            wp_enqueue_script( 'magical_js', MAGICAL_MOUSE_ASSETS . '/js/magical-mouse.js', [], time(), true );

            $outer_height = get_option( 'wpmm_cursor_height', 30 );
            $outer_width = get_option( 'wpmm_cursor_width', 30 );
            $hover_effect = get_option( 'hover_effect_settings', 'circle-move' );
            $default_cursor = get_option( 'default_cursor', false );

            $check_tf = $default_cursor == 1 ? 'true' : 'false';

            $mouse_script = '
                magicMouse({
                    "outerStyle": "disable",
                    "hoverEffect": "' . $hover_effect . '",
                    "hoverItemMove": true,
                    "defaultCursor": ' . $check_tf . ',
                    "outerWidth": ' . $outer_width . ',
                    "outerHeight": ' . $outer_height . '
                });
            ';

            wp_add_inline_script('magical_js', $mouse_script);


            $cursor_color = get_option( 'cursor_color', '#ff0000' );
            $pointer_color = get_option( 'pointer_color', '#000000' );
            $mouse_style = '#magicMouseCursor {
                border: 1px solid '.$cursor_color.';
                background: transparent;
                border-radius: 50%;
            }

            #magicPointer {
              height: 5px;
              width: 5px;
              background: ' . $pointer_color . ';
              border-radius: 50%;
            }';

            wp_add_inline_style( 'magical_css', $mouse_style );
        }

        public function customizer_assets() {
            wp_enqueue_script( 'custs-customizer-js', MAGICAL_MOUSE_ASSETS . '/js/customizer.js', ['jquery'], time(), true );
        }

        /**
         *  The class singleton instance.
         * @return Enqueue|null
         * @since 1.0.0
         * @static
         */
        public static function instance(): ?Magical_MOUSE_Enqueue {
            if ( is_null( self::$instance ) ) {
                self::$instance = new self();
            }

            return self::$instance;
        }
    }

}

Magical_MOUSE_Enqueue::instance();
