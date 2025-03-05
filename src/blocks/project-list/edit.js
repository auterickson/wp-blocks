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
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import BlockSettings from "../project-list/BlockSettings";
import metadata from "../project-list/block.json";
import ServerSideRender from '@wordpress/server-side-render';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(attributes, setAttributes) {
	return (
		<div {...useBlockProps()}>
			<BlockSettings attributes={attributes} setAttributes={setAttributes}/>
			<div className="project-card">
				<div className="project-card-image">
					<img src="https://2.gravatar.com/avatar/ea8b076b398ee48b71cfaecf898c582b?s=250&d=mm&r=g"/>
				</div>
				<div className="project-card-content">
					<h3 className="name" style={{color: attributes.headingColor}}>Project Name </h3>
					<div className="description" style={{color: attributes.textColor}}>
						<p>Project description</p>
					</div>

				</div>
			</div>
			<ServerSideRender
				block={metadata.name}
				attributes={attributes}
			/>
		</div>
);
}
