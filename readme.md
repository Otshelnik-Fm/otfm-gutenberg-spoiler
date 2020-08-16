[![WP compatibility](https://plugintests.com/plugins/otfm-gutenberg-spoiler/wp-badge.svg)](https://plugintests.com/plugins/otfm-gutenberg-spoiler/latest)
[![PHP compatibility](https://plugintests.com/plugins/otfm-gutenberg-spoiler/php-badge.svg)](https://plugintests.com/plugins/otfm-gutenberg-spoiler/latest)

## Description  

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

Ability to add new colors or replace a set of colors. See FAQ.  

Want to hide part of the publication? or make up the FAQ? - plugin is perfect for this

Check out all beauty and power of the plugin by watching this video:  
[![See video](http://img.youtube.com/vi/IrC1yVttMho/0.jpg)](http://www.youtube.com/watch?v=IrC1yVttMho "See video")  


Download in official repository WordPress: [see link](https://wordpress.org/plugins/otfm-gutenberg-spoiler/)  


## Installation  

1. Upload the `otfm-gutenberg-spoiler` folder to your `/wp-content/plugins/` directory or alternatively upload the otfm-gutenberg-spoiler.zip file via the plugin page of WordPress by clicking 'Add New' and selecting the zip from your computer.  
2. Activate the OtFm Gutenberg Spoiler WordPress plugin through the 'Plugins' menu in WordPress.  
3. Use OtFm Gutenberg Spoiler blocks on your next page or post.  


## Requirements  

PHP 5.6+, 7, 7.1, 7.2  or 7.3 recommended for better performance, WordPress 5.5 


## Translation  

Available in English, Russian, Spanish, Swedish, Dutch, Japanese and more other languages in becoming.


## Acknowledgements  
Thanks to [Nilo Velez](https://profiles.wordpress.org/nilovelez/) for Spanish (Spain) translation approval.
Thanks to [Yordan Soares](https://profiles.wordpress.org/yordansoares/) for Spanish (Venezuela) translation.
Thanks to [Tor-Bjorn Fjellner](https://profiles.wordpress.org/tobifjellner/) for Swedish translation approval.
Thanks to [Peter Smits](https://profiles.wordpress.org/psmits1567/) for Dutch translation.


## Frequently Asked Questions  

**Accessibility support? Navigation by tab?**  
Yes!  
Navigation by "Tab" button:  
The "Up arrow" pressed - If the focused spoiler is open, you close it  
The "Down arrow" pressed - If the focused spoiler is closed, you open it  
Either the "Enter" key or "Space bar" pressed - You toggle the focused spoiler. If it is open, close it; if it is closed, open it.  
The "End" key pressed - You move focus to the last spoiler on the page  
The "Home" key pressed - You move focus to the first spoiler on the page  

Support screen readers  

**How can I close a lot of blocks?**  
1. find "Box Spoiler Start" and paste (spoiler open)  
2. blocks, blocks, blocks...  
3. find "Box Spoiler End" and paste (this spoiler closed)  


**How can I add my own color?**  
Add this snippet to your file functions.php:  

```
// add new colors to spoiler
function otfmgs_add_new_colors($colors){
    $colors[]= array( 'color' => '#bd4747', 'name' => 'my_brown' );
    $colors[]= array( 'color' => '#32dd94', 'name' => 'my_green' );
    //... etc
    
    return $colors;
}
add_filter('otfmgs_colors','otfmgs_add_new_colors');
```

where: #bd4747 - new hex color  

result: https://yadi.sk/i/223x_1-S3e_H1w  

(available from plugin version 1.4.0)   



**How to replace colors with your own set?**  
Add this snippet to your file functions.php:  

```
// add my color palette to spoiler
function otfmgs_add_my_color_pallete($colors){
    $colors['new'][]= array( 'color' => '#bd4747', 'name' => 'my_brown' );
    $colors['new'][]= array( 'color' => '#32dd94', 'name' => 'my_green' );
    //... etc
    
    return $colors;
}
add_filter('otfmgs_colors','otfmgs_add_my_color_pallete');
```

where: #bd4747 - new hex color  

result: https://yadi.sk/i/Fv7BaxRLkjj_SA  

(available from plugin version 1.4.0)  



**What WordPress themes work with OtFm Gutenberg Spoiler?**  
Any properly developed WordPress theme will work with OtFm Gutenberg Spoiler  

**How do I find the spoiler block?**  
1. Go to the block editor (add new post)  
2. Click "insert block"  
3. Search for a block "spoiler" or "otfm" or "faq"  

**Is OtFm Gutenberg Spoiler free?**
Yes! OtFm Gutenberg Spoiler core features are absolutely free.  

**Where can I ask for help?**
Write me: Otshelnik-Fm@yandex.ru  


## Changelog  
= 2020-08-16 =  
v1.5.1  
* Change Text Domain to slug plugin


= 2020-08-13 =  
v1.5.0  
* WordPress 5.5 supports added


= 2019-04-11 =  
v1.4.0  
* new filter: `otfmgs_colors` - ability to add new colors or replace a set of colors. See FAQ  


= 2019-02-22 =  
v1.3.3  
* Compatibility for WordPress v5.1  


= 2019-01-18 =  
v1.3.2  
* repository fix update  


= 2019-01-18 =  
v1.3.1  
* Rename min.js & min.css files  


= 2019-01-16 =  
v1.3.0  
* Accessibility support  
Navigation by "Tab" button:  
The "Up arrow" pressed - If the focused spoiler is open, you close it  
The "Down arrow" pressed - If the focused spoiler is closed, you open it  
Either the "Enter" key or "Space bar" pressed - You toggle the focused spoiler. If it is open, close it; if it is closed, open it.  
The "End" key pressed - You move focus to the last spoiler on the page  
The "Home" key pressed - You move focus to the first spoiler on the page  

Support screen readers  


= 2018-12-07 =  
v1.2.0  
* Compatibility for WordPress v5.0.0  


= 2018-11-30 =  
v1.1.1  
* Compatibility for Gutenberg v4.6.0  


= 2018-11-30 =  
v1.1.0  
* Compatibility for Gutenberg v4.5.1  


= 2018-11-17 =  
v1.0.9  
* Compatibility for Gutenberg v4.4.0  


= 2018-11-15 =  
v1.0.8  
* Compatibility for Gutenberg v4.3.0  


= 2018-11-08 =  
v1.0.7  
* Compatibility for Gutenberg v4.2.0  


= 2018-10-26 =  
v1.0.6  
* fix spoiler bug if isset cover block  
* Compatibility for Gutenberg v4.1.1  


**2018-10-25**  
v1.0.5  
* Compatibility for Gutenberg v4.1.0  
* Small css-fix for admin editor  


**2018-10-06**  
v1.0.4  
* Compatibility for Gutenberg 3.9.0  
* Fix content spoiler on apple safari  


**2018-09-20**  
v1.0.3  
* Support for Gutenberg 3.8.0  
* Removed lines that do not need to be translated (proper names)  
* Added hints to the translation file (for translate.wordpress.org)  


**2018-09-12**  
v1.0.2  
* add php file only for service translate.wordpress.org  


**2018-09-12**  
v1.0.1  
* Small css fix  


**2018-09-08**  
v1.0.0  
* Release  


## Author

**Wladimir Druzhaev** [(Otshelnik-Fm)](https://otshelnik-fm.ru/)