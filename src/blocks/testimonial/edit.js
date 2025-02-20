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

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
import { RichText, PlainText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { SelectControl} from "@wordpress/components";
import StarRating from "../../components/StarRating";
//export default function Edit(props)
export default function Edit( {attributes, setAttributes} ) {
	//build the stars
	return (
	<div {...useBlockProps()} >
		<StarRating
					rating={attributes.stars}
					setRating={stars => setAttributes({stars: parseInt(stars)})}
		/>
		{/*<div className="stars">*/}
		{/*	*/}
		{/*	<SelectControl*/}
		{/*		label="Select a Rating"*/}
		{/*		value={attributes.stars}*/}
		{/*		onChange={stars => setAttributes({stars: parseInt(stars)})}*/}
		{/*		options={[*/}
		{/*			{value: 1, label:'★'},*/}
		{/*			{value: 2, label:'★★'},*/}
		{/*			{value: 3, label:'★★★'},*/}
		{/*			{value: 4, label:'★★★★'},*/}
		{/*			{value: 5, label:'★★★★★'},*/}
		{/*		]}*/}
		{/*	/>*/}
		{/*</div>*/}
		<div className="quote">
		<RichText
			className="quote"
			tagName="div"
			placeholder="I love cake"
			value={attributes.quote}
			onChange={value => setAttributes({quote:value})}
		/>
		</div>
		<div className="quote-profile">
			<div className="photo">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ ( media ) =>
							setAttributes({'avatarURL': media.sizes.thumbnail.url})
						}
						allowedTypes={ ['image'] }
						render={ ( { open } ) => (
							<img onClick={open}
								 src={attributes.avatarURL}
								 alt="choose image"/>
						)}
					/>
				</MediaUploadCheck>

			</div>
			<div className="text">
				<PlainText className="author"
						   value={attributes.author}
						   // onChange={value=> setAttributes({author: value})}
						   onChange={author=> setAttributes({author})}
				/>
				<p className="location">Point Place, WI</p>
			</div>
		</div>
	</div>
);
}
