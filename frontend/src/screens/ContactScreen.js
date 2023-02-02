import React from "react";

const ContactScreen = () => {
  return (
    <>
      {/* contact page start here  */}
      <div className="contact-us-wrapper single-page-section-top-space single-page-section-bottom-space">
        {/* breadcrumb area start here  */}
        <div className="breadcrumb-wrap style-01">
          <div className="container custom-container-01">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <h3 className="title">Contact us</h3>
                  <p className="details">
                    We have professional team to manage and develope these tools
                    to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb area end here  */}
        {/* contact form start hare  */}
        <section className="contact-form-area-wrapper section-bottom-space">
          <div className="container custom-container-01">
            <div className="row">
              <div className="col-lg-12">
                <div className="apply-form-inner">
                  <div className="row justify-content-between">
                    <div className="col-lg-5">
                      <div className="contact-address">
                        <h3 className="title">Get in touch</h3>
                        <ul className="ul contact-address-list">
                          <li className="single-address-item">
                            <span className="icon-wrap color-02">
                              <i className="fa-solid fa-phone icon" />
                            </span>
                            <span className="text">+92 304 79 79 567</span>
                          </li>
                          <li className="single-address-item">
                            <span className="icon-wrap color-03">
                              <i className="fa-solid fa-envelope-open icon" />
                            </span>
                            <span className="text">info@limecircles.com</span>
                          </li>
                        </ul>
                        <ul className="ul social-media-list style-01 color-02">
                          <li className="single-social-item">
                            <a href="#" tabIndex={-1}>
                              <i className="fa-brands fa-instagram icon" />
                            </a>
                          </li>
                          <li className="single-social-item">
                            <a href="#" tabIndex={-1}>
                              <i className="fa-brands fa-facebook-f icon" />
                            </a>
                          </li>
                          <li className="single-social-item">
                            <a href="#" tabIndex={-1}>
                              <i className="fa-brands fa-youtube icon" />
                            </a>
                          </li>
                          <li className="single-social-item">
                            <a href="#" tabIndex={-1}>
                              <i className="fa-brands fa-linkedin-in icon" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="contact-form">
                        <form className="form">
                          <div className="part">
                            <h5 className="title">Primary Information</h5>
                            <div className="form-element">
                              <div className="row">
                                <div className="col-lg-6">
                                  <i className="fa-solid fa-user" />
                                  <input
                                    type="text"
                                    placeholder="Full name"
                                    required
                                  />
                                </div>
                                <div className="col-lg-6">
                                  <i className="fa-solid fa-envelope-open" />
                                  <input
                                    type="email"
                                    placeholder="Email address"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-element">
                              <div className="row">
                                <div className="col-lg-6">
                                  <i className="fa-solid fa-phone" />
                                  <input
                                    type="tel"
                                    placeholder="Phone number"
                                    required
                                  />
                                </div>
                                <div className="col-lg-6">
                                  <i className="fa-solid fa-user" />
                                  <input
                                    type="text"
                                    placeholder="Subject"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-element">
                              <div className="row">
                                <div className="col-lg-12">
                                  <textarea
                                    className="textarea"
                                    placeholder="Write description..."
                                    rows={10}
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-submit text-right">
                            <button
                              type="submit"
                              className="btn-common btn-active"
                            >
                              submit Message
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact form end hare  */}
      </div>
      {/* contact page end here  */}
    </>
  );
};

export default ContactScreen;
