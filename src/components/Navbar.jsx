import propTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(Props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${Props.mode} bg-body-tertiary `} data-bs-theme={Props.mode}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {Props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {Props.aboutText}
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
          <div className="form-check form-switch mx-2">
            <input className="form-check-input" onClick={Props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${Props.mode === "light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  aboutText: propTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "TextUtilsText",
  aboutText: "AboutText",
};
