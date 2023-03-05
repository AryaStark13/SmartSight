import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="banner d-flex align-items-center">
        <div className="banner-img-part"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-12 col-xl-8">
              <div className="block">
                <span className="text-uppercase text-sm letter-spacing ">
                  Enhance your
                </span>
                <h1 className="mb-3 mt-3">
                  Virtual experience with SmartSight API
                </h1>
                <p className="mb-5">
                  With our API, you can easily integrate face detection and
                  recognition functionality into your applications, enabling
                  them to analyze and interpret visual data in real-time. Start
                  exploring our API today and see how it can transform the way
                  you build your applications.
                </p>
                <Link to="/docs" className="btn btn-main">
                  Learn more about SmartSight API
                  <i className="fa fa-angle-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section about">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 ">
              <div className="about-item mb-5 mb-lg-5">
                <div className="icon">
                  <i className="ti-light-bulb"></i>
                </div>

                <div className="content">
                  <h4 className="mt-3 mb-3">Gender Detection</h4>
                  <p className="mb-4">
                    Our Cloud based implementation enables us to provide super
                    fast responses to your requests.
                  </p>
                  <Link to="/gender"> Read More </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="about-item mb-5 mb-lg-5">
                <div className="icon">
                  <i className="ti-panel"></i>
                </div>
                <div className="content">
                  <h4 className="mt-3 mb-3">Optical Character Recognition</h4>
                  <p className="mb-4">
                    Our Open Source APIs are free to use and open to collaborate
                    to all
                  </p>
                  <Link to="/ocr"> Read More </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="about-item">
                <div className="icon">
                  <i className="ti-headphone-alt"></i>
                </div>
                <div className="content">
                  <h4 className="mt-3 mb-3">Animated Face Detection</h4>
                  <p className="mb-4">
                    Enhanced AI Models that provide state of the art results
                  </p>
                  <a href="#"> Read More </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="about-item mb-5 mb-lg-5">
                <div className="icon">
                  <i className="ti-light-bulb"></i>
                </div>

                <div className="content">
                  <h4 className="mt-3 mb-3">Comparing Faces</h4>
                  <p className="mb-4">
                    Our Cloud based implementation enables us to provide super
                    fast responses to your requests.
                  </p>

                  <Link to="/"> Read More </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="about-item mb-5 mb-lg-5">
                <div className="icon">
                  <i className="ti-panel"></i>
                </div>
                <div className="content">
                  <h4 className="mt-3 mb-3">Identifying Interests</h4>
                  <p className="mb-4">
                    Our Open Source APIs are free to use and open to collaborate
                    to all
                  </p>
                  <Link to="/real"> Read More </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="about-item">
                <div className="icon">
                  <i className="ti-headphone-alt"></i>
                </div>
                <div className="content">
                  <h4 className="mt-3 mb-3">AI Enhancement</h4>
                  <p className="mb-4">
                    Enhanced AI Models that provide state of the art results
                  </p>
                  <a href="#"> Read More </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
