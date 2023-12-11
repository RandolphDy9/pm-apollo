import AddClient from "../components/AddClient";
import Clients from "../components/Clients";
import Header from "../components/Header";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      <Header label="Dashboard" />
      <Projects />
      <div className="card border border-0 mb-4 shadow-md col-10 rounded-4">
        <div className="card-body">
          <AddClient />
          <Clients />
        </div>
      </div>
    </div>
  );
};

export default Home;
