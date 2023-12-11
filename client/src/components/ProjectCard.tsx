import { Link } from "react-router-dom";

type ProjectType = {
  id?: string;
  name: string;
  status: string;
};

const ProjectCard = (props: { project: ProjectType }) => {
  const { project } = props;
  return (
    <div className="card col-4 shadow-md border border-0 rounded-4">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>
            <h3>{ project.name }</h3>
            <p><b>Status:</b> { project.status }</p>
          </div>
          <div>
            <Link to={`/projects/${project.id}`}>
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
