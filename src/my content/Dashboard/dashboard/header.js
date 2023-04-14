import "../../css/login.css";
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div className="container-fluid head">
      <div className="row">
        <div className="col-5">
          <div className="row">
            <div className="col-2">
              <h5>
                <Link to="/">Navbar</Link>
              </h5>
            </div>
            <div className="col-1">
              <Link to="/">Home</Link>
            </div>
            <div className="col-1">
              <Link to="/About" style={{ color: "grey" }}>
                About
              </Link>
            </div>
            <div className="col-1">
              <Link to="/login" style={{ color: "grey" }}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
export default Header;
