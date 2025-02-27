/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
import { RichText, PlainText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import {Button, SelectControl, TextControl} from "@wordpress/components";
import BlockSettings from "./BlockSettings";
import Card from "../../components/Card";

//export default function Edit(props)

export default function Edit({ attributes, setAttributes }) {
	const { projectURL, name, description, tags, backgroundColor, textColor, tagColor } = attributes;
	const tagStyles = {
		//react translates kabob-case to camelCase
		backgroundColor: attributes.backgroundColor,
		color: attributes.tagColor,
	}
	return (
		<div {...useBlockProps()} className="wp-block-ae-portfolio-block">
			<BlockSettings attributes={attributes} setAttributes={setAttributes} />
			<Card
				attributes={attributes}
				styles={{ backgroundColor, color: textColor, }}
				img={
					<div className="edit-photo">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) => setAttributes({ projectURL: media.sizes?.thumbnail?.url || media.url })}
								allowedTypes={['image']}
								render={({ open }) => (
									<div>
										{projectURL && <img src={projectURL} alt="Portfolio item image" />}
										<Button className="media-upload-button" onClick={open}>Choose Image</Button>
									</div>
								)}
							/>
						</MediaUploadCheck>
					</div>
				}
				title={
					<RichText
						className="card-name"
						tagName="h3"
						value={name}
						onChange={(value) => setAttributes({ name: value })}
					/>
				}
				content={
					<div className="edit-card-text" >
						{attributes.showTags && (
							<RichText
								className="card-tags"
								tagName="p"
								value={attributes.tags}
								onChange={(value) => setAttributes({ tags: value })}
								placeholder="Enter tags (e.g., HTML, CSS)"
							/>
						)}
						<RichText
							className="card-description"
							tagName="p"
							value={description}
							onChange={(value) => setAttributes({ description: value })}
						/>
					</div>
				}
			/>
		</div>
	);
}
