import React from "react";

function FilterLanding({ router }) {
	const urlParams = new URLSearchParams(router.query);
	const selectedLanding = urlParams.has("landing")
		? urlParams.get("landing")
		: false;

	const filterLanding = (landing) => {
		let params = new URLSearchParams({ ...router.query, landing });
		router.push(router.pathname + `?${params}`);
		// dispatch(filterByYear(year));
	};
	return (
		<div className="row mb-2">
			<div className="col">
				<button
					onClick={() => filterLanding("true")}
					type="button"
					className={`btn btn-sm ${
						selectedLanding === "true" ? "btn-info" : "btn-success"
					}`}
				>
					True
				</button>
			</div>
			<div className="col">
				<button
					onClick={() => filterLanding("false")}
					type="button"
					className={`btn btn-sm ${
						selectedLanding === "false" ? "btn-info" : "btn-success"
					}`}
				>
					False
				</button>
			</div>
		</div>
	);
}

export default FilterLanding;
