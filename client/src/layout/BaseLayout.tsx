import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

type BaseLayoutProps = {
  children: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="container-fluid layout">
      <div className="row">
        <div className="col-md-2 border sidebar">
          <Sidebar />
        </div>
        <div className="col-md-10 background">
          { children }
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default BaseLayout;