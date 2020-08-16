<?php

/*
  Plugin Name:    OtFm Gutenberg Spoiler
  Description:    Gutenberg Spoiler for WordPress
  Version:        1.5.1
  Author:         Otshelnik-Fm (Wladimir Druzhaev)
  Author URI:     https://otshelnik-fm.ru/
 */

/*

  ╔═╗╔╦╗╔═╗╔╦╗
  ║ ║ ║ ╠╣ ║║║ https://otshelnik-fm.ru
  ╚═╝ ╩ ╚  ╩ ╩

 */


if ( ! defined( 'ABSPATH' ) ) {
    exit; // Game over
}

/* resources */
add_action( 'init', 'ogs_script' );
function ogs_script() {
    wp_register_script(
        'ogs_script', plugins_url( 'dist/bundle.js', __FILE__ ), array( 'wp-editor', 'wp-blocks', 'wp-i18n', 'wp-element' )
    );

    wp_register_style(
        'ogs_style', plugins_url( 'dist/editor-style.css', __FILE__ ), array( 'wp-edit-blocks' ), filemtime( plugin_dir_path( __FILE__ ) . 'dist/editor-style.css' )
    );

    // not wp 5.0
    if ( ! function_exists( 'register_block_type' ) )
        return;

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

// not work for me
//        if ( function_exists( 'wp_set_script_translations' ) ) {              // wp 5.0
//            wp_set_script_translations( 'ogs_script', 'otfm-gutenberg-spoiler' );
//        }
//        else if ( function_exists( 'gutenberg_get_jed_locale_data' ) ) {      // guten
    // https://capitainewp.io/formations/wordpress-creer-blocs-gutenberg/i18n-internationaliser-javascript-gutenberg/
    // languages data
    //$locale  = gutenberg_get_jed_locale_data( 'otfm-gutenberg-spoiler' );

    $locale = ogs_get_jed_locale_data( 'otfm-gutenberg-spoiler' );

    // add in object JS wp.i18n.setLocaleData.
    $content = 'wp.i18n.setLocaleData(' . json_encode( $locale ) . ', "otfm-gutenberg-spoiler" );';

    // before script inline
    wp_script_add_data( 'ogs_script', 'data', $content );
    //}
}

// add colors
add_action( 'init', 'ogs_colors' );
function ogs_colors() {
    $colors          = [
        array( 'color' => '#f5f5f5', 'name' => '1' ),
        array( 'color' => '#e5e5e5', 'name' => '2' ),
        array( 'color' => '#ffeead', 'name' => '3' ),
        array( 'color' => '#e8d98a', 'name' => '4' ),
        array( 'color' => '#feb236', 'name' => '5' ),
        array( 'color' => '#f9ccac', 'name' => '6' ),
        array( 'color' => '#f2ae72', 'name' => '7' ),
        array( 'color' => '#ffcfcf', 'name' => '8' ),
        array( 'color' => '#eca1a6', 'name' => '9' ),
        array( 'color' => '#e3eaa7', 'name' => '10' ),
        array( 'color' => '#b5e7a0', 'name' => '11' ),
        array( 'color' => '#bdcebe', 'name' => '12' ),
        array( 'color' => '#d6cbd3', 'name' => '13' ),
        array( 'color' => '#e6e2d3', 'name' => '14' ),
        array( 'color' => '#dac292', 'name' => '15' ),
        array( 'color' => '#d5e1df', 'name' => '16' ),
        array( 'color' => '#b7d7e8', 'name' => '17' ),
        array( 'color' => '#9fd5f0', 'name' => '18' ),
    ];
    $filtered_colors = apply_filters( 'otfmgs_colors', $colors );

    if ( isset( $filtered_colors['new'] ) ) {
        global $ogs_colors;
        $ogs_colors = ogs_new_colors( $filtered_colors['new'] );

        wp_localize_script( 'ogs_script', 'ogsColor', $filtered_colors['new'] );
    } else {
        $new_colored = array_diff_assoc( array_map( 'serialize', $filtered_colors ), array_map( 'serialize', $colors ) );
        $new_colors  = array_map( 'unserialize', $new_colored );

        global $ogs_colors;
        $ogs_colors = ogs_new_colors( $new_colors );

        wp_localize_script( 'ogs_script', 'ogsColor', $filtered_colors );
    }
}

// get_new colors
function ogs_new_colors( $colors ) {
    if ( empty( $colors ) )
        return;

    $color = '';
    if ( isset( $colors ) && is_array( $colors ) ) {
        foreach ( $colors as $k ) {
            $color .= str_replace( '#', '', $k['color'] ) . ',';
        }
    }

    $clean_color = rtrim( $color, ',' );

    return $clean_color;
}

// admin
function ogs_admin_inline_style() {
    global $ogs_colors;

    if ( empty( $ogs_colors ) )
        return;

    $style = '';

    $clean_colors = explode( ',', $ogs_colors );

    foreach ( $clean_colors as $color ) {
        $style .= '.otfm-sp__' . $color . '{border-color: #' . $color . ';}';
        $style .= '.otfm-sp__' . $color . '  .otfm-sp__title{background-color: #' . $color . ';}';
    }

    return $style;
}

// add style inline admin
if ( is_admin() ) {
    add_action( 'init', 'ogs_add_admin_inline_style' );
}
function ogs_add_admin_inline_style() {
    $style = ogs_admin_inline_style();

    wp_add_inline_style( 'ogs_style', $style ); // admin inline
}

// add style inline frontend
add_action( 'wp_head', 'ogs_add_frontend_inline_style' );
function ogs_add_frontend_inline_style() {
    $style = ogs_admin_inline_style();

    echo "<style>" . $style . "</style>\r\n";
}

// in gutenberg original function gutenberg_get_jed_locale_data
// this is alternative for WP 5.0
function ogs_get_jed_locale_data( $domain ) {
    $translations = get_translations_for_domain( $domain );
    $locale       = array(
        '' => array(
            'domain' => $domain,
            'lang'   => is_admin() ? get_user_locale() : get_locale(),
        ),
    );
    if ( ! empty( $translations->headers['Plural-Forms'] ) ) {
        $locale['']['plural_forms'] = $translations->headers['Plural-Forms'];
    }
    foreach ( $translations->entries as $msgid => $entry ) {
        $locale[$msgid] = $entry->translations;
    }

    return $locale;
}

// add script on frontend
add_action( 'wp_enqueue_scripts', 'ogs_spoiler_script' );
function ogs_spoiler_script() {
    wp_enqueue_script(
        'otfm-guten-spoiler-js', plugins_url( 'res/otfm-spoiler-min.js', __FILE__ ), array( 'jquery' ), '', true
    );
}

// add style on frontend
add_action( 'wp_enqueue_scripts', 'ogs_spoiler_style' );
function ogs_spoiler_style() {
    wp_enqueue_style(
        'otfm-guten-spoiler-css', plugins_url( 'res/otfm-spoiler-min.css', __FILE__ )
    );
}

// languages
add_action( 'plugins_loaded', 'ogs_textdomain' );
function ogs_textdomain() {
    load_plugin_textdomain( 'otfm-gutenberg-spoiler', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
}

// critical css before jquery ready event
add_action( 'wp_head', 'ogs_critical_css', 5 );
function ogs_critical_css() {
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
    $clear_in_colons = str_replace( ': ', ':', $styles );

    $compress_styles = preg_replace( '/ {2,}/', '', str_replace( array( "\r\n", "\r", "\n", "\t", '  ', '   ', '    ' ), '', $clear_in_colons ) );

    echo "<style id='ogs_cr_st'>" . $compress_styles . "</style>\r\n";
}
