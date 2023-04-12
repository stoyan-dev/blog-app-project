import React from "react";

const Spinner = () => {
	return (
		<div className="spinner-border text-primary mt-5 spinner" role="status">
			<span>
				<div className="visually-hidden">Loading...</div>
			</span>
		</div>
	);
};

export default Spinner;
