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
import {SelectControl, TextControl} from "@wordpress/components";
//export default function Edit(props)
export default function Edit( {attributes, setAttributes} ) {
	return (
		<div { ...useBlockProps() }>
			<div className="photo">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) =>
							setAttributes({'avatarURL': media.sizes.thumbnail.url})
						}
						allowedTypes={['image']}
						render={({open}) => (
							<img onClick={open}
								 src={attributes.avatarURL}
								 alt="choose image"/>
						)}
					/>
				</MediaUploadCheck>

			</div>

			<TextControl
				label={__('Tags', 'text-domain')}
				value={attributes.tags}
				onChange={(tags) => setAttributes({ tags })}
				help={__('Comma-separated values', 'text-domain')}
			/>

			<RichText
				tagName="h3"
				placeholder={__('Enter Project Name', 'text-domain')}
				value={attributes.name}
				onChange={(name) => setAttributes({ name })}
			/>

				<RichText
					className="description"
					tagName="div"
					placeholder={__('Enter description...', 'text-domain')}
					value={attributes.description}
						onChange={value => setAttributes({description:value})}
				/>
				<a href="#" className="btn">Check It Out</a>
			</div>
	);
}
