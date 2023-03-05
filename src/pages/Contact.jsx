import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <span className="text-color">Send a message</span>
              <h3 className="text-md mb-5">Contact Form</h3>

              <div className="row">
                <div className="col-lg-8">
                  <form
                    id="contact-form"
                    className="contact__form "
                    method="post"
                    action="mail.php"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div
                          className="alert alert-success contact__msg"
                          style={{ display: "none" }}
                          role="alert"
                        >
                          Your message was sent successfully.
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>I Need help in ...</option>
                        <option>Software Design</option>
                        <option>Development cycle</option>
                        <option>Software Development</option>
                        <option>Maintenance</option>
                        <option>Process Query</option>
                        <option>Cost and Duration</option>
                        <option>Modal Delivery</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <input
                        name="subject"
                        id="subject"
                        type="text"
                        className="form-control"
                        placeholder="Your Subject"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>

                    <div className="form-group-2 mb-4">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="4"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <button
                      className="btn btn-main"
                      name="submit"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                <div className="col-lg-4">
                  <div className="short-info mt-5 mt-lg-0">
                    <ul className="list-unstyled">
                      <li>
                        <h5>Call Us</h5>
                        +88 01672 506 744
                      </li>
                      <li>
                        <h5>Email Us</h5>
                        contact@mail.com
                      </li>
                      <li>
                        <h5>Location Map</h5>
                        North Main Street,Brooklyn Australia
                      </li>
                    </ul>

                    <ul className="social-icons list-inline mt-5">
                      <li className="list-inline-item">
                        <a href="http://www.themefisher.com">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="http://www.themefisher.com">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="http://www.themefisher.com">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="google-map mt-90 mb-5">
                <div id="map"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-content pl-lg-5 mt-5 mt-lg-0 mb-5 mb-lg-0">
                <h4 className="mb-4">Corporate Office</h4>

                <ul className="address-block list-unstyled">
                  <li>
                    <i className="ti-location-pin mr-3"></i>North Main
                    Street,Brooklyn Australia
                  </li>
                  <li>
                    <i className="ti-email mr-3"></i>Email: contact@mail.com
                  </li>
                  <li>
                    <i className="ti-mobile mr-3"></i>Phone:+88 01672 506 744
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info mb-5 mb-lg-0 mt-md-5 mt-lg-0">
                <h4 className="mb-4">USA Location</h4>
                <ul className="address-block list-unstyled">
                  <li>
                    <i className="ti-location-pin mr-3"></i>North Main
                    Street,Brooklyn Australia
                  </li>
                  <li>
                    <i className="ti-email mr-3"></i>Email: contact@mail.com
                  </li>
                  <li>
                    <i className="ti-mobile mr-3"></i>Phone:+88 01672 506 744
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info ">
                <h4 className="mb-4">Europe</h4>
                <ul className="address-block list-unstyled">
                  <li>
                    <i className="ti-location-pin mr-3"></i>North Main
                    Street,Brooklyn Australia
                  </li>
                  <li>
                    <i className="ti-email mr-3"></i>Email: contact@mail.com
                  </li>
                  <li>
                    <i className="ti-mobile mr-3"></i>Phone:+88 01672 506 744
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
