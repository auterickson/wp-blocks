import React, { useState } from "react";
import { SelectControl } from "@wordpress/components";

export default function Filter({ filterProjects, technologies }) {
	const [selectedTech, setSelectedTech] = useState('');

	return (
		<SelectControl
			className="technology-filter"
			label="Filter by Technology:"
			value={selectedTech}
			options={[
				{ label: 'All Technologies', value: '' },
				{ label: 'HTML', value: '3' },
				{ label: 'WordPress', value: '4' },
				{ label: 'Bootstrap', value: '5' },
				{ label: 'PHP', value: '6' },
				{ label: 'MySQL', value: '7' },
				{ label: 'CSS', value: '8' },
				{ label: 'JavaScript', value: '9' },
				{ label: 'Vue.js', value: '10' },
				{ label: 'Quasar', value: '11' },
				{ label: 'NoSQL', value: '12' },
				{ label: 'API', value: '13' },


				...technologies.map(tech => ({ label: tech.name, value: tech.slug }))
			]}
			onChange={(tech) => {
				setSelectedTech(tech);
				filterProjects('', tech);
			}}
		/>
	);
}
