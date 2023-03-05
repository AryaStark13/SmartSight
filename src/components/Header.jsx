import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg py-4 navigation header-padding "
      id="navbar"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img src="images/logo.png" alt="" className="img-fluid" />
        </Link>

        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars"></span>
        </button>

        <div
          className="collapse navbar-collapse text-center"
          id="navbarsExample09"
        >
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/apis">
                APIs
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/docs">
                Documentation
              </Link>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="dropdown05"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Demo
              </div>
              <ul className="dropdown-menu" aria-labelledby="dropdown05">
                <li>
                  <Link className="dropdown-item" to="/docs-python">
                    Python
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="docs-js">
                    Javascript
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <Link to="/" className="btn btn-solid-border d-none d-lg-block">
            Login <i className="fa fa-angle-right ml-2"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
