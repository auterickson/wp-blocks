import React, { useEffect, useState } from "react";

// Modal component
function Modal({ description, onClose }) {
	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal">
				<h2>Project Description</h2>
				<p>{description}</p>
				<button onClick={onClose} className="modal-close-button">Close</button>
			</div>
		</div>
	);
}

export default function ProjectListItem({ post }) {
	const [imageUrl, setImageUrl] = useState("/path/to/placeholder.jpg"); // Placeholder image
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [showFullDescription, setShowFullDescription] = useState(false);
	const portfolioImageId = post.acf?.portfolio_image;

	useEffect(() => {
		if (portfolioImageId) {
			fetch(`http://localhost:8888/wp-json/wp/v2/media/${portfolioImageId}`)
				.then((response) => response.json())
				.then((data) => {
					if (data?.source_url) {
						setImageUrl(data.source_url);
					} else {
						console.error("No image URL found for this media ID");
					}
				})
				.catch((error) => console.error("Error fetching media data:", error));
		}
	}, [portfolioImageId]);

	const technologies = post._embedded?.["acf:term"]?.map((term) => term.name) || [];
	const description = post.acf.portfolio_description;

	// Shorten the description if it exceeds a certain length
	const shortDescription = description.length > 100 ? description.substring(0, 100) + "..." : description;

	// Handle the modal open and close
	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			{isModalOpen && <Modal description={description} onClose={handleModalClose} />}

			<div className="project-card">
				<div className="project-card-inner">
					{/* Background Image */}
					<div
						className="project-card-img"
						style={{
							backgroundImage: `url(${imageUrl})`,
						}}
					></div>

					<div className="project-card-info">
						<h3 className="project-title">{post.title.rendered}</h3>

						<div className="project-description">
							<p>{showFullDescription ? description : shortDescription}</p>
							{description.length > 100 && (
								<button onClick={() => setShowFullDescription(!showFullDescription)} className="read-more-btn">
									{showFullDescription ? "Show Less" : "Read More"}
								</button>
							)}
						</div>

						<div className="project-technologies">
							{technologies.length > 0 && (
								<div className="tech-pills">
									{technologies.map((tech, index) => (
										<span key={index} className="tech-pill">
                      {tech}
                    </span>
									))}
								</div>
							)}
						</div>

						{/* Button to open project link */}
						<button className="project-link-button" onClick={() => window.open(post.acf.portfolio_link, '_blank')}>
							Visit Project
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
