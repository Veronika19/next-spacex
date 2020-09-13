import React from "react";

function FilterSuccess({ router }) {
	const urlParams = new URLSearchParams(router.query);
	const selectedSuccess = urlParams.has("status")
		? urlParams.get("status")
		: false;
	const filterSuccess = (status) => {
		let params = new URLSearchParams({ ...router.query, status });
		router.push(router.pathname + `?${params}`);
		// dispatch(filterByYear(year));
	};
	return (
		<div className="row mb-2">
			<div className="col">
				<button
					onClick={() => filterSuccess("true")}
					type="button"
					className={`btn btn-sm ${
						selectedSuccess === "true" ? "btn-info" : "btn-success"
					}`}
				>
					True
				</button>
			</div>
			<div className="col">
				<button
					onClick={() => filterSuccess("false")}
					type="button"
					className={`btn btn-sm ${
						selectedSuccess === "false" ? "btn-info" : "btn-success"
					}`}
				>
					False
				</button>
			</div>
		</div>
	);
}

export default FilterSuccess;
