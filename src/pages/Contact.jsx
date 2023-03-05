import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <span className="text-color">SmartSight API</span>
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
                        +98674 66628
                      </li>
                      <li>
                        <h5>Email Us</h5>
                        smartsight@mail.com
                      </li>
                      <li>
                        <h5>Location Map</h5>
                        DJ Sanghvi College of Engineering
                      </li>
                    </ul>

                    <ul className="social-icons list-inline mt-5">
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
