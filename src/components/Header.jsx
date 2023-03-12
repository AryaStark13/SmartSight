import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg py-4 navigation header-padding "
      id="navbar"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" className="img-fluid" />
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
              <a
                className="nav-link"
                href="https://docs.google.com/document/d/10gEhd0Xyci4D2TDdruo2sPDvp44z-uVErGmHMMeV_ms/edit?usp=sharing"
                target="_blank"
              >
                Documentation
              </a>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="dropdown05"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                APIs
              </div>
              <ul className="dropdown-menu" aria-labelledby="dropdown05">
                <li>
                  <Link className="dropdown-item" to="/gender">
                    Gender Detection
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/interests">
                    Interests
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ocr">
                    OCR
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/real">
                    Animated Face Detection
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/compare">
                    Compare
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/Jay4Codes/SmartSight"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
          <Link to="/login" className="btn btn-solid-border d-none d-lg-block">
            Login <i className="fa fa-angle-right ml-2"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
