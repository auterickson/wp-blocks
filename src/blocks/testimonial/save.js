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
	let stars= '';
	for(let i = 0; i <attributes.stars; i++) {
		stars += '★';
	}

	const divStyles = {
		//react translates kabob-case to camelCase
		backgroundColor: attributes.backgroundColor,
		color: attributes.textColor,
	}
	return (
		<div {...useBlockProps.save()} style={divStyles} >
			<div className="stars">{ stars }</div>
			<RichText.Content
				tagName="div"
				className="quote"
				value={ attributes.quote }/>
			<div className="quote-profile">
				<div className="photo">
					<img src={attributes.avatarURL} alt={"photo of " + attributes.author}/>
				</div>
				<div className="text">
					<p className="author">{attributes.author}</p>
					<p className="location">Point Place, WI</p>
				</div>
			</div>
		</div>
	);
}
