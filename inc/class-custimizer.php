<?php
if (!defined('ABSPATH')) exit;
/**
 * @package  WPMagicMouse
 */

class Magical_MOUSE_Customizer {

    protected static $instance = null;
    public function __construct() {
        add_action( 'customize_register', [$this, 'magical_mouse_customizer'] );
    }

    public function magical_mouse_customizer( $wp_customize ) {
        $wp_customize->add_section( 'magic_mouse', [
            'title'    => __( 'Magical Mouse Settings', 'magical-mouse' ),
            'priority' => 30,
        ] );

        // CURSOR HEIGHT AND WIDTH
        $wp_customize->add_setting( 'magical_mouse_cursor_width', [
            'default'   => 40,
            'transport' => 'refresh',
            'type'      => 'option',
        ] );

        $wp_customize->add_control( 'magical_mouse_cursor_width_ctrl', [
            'label'       => __( 'Outer Width', 'magical-mouse' ),
            'section'     => 'magic_mouse',
            'settings'    => 'magical_mouse_cursor_width',
            'type'        => 'number',
            'input_attrs' => [
                'min' => 20,
                'max' => 90,
            ],
        ] );

        $wp_customize->add_setting( 'magical_mouse_cursor_height', [
            'default'   => 40,
            'transport' => 'refresh',
            'type'      => 'option',
        ] );

        $wp_customize->add_control( 'magical_mouse_cursor_height_ctrl', [
            'label'       => __( 'Outer Height', 'magical-mouse' ),
            'section'     => 'magic_mouse',
            'settings'    => 'magical_mouse_cursor_height',
            'type'        => 'number',
            'input_attrs' => [
                'min' => 20,
                'max' => 90,
            ],
        ] );

        // Default cursor
        $wp_customize->add_setting( 'default_cursor', [
            'default'   => false,
            'transport' => 'refresh',
            'type'      => 'option',
        ] );

        $wp_customize->add_control( 'default_cursor_ctrl', [
            'label'    => __( 'Enable Default Cursor', 'magical-mouse' ),
            'section'  => 'magic_mouse',
            'settings' => 'default_cursor',
            'type'     => 'checkbox',
        ] );

        // CURSOR HOVER EFFECT
        $wp_customize->add_setting( 'hover_effect_settings', [
            'default'   => 'circle-move',
            'transport' => 'refresh',
            'type'      => 'option',
        ] );

        $wp_customize->add_control( 'hover_effect_settings_ctrl', [
            'label'    => __( 'Select Hover effect', 'magical-mouse' ),
            'section'  => 'magic_mouse',
            'settings' => 'hover_effect_settings',
            'type'     => 'select',
            'choices'  => [
                'circle-move'     => __( 'Circle Move', 'magical-mouse' ),
                'pointer-overlay' => __( 'Pointer Overlay', 'magical-mouse' ),
                'pointer-blur'    => __( 'Pointer Blur', 'magical-mouse' ),
            ],
        ] );

        // Cursor Color
        $wp_customize->add_setting( 'cursor_color', [
            'default'   => '#000',
            'transport' => 'refresh',
            'type'      => 'option',
        ] );

        $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'cursor_color_ctrl', [
            'label'    => __( 'Cursor Color', 'magical-mouse' ),
            'section'  => 'magic_mouse',
            'settings' => 'cursor_color',
        ] ) );

        // Pointer Color
        $wp_customize->add_setting( 'pointer_color', [
            'default'   => '#000',
            'transport' => 'refresh',
            'type'      => 'option',
        ] );

        $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'pointer_color_ctrl', [
            'label'    => __( 'Pointer Color', 'magical-mouse' ),
            'section'  => 'magic_mouse',
            'settings' => 'pointer_color',
        ] ) );
    }

    /**
     *  The class singleton instance.
     * @return Enqueue|null
     * @since 1.0.0
     * @static
     */
    public static function instance(): ?Magical_MOUSE_Customizer {
        if ( is_null( self::$instance ) ) {
            self::$instance = new self();
        }

        return self::$instance;
    }
}

Magical_MOUSE_Customizer::instance();