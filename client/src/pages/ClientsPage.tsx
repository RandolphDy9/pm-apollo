import AddClient from "../components/AddClient";
import Clients from "../components/Clients";
import Header from "../components/Header";

const ClientsPage = () => {
  return (
    <div>
      <Header label="Clients" />
      <div className="card border border-0 my-4 shadow-md col-md-8 rounded-4">
        <div className="card-body">
          <AddClient />
          <Clients />
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
