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
        <div className="card col-md-6 border-0 rounded-4">
          <div className="card-body container">
            <div className="d-flex justify-content-between align-items-center">
              <h3>{ data.project.name }</h3>
              <div><b>Status: </b>{ data.project.status }</div>
            </div>
            <div>{ data.project.description }</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectDetails;