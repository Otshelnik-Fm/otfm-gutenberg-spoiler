=== OtFm Gutenberg Spoiler - (or FAQ) collapse block ===
Author URI: https://otshelnik-fm.ru
Plugin URI: https://otshelnik-fm.ru/?p=5131
Donate link: https://money.yandex.ru/to/41001526199072
Contributors: otshelnik-fm
Tags: gutenberg, spoiler, frequently asked questions, blocks, gutenberg blocks
Requires at least: 5.3.0
Tested up to: 5.8
Requires PHP: 7.3
Stable tag: 1.5.3
License: GPL-3.0
License URI: http://www.gnu.org/licenses/gpl-3.0.html

The plugin provides in the block editor 2 types of spoilers. Need FAQ or Spoiler?


== Description ==

WordPress 5.0 introduces a block-based editor (codename "Gutenberg") that offers a streamlined editing experience.
The plugin provides in the block editor 2 types of spoilers:

* Little Spoiler
* Box spoiler

Little Spoiler - small spoiler for plain text.

Box spoiler - consists of 2 blocks:
Opening spoiler (Box Spoiler Start) and closing spoiler (Box Spoiler End)
Between them, you insert any block (or several block's) with content that you want to hide.

In the frontend, the spoiler (accordion) opens with animation.
In the editor you can choose the color design of the spoiler.

Ability to add new colors or replace a set of colors. See FAQ

Want to hide part of the publication? or make up the FAQ? - plugin is perfect for this

Check out all beauty and power of the plugin by watching this video:
[youtube https://www.youtube.com/watch?v=IrC1yVttMho]

== Installation ==

1. Upload the `otfm-gutenberg-spoiler` folder to your `/wp-content/plugins/` directory or alternatively upload the otfm-gutenberg-spoiler.zip file via the plugin page of WordPress by clicking 'Add New' and selecting the zip from your computer.
2. Activate the OtFm Gutenberg Spoiler WordPress plugin through the 'Plugins' menu in WordPress.
3. Use OtFm Gutenberg Spoiler blocks on your next page or post.


== Requirements ==

PHP 5.6+, 7, 7.1, 7.2 or 7.4 recommended for better performance, WordPress 5.8


= Translation =

Available in English, Russian, Ukrainian, Spanish, German, Swedish, Dutch, Japanese, French, Italian, Norwegian, Portuguese and more other languages in becoming.


= Acknowledgements =
Thanks to [Nilo Velez](https://profiles.wordpress.org/nilovelez/) for Spanish (Spain) translation approval.
Thanks to [Yordan Soares](https://profiles.wordpress.org/yordansoares/) for Spanish (Venezuela) translation.
Thanks to [Tor-Bjorn Fjellner](https://profiles.wordpress.org/tobifjellner/) for Swedish translation approval.
Thanks to [Peter Smits](https://profiles.wordpress.org/psmits1567/) for Dutch translation approval.
Thanks to [miccweb](https://profiles.wordpress.org/miccweb/) for Japanese translation approval.  
Thanks to [FX Bénard](https://profiles.wordpress.org/fxbenard/) for French translation approval.
Thanks to [Luisa Ravelli](https://profiles.wordpress.org/darkavenger/) and [aliceorru](https://profiles.wordpress.org/aliceorru/) for Italian translation approval.
Thanks to [Eivind](https://profiles.wordpress.org/meinmycell/) for Norwegian translation approval.
Thanks to [Pedro Mendonça](https://profiles.wordpress.org/pedromendonca/) for Portuguese translation approval.
Thanks to [Sergey Kovalets](https://profiles.wordpress.org/sergeykovalets/) for Ukrainian translation.
Thanks to [Jens Ratzel](https://profiles.wordpress.org/jensratzel/) for German translation.


== Frequently Asked Questions ==

= Accessibility support? Navigation by tab? =
Yes!
Navigation by "Tab" button: 
The "Up arrow" key pressed - If the focused spoiler is open, you close it 
The "Down arrow" key pressed - If the focused spoiler is closed, you open it 
Either the "Enter" key or "Space bar" pressed - You toggle the focused spoiler. If it is open, close it; if it is closed, open it.
The "End" key pressed - You move focus to the last spoiler on the page 
The "Home" key pressed - You move focus to the first spoiler on the page 

Support screen readers

= How can I close a lot of blocks? =
1. find "Box Spoiler Start" and paste (spoiler open)
2. blocks, blocks, blocks...
3. find "Box Spoiler End" and paste (this spoiler closed)


= How can I add my own color? =
Add this snippet to your file functions.php:

<code>// add new colors to spoiler
function otfmgs_add_new_colors($colors){
    $colors[]= array( 'color' => '#bd4747', 'name' => 'my_brown' );
    $colors[]= array( 'color' => '#32dd94', 'name' => 'my_green' );
    //... etc
    
    return $colors;
}
add_filter('otfmgs_colors','otfmgs_add_new_colors');</code>

where: #bd4747 - new hex color

result: https://yadi.sk/i/223x_1-S3e_H1w

(available from plugin version 1.4.0)


= How to replace colors with your own set? =
Add this snippet to your file functions.php:

<code>// add my color palette to spoiler
function otfmgs_add_my_color_pallete($colors){
    $colors['new'][]= array( 'color' => '#bd4747', 'name' => 'my_brown' );
    $colors['new'][]= array( 'color' => '#32dd94', 'name' => 'my_green' );
    //... etc
    
    return $colors;
}
add_filter('otfmgs_colors','otfmgs_add_my_color_pallete');</code>

where: #bd4747 - new hex color

result: https://yadi.sk/i/Fv7BaxRLkjj_SA

(available from plugin version 1.4.0)


= What WordPress themes work with OtFm Gutenberg Spoiler? =
Any properly developed WordPress theme will work with OtFm Gutenberg Spoiler

= How do I find the spoiler block? =
1. Go to the block editor (add new post)
2. Click "insert block"
3. Search for a block "spoiler" or "otfm" or "faq"

= Is OtFm Gutenberg Spoiler free? =
Yes! OtFm Gutenberg Spoiler core features are absolutely free.

= Where can I ask for help? =
Write me Otshelnik-Fm@yandex.ru


== Changelog ==
[Full Changelog](https://github.com/Otshelnik-Fm/otfm-gutenberg-spoiler#changelog)


== Upgrade Notice ==

Update through the automatic WordPress updater



== Screenshots ==

1. Find & add spoiler blocks
2. Little spoiler
3. Box spoiler
4. In frontend
5. Open spoiler