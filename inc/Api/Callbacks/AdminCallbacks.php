<?php 
/**
 * @package  WPMagicMouse
 */
namespace Inc\Api\Callbacks;

use Inc\Base\BaseController;

class AdminCallbacks extends BaseController
{
	public function adminDashboard()
	{
		return require_once( "$this->plugin_path/templates/admin.php" );
	}

	public function MagicMouseOptionsGroup( $input )
	{
		return $input;
	}

	public function WPMagicMouseSection()
	{
		echo 'Configure the Magic Mouse Settings';
	}

	public function wpmm_outerStyle()
	{
		$value = esc_attr( get_option( 'outer_style' ) );
		echo '<input type="checkbox" id="outerstyle" name="outerstyle" value="1">';
	}

	public function alecadddFirstName()
	{
		$value = esc_attr( get_option( 'first_name' ) );
		echo '<input type="text" class="regular-text" name="first_name" value="" placeholder="Write your First Name">';
	}
}