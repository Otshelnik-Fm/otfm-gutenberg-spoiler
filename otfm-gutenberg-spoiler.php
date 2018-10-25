<?php

/*
Plugin Name:    OtFm Gutenberg Spoiler
Description:    Gutenberg Spoiler for WordPress
Version:        1.0.6
Author:         Otshelnik-Fm (Wladimir Druzhaev)
Author URI:     https://otshelnik-fm.ru/
Text Domain:    ogs-spoiler
Domain Path:    /languages
*/

/*

╔═╗╔╦╗╔═╗╔╦╗
║ ║ ║ ╠╣ ║║║ https://otshelnik-fm.ru
╚═╝ ╩ ╚  ╩ ╩

*/


if (!defined('ABSPATH')) exit; // Game over


// Inspired by the material https://github.com/Invulu/organic-profile-block
function ogs_script(){
    wp_register_script(
        'ogs_script',
        plugins_url('dist/bundle.js', __FILE__),
        array( 'wp-blocks', 'wp-i18n', 'wp-element' )
    );

    wp_register_style(
        'ogs_style',
        plugins_url('dist/editor-style.css', __FILE__),
        array( 'wp-edit-blocks' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'dist/editor-style.css' )
    );

    if(function_exists('register_block_type')){

        register_block_type( 'otfm/little-spoiler', array(
            'editor_script' => 'ogs_script',
            'editor_style'  => 'ogs_style', // only admin editor
        ) );


        register_block_type( 'otfm/box-spoiler-start', array(
            'editor_script' => 'ogs_script',
            'editor_style'  => 'ogs_style',
        ) );

        register_block_type( 'otfm/box-spoiler-end', array(
            'editor_script' => 'ogs_script',
            'editor_style'  => 'ogs_style',
        ) );


        // https://capitainewp.io/formations/wordpress-creer-blocs-gutenberg/i18n-internationaliser-javascript-gutenberg/
        // languages data
        $locale  = gutenberg_get_jed_locale_data( 'ogs-spoiler' );

        // add in object JS wp.i18n.setLocaleData.
        $content = 'wp.i18n.setLocaleData(' . json_encode( $locale ) . ', "ogs-spoiler" );';

        // before script inline
        wp_script_add_data( 'ogs_script', 'data', $content );

    }
}
add_action('init', 'ogs_script');


// add script on frontend
function ogs_spoiler_script(){
    wp_enqueue_script(
            'otfm-guten-spoiler-js',
            plugins_url('frontend/otfm-spoiler.js', __FILE__),
            array( 'jquery' ),
            '',
            true
    );
}
add_action( 'wp_enqueue_scripts', 'ogs_spoiler_script' );


// add style on frontend
function ogs_spoiler_style(){
    wp_enqueue_style(
            'otfm-guten-spoiler-css',
            plugins_url('frontend/otfm-spoiler.css', __FILE__)
    );
}
add_action( 'wp_enqueue_scripts', 'ogs_spoiler_style' );


// languages
function ogs_textdomain() {
    load_plugin_textdomain( 'ogs-spoiler', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
}
add_action( 'plugins_loaded', 'ogs_textdomain' );



// critical css before jquery ready event
function ogs_critical_css(){
    $styles = '
        .js-otfm-sp-box__closed ~ :not(.otfm-sp_end),
        .js-otfm-sp-box__closed ~ .js-otfm-sp-box__closed ~ :not(.otfm-sp_end){
            left: -9999px;
            position: absolute;
            top: -9999px;
            visibility: hidden;
        }
        [class^="wp-block"].otfm-sp_end ~ *,
        [class^="wp-block"].otfm-sp_end ~ div.otfm-sp_end ~ *{
            left: auto;
            position: relative;
            top: auto;
            visibility: visible;
        }
    ';

    // Remove space after colons
    $clear_in_colons = str_replace(': ', ':', $styles);

    $compress_styles =  preg_replace('/ {2,}/','',str_replace(array("\r\n", "\r", "\n", "\t", '  ', '   ', '    '), '', $clear_in_colons));

    echo "<style id='ogs_cr_st'>".$compress_styles."</style>\r\n";
}
add_action('wp_head', 'ogs_critical_css', 5);
