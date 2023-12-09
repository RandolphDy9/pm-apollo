import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "../queries/clientQueries";

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
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Client
          </button>
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
        </>
      )}
    </div>
  );
};

export default Clients;
