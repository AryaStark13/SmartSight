import React from "react";

const Javascript = () => {
  return (
    <div>
      <section className="section case-study">
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-lg-6">
                <div className="case-img">
                  <img
                    src="images/about/about.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-8">
                <div className="case-content pl-4 mt-4 mt-lg-0">
                  <h3 className="mb-3">
                    Engaging content and flexible User experience help to grow
                    more
                  </h3>

                  <p>
                    Accusamus necessitatibus harum nobis quam omnis tempora
                    cupiditate nihil, vero dolorum porro atque. Suscipit
                    assumenda, minus tempora aliquid, ratione minima optio
                    nihil.
                  </p>

                  <ul className="list-unstyled project-info-list">
                    <li>
                      <strong>Project Name: </strong>Business Accounting
                    </li>

                    <li>
                      <strong>Client: </strong>Company Name Inc.
                    </li>
                    <li>
                      <strong>Project Start Date:</strong> February 18, 2018
                    </li>

                    <li>
                      <strong>Project Completion Date:</strong> January 25, 2018
                    </li>
                    <li>
                      <strong>Project url:</strong> www.example.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Javascript;
