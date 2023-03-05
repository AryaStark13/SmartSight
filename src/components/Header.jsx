import React from "react";

const Header = () => {
  return (
    <header className="mobile-nav pt-4">
      <section className="fixed-top navigation">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="index.html">
              <img src="images/logo.png" alt="logo" />
            </a>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbar"
              aria-controls="navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#feature">
                    Feature
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#team">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
              <a href="#" className="btn btn-primary ml-lg-3 primary-shadow">
                Try Free
              </a>
            </div>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
