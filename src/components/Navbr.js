import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbr = () => {
  return (
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">
 Himachal Tourisum
</NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About">
              About
            </NavLink>
          </li>
        <li className="nav-item dropdown">
  <NavLink
    className="nav-link dropdown-toggle"
    to="/"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Please 
    click
  </NavLink>
  <ul className="dropdown-menu">
    <li>
      <NavLink className="dropdown-item" to="/Howtoreach">
      How To Reach
      </NavLink>
    </li>
    <li>
      <NavLink className="dropdown-item" to="/Tourist">
       Tourist Places
      </NavLink>
    </li>
  </ul>
</li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success " type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbr
