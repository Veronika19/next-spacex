const filterApi = (queryParams) => {
	// console.log(queryParams.getAll());
	const mainApi = "https://api.spacexdata.com/v3/launches?limit=100";

	const year = queryParams.has("year") === false ? "" : queryParams.get("year");
	const status =
		queryParams.has("status") === false ? "" : queryParams.get("status");
	const landing =
		queryParams.has("landing") === false ? "" : queryParams.get("landing");

	const api = `${mainApi}&launch_year=${year}&launch_success=${status}&land_success=${landing}`;

	return api;
};

export default filterApi;
