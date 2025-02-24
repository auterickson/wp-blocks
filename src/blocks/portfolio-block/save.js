/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
import { RichText, PlainText } from '@wordpress/block-editor';
export default function Save({ attributes }) {
	const { projectURL, name, description, tags } = attributes;

	return (
		<div {...useBlockProps.save()} className="portfolio-item">
			<div className="photo">
				<img
					src={projectURL}
					alt={name ? `Photo of ${name}` : __('Image representing portfolio item', 'portfolio-block')}
				/>
				<div className="card-text">
					<h3 className="card-name">{name}</h3>
					{tags && <p className="card-tags">{tags}</p>}
					<p className="card-description">{description}</p>
				</div>
			</div>
		</div>
	);
}
