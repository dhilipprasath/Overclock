import React from "react";
import UserProfile from "./UserProfile";
import { Link} from 'react-router-dom';

const Sidebar = () => {
  const id = 1;
  return (
    <div
      className="offcanvas offcanvas-start text-bg-dark"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <h2 className="offcanvas-title" id="offcanvasExampleLabel">
          OverClocked
        </h2>
        <button
          type="button"
          className="btn-close btn-close-white d-lg-none"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="sidebar-menu list-unstyled m-0 p-0">
          <li className="my-3">
            <Link to="/user/application" className="text-white text-decoration-none">
              <button className="btn px-4 py-3 btn-dark btn-full w-100 text-start"><span className="fas fa-landmark me-3"></span>Loan Application</button>
            </Link>
          </li>
          <li className="my-3">
            <Link to={`/user/applications/${id}/offers`} className="text-white text-decoration-none">
              <button className="btn px-4 py-3 btn-dark btn-full w-100 text-start"><span className="fas fa-percent me-3"></span>Loan Offers</button>
            </Link>
          </li>
        </ul>
      </div>
      <UserProfile />
    </div>
  );
};

export default Sidebar;
