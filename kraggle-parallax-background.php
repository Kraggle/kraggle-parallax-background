<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              http://kragglesites.com
 * @since             
 * @package           Kraggle-Parallax-Background
 *
 * @wordpress-plugin
 * Plugin Name:       Kraggles Parallax Background
 * Plugin URI:        http://kragglesites.com
 * Description:       Displays a parallax background
 * Version:           1.0.10
 * Author:            Kraggle
 * Author URI:        http://kragglesites.com/
 * License:           GPLv3
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       kraggle-parallax-background
 * Domain Path:       /
 */

define('KPB_VERSION', '1.0.10');

// If this file is called directly, abort.
if (!defined('WPINC')) {
	die;
}

define('KPB_PLUGIN_BASENAME', plugin_basename(__FILE__));
define('KPB_PLUGIN_PATH', plugin_dir_path(__FILE__));
define('KPB_PLUGIN_URL', plugin_dir_url(__FILE__));

add_filter('upload_mimes', function ($mimes) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
});

function kpb_parallax() {
	wp_enqueue_style('kpb', KPB_PLUGIN_URL . 'style/style.css', [], KPB_VERSION);
	wp_enqueue_script('kpb-parallax', 'https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js', ['jquery'], KPB_VERSION);
	wp_enqueue_script('module-kpb', KPB_PLUGIN_URL . 'js/script.js', ['jquery', 'kpb-parallax'], KPB_VERSION);
	wp_localize_script('module-kpb', 'kpb', [
		'url' => KPB_PLUGIN_URL,
		'version' => KPB_VERSION
	]);

	return '<parallax-me />';
}
add_shortcode('parallax-background', 'kpb_parallax');

function kpb_get_images($images) {
	$imgs = explode(',', $images);
	$images = [];
	foreach ($imgs as $img) {
		if (preg_match('/~/', $img)) {
			$more = explode('~', $img);
			for ($i = $more[0]; $i < $more[1] + 1; $i++)
				$images[] = intval($i);
		} else
			$images[] = intval($img);
	}
	shuffle($images);

	foreach ($images as &$id) {
		$id = get_attached_file($id);
		if (preg_match('/.svg$/', $id))
			$id = preg_replace('/[\s\S\n]+?(<svg [\s\S\n]+svg>)[\s\S\n]+/', '$1', file_get_contents($id));
	}

	return $images;
}

function kpb_script_as_module($tag, $handle, $src) {
	if (preg_match('/^module-/', $handle)) {
		$tag = '<script type="module" src="' . esc_url($src) . '" id="' . $handle . '"></script>';
	}

	return $tag;
}
add_filter('script_loader_tag', 'kpb_script_as_module', 10, 3);
