// SkeletonLoader.js
import React from 'react';

const SkeletonLoader = () => {
	return (
		<div className="skeleton-loader">
			<div className="skeleton-card">
				<div className="skeleton-img"></div>
				<div className="skeleton-title"></div>
				<div className="skeleton-text"></div>
				<div className="skeleton-tags"></div>
			</div>
		</div>
	);
};

export default SkeletonLoader;
