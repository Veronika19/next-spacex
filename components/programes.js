import useSWR from "swr";
import { useRouter } from "next/router";

import filterUrl from "../utils/apiUrl";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Programes = () => {
	const router = useRouter();
	const urlParams = new URLSearchParams(router.query);

	const apiUrl = filterUrl(urlParams);
	const { data, error } = useSWR(apiUrl, fetcher);
	// console.log(data);

	if (error) return "An error has occurred.";
	if (!data) return "Loading....";

	let spaceX;
	if (data.length == 0) {
		spaceX = "No Data Found";
	} else {
		spaceX = data.map((item, index) => {
			{
				/*src={item?.links.mission_patch_small}*/
			}
			// console.log(item);
			const missionIds =
				item?.mission_id.length >= 1 ? item.mission_id.join(",") : "Not Found";
			// console.log(missionIds);
			return (
				<div key={index} className="col-lg-3">
					<h6 className="text-primary">
						{item?.mission_name + "#" + item?.flight_number}
					</h6>
					<div className="d-flex flex-column mb-3">
						<div className="p-2 bg-secondary">
							<img
								style={{ width: "80%" }}
								src="https://via.placeholder.com/300"
								className="mx-auto d-block"
								alt={item?.mission_name}
							/>
						</div>
						<div className="p-2">Mission Ids: {missionIds}</div>
						<div className="p-2">Launch Year: {item?.launch_year}</div>
						<div className="p-2">
							Successful Launch:{" "}
							{item?.launch_success === true ? "True" : "False"}
						</div>
						<div className="p-2">
							Successful Landing:{" "}
							{item.rocket.first_stage.cores[0].land_success == null
								? "null"
								: item.rocket.first_stage.cores[0].land_success === true
								? "True"
								: item.rocket.first_stage.cores[0].land_success === false
								? "False"
								: ""}
						</div>
					</div>
				</div>
			);
		});
	}
	return <div className="row">{spaceX}</div>;
};

export default Programes;
