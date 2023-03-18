import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchData from "../APIUtils";

const UserProfile = () => {
  const [user, setUser] = useState([]);
  const URL = "https://api.sfd.interview.ovckd.dev/v1/user/";
  useEffect(() => {
    fetchData(URL)
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="user-profile text-center dropdown dropdown-center ms-auto">
      <div
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        className="d-inline-flex align-items-center rounded-3 pe-4 m-2"
        style={{ background: "rgba(0,0,0,.2", cursor: "pointer" }}
      >
        {/* <img src={Avatar} width="50" height="50" className='rounded-circle' /> <span className='text-white ps-2'>{'UserName'}</span> */}
        <span className="profile-wrapper rounded-3 text-white">
          <span className="fas fa-user fa-2x"></span>
        </span>
        <span className="text-white ps-2">{user.name}</span>
      </div>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
        {/* <li className='p-3'><h3>Profile</h3></li> */}
        <li>
          <Link className="dropdown-item py-2 px-3" to="/profile">
            <span className="fas fa-user me-2"></span> {user.name}
          </Link>
        </li>
        <li>
          <Link className="dropdown-item py-2 px-3" to={`mailto:${user.email}`}>
            <span className="fas fa-envelope me-2"></span> {user.email}
          </Link>
        </li>
        <li>
          <hr />
        </li>
        <li>
          <Link className="dropdown-item py-2 px-3" to="/login">
          <span className="fas fa-power-off me-2"></span> {"Logout"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
