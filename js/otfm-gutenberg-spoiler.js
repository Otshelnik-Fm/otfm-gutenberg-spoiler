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
				default: 'center'
			},
			spColor: {
				type: 'string',
				default: '#cccccc'
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
						className: 'otfm_spoiler_wrapper', style: { textAlign: alignment } },

						el( RichText, {
                                                        key: 'editable',
                                                        tagName: 'div',
                                                        className: 'otfm_spoiler_title',
                                                        style: { backgroundColor: spColor },
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
							//isSelected: false,
							onChange: function( newSubtitle ) {
								props.setAttributes( { subtitle: newSubtitle } );
							}
						} )
					),
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
                                                            {color:"#feb236",name:"royal blue"},
                                                            {color:"#eca1a6",name:"sky blue"},
                                                            {color:"#d5e1df",name:"yellow"},
                                                            {color:"#e3eaa7",name:"pink"},
                                                            {color:"#b5e7a0",name:"purple"},
                                                            {color:"#d6cbd3",name:"yellow"},
                                                            {color:"#bdcebe",name:"pink"},
                                                            {color:"#dac292",name:"yellow"},
                                                            {color:"#e6e2d3",name:"pink"},
                                                            {color:"#deeaee",name:"yellow"},
                                                            {color:"#eea29a",name:"purple"},
                                                            {color:"#d5f4e6",name:"yellow"},
                                                            {color:"#f4e1d2",name:"purple"},
                                                            {color:"#cfe0e8",name:"yellow"},
                                                            {color:"#b7d7e8",name:"pink"},
                                                            {color:"#87bdd8",name:"purple"},
                                                            {color:"#daebe8",name:"purple"},
                                                            {color:"#f9ccac",name:"purple"},
                                                            {color:"#f9d5e5",name:"purple"},
                                                            {color:"#eeac99",name:"purple"},
                                                            {color:"#ffeead",name:"purple"},
                                                            {color:"#f2e394",name:"purple"},
                                                            {color:"#f2ae72",name:"purple"},
                                                        ],
							value: attributes.spColor,
							onChange: function( sColor ) {
								props.setAttributes( { spColor: sColor } );
							}
						} )
					)
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
						style: { textAlign: attributes.alignment }
					},
						el( RichText.Content, {
							tagName: 'div',
                                                        className: 'otfm_spoiler_title',
                                                        style: { backgroundColor: spColor },
							value: attributes.title
						} ),
						el( RichText.Content, {
							tagName: 'div',
                                                        className: 'otfm_spoiler_content',
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
