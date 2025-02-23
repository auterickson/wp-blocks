/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

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
export default function save({attributes}) {
	return (
		<div {...useBlockProps()}>
			<div className="photo">
				<img src={attributes.avatarURL} alt={"photo of " + attributes.author}/>
			</div>
			{attributes.tags && (
				<p className="card-tags">{attributes.tags}</p>
			)}


			<RichText.Content tagName="h3" className="card-name" value={attributes.name} />


			<RichText.Content tagName="p" className="card-description" value={attributes.description} />

				<a href="#" className="btn">Check It Out</a>

		</div>
	);
}
