import { FaHome, FaUser, FaProjectDiagram, FaInfo } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="py-4">
      <h5 className="text-center">
        Harmony
      </h5>
      <ul className="list-unstyled text-center gap-5 d-flex flex-column my-5">
        <li>
          <Link className="d-flex flex-column justify-content-center align-items-center gap-1" to="/">
            <FaHome size="24" />
            Home
          </Link>
        </li>
        <li>
          <Link className="d-flex flex-column justify-content-center align-items-center gap-1" to="/clients">
            <FaUser size="24" />
            Clients
          </Link>
        </li>
        <li>
          <Link className="d-flex flex-column justify-content-center align-items-center gap-1" to="/projects">
            <FaProjectDiagram size="24" />
            Projects
          </Link>
        </li>
        <li>
          <Link className="d-flex flex-column justify-content-center align-items-center gap-1" to="/about">
            <FaInfo size="24" />
            About
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;