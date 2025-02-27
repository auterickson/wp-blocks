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
import Card from "../../components/Card";
export default function Save({ attributes }) {
	const { projectURL, name, description, tags, backgroundColor, textColor, tagColor } = attributes;

	return (
		<div {...useBlockProps.save()} className="wp-block-ae-portfolio-block portfolio-item">
			<div className="photo">
				<img src={projectURL} alt={name ? `Photo of ${name}` : 'Portfolio item image'} />
				<div className="card-text" style={{ backgroundColor, color: textColor }}>
					<h3 className="card-name">{name}</h3>
					{tags && <p className="card-tags" style={{ color: tagColor }}>{tags}</p>}
					<p className="card-description">{description}</p>
				</div>
			</div>
		</div>
	);
}
