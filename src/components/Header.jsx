import React from "react";

const Header = () => {
  return (
    <header className="mobile-nav pt-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <a href="index.html">
              <img src="images/logo.png" alt="" />
            </a>
          </div>
          <div className="col-6 text-right">
            <button className="nav-toggle bg-transparent border text-white">
              <span className="fas fa-bars"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
