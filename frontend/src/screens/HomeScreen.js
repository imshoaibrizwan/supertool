import React from "react";
import { Link, LinkContainer } from "react-router-dom";

const HomeScreen = () => {
  return (
    <>
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Category Section Area Start Here
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <section className="category-section-area">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-md-9">
              <div className="section-title-wrapper d-flex justify-content-between">
                <div className="theme-section-title">
                  <h4 className="title">Popular Tools</h4>
                </div>

                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link active"
                      data-bs-toggle="pill"
                      data-bs-target="#discipline"
                    >
                      Discipline
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link"
                      data-bs-toggle="pill"
                      data-bs-target="#collage"
                    >
                      Collage
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="discipline">
                  <div className="destination-items-wrap">
                    <div className="destination-single-item style-01">
                      <Link to="/htmltopdf">
                        <div className="thumbnail">
                          <img src="assets/img/htmltopdf.png" alt="" />
                        </div>

                        <h6 className="name">HTML to PDF</h6>
                      </Link>
                    </div>

                    <div className="destination-single-item style-01">
                      <Link to="/imagetopdf">
                        <div className="thumbnail">
                          <img
                            src="assets/img/sections/desipline/science.png"
                            alt=""
                          />
                        </div>
                        <h6 className="name">Image to PDf</h6>
                      </Link>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/art.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        Art, Design &amp; <br /> Culture
                      </h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/business.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        Business &amp; <br /> Management
                      </h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/pc.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        Computer <br /> Science &amp; IT
                      </h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/book.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        Education &amp; <br /> Training
                      </h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/click.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        Engeneering &amp; <br /> Technology
                      </h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/french-fry.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        Hopitality &amp; <br /> Sports
                      </h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/news-paper.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        Journalism &amp; <br /> Media
                      </h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/first-aid-kit.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        Medicine &amp; <br /> Health
                      </h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/law.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">Law</h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/enverment.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">Social Science</h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/humanity.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">Humanities</h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/recicle.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        Enviromental <br /> Studies
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="collage">
                  <div className="destination-items-wrap">
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/french-fry.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        Hopitality &amp; <br /> Sports
                      </h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/news-paper.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        Journalism &amp; <br /> Media
                      </h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/first-aid-kit.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        Medicine &amp; <br /> Health
                      </h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/law.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">Law</h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/enverment.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">Social Science</h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/humanity.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">Humanities</h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/recicle.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        Enviromental <br /> Studies
                      </h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/foresty.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        Agriculture &amp; <br /> Foresty
                      </h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/science.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        science <br /> &amp; professional
                      </h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/art.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        Art, Design &amp; <br /> Culture
                      </h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/business.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        Business &amp; <br /> Management
                      </h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/pc.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        Computer <br /> Science &amp; IT
                      </h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/book.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        Education &amp; <br /> Training
                      </h6>
                    </div>
                    <div className="destination-single-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/sections/desipline/click.png"
                          alt=""
                        />
                      </div>
                      <h6 className="name">
                        Engeneering &amp; <br /> Technology
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Category Section Area End Here
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Steps Section Area Start Here
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <section className="destination-section style-01 instruction">
        <div className="container custom-container-01">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="theme-section-title desktop-center text-center">
                <span className="subtitle">STEPS</span>
                <h4 className="title">Steps to Get your Destination</h4>
              </div>
            </div>
          </div>
          <div className="destination-items-wrap">
            <div className="destination-single-item style-02">
              <div className="thumbnail">
                <img src="assets/img/icon/step-01.png" alt="" />
              </div>
              <h6 className="name">
                Identify course <br /> country &amp; collage
              </h6>
            </div>
            <div className="destination-single-item style-02">
              <div className="thumbnail">
                <img src="assets/img/icon/step-02.png" alt="" />
              </div>
              <h6 className="name">
                science <br /> &amp; professional
              </h6>
            </div>
            <div className="destination-single-item style-02">
              <div className="thumbnail">
                <img src="assets/img/icon/step-03.png" alt="" />
              </div>
              <h6 className="name">
                Art, Design &amp; <br /> Culture
              </h6>
            </div>
            <div className="destination-single-item style-02">
              <div className="thumbnail">
                <img src="assets/img/icon/step-04.png" alt="" />
              </div>
              <h6 className="name">
                Business &amp; <br /> Management
              </h6>
            </div>
            <div className="destination-single-item style-02">
              <div className="thumbnail">
                <img src="assets/img/icon/step-05.png" alt="" />
              </div>
              <h6 className="name">
                Computer <br /> Science &amp; IT
              </h6>
            </div>
          </div>
        </div>
      </section>
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Steps Section Area End Here
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}

      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Faq Section Area Start Here
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <section className="faq-section-area">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-6">
              <div className="theme-section-title">
                <span className="subtitle">FAQ</span>
                <h4 className="title">Frequently asked question</h4>
              </div>
              <div className="faq-content">
                <h6 className="subtitle">
                  Still do you have any questions to know? <br /> Feel free to
                  ask our experts here.
                </h6>
                <div className="btn-wrap">
                  <a href="#0" className="btn-common flat-btn">
                    ASK YOUR QUESTIONS
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion-wrapper">
                {/* accordion wrapper */}
                <div id="accordionOne">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          role="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          1. How is get admission in abroad university?
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse"
                      data-bs-parent="#accordionOne"
                    >
                      <div className="card-body">
                        Norway, USA, UK, Germany &amp; Italy is most safest
                        country in the world for Bangladeshi students for higer
                        study.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          role="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          2. Do you offer complete solution for students?
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      data-bs-parent="#accordionOne"
                    >
                      <div className="card-body">
                        Norway, USA, UK, Germany &amp; Italy is most safest
                        country in the world for Bangladeshi students for higer
                        study.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          role="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          3. Which country is safe and better for higher study?
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      data-bs-parent="#accordionOne"
                    >
                      <div className="card-body">
                        Norway, USA, UK, Germany &amp; Italy is most safest
                        country in the world for Bangladeshi students for higer
                        study.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFour">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          role="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          4. Which country offer PR after study getting job?
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      data-bs-parent="#accordionOne"
                    >
                      <div className="card-body">
                        Norway, USA, UK, Germany &amp; Italy is most safest
                        country in the world for Bangladeshi students for higer
                        study.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFive">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          role="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          5. Can i get scholarship with my low cGPA?
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      data-bs-parent="#accordionOne"
                    >
                      <div className="card-body">
                        Norway, USA, UK, Germany &amp; Italy is most safest
                        country in the world for Bangladeshi students for higer
                        study.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSix">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          role="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          6. Do you allow accomadation for students in abroad?
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse"
                      data-bs-parent="#accordionOne"
                    >
                      <div className="card-body">
                        Norway, USA, UK, Germany &amp; Italy is most safest
                        country in the world for Bangladeshi students for higer
                        study.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Faq Section Area End Here
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
    </>
  );
};

export default HomeScreen;
