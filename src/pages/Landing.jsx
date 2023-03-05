import React from "react";
import banner from "../assets/images/hero-area/banner-bg.png";
import featurebg1 from "../assets/images/background-shape/feature-bg-1.png";
import featurebg2 from "../assets/images/background-shape/feature-bg-2.png";
import seoBall1 from "../assets/images/background-shape/seo-ball-1.png";
import seoBall2 from "../assets/images/background-shape/seo-ball-2.png";
import seoHalfCycle from "../assets/images/background-shape/seo-half-cycle.png";
import greenDot from "../assets/images/background-shape/green-dot.png";
import blueHalfCycle from "../assets/images/background-shape/blue-half-cycle.png";
import yellowTriangle from "../assets/images/background-shape/yellow-triangle.png";
import servicehalfcycle from "../assets/images/background-shape/service-half-cycle.png";
import teambgtraingle from "../assets/images/background-shape/team-bg-triangle.png";
import marketing from "../assets/images/marketing/marketing.png";
import service from "../assets/images/service/service.png";
import servicebg from "../assets/images/backgrounds/service-bg.png";
import team1 from "../assets/images/team/team-1.jpg";
import team2 from "../assets/images/team/team-2.jpg";
import team3 from "../assets/images/team/team-3.jpg";
import teambg from "../assets/images/backgrounds/team-bg.png";
import seobg from "../assets/images/backgrounds/seo-bg.png";
import teambgdots from "../assets/images/background-shape/team-bg-dots.png";

