import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "../queries/clientQueries";
import { FaSearch } from 'react-icons/fa';

type ClientType = {
  id?: string;
  name: string;
  email: string;
  phone: string;
};

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div>
      {!loading && !error && (
        <>
          <div className="d-flex justify-content-end mb-2">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Client
            </button>
          </div>
          { data.clients.length > 0 ? (
            <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.clients.map((client: ClientType) => {
                return <ClientRow key={client.id} client={client} />;
              })}
            </tbody>
          </table>
          ) : (
            <div className="d-flex flex-column justify-content-center align-items-center my-5 gap-2">
              <FaSearch size="54" />
              There are currently no clients.
            </div>
          ) }
          
        </>
      )}
    </div>
  );
};

export default Clients;
