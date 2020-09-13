import React from "react";

function FilterHead({ title }) {
	return (
		<>
			<div className="flex border-bottom-3 mb-3">
				<p
					className="text-center"
					style={{ borderBottom: "2px solid grey", fontWeight: "500" }}
				>
					{title}
				</p>
			</div>
		</>
	);
}

export default FilterHead;
