import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mr-auto col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <div className="logo mb-4">
                <h3>Orbitor</h3>
              </div>
              <p>
                Tempora dolorem voluptatum nam vero assumenda voluptate, facilis
                ad eos obcaecati tenetur veritatis eveniet distinctio possimus.
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-4">Company</h4>

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
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-4">APIs</h4>

              <ul className="list-unstyled footer-menu lh-35">
                <li>
                  <Link to="#">Gender</Link>
                </li>
                <li>
                  <Link to="#">Age</Link>
                </li>
                <li>
                  <Link to="#">OCR</Link>
                </li>
                <li>
                  <Link to="#">Interests</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget widget-contact mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-4">Get in Touch</h4>
              <h6>
                <Link to="tel:+23-345-67890">
                  {" "}
                  <i className="ti-headphone-alt mr-3"></i>Support@megakit.com
                </Link>
              </h6>
              <h6>
                <Link to="mailto:support@gmail.com">
                  {" "}
                  <i className="ti-mobile mr-3"></i>+23-456-6588
                </Link>
              </h6>

              <ul className="list-inline footer-socials mt-5">
                <li className="list-inline-item">
                  <Link to="https://www.facebook.com/themefisher">
                    <i className="ti-facebook mr-2"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="https://twitter.com/themefisher">
                    <i className="ti-twitter mr-2"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="https://www.pinterest.com/themefisher/">
                    <i className="ti-linkedin mr-2 "></i>
                  </Link>
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
