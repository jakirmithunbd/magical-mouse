<?php

/**
* @package  WPMagicMouse
*/

class Magical_MOUSE_Customizer
{

    protected static $instance = null;
    public function __construct()
    {
        add_action('customize_register', array($this, 'magical_mouse_customizer'));
    }

    public function magical_mouse_customizer($wp_customize)
    {
        $wp_customize->add_section('magic_mouse', array(
            'title'     => __('Magical Mouse Settings', 'magical-mouse'),
            'priority'     => 30
        ));

        // CURSOR HEIGHT AND WIDTH
        $wp_customize->add_setting('magical_mouse_cursor_width', array(
            'default'     => 40,
            'transport'    => 'refresh',
            'type'        => 'option'
        ));

        $wp_customize->add_control('magical_mouse_cursor_width_ctrl', array(
            'label'     => __('Outer Width', 'magical-mouse'),
            'section'    => 'magic_mouse',
            'settings'    => 'magical_mouse_cursor_width',
            'type'        => 'number',
            'input_attrs' => array(
                'min' => 20,
                'max' => 90
            )
        ));

        $wp_customize->add_setting('magical_mouse_cursor_height', array(
            'default'     => 40,
            'transport'    => 'refresh',
            'type'        => 'option'
        ));

        $wp_customize->add_control('magical_mouse_cursor_height_ctrl', array(
            'label'     => __('Outer Height', 'magical-mouse'),
            'section'    => 'magic_mouse',
            'settings'    => 'magical_mouse_cursor_height',
            'type'        => 'number',
            'input_attrs' => array(
                'min' => 20,
                'max' => 90
            )
        ));

        // Default cursor
        $wp_customize->add_setting('default_cursor', array(
            'default'     => false,
            'transport'    => 'refresh',
            'type'      => 'option'
        ));

        $wp_customize->add_control('default_cursor_ctrl', array(
            'label'     => __('Enable Default Cursor', 'magical-mouse'),
            'section'    => 'magic_mouse',
            'settings'    => 'default_cursor',
            'type'        => 'checkbox'
        ));


        // CURSOR HOVER EFFECT
        $wp_customize->add_setting('hover_effect_settings', array(
            'default'     => 'circle-move',
            'transport'    => 'refresh',
            'type'        => 'option'
        ));

        $wp_customize->add_control('hover_effect_settings_ctrl', array(
            'label'     => __('Select Hover effect', 'magical-mouse'),
            'section'    => 'magic_mouse',
            'settings'    => 'hover_effect_settings',
            'type'        => 'select',
            'choices'    => array(
                'circle-move'    => __('Circle Move', 'magical-mouse'),
                'pointer-overlay'    => __('Pointer Overlay', 'magical-mouse'),
                'pointer-blur'    => __('Pointer Blur', 'magical-mouse')
            )
        ));

        // Cursor Color
        $wp_customize->add_setting('cursor_color', array(
            'default'     => '#000',
            'transport'   => 'refresh',
            'type'        => 'option'
        ));

        $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'cursor_color_ctrl', array(
            'label' => __('Cursor Color', 'magical-mouse'),
            'section' => 'magic_mouse',
            'settings'    => 'cursor_color',
        )));

        // Pointer Color
        $wp_customize->add_setting('pointer_color', array(
            'default'     => '#000',
            'transport'   => 'refresh',
            'type'        => 'option'
        ));

        $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'pointer_color_ctrl', array(
            'label' => __('Pointer Color', 'magical-mouse'),
            'section' => 'magic_mouse',
            'settings'    => 'pointer_color',
        )));
    }

    /**
     *  The class singleton instance.
     * @return Enqueue|null
     * @since 1.0.0
     * @static
     */
    public static function instance(): ?Magical_MOUSE_Customizer
    {
        if (is_null(self::$instance)) {
            self::$instance = new self();
        }

        return self::$instance;
    }
}

Magical_MOUSE_Customizer::instance();