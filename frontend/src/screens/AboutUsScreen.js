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
        {/* our team area start here  */}
        <section className="our-team-area-wrapper section-top-space">
          <div className="our-team-inner">
            <div className="container custom-container-01">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="section-title-wrapper text-center">
                    <h5 className="subtitle">START EXPLORING COUNTRIES</h5>
                    <h4 className="section-title">Meet Experts</h4>
                    <p className="description">
                      87% of people learning for professional development report
                      career benefits
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="slick-main slick-main global-slick-init dots-style-03 dots-space"
                    data-infinite="true"
                    data-arrows="true"
                    data-fade="false"
                    data-speed={500}
                    data-slidestoshow={3}
                    data-slidestoscroll={1}
                    data-swipetoslide="true"
                    data-autoplay="true"
                    data-autoplayspeed={2500}
                    data-dots="true"
                    data-responsive='[
                                                    {"breakpoint": 1367,"settings": {"slidesToShow": 3}},
                                                    {"breakpoint": 992,"settings": {"slidesToShow": 2}},
                                                    {"breakpoint": 600, "settings": {"slidesToShow": 1}}
                                                    ]'
                  >
                    <div className="slick-item">
                      <div className="single-team-item style-01">
                        <div className="thumbnail">
                          <img
                            src="assets/img/team/style-01/01.jpg"
                            alt="team image"
                          />
                          <ul className="ul social-media-list style-01">
                            <li className="single-social-item">
                              <a href="#">
                                <i className="fa-brands fa-instagram icon" />
                              </a>
                            </li>
                            <li className="single-social-item">
                              <a href="#">
                                <i className="fa-brands fa-facebook-f icon" />
                              </a>
                            </li>
                            <li className="single-social-item">
                              <a href="#">
                                <i className="fa-brands fa-youtube icon" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <a href="#">Cody Fisher</a>
                          </h4>
                          <p className="designation">
                            Senior Consultants, Eduplan
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="slick-item">
                      <div className="single-team-item style-01">
                        <div className="thumbnail">
                          <img
                            src="assets/img/team/style-01/02.jpg"
                            alt="team image"
                          />
                          <ul className="ul social-media-list style-01">
                            <li className="single-social-item">
                              <a href="#">
                                <i className="fa-brands fa-instagram icon" />
                              </a>
                            </li>
                            <li className="single-social-item">
                              <a href="#">
                                <i className="fa-brands fa-facebook-f icon" />
                              </a>
                            </li>
                            <li className="single-social-item">
                              <a href="#">
                                <i className="fa-brands fa-youtube icon" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <a href="#">Brooklyn Simmons</a>
                          </h4>
                          <p className="designation">Consultants, Eduplan</p>
                        </div>
                      </div>
                    </div>
                    <div className="slick-item">
                      <div className="single-team-item style-01">
                        <div className="thumbnail">
                          <img
                            src="assets/img/team/style-01/03.jpg"
                            alt="team image"
                          />
                          <ul className="ul social-media-list style-01">
                            <li className="single-social-item">
                              <a href="#">
                                <i className="fa-brands fa-instagram icon" />
                              </a>
                            </li>
                            <li className="single-social-item">
                              <a href="#">
                                <i className="fa-brands fa-facebook-f icon" />
                              </a>
                            </li>
                            <li className="single-social-item">
                              <a href="#">
                                <i className="fa-brands fa-youtube icon" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <a href="#">Jenny Wilson</a>
                          </h4>
                          <p className="designation">
                            Senior Consultants, Eduplan
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="slick-item">
                      <div className="single-team-item style-01">
                        <div className="thumbnail">
                          <img
                            src="assets/img/team/style-01/03.jpg"
                            alt="team image"
                          />
                          <ul className="ul social-media-list style-01">
                            <li className="single-social-item">
                              <a href="#">
                                <i className="fa-brands fa-instagram icon" />
                              </a>
                            </li>
                            <li className="single-social-item">
                              <a href="#">
                                <i className="fa-brands fa-facebook-f icon" />
                              </a>
                            </li>
                            <li className="single-social-item">
                              <a href="#">
                                <i className="fa-brands fa-youtube icon" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <a href="#">Jenny Wilson</a>
                          </h4>
                          <p className="designation">
                            Senior Consultants, Eduplan
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* our team area end here  */}
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
        <section className="chose-area-wrapper section-bottom-space">
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
        {/* testimonial area start here  */}
        <section className="testimonial-area-wrapper section-top-space">
          <div className="container custom-container-01">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title-wrapper text-center">
                  <h5 className="subtitle">SERVICES</h5>
                  <h4 className="section-title">Students who fly abroad</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="slick-main global-slick-init"
                  data-infinite="true"
                  data-arrows="true"
                  data-fade="false"
                  data-speed={500}
                  data-dots="false"
                  data-slidestoshow={3}
                  data-slidestoscroll={1}
                  data-swipetoslide="true"
                  data-autoplay="true"
                  data-autoplayspeed={2500}
                  data-responsive='[
                                {"breakpoint": 1367,"settings": {"slidesToShow": 3}},
                                {"breakpoint": 992,"settings": {"slidesToShow": 2}},
                                {"breakpoint": 600, "settings": {"slidesToShow": 1}}
                                ]'
                >
                  <div className="slick-item">
                    <div className="testimonial-single-items style-01 v-02">
                      <div className="feedback-wrap">
                        <ul className="ul feedback-icon-list">
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                        </ul>
                      </div>
                      <div className="content">
                        <p className="feedback-text">
                          “I able to prove potential employers that i have a
                          solid understanding of computers &amp; hardware- and
                          started to receive real, viable job offers”.
                        </p>
                      </div>
                      <div className="client-and-quote">
                        <div className="client-details">
                          <div className="thumb">
                            <img
                              src="assets/img/sections/testimonial/tesi-01.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <p className="client-name">Savannah Nguyen</p>
                            <p className="designation">
                              Central African Republic
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-item">
                    <div className="testimonial-single-items style-01 v-02">
                      <div className="feedback-wrap">
                        <ul className="ul feedback-icon-list">
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                        </ul>
                      </div>
                      <div className="content">
                        <p className="feedback-text">
                          “I able to prove potential employers that i have a
                          solid understanding of computers &amp; hardware- and
                          started to receive real, viable job offers”.
                        </p>
                      </div>
                      <div className="client-and-quote">
                        <div className="client-details">
                          <div className="thumb">
                            <img
                              src="assets/img/sections/testimonial/testi-02.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <p className="client-name">Kathryn Murphy</p>
                            <p className="designation">Monaco</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-item">
                    <div className="testimonial-single-items style-01 v-02">
                      <div className="feedback-wrap">
                        <ul className="ul feedback-icon-list">
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                        </ul>
                      </div>
                      <div className="content">
                        <p className="feedback-text">
                          “I able to prove potential employers that i have a
                          solid understanding of computers &amp; hardware- and
                          started to receive real, viable job offers”.
                        </p>
                      </div>
                      <div className="client-and-quote">
                        <div className="client-details">
                          <div className="thumb">
                            <img
                              src="assets/img/sections/testimonial/testi-03.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <p className="client-name">Kristin Watson</p>
                            <p className="designation">Guinea</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-item">
                    <div className="testimonial-single-items style-01 v-02">
                      <div className="feedback-wrap">
                        <ul className="ul feedback-icon-list">
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                          <li className="single-feedback-item">
                            <i className="fas fa-star icon" />
                          </li>
                        </ul>
                      </div>
                      <div className="content">
                        <p className="feedback-text">
                          “I able to prove potential employers that i have a
                          solid understanding of computers &amp; hardware- and
                          started to receive real, viable job offers”.
                        </p>
                      </div>
                      <div className="client-and-quote">
                        <div className="client-details">
                          <div className="thumb">
                            <img
                              src="assets/img/sections/testimonial/testi-02.png"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <p className="client-name">Savannah Nguyen</p>
                            <p className="designation">
                              Central African Republic
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonial area end here  */}
      </div>
      {/* about page end here  */}
    </>
  );
};

export default AboutUsScreen;
