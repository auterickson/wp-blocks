import React from "react";
import {InspectorControls} from "@wordpress/block-editor";
import {ColorPalette, ColorPicker, PanelBody, PanelRow, ToggleControl} from "@wordpress/components";
import colors from "../../common/colors";
export default function BlockSettings({attributes, setAttributes}) {
	return (
		<InspectorControls>
			<PanelBody title="Basic" initialOpen={true}>
				<PanelRow>
					<h4>Set Text Color</h4>
				</PanelRow>

				<PanelRow>
					<ColorPalette
						colors={colors}
						value={attributes.textColor}
						onChange={textColor => setAttributes({textColor})}
						disableCustomColors={true}
					/>
				</PanelRow>
				<PanelRow>
					<h4>Set Background Color</h4>
				</PanelRow>

				<PanelRow>
					<ColorPicker
						color={attributes.color}
						onChange={backgroundColor => setAttributes({backgroundColor})}
						enableAlpha
					/>
				</PanelRow>

				<PanelRow>
					<h4>Set Tag Color</h4>
				</PanelRow>

				<PanelRow>
					<ColorPalette
						colors={colors}
						value={attributes.tagColor}
						onChange={tagColor => setAttributes({tagColor})}
						disableCustomColors={true}
					/>
				</PanelRow>
				<PanelRow>
					<h4>Display Tags</h4>
					<ToggleControl
						checked={attributes.showTags}
						onChange={(showTags) => setAttributes({ showTags })}
					/>
				</PanelRow>

			</PanelBody>
		</InspectorControls>
	)
}
