import React, { useState } from 'react';

export default function Search({ filterProjects }) {
	const [keyword, setKeyword] = useState('');

	const handleSearchChange = (e) => {
		const searchKeyword = e.target.value;
		setKeyword(searchKeyword);
		filterProjects(searchKeyword, '');
	};

	return (
		<div>
			<label>
				Search by title:
				<input
					type="text"
					value={keyword}
					onChange={handleSearchChange}
					placeholder="Search projects"
				/>
			</label>
		</div>
	);
}
