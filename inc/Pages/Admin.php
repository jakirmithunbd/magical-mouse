<?php 
/**
 * @package  WPMagicMouse
 */
namespace Inc\Pages;

use Inc\Api\SettingsApi;
use Inc\Base\BaseController;
use Inc\Api\Callbacks\AdminCallbacks;

/**
* 
*/
class Admin extends BaseController
{
	public $settings;

	public $callbacks;

	public $pages = array();

	public $subpages = array();

	public function register() 
	{
		$this->settings = new SettingsApi();

		$this->callbacks = new AdminCallbacks();

		$this->setPages();

		$this->setSubpages();

		$this->setSettings();
		$this->setSections();
		$this->setFields();

		$this->settings->addPages( $this->pages )->withSubPage( 'Dashboard' )->addSubPages( $this->subpages )->register();
	}

	public function setPages() 
	{
		$this->pages = array(
			array(
				'page_title' => 'WP Magic Mouse', 
				'menu_title' => 'Magic Mouse', 
				'capability' => 'manage_options', 
				'menu_slug' => 'wp_magic_mouse', 
				'callback' => array( $this->callbacks, 'adminDashboard' ), 
				'icon_url' => 'dashicons-store', 
				'position' => 110
			)
		);
	}

	public function setSubpages()
	{
		$this->subpages = array(
			array(
				'parent_slug' => 'wp_magic_mouse', 
				'page_title' => 'Custom Post Types', 
				'menu_title' => 'CPT', 
				'capability' => 'manage_options', 
				'menu_slug' => 'wpmm_ctp', 
				//'callback' => array( $this->callbacks, 'adminCpt' )
			),
		);
	}

	public function setSettings()
	{
		$args = array(
			array(
				'option_group' => 'wp_magic_mouse_options_group',
				'option_name' => 'text_example',
				'callback' => array( $this->callbacks, 'MagicMouseOptionsGroup' )
			),
			array(
				'option_group' => 'wp_magic_mouse_options_group',
				'option_name' => 'first_name'
			)
		);

		$this->settings->setSettings( $args );
	}

	public function setSections()
	{
		$args = array(
			array(
				'id' => 'wp_magic_mouse_admin_index',
				'title' => 'Settings',
				'callback' => array( $this->callbacks, 'WPMagicMouseSection' ),
				'page' => 'wp_magic_mouse'
			)
		);

		$this->settings->setSections( $args );
	}

	public function setFields()
	{
		$args = array(
			array(
				'id' => 'text_example',
				'title' => 'Text Example',
				'callback' => array( $this->callbacks, 'alecadddTextExample' ),
				'page' => 'wp_magic_mouse',
				'section' => 'wp_magic_mouse_admin_index',
				'args' => array(
					'label_for' => 'text_example',
					'class' => 'example-class'
				)
			),
			array(
				'id' => 'first_name',
				'title' => 'First Name',
				'callback' => array( $this->callbacks, 'alecadddFirstName' ),
				'page' => 'wp_magic_mouse',
				'section' => 'alecaddd_admin_index',
				'args' => array(
					'label_for' => 'first_name',
					'class' => 'example-class'
				)
			)
		);

		$this->settings->setFields( $args );
	}
}