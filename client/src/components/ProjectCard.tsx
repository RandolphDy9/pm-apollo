type ProjectType = {
  id?: string;
  name: string;
  status: string;
};

const ProjectCard = (props: { project: ProjectType }) => {
  const { project } = props;
  return (
    <div className="card col-4 mx-4">
      <div className="card-body">
        <h3>{ project.name }</h3>
        <p>Status: { project.status }</p>
      </div>
    </div>
  );
};

export default ProjectCard;
