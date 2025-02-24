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
export default function Edit({ attributes, setAttributes }) {
	const { projectURL, name, description, tags } = attributes;

	return (
		<div {...useBlockProps({className: "is-editor"})}>
			<div className="photo">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => setAttributes({projectURL: media.sizes.thumbnail.url})}
						allowedTypes={['image']}
						render={({open}) => (
							<div>
								<img
									onClick={() => {
										console.log('Image clicked, opening media library...');
										open();
									}}
									src={projectURL || 'http://place-hold.it/75'}
									alt={__('Choose an image', 'portfolio-block')}
								/>
								<button onClick={() => {
									console.log('Button clicked, opening media library...');
									open();
								}}>Open Media Library
								</button>
							</div>
						)}
					/>
				</MediaUploadCheck>
			</div>

			<div className="card-text">
				<RichText
					tagName="h3"
					className="card-name"
					value={name}
					onChange={(value) => setAttributes({name: value})}
					placeholder={__('Enter portfolio item name', 'portfolio-block')}
				/>

				<RichText
					tagName="p"
					className="card-tags"
					value={tags}
					onChange={(value) => setAttributes({tags: value})}
					placeholder={__('Enter tags (e.g., HTML, CSS)', 'portfolio-block')}
				/>

				<RichText
					tagName="p"
					className="card-description"
					value={description}
					onChange={(value) => setAttributes({description: value})}
					placeholder={__('Enter description of portfolio item', 'portfolio-block')}
				/>


			</div>
		</div>
	);
}
