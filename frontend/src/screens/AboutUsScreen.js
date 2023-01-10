import React from "react";

const AboutUsScreen = () => {
  return (
    <>
      {/* about page start here  */}
      <div className="about-page-area-wrapper single-page-section-top-space single-page-section-bottom-space">
        {/* about area start here  */}
        <section className="about-section-area section-bottom-space">
          <div className="container custom-container-01">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <h3 className="content-title">About us</h3>
                  <p className="paragraph">
                    Eduplan student consultancy is one of the renowned
                    international education consultancy firms which assisting
                    overseas students
                  </p>
                  <p className="paragraph">
                    The head office of Eduplan is located in India which helps
                    all Indian students to get admission into top-ranked
                    universities from the United Kingdom, USA, Australia,
                    Canada,Germany and Sweden. At the same time, we have a very
                    strong relationship with our partner Malaysian, Cyprus and
                    Chinese Universities.
                  </p>
                  <div className="icon-box-with-text-wrap">
                    <ul className="ul icon-box-with-text style-01">
                      <li className="single-icon-box-with-text">
                        <div className="icon-wrap color-01">
                          <img
                            src="assets/img/icon/icon-and-text/key.svg"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <p className="text">
                            Get life-time free access with one time payment in
                            our courses plan. Easy &amp; simple!
                          </p>
                        </div>
                      </li>
                      <li className="single-icon-box-with-text style-02">
                        <div className="icon-wrap color-02">
                          <img
                            src="assets/img/icon/icon-and-text/board.svg"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <p className="text">
                            We find the expert tuotor with huge teaching
                            experience
                          </p>
                        </div>
                      </li>
                      <li className="single-icon-box-with-text style-03">
                        <div className="icon-wrap color-03">
                          <img
                            src="assets/img/icon/icon-and-text/monitor.svg"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <p className="text">
                            We present worldclass courses with practical
                            learning tasks that make students more confident.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-wrap">
                    <a href="#" className="btn-common btn-new">
                      Get Free Consultation
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="thumbnail ">
                  <div className="right-frame">
                    <img src="assets/img/about/01.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about area end here  */}

        {/* counter area start here */}
        <section className="counter-area-wrapper">
          <div className="counter-section-area">
            <div className="container custom-container-01">
              <div className="row">
                <div className="col-lg-12">
                  <div className="counter-section-inner style-01">
                    <div className="single-counterup">
                      <div className="image-wrap">
                        <img
                          src="assets/img/sections/client/people-group.png"
                          alt=""
                        />
                      </div>
                      <div className="content-wrap">
                        <div className="odo-area">
                          <h3
                            className="odometer odo-title"
                            data-odometer-final={458712}
                          >
                            0
                          </h3>
                        </div>
                        <div className="content">
                          <h6 className="subtitle">More then students</h6>
                        </div>
                      </div>
                    </div>
                    <div className="single-counterup">
                      <div className="image-wrap">
                        <img
                          src="assets/img/sections/client/customer-care.png"
                          alt=""
                        />
                      </div>
                      <div className="content-wrap">
                        <div className="odo-area">
                          <h3
                            className="odometer odo-title"
                            data-odometer-final={211}
                          >
                            0
                          </h3>
                        </div>
                        <div className="content">
                          <h6 className="subtitle">Total consultants</h6>
                        </div>
                      </div>
                    </div>
                    <div className="single-counterup">
                      <div className="image-wrap">
                        <img
                          src="assets/img/sections/client/graduation.png"
                          alt=""
                        />
                      </div>
                      <div className="content-wrap">
                        <div className="odo-area">
                          <h3
                            className="odometer odo-title"
                            data-odometer-final={425}
                          >
                            0
                          </h3>
                        </div>
                        <div className="content">
                          <h6 className="subtitle">Total courses</h6>
                        </div>
                      </div>
                    </div>
                    <div className="single-counterup">
                      <div className="image-wrap">
                        <img
                          src="assets/img/sections/client/world.png"
                          alt=""
                        />
                      </div>
                      <div className="content-wrap">
                        <div className="odo-area">
                          <h3
                            className="odometer odo-title"
                            data-odometer-final={32}
                          >
                            0
                          </h3>
                        </div>
                        <div className="content">
                          <h6 className="subtitle">Countries</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* counter area end here */}
        {/* chose us area start here  */}
        <section
          className="chose-area-wrapper"
          style={{ marginBottom: "-10em", paddingBottom: "0px" }}
        >
          <div className="chose-area-inner bg-color-01">
            <div
              className="bg-image background-image"
              style={{ backgroundImage: "url(assets/img/chose-us/01.jpg)" }}
            ></div>
            <div className="container custom-container-01">
              <div className="row justify-content-end">
                <div className="col-lg-6">
                  <div className="img-box"></div>
                </div>
                <div className="col-lg-6">
                  <div className="content-wrap">
                    <div className="section-title-wrapper">
                      <h4 className="section-title">Why chose us</h4>
                      <p className="description color-02">
                        87% of people learning for professional development
                        report career benefits
                      </p>
                    </div>
                    <div className="icon-box-with-text-wrap">
                      <ul className="ul icon-box-with-text style-02">
                        <li className="single-icon-box-with-text">
                          <div className="icon-wrap">
                            <img
                              src="assets/img/icon/icon-and-text/02/01.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h4 className="title">Our Vision</h4>
                            <p className="paragraph">
                              Our vision is to be the leading student
                              consultancy and recruiting agency of the world by
                              satisfying our clients’ in all aspects.
                            </p>
                          </div>
                        </li>
                        <li className="single-icon-box-with-text style-02">
                          <div className="icon-wrap">
                            <img
                              src="assets/img/icon/icon-and-text/02/02.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h4 className="title">Our Mission</h4>
                            <p className="paragraph">
                              BSB mission is to achieve excellence in business
                              through excellent services and new scopes for
                              world-class education by realizing dreams of our
                              clients within their capacities.
                            </p>
                          </div>
                        </li>
                        <li className="single-icon-box-with-text style-03">
                          <div className="icon-wrap">
                            <img
                              src="assets/img/icon/icon-and-text/02/03.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h4 className="title">Our Goal</h4>
                            <p className="paragraph">
                              Create opportunities of abroad higher study and
                              improve significantly family &amp; position and
                              national development and to contribute to achieve
                              Bangladesh as a middle income country.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* chose us area end here  */}
      </div>
      {/* about page end here  */}
    </>
  );
};

export default AboutUsScreen;
