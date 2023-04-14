import "../../../css/vertical-layout-light/style.css";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/userdashboard">
            <i className="mdi mdi-grid-large menu-icon"></i>
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item nav-category">UI Elements</li>
        <li className="nav-item">
          <Link
            className="nav-link"
            data-bs-toggle="collapse"
            to="#ui-basic"
            aria-expanded="false"
            aria-controls="ui-basic"
          >
            <i className="menu-icon mdi mdi-floor-plan"></i>
            <span className="menu-title">UI Elements</span>
            <i className="menu-arrow"></i>
          </Link>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/userdashboard/buttons">
                  Buttons
                  {/* <Outlet>Buttons</Outlet> */}
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/userdashboard/dropdowns">
                  Dropdowns
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/userdashboard">
                  Typography
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item nav-category">Forms and Datas</li>
        <li className="nav-item">
          <Link
            className="nav-link"
            data-bs-toggle="collapse"
            to="#form-elements"
            aria-expanded="false"
            aria-controls="form-elements"
          >
            <i className="menu-icon mdi mdi-card-text-outline"></i>
            <span className="menu-title">Form elements</span>
            <i className="menu-arrow"></i>
          </Link>
          <div className="collapse" id="form-elements">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" to="/userdashboard">
                  Basic Elements
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            data-bs-toggle="collapse"
            to="#charts"
            aria-expanded="false"
            aria-controls="charts"
          >
            <i className="menu-icon mdi mdi-chart-line"></i>
            <span className="menu-title">Charts</span>
            <i className="menu-arrow"></i>
          </Link>
          <div className="collapse" id="charts">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/userdashboard">
                  ChartJs
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            data-bs-toggle="collapse"
            to="#tables"
            aria-expanded="false"
            aria-controls="tables"
          >
            <i className="menu-icon mdi mdi-table"></i>
            <span className="menu-title">Tables</span>
            <i className="menu-arrow"></i>
          </Link>
          <div className="collapse" id="tables">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/userdashboard">
                  Basic table
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            data-bs-toggle="collapse"
            to="#icons"
            aria-expanded="false"
            aria-controls="icons"
          >
            <i className="menu-icon mdi mdi-layers-outline"></i>
            <span className="menu-title">Icons</span>
            <i className="menu-arrow"></i>
          </Link>
          <div className="collapse" id="icons">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/userdashboard">
                  Mdi icons
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item nav-category">pages</li>
        <li className="nav-item">
          <Link
            className="nav-link"
            data-bs-toggle="collapse"
            to="#auth"
            aria-expanded="false"
            aria-controls="auth"
          >
            <i className="menu-icon mdi mdi-account-circle-outline"></i>
            <span className="menu-title">User Pages</span>
            <i className="menu-arrow"></i>
          </Link>
          <div className="collapse" id="auth">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/userdashboard">
                  {" "}
                  Login{" "}
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item nav-category">help</li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="http://bootstrapdash.com/demo/star-admin2-free/docs/documentation.html"
          >
            <i className="menu-icon mdi mdi-file-document"></i>
            <span className="menu-title">Documentation</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default SideBar;
