/* 
 *  LITTLE spoiler
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
    var iconLitSpoiler = el('svg', { width: 24, height: 24 },
                            el('path', { d: "M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z" } )
                        );

    wp.blocks.registerBlockType( 'otfm/little-spoiler', {
        title: __( 'Little Spoiler', 'ogs-spoiler' ),
        description: __( 'A custom block for displaying little spoiler.', 'ogs-spoiler' ),
        icon: iconLitSpoiler,   // add svg icon
        category: 'common',     // The category of the block.
        attributes: {           // Necessary for saving block content.
            title: {
                type: 'array',
                source: 'children',
                selector: '.otfm-sp__title'
            },
            subtitle: {
                type: 'array',
                source: 'children',
                selector: '.otfm-sp__content'
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
            'little spoiler',
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
                                {color:"#9fd5f0",name:"18"}
                            ],
                            value: attributes.spColor,
                            onChange: function( sColor ) {
                                props.setAttributes( { spColor: sColor } );
                            },
                            disableCustomColors: true // colorpicker off
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
                        className: "otfm-sp__wrapper otfm-sp__little js-otfm-sp__closed otfm-sp__" + spColor.slice(1),
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

                    el( RichText, {
                        tagName: 'div',
                        className: 'otfm-sp__content',
                        placeholder: __( 'Spoiler content', 'ogs-spoiler' ),
                        keepPlaceholderOnFocus: true,
                        value: attributes.subtitle,
                        onChange: function( newSubtitle ) {
                            props.setAttributes( { subtitle: newSubtitle } );
                        }
                    } )
                )
            ];
        },

        save: function( props ) {
            var attributes = props.attributes,
                alignment = props.attributes.alignment,
                spColor = props.attributes.spColor;

            return (
                el( 'div', {
                        className: "otfm-sp__wrapper otfm-sp__little js-otfm-sp__closed otfm-sp__" + spColor.slice(1),
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

                    el( RichText.Content, {
                        tagName: 'div',
                        className: 'otfm-sp__content',
                        style: {
                            height: 0,
                            opacity: 0,
                            visibility: 'hidden'
                        },
                        value: attributes.subtitle
                    } )
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
