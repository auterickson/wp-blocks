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
export default function save() {
	return (
		<div {...useBlockProps()}>
			<img src="https://via.placeholder.com/300X200" alt="portfolio piece"/>
			<div className="card-content">
				<div className="tags">
					<span className="tags">tag</span>
					<span className="tags">tag</span>
				</div>
				<p className="description">This is my project and here is some basic information on it. I really like
					it!</p>
				<a href="#" className="btn">Check It Out</a>
			</div>
		</div>
	);
}
