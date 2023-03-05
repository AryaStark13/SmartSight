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
                  <h4 className="mt-3 mb-3">Lightning Fast Responses</h4>
                  <p className="mb-4">
                    Our Cloud based implementation enables us to provide super
                    fast responses to your requests.
                  </p>

                  <a href="#"> Read More </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="about-item mb-5 mb-lg-5">
                <div className="icon">
                  <i className="ti-panel"></i>
                </div>
                <div className="content">
                  <h4 className="mt-3 mb-3">Open Source</h4>
                  <p className="mb-4">
                    Our Open Source APIs are free to use and open to collaborate
                    to all
                  </p>
                  <a href="#"> Read More </a>
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
      <section className="section process">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="process-block pl-4">
                <span className="text-uppercase text-sm letter-spacing">
                  Why choose us
                </span>
                <h2 className="mb-4 mt-3">We help you to make work easy</h2>
                <p className="mb-4">
                  We understand what your business means to you,your
                  requirements considering trends.Smet nemo excepturi voluptas
                  eligendi .
                </p>
              </div>
            </div>

            <div className="col-lg-7 col-xs-12 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="icon-block text-center mb-4 mb-lg-0">
                    <i className="ti-light-bulb"></i>
                    <h5>Data analysis</h5>
                    <p>A complete web app solution for business</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="icon-block text-center mt-4 mb-4 mb-lg-0">
                    <i className="ti-panel"></i>
                    <h5>Web Development</h5>
                    <p>A complete web app solution for business</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="icon-block text-center">
                    <i className="ti-search"></i>
                    <h5>Content Mangement</h5>
                    <p>A complete web app solution for business</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="icon-block text-center mt-4">
                    <i className="ti-rocket"></i>
                    <h5>Mobility</h5>
                    <p>A complete web app solution for business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="cta-content bg-white p-5 rounded">
                <h3 className="mb-4">
                  Assurance Service In Software
                  <span className="text-color-primary"> Testing</span>{" "}
                </h3>
                <p className="mb-30">
                  An Independent Validation and Testing services from SISAR.
                  Helps to reduce software development efforts
                </p>

                <a href="project.html" className="btn btn-main">
                  Portfolio<i className="fa fa-angle-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
