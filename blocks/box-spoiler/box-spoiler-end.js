/* 
 *  BOX spoiler end
 */

( function( editor, components, i18n, element ) {
    var el = element.createElement,
        __ = i18n.__;

    // see icons https://material.io/tools/icons/
    // and add svg https://wp.zacgordon.com/2017/12/07/how-to-add-custom-icons-to-gutenberg-editor-blocks-in-wordpress/
    var iconBoxSpoiler = el('svg', { width: 24, height: 24 },
                            el('path', { d: "M9 11H7v2h2v-2zm4 4h-2v2h2v-2zM9 3H7v2h2V3zm4 8h-2v2h2v-2zM5 3H3v2h2V3zm8 4h-2v2h2V7zm4 4h-2v2h2v-2zm-4-8h-2v2h2V3zm4 0h-2v2h2V3zm2 10h2v-2h-2v2zm0 4h2v-2h-2v2zM5 7H3v2h2V7zm14-4v2h2V3h-2zm0 6h2V7h-2v2zM5 11H3v2h2v-2zM3 21h18v-2H3v2zm2-6H3v2h2v-2z" } )
                        );

    wp.blocks.registerBlockType( 'otfm/box-spoiler-end', {
        title: __( 'Box Spoiler End', 'ogs-spoiler' ),
        description: __( 'Closes the block group spoiler.', 'ogs-spoiler' ),
        icon: iconBoxSpoiler,   // add svg icon
        category: 'common',     // The category of the block.
        keywords: [ // search sinonime
            'box spoiler',
            'hide show toogle accordion accordeon спойлер',
            'otfm'
        ],

        edit: function() {
            return [
                el( 'div', { className: 'otfm-sp_end' },
                    el( 'p', {}, "------ " + __( 'End Spoiler', 'ogs-spoiler' ) + " ------", ),
                )
            ];
        },

        save: function() {
            return (
                el( 'div', { className: 'otfm-sp_end' }
                )
            );
        }
    } );

} )(
    window.wp.editor,
    window.wp.components,
    window.wp.i18n,
    window.wp.element
);
