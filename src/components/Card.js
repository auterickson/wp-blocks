 export default function Card({ attributes, styles,img, title, content }) {
		const { backgroundColor, textColor } = attributes;

		const cardStyles = {
			backgroundColor: backgroundColor,
			color: textColor,
			...styles
		};

		return (
			<div className="card" style={cardStyles}>
				<div className="card-img">{img}</div>
				<div className="card-body">
					{title}
					{content}
				</div>
			</div>
		);
	}

