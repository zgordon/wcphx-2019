<?php
/**
 * Plugin's bootstrap file to launch the plugin.
 *
 * @package     JSforWP_Workshop\Custom_Blocks
 * @author      Zac Gordon (@zgordon)
 * @license     GPL2+
 *
 * @wordpress-plugin
 * Plugin Name: Workshop - 00
 * Plugin URI:  https://javascriptforwp.com/wcphx-2019
 * Description: Plugin setup.
 * Version:     1.0.0
 * Author:      Zac Gordon
 * Author URI:  https://twitter.com/zgordon
 * Text Domain: jsforwpworkshop
 * Domain Path: /languages
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

namespace JSforWP_Workshop\Custom_Blocks;

/**
 * Exit if accessed directly.
 */
defined('ABSPATH') || exit;

/**
 * Gets this plugin's absolute directory path.
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 */
function _get_plugin_url() {
	static $plugin_url;
	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}
	return $plugin_url;
}


add_action( 'init', __NAMESPACE__ . '\register_block_assets' );
/**
 * Enqueue block editor only JavaScript and CSS.
 */
function register_block_assets() {

	$editor_js_path = '/assets/js/blocks.editor.js';
	$editor_style_path = '/assets/css/blocks.editor.css';
	$style_path = '/assets/css/blocks.style.css';

	// Register the main JS file
	wp_register_script(
		'jsforwp-workshop-editor-js',
		_get_plugin_url() . $editor_js_path,
		[ ],
		filemtime( _get_plugin_directory() . $editor_js_path )
	);	

	// Register editor only styles
	wp_register_style(
		'jsforwp-workshop-editor-css',
		_get_plugin_url() . $editor_style_path,
		[],
		filemtime( _get_plugin_directory() . $editor_style_path )
	);

	// Register shared editor and frontend styles
	wp_register_style(
		'jsforwp-workshop-css',
		_get_plugin_url() . $style_path,
		[],
		filemtime( _get_plugin_directory() . $style_path )
	);
	
}