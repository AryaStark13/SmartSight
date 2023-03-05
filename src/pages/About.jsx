import React from "react";

const About = () => {
  return (
    <div>
      <section className="video-block section bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading feature-list">
                <h2 className="mb-4">Growing Software Company Since 2008</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                  earum, eos esse non error facilis ad, maiores eum quae vero
                  libero voluptas! Reprehenderit sunt similique, quae quidem
                  voluptatem odit natus.
                </p>

                <ul className="list-unstyled mt-4 mb-5">
                  <li>
                    <i className="ti-check mr-3"></i>Create and manage any
                    process for your business needs.
                  </li>
                  <li>
                    <i className="ti-check mr-3"></i>Create and manage any
                    process for your business needs.
                  </li>
                  <li>
                    <i className="ti-check mr-3"></i>Full functionality without
                    needed to install software.
                  </li>
                </ul>

                <a href="service.html" className="btn btn-main">
                  All Services<i className="fa fa-angle-right ml-2"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="video-img">
                <img
                  src="images/about/img-34.png"
                  alt=""
                  className="img-fluid"
                />
                <a data-video-id="sXoKSD8QJEA" className="video-play">
                  <i className="ti-control-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section team">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="heading text-center mb-50">
                <h2 className="mb-4">Our Team</h2>
                <p>
                  Today’s users expect effortless experiences. Don’t let
                  essential people and processes stay stuck in the past. Speed
                  it up, skip the hassles
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-block mb-5 mb-lg-0">
                <img
                  src="images/team/03-1.jpg"
                  alt=""
                  className="img-fluid w-100"
                />

                <h4 className="mt-4 mb-0">John Marshal</h4>
                <p>Founder</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-block mb-5 mb-lg-0">
                <img
                  src="images/team/01-3.jpg"
                  alt=""
                  className="img-fluid w-100"
                />

                <h4 className="mt-4 mb-0">Marshal Root</h4>
                <p>Marketing Head</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-block mb-5 mb-lg-0">
                <img
                  src="images/team/03-1.jpg"
                  alt=""
                  className="img-fluid w-100"
                />

                <h4 className="mt-4 mb-0">Siamon john</h4>
                <p>Co-ordinator</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-block">
                <img
                  src="images/team/01-3.jpg"
                  alt=""
                  className="img-fluid w-100"
                />

                <h4 className="mt-4 mb-0">Rishat Ahmed</h4>
                <p>Senior Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
