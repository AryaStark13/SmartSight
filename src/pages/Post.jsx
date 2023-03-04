import React from "react";

const Post = () => {
  return (
    <div className="container py-4 my-5">
      <div className="row">
        <div className="col-md-10">
          <div className="contact-form bg-dark">
            <h1 className="text-white add-letter-space mb-5">
              Lets Contact Us
            </h1>
            <form method="POST" className="needs-validation" novalidate>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-5">
                    <label for="firstName" className="text-black-300">
                      Your First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                      placeholder="Robert Lee"
                      required
                    />
                    <p className="invalid-feedback">
                      Your first-name is required!
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-5">
                    <label for="lastName" className="text-black-300">
                      Your Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                      placeholder="Anderson"
                      required
                    />
                    <p className="invalid-feedback">
                      Your last-name is required!
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-5">
                    <label for="email" className="text-black-300">
                      E-Mail Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                      placeholder="kevin.jones@mail.com"
                      required
                    />
                    <p className="invalid-feedback">Your email is required!</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-5">
                    <label className="text-black-300">
                      What Is This About?
                    </label>
                    <select className="d-block w-100">
                      <option value="1">Personal Proposal</option>
                      <option value="2">Business Purpose</option>
                      <option value="3">Want to say hello</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mb-5">
                    <label for="message" className="text-black-300">
                      Your message
                    </label>
                    <textarea
                      name="message"
                      className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                      placeholder="Lorem Ipsum is simply dummy text of the printing and..."
                      required
                    ></textarea>
                    <p className="invalid-feedback">Message is required!</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-sm btn-primary">
                    Send Now <img src="images/arrow-right.png" alt="" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
