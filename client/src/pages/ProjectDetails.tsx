import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const ProjectDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>

  return (
    <div>
      <Header label="Project Details" />
      {!loading && !error && (
        <div className="card col-8">
          <div className="card-body container">
            <div>{ data.project.name }</div>
            <div>{ data.project.description }</div>
            <div>{ data.project.status }</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectDetails;