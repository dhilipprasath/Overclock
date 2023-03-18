import React from 'react'
import UserProfile from './UserProfile';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{'zIndex': '1021'}}>
      <div className="container-fluid">
        <div className="menu-brand d-flex align-items-center d-lg-none">
          <button className="btn btn-primary-outline" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">Overclocked</a>
        </div>
        <UserProfile />
      </div>
    </nav>
  )
}

export default Header