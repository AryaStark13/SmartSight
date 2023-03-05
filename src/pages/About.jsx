import React from "react";

const About = () => {
  return (
    <div>
      <section className="section team">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="heading text-center mb-50">
                <h2 className="mb-4">Our Team</h2>
                <p>
                  Today's users expect effortless experiences. Don't let
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

                <h4 className="mt-4 mb-0">Jay Jain</h4>
                <p>Web Developer</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-block mb-5 mb-lg-0">
                <img
                  src="images/team/01-3.jpg"
                  alt=""
                  className="img-fluid w-100"
                />

                <h4 className="mt-4 mb-0">Arihant Sheth</h4>
                <p>ML Engineer</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-block mb-5 mb-lg-0">
                <img
                  src="images/team/03-1.jpg"
                  alt=""
                  className="img-fluid w-100"
                />

                <h4 className="mt-4 mb-0">Jash Bhatia</h4>
                <p>Prompt Engineering</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-block">
                <img
                  src="images/team/01-3.jpg"
                  alt=""
                  className="img-fluid w-100"
                />

                <h4 className="mt-4 mb-0">Aryan Mehta</h4>
                <p>ML Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
