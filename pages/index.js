import Head from "next/head";
import { useRouter } from "next/router";

import LaunchYears from "../components/launch-year";
import Programes from "../components/programes";

export default function Home() {
  const router = useRouter();
  const urlParams = new URLSearchParams(router.query);

  let removeFilterOpt =
    urlParams.has("status") ||
    urlParams.has("year") ||
    urlParams.has("landing");

  const resetFilter = () => {
    router.push(router.pathname);
  };

  return (
    <div className="container">
      <Head>
        <title>SpaceX Launches</title>
        <meta
          name="description"
          content="A front-end application which would help userslist and browse all launches by SpaceX program"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <h3 className="nav-link" href="#">
              SpaceX Launch Programs
            </h3>
          </li>
        </ul>
      </nav>
      <div className="row">
        <div className="col-lg-2 col-12">
          <div className="row">
            <h3>Filter</h3>
            {removeFilterOpt && (
              <button className="btn btn-sm" onClick={resetFilter}>
                Remove All filter
              </button>
            )}
          </div>
          <LaunchYears />
        </div>
        <div className="col-lg-10 col-12">
          <Programes />
        </div>
      </div>
    </div>
  );
}
