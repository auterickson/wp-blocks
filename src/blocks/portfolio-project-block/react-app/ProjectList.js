import React from "react";
import ProjectListItem from "./ProjectListItem";

export default function ProjectList({ posts }) {
	return (
		<div className="project-list">
			{posts.map((post) => (
				<ProjectListItem post={post} key={post.id} />
			))}
		</div>
	);
}
