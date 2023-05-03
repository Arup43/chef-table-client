import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container my-5">
      <nav className="d-flex align-items-center justify-content-between">
        <div className="brand">
          <Link to="/">
            <h1>Chef Table</h1>
          </Link>
        </div>
        <div>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/blog">Blogs</Link>
          </ul>
        </div>
        <div>
          {/* User profile picture */}
          <div className="image-container" title="John doe">
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="User"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
