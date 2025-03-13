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
export default function Edit({ attributes, setAttributes }) {
	return (
		<div {...useBlockProps()}>
			<BlockSettings attributes={attributes} setAttributes={setAttributes} />

			{/* Placeholder Preview in Editor */}
			<div className="project-card" style={{ backgroundColor: attributes.cardColor }}>
				<div className="project-card-image">
					<img src="https://via.placeholder.com/150" alt="Project Preview" />
				</div>
				<div className="project-card-content">
					<h3 className="name" style={{ color: attributes.headingColor }}>Project Name</h3>
					<p className="description" style={{ color: attributes.textColor }}>
						Project description goes here...
					</p>
					<p><strong>Technologies Used:</strong> HTML, CSS, JavaScript</p>
					<a href="#" className="project-link">View Project</a>
				</div>
			</div>

			{/* Server-Side Rendered Content */}
			<ServerSideRender block={metadata.name} attributes={attributes} />
		</div>
	);
}
