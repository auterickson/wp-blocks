import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import Search from "./Search";
import Filter from "./Filter";
import SkeletonLoader from "./SkeletonLoader";


export default function BlockApp() {
	const [projects, setProjects] = useState([]);
	const [filteredProjects, setFilteredProjects] = useState([]);
	const [technologies, setTechnologies] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/wp-json/wp/v2/portfolio?_embed")
			.then((response) => response.json())
			.then((data) => {
				// console.log("First Item _embedded:", data[0]._embedded); <-- double checking id for filter

				setProjects(data);
				setFilteredProjects(data);
				setLoading(false);
			});
	}, []);

	function filterProjects(keyword, category) {
		const results = projects.filter(project => {
			const matchesKeyword = keyword
				? project.title.rendered.toLowerCase().includes(keyword.toLowerCase())
				: true;

			const matchesCategory =
				category
					? project._embedded?.["acf:term"]?.some(
					(term) => term.id === parseInt(category)
				) ?? false
					: true;
			return matchesKeyword && matchesCategory;
		});

		setFilteredProjects(results);
	}

	if (loading) {
		return <SkeletonLoader />;
	}

	return (
		<div>
			<Search filterProjects={filterProjects} />
			<Filter filterProjects={filterProjects} technologies={technologies} />
			<ProjectList posts={filteredProjects} />
		</div>
	);
}
