import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../css/navbar.css";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary align-right"
      data-bs-theme="dark"
    >
      <div className="container-fluid justify-content-end">
        <Link className="navbar-brand" to="/">
          <img
            src="/images/27523960.jpg"
            alt="Logo"
            width="60"
            height="60"
            className="d-inline-block align-text-top"
          />
        </Link>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link btn btn-outline-success"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-success" to="/my-games">
                My games
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-success" to="/careers">
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-success" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
