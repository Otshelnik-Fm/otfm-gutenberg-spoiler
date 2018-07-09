( function( editor, components, i18n, element ) {
	var el = element.createElement;
	var registerBlockType = wp.blocks.registerBlockType;
	var RichText = wp.editor.RichText;
	var BlockControls = wp.editor.BlockControls;
	var AlignmentToolbar = wp.editor.AlignmentToolbar;
	var InspectorControls = wp.editor.InspectorControls;
	var TextControl = wp.components.TextControl;
        var ColorPalette = wp.components.ColorPalette;

	registerBlockType( 'otfm/spoiler', { // The name of our block. Must be a string with prefix. Example: my-plugin/my-custom-block.
		title: i18n.__( 'Spoiler' ), // The title of our block.
		description: i18n.__( 'A custom block for displaying spoiler.' ), // The description of our block.
		icon: 'align-center', // Dashicon icon for our block. Custom icons can be added using inline SVGs.
		category: 'common', // The category of the block.
		attributes: { // Necessary for saving block content.
			title: {
				type: 'array',
				source: 'children',
				selector: '.otfm_spoiler_title'
			},
			subtitle: {
				type: 'array',
				source: 'children',
				selector: '.otfm_spoiler_content'
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
                    'spoiler',
                    'hide',
                    'otfm'
                ],

		edit: function( props ) {

			var attributes = props.attributes;
			var alignment = props.attributes.alignment;
                        var spColor = props.attributes.spColor;


			function onChangeAlignment( newAlignment ) {
				props.setAttributes( { alignment: newAlignment } );
			}
                        
                        function onChangeContent( newContent ) {
                            props.setAttributes( { content: newContent } );
                        }

			return [
				el( InspectorControls, { key: 'inspector' }, // Display the block options in the inspector panel.
					el( components.PanelBody, {
						title: i18n.__( 'Spoiler color' ),
						className: 'otfm_spoiler_color',
						initialOpen: true
					},
						el( 'p', {}, i18n.__( 'Choose the color of the spoiler header:' ) ),
						el( ColorPalette, {
                                                        label: i18n.__( 'Spoiler color' ),
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

                                el(
                                    BlockControls,
                                    { key: 'controls' },
                                    el(
                                        AlignmentToolbar,
                                        {
                                            value: alignment,
                                            onChange: onChangeAlignment
                                        }
                                    )
                                ),
				el( 'div', { className: props.className },
					el( 'div', {
                                                    className: 'otfm_spoiler_wrapper', 
                                                    style: {
                                                        textAlign: alignment,
                                                        border: '1px solid #e5e5e5'
                                                    } 
                                                },

						el( RichText, {
                                                        key: 'editable',
                                                        tagName: 'div',
                                                        className: 'otfm_spoiler_title',
                                                        style: {
                                                            backgroundColor: spColor,
                                                            padding: '5px 10px'
                                                        },
                                                        value: attributes.title,
                                                        placeholder: 'Spoiler title',
                                                        keepPlaceholderOnFocus: true,
							onChange: function( newTitle ) {
								props.setAttributes( { title: newTitle } );
							}

						} ),
						el( RichText, {
							tagName: 'div',
                                                        className: 'otfm_spoiler_content',
							placeholder: i18n.__( 'Spoiler content' ),
							keepPlaceholderOnFocus: true,
							value: attributes.subtitle,
                                                        style: {
                                                            padding: '5px 10px'
                                                        },
							//isSelected: false,
							onChange: function( newSubtitle ) {
								props.setAttributes( { subtitle: newSubtitle } );
							}
						} )
					)
                                    
				)
			];
		},

		save: function( props ) {
			var attributes = props.attributes;
			var alignment = props.attributes.alignment;
                        var spColor = props.attributes.spColor;

			return (
				el( 'div', {
					className: props.className
				},
					el( 'div', {
						className: 'otfm_spoiler_wrapper',
                                                style: {
                                                    textAlign: alignment,
                                                    border: '1px solid #e5e5e5'
                                                } 
					},
						el( RichText.Content, {
							tagName: 'div',
                                                        className: 'otfm_spoiler_title',
                                                        style: {
                                                            backgroundColor: spColor,
                                                            padding: '5px 10px'
                                                        },
							value: attributes.title
						} ),
						el( RichText.Content, {
							tagName: 'div',
                                                        className: 'otfm_spoiler_content',
                                                        style: {
                                                            padding: '5px 10px'
                                                        },
							value: attributes.subtitle
						} )
					)
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