const Landing = () => {
  return (
    <div>
      <section
        className="hero-section hero"
        data-background=""
        // style={{ backgroundImage: 1'url(images/hero-area/banner-bg.png);"}}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center zindex-1">
              <h1 className="mb-3">
                Take Control of your
                <br />
                Project and Team
              </h1>
              <p className="mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum
                <br />
                dolore eu fugiat nulla pariatur.
              </p>
              <a href="#" className="btn btn-secondary btn-lg">
                explore us
              </a>
              <img
                className="img-fluid w-100 banner-image"
                src={banner}
                alt="banner-img"
              />
            </div>
          </div>
        </div>
        <div id="scene">
          <img
            className="img-fluid hero-bg-1 up-down-animation"
            src={featurebg2}
            alt=""
          />
          <img
            className="img-fluid hero-bg-2 left-right-animation"
            src={seoBall1}
            alt=""
          />
          <img
            className="img-fluid hero-bg-3 left-right-animation"
            src={seoHalfCycle}
            alt=""
          />
          <img
            className="img-fluid hero-bg-4 up-down-animation"
            src={greenDot}
            alt=""
          />
          <img
            className="img-fluid hero-bg-5 left-right-animation"
            src={blueHalfCycle}
            alt=""
          />
          <img
            className="img-fluid hero-bg-6 up-down-animation"
            src={seoBall1}
            alt=""
          />
          <img
            className="img-fluid hero-bg-7 left-right-animation"
            src={yellowTriangle}
            alt=""
          />
          <img
            className="img-fluid hero-bg-8 up-down-animation"
            src={servicehalfcycle}
            alt=""
          />
          <img
            className="img-fluid hero-bg-9 up-down-animation"
            src={teambgtraingle}
            alt=""
          />
        </div>
      </section>
      <section className="section feature mb-0" id="feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Awesome Features</h2>
              <p className="mb-100">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
                <br />
                Excepteur sint occaecat cupidatat non proident
              </p>
            </div>
            <div className="col-md-6 mb-80">
              <div className="d-flex feature-item">
                <div>
                  <i className="ti-ruler-pencil feature-icon mr-4"></i>
                </div>
                <div>
                  <h4>Awesome Design</h4>
                  <p>
                    Consectetur adipiscing elit donec tempus pellentesque dui.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-80">
              <div className="d-flex feature-item">
                <div>
                  <i className="ti-layout-cta-left feature-icon mr-4"></i>
                </div>
                <div>
                  <h4>Easy Customize</h4>
                  <p>
                    Consectetur adipiscing elit donec tempus pellentesque dui.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-80">
              <div className="d-flex feature-item">
                <div>
                  <i className="ti-split-v-alt feature-icon mr-4"></i>
                </div>
                <div>
                  <h4>Bug free Code</h4>
                  <p>
                    Consectetur adipiscing elit donec tempus pellentesque dui.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-80">
              <div className="d-flex feature-item">
                <div>
                  <i className="ti-layers-alt feature-icon mr-4"></i>
                </div>
                <div>
                  <h4>Organized Layouts</h4>
                  <p>
                    Consectetur adipiscing elit donec tempus pellentesque dui.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="feature-bg-1 up-down-animation"
          src={featurebg1}
          alt="bg-shape"
        />
        <img
          className="feature-bg-2 left-right-animation"
          src={featurebg2}
          alt="bg-shape"
        />
      </section>
      <section className="section-lg seo">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="seo-image">
                <img className="img-fluid" src={marketing} alt="form-img" />
              </div>
            </div>
            <div className="col-md-5">
              <h2 className="section-title">
                A Complete Range Of SEO Marketing Services!
              </h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
                <br />
                There live the blind texts. Separated they live in
                Bookmarksgrove right at the coast of the Semantics, a large
                language ocean.
              </p>
            </div>
          </div>
        </div>
        <img className="img-fluid seo-bg" src={seobg} alt="seo-bg" />
        <img
          className="seo-bg-shape-1 left-right-animation"
          src={seoBall1}
          alt="bg-shape"
        />
        <img
          className="seo-bg-shape-2 up-down-animation"
          src={seoHalfCycle}
          alt="bg-shape"
        />
        <img
          className="seo-bg-shape-3 left-right-animation"
          src={seoBall2}
          alt="bg-shape"
        />
      </section>
      <section className="section-lg service">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-5 order-2 order-md-1">
              <h2 className="section-title">
                Powerful Layout From Top To Bottom
              </h2>
              <p className="mb-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <ul className="pl-0 service-list">
                <li>
                  <i className="ti-layout-tab-window text-purple"></i>Responsive
                  on any device
                </li>
                <li>
                  <i className="ti-layout-placeholder text-purple"></i>Very easy
                  to customize
                </li>
                <li>
                  <i className="ti-support text-purple"></i>Effective support
                </li>
              </ul>
            </div>
            <div className="col-md-7 order-1 order-md-2">
              <img className="img-fluid layer-3" src={service} alt="service" />
            </div>
          </div>
        </div>
        <img
          className="img-fluid service-bg"
          src={servicebg}
          alt="service-bg"
        />
        <img
          className="service-bg-shape-1 up-down-animation"
          src={servicehalfcycle}
          alt="background-shape"
        />
        <img
          className="service-bg-shape-2 left-right-animation"
          src={featurebg2}
          alt="background-shape"
        />
      </section>
      <section className="section-lg team" id="team">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Our Team</h2>
              <p className="mb-100">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu
                <br />
                fugiat nulla pariatur. Excepteur sint occaeca
              </p>
            </div>
          </div>
          <div className="col-10 mx-auto">
            <div className="team-slider">
              <div className="team-member">
                <div className="d-flex mb-4">
                  <div className="mr-3">
                    <img
                      className="rounded-circle img-fluid"
                      src={team1}
                      alt="team-member"
                    />
                  </div>
                  <div className="align-self-center">
                    <h4>Becroft</h4>
                    <h6 className="text-color">web designer</h6>
                  </div>
                </div>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  S eparated they
                </p>
              </div>
              <div className="team-member">
                <div className="d-flex mb-4">
                  <div className="mr-3">
                    <img
                      className="rounded-circle img-fluid"
                      src={team2}
                      alt="team-member"
                    />
                  </div>
                  <div className="align-self-center">
                    <h4>John Doe</h4>
                    <h6 className="text-color">web developer</h6>
                  </div>
                </div>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  S eparated they
                </p>
              </div>
              <div className="team-member">
                <div className="d-flex mb-4">
                  <div className="mr-3">
                    <img
                      className="rounded-circle img-fluid"
                      src={team3}
                      alt="team-member"
                    />
                  </div>
                  <div className="align-self-center">
                    <h4>Erik Ligas</h4>
                    <h6 className="text-color">Programmer</h6>
                  </div>
                </div>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  S eparated they
                </p>
              </div>
              <div className="team-member">
                <div className="d-flex mb-4">
                  <div className="mr-3">
                    <img
                      className="rounded-circle img-fluid"
                      src={team1}
                      alt="team-member"
                    />
                  </div>
                  <div className="align-self-center">
                    <h4>Erik Ligas</h4>
                    <h6 className="text-color">Programmer</h6>
                  </div>
                </div>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  S eparated they
                </p>
              </div>
              <div className="team-member">
                <div className="d-flex mb-4">
                  <div className="mr-3">
                    <img
                      className="rounded-circle img-fluid"
                      src={team2}
                      alt="team-member"
                    />
                  </div>
                  <div className="align-self-center">
                    <h4>John Doe</h4>
                    <h6 className="text-color">web developer</h6>
                  </div>
                </div>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  S eparated they
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={teambg} alt="team-bg" className="img-fluid team-bg" />
        <img
          className="team-bg-shape-1 up-down-animation"
          src={seoBall1}
          alt="background-shape"
        />
        <img
          className="team-bg-shape-2 left-right-animation"
          src={seoBall1}
          alt="background-shape"
        />
        <img
          className="team-bg-shape-3 left-right-animation"
          src={teambgtraingle}
          alt="background-shape"
        />
        <img
          className="team-bg-shape-4 up-down-animation img-fluid"
          src={teambgdots}
          alt="background-shape"
        />
      </section>
      <section className="section-lg pb-0 pricing" id="pricing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Our Pricing</h2>
              <p className="mb-50">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu <br />
                fugiat nulla pariatur. Excepteur sint occaecat{" "}
              </p>
            </div>
            <div className="col-lg-10 mx-auto">
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                  <div className="rounded text-center pricing-table table-1">
                    <h3>Free</h3>
                    <h1>
                      <span>$</span>00
                    </h1>
                    <p>
                      Far far away, behind the wordmountains, far from the
                      countries Vokalia and
                    </p>
                    <a href="#" className="btn pricing-btn px-2">
                      Get Started
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                  <div className="rounded text-center pricing-table table-2">
                    <h3>Standard</h3>
                    <h1>
                      <span>$</span>75
                    </h1>
                    <p>
                      Far far away, behind the wordmountains, far from the
                      countries Vokalia and
                    </p>
                    <a href="#" className="btn pricing-btn px-2">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                  <div className="rounded text-center pricing-table table-3">
                    <h3>Premium</h3>
                    <h1>
                      <span>$</span>99
                    </h1>
                    <p>
                      Far far away, behind the wordmountains, far from the
                      countries Vokalia and
                    </p>
                    <a href="#" className="btn pricing-btn px-2">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="pricing-bg-shape-1 up-down-animation"
          src={seoBall1}
          alt="background-shape"
        />
        <img
          className="pricing-bg-shape-2 up-down-animation"
          src={seoHalfCycle}
          alt="background-shape"
        />
        <img
          className="pricing-bg-shape-3 left-right-animation"
          src={teambgtraingle}
          alt="background-shape"
        />
      </section>
    </div>
  );
};

export default Landing;
