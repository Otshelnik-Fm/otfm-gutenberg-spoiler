<?php

/*
Plugin Name:    OtFm Gutenberg Spoiler
Description:    Gutenberg Spoiler for WordPress
Version:        1.0
Author:         Otshelnik-Fm (Wladimir Druzhaev)
Author URI:     https://otshelnik-fm.ru/
Text Domain:    otns-spoiler
Domain Path:    /languages
*/


if (!defined('ABSPATH')) exit; // Game over


// Inspired by the material https://github.com/Invulu/organic-profile-block
function ogs_script(){
    wp_register_script(
            'ogs_script',
            plugins_url('js/otfm-gutenberg-spoiler.js', __FILE__),
            array( 'wp-blocks', 'wp-i18n', 'wp-element' )
    );

    register_block_type( 'otfm/little-spoiler', array(
        'editor_script' => 'ogs_script',
    ) );
}
add_action('init', 'ogs_script');


// add script on frontend
function ogs_spoiler_script(){
    wp_enqueue_script(
            'otfm-guten-spoiler-js',
            plugins_url('js/otfm-spoiler.js', __FILE__),
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
            plugins_url('css/otfm-spoiler.css', __FILE__)
    );
}
add_action( 'wp_enqueue_scripts', 'ogs_spoiler_style' );

