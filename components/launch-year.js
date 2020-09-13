import React from "react";
import { useRouter } from "next/router";

import FilterTitle from "./filter-title";
import FilterLaunches from "./filter-success";
import FilterLanding from "./filter-landing";

const years = [];
let year = 2006;
while (year <= 2020) {
	years.push(year);
	year++;
}

function yearChunk(chunkSize = 2, array) {
	let i, j, temparray;
	const chukedArr = [];
	for (i = 0, j = array.length; i < j; i = chunkSize + i) {
		temparray = array.slice(i, i + chunkSize);
		chukedArr.push(temparray);
	}
	return chukedArr;
}

const chunkedYear = yearChunk(2, years);

function LaunchYear(props) {
	const router = useRouter();

	const filterSelectedYear = (year) => {
		let params = new URLSearchParams({ ...router.query, year });
		router.push(router.pathname + `?${params}`);
	};
	const urlParams = new URLSearchParams(router.query);
	const selectedYr = urlParams.has("year") ? urlParams.get("year") : false;
	const filterYears = chunkedYear.map((years, yidx) => {
		return (
			<div key={yidx} className="row mb-2">
				{years.map((year, index) => {
					return (
						<div key={index} className="col">
							<button
								onClick={() => filterSelectedYear(year)}
								type="button"
								className={`btn btn-sm
									${selectedYr == year ? "btn-info" : "btn-success"}`}
							>
								{year}
							</button>
						</div>
					);
				})}
			</div>
		);
	});
	return (
		<>
			<FilterTitle title="Launch Year" />
			{filterYears}
			<FilterTitle title="Successful Launch" />
			<FilterLaunches router={router} />
			<FilterTitle title="Successful Landing" />
			<FilterLanding router={router} />
		</>
	);
}

export default LaunchYear;
