import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BaseLayout from "./layout/BaseLayout";
import "./App.css";
import ClientsPage from "./pages/ClientsPage";
import Project from "./pages/Project";
import About from "./pages/About";
import ProjectDetails from "./pages/ProjectDetails";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <BaseLayout>
            <div className="container">
              <div className="container p-0 background text-color">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/clients" element={<ClientsPage />} />
                  <Route path="/projects" element={<Project />} />
                  <Route path="/projects/:id" element={<ProjectDetails />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </div>
            </div>
          </BaseLayout>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
