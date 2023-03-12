import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mr-auto col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <div className="logo mb-4">
                <h3>Smart Sight</h3>
              </div>
              <p>
                With our API, you can easily integrate face detection and
                recognition functionality into your applications, enabling them
                to analyze and interpret visual data in real-time.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-4">Quick Links</h4>

              <ul className="list-unstyled footer-menu lh-35">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/docs">Documentation</Link>
                </li>
                <li>
                  <a
                    href="https://github.com/Jay4Codes/SmartSight"
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-4">APIs</h4>

              <ul className="list-unstyled footer-menu lh-35">
                <li>
                  <Link to="/gender">Gender</Link>
                </li>
                <li>
                  <Link to="/compare">Compare</Link>
                </li>
                <li>
                  <Link to="/ocr">OCR</Link>
                </li>
                <li>
                  <Link to="/interests">Interests</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
