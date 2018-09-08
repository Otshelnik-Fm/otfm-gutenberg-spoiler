/* 
 *  BOX spoiler start
 */

( function( editor, components, i18n, element ) {
    var el = element.createElement,
        RichText = editor.RichText,
        BlockControls = editor.BlockControls,
        AlignmentToolbar = editor.AlignmentToolbar,
        InspectorControls = editor.InspectorControls,
        ColorPalette = components.ColorPalette,
        __ = i18n.__;

    // see icons https://material.io/tools/icons/
    // and add svg https://wp.zacgordon.com/2017/12/07/how-to-add-custom-icons-to-gutenberg-editor-blocks-in-wordpress/
    var iconBoxSpoiler = el('svg', { width: 24, height: 24 },
                            el('path', { d: "M7 21h2v-2H7v2zm0-8h2v-2H7v2zm4 0h2v-2h-2v2zm0 8h2v-2h-2v2zm-8-4h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2v-2H3v2zm0-4h2V7H3v2zm8 8h2v-2h-2v2zm8-8h2V7h-2v2zm0 4h2v-2h-2v2zM3 3v2h18V3H3zm16 14h2v-2h-2v2zm-4 4h2v-2h-2v2zM11 9h2V7h-2v2zm8 12h2v-2h-2v2zm-4-8h2v-2h-2v2z" } )
                        );

    wp.blocks.registerBlockType( 'otfm/box-spoiler-start', {
        title: __( 'Box Spoiler Start', 'ogs-spoiler' ),
        description: __( 'Opens the block group spoiler.', 'ogs-spoiler' ),
        icon: iconBoxSpoiler,   // add svg icon
        category: 'common',     // The category of the block.
        attributes: {           // Necessary for saving block content.
            title: {
                type: 'array',
                source: 'children',
                selector: '.otfm-sp__title'
            },
            alignment: {
                type: 'string',
                default: 'left'
            },
            spColor: {
                type: 'string',
                default: '#f5f5f5'
            }
        },
        keywords: [ // search sinonime
            'box spoiler',
            'hide show toogle accordion accordeon спойлер',
            'otfm'
        ],

        edit: function( props ) {
            var attributes = props.attributes,
                alignment = props.attributes.alignment,
                spColor = props.attributes.spColor;

            if (typeof spColor === 'undefined') {
                spColor = '#f5f5f5';
            }

            function onChangeAlignment( newAlignment ) {
                props.setAttributes( { alignment: newAlignment } );
            }

            return [
                el( InspectorControls, { key: 'inspector' }, // Display the block options in the inspector panel.
                    el( components.PanelBody, {
                            title: __( 'Spoiler color', 'ogs-spoiler' ),
                            className: 'otfm_spoiler_color',
                            initialOpen: true
                        },
                        el( 'p', {}, __( 'Choose the color of the spoiler header:', 'ogs-spoiler' ) ),
                        el( ColorPalette, {
                            label: __( 'Spoiler color', 'ogs-spoiler' ),
                            colors: [
                                {color:"#f5f5f5",name:"1"},
                                {color:"#e5e5e5",name:"2"},
                                {color:"#ffeead",name:"3"},
                                {color:"#e8d98a",name:"4"},
                                {color:"#feb236",name:"5"},
                                {color:"#f9ccac",name:"6"},
                                {color:"#f2ae72",name:"7"},
                                {color:"#ffcfcf",name:"8"},
                                {color:"#eca1a6",name:"9"},
                                {color:"#e3eaa7",name:"10"},
                                {color:"#b5e7a0",name:"11"},
                                {color:"#bdcebe",name:"12"},
                                {color:"#d6cbd3",name:"13"},
                                {color:"#e6e2d3",name:"14"},
                                {color:"#dac292",name:"15"},
                                {color:"#d5e1df",name:"16"},
                                {color:"#b7d7e8",name:"17"},
                                {color:"#9fd5f0",name:"18"},
                                {color:"#ffffff",name:"19"}
                            ],
                            value: attributes.spColor,
                            onChange: function( sColor ) {
                                props.setAttributes( { spColor: sColor } );
                            }
                        } )
                    )
                ),

                el( BlockControls, { key: 'controls' },
                    el( AlignmentToolbar, {
                        value: alignment,
                        onChange: onChangeAlignment
                    } )
                ),

                el( 'div', { 
                        className: "otfm-sp__wrapper otfm-sp__box js-otfm-sp-box__closed otfm-sp__" + spColor.slice(1),
                        'data-otfm-spc': spColor,
                        style: {
                            textAlign: alignment
                        }
                    },

                    el( RichText, {
                        key: 'editable',
                        tagName: 'div',
                        className: 'otfm-sp__title',
                        value: attributes.title,
                        placeholder: __( 'Spoiler title', 'ogs-spoiler' ),
                        keepPlaceholderOnFocus: true,
                        onChange: function( newTitle ) {
                            props.setAttributes( { title: newTitle } );
                        }

                    } ),

                )
            ];
        },

        save: function( props ) {
            var attributes = props.attributes,
                alignment = props.attributes.alignment,
                spColor = props.attributes.spColor;

            return (
                el( 'div', { 
                        className: "otfm-sp__wrapper otfm-sp__box js-otfm-sp-box__closed otfm-sp__" + spColor.slice(1),
                        'data-otfm-spc': spColor,
                        style: {
                            textAlign: alignment
                        }
                    },

                    el( RichText.Content, {
                        tagName: 'div',
                        className: 'otfm-sp__title',
                        value: attributes.title
                    } ),

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
