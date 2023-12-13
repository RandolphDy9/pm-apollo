import { useQuery } from "@apollo/client";
import { FaHome, FaUser, FaProjectDiagram, FaInfo } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { GET_PROJECTS } from "../queries/projectQueries";

const Sidebar = () => {
  const location = useLocation();
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div className="p-4">
      <h5>Harmony</h5>
      <div className="my-5">
        <div className="my-3 text-muted">Overview</div>
        <ul className="list-unstyled text-center gap-4 d-flex flex-column">
          <li>
            <Link
              className={`d-flex align-items-center gap-2 link-item ${
                location.pathname === "/" ? "active-link" : ""
              }`}
              to="/"
            >
              <FaHome size="18" />
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`d-flex align-items-center gap-2 link-item ${
                location.pathname.includes("/clients") ? "active-link" : ""
              }`}
              to="/clients"
            >
              <FaUser size="18" />
              Clients
            </Link>
          </li>
          <li>
            <Link
              className={`d-flex align-items-center gap-2 link-item ${
                location.pathname.includes("projects") ? "active-link" : ""
              }`}
              to="/projects"
            >
              <FaProjectDiagram size="18" />
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={`d-flex align-items-center gap-2 link-item ${
                location.pathname.includes("about") ? "active-link" : ""
              }`}
              to="/about"
            >
              <FaInfo size="18" />
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="my-5">
        <div className="my-3 text-muted">Projects</div>
        <ul className="list-unstyled text-center gap-4 d-flex flex-column">
          {data.projects.length > 0 &&
            data.projects.map((project: any) => {
              return (
                <li>
                  <Link
                    className={`d-flex align-items-center gap-2 link-item ${
                      location.pathname.includes(project.id) ? "active-link" : ""
                    }`}
                    to={`/projects/${project.id}`}
                  >
                    <FaProjectDiagram size="18" />
                    { project.name }
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
