<?php
/**
 * @package  WPMagicMouse
*/
namespace Inc\Base; 
use Inc\Base\BaseController;

class Customizer extends BaseController
{
    public $color_obj;
    public function __construct () {
        global $wp_customize;
        //$this->color_obj = WP_Customize_Color_Control();
    }


    public function register() 
	{
		add_action('customize_register', array($this, 'wpmm_customizer'));
	}

    public function wpmm_customizer($wp_customize) {
        $wp_customize->add_section('magic_mouse', array(
            'title' 	=> __('Magic Mouse Settings', 'wpmm'),
            'priority' 	=> 30 
        ));
        
        // CURSOR HEIGHT AND WIDTH
        $wp_customize->add_setting('wpmm_cursor_width', array(
            'default' 	=> 40,
            'transport'	=> 'refresh',
            'type'		=> 'option'
        ));
    
        $wp_customize->add_control('wpmm_cursor_width_ctrl', array(
            'label' 	=> __('Outer Width', 'wpmm'),
            'section'	=> 'magic_mouse',
            'settings'	=> 'wpmm_cursor_width',
            'type'		=> 'number',
            'input_attrs' => array(
                'min' => 20,
                'max' => 90
            )
        ));

        $wp_customize->add_setting('wpmm_cursor_height', array(
            'default' 	=> 40,
            'transport'	=> 'refresh',
            'type'		=> 'option'
        ));
    
        $wp_customize->add_control('wpmm_cursor_height_ctrl', array(
            'label' 	=> __('Outer Height', 'wpmm'),
            'section'	=> 'magic_mouse',
            'settings'	=> 'wpmm_cursor_height',
            'type'		=> 'number',
            'input_attrs' => array(
                'min' => 20,
                'max' => 90
            )
        ));
        

        // CURSOR HOVER EFFECT
        $wp_customize->add_setting('hover_effect_settings', array(
            'default' 	=> 'circle-move',
            'transport'	=> 'refresh',
            'type'		=> 'option'
        ));
    
        $wp_customize->add_control('hover_effect_settings_ctrl', array(
            'label' 	=> __('Select Hover effect', 'wpmm'),
            'section'	=> 'magic_mouse',
            'settings'	=> 'hover_effect_settings',
            'type'		=> 'select',
            'choices'	=> array(
                'circle-move'	=> __('Circle Move', 'wpmm'),
                'pointer-overlay'	=> __('Pointer Overlay', 'wpmm'),
                'pointer-blur'	=> __('Pointer Blur', 'wpmm')
            )
        ));

        // Cursor Color
        // $wp_customize->add_setting('cursor_color', array(
        //     'default'     => '#000',
        //     'transport'   => 'postMessage',
        // ));
        
        // $wp_customize->add_control( new color_obj($wp_customize, 'color_control', array(
        //     'label'    => __('Cursor Color', 'cust'),
        //     'section'  => 'magic_mouse',
        //     'settings' => 'cursor_color'
        // )));
    }
}


