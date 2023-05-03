import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User Logged Out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="container my-5">
      <nav className="d-flex align-items-center justify-content-between">
        <div className="brand">
          <Link to="/">
            <h1 className="text-danger">Chef Table</h1>
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
          {user ? (
            <div className="d-flex justify-content-center align-items-center">
              <div className="image-container" title={user.displayName}>
                <img
                  className="img-fluid"
                  src={user.photoURL}
                  alt="User"
                />
              </div>
              <button onClick={handleLogout} className="btn btn-danger logout-btn ms-4">Logout</button>
            </div>
          ) : (
            <Link to="/login"><button className="btn btn-danger logout-btn ms-4">Login</button></Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
