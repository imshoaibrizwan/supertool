import React from 'react'
import {Link} from 'react-router-dom'
 
const Footer = () => {
  return (
    <>
    {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        footer area start Here
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <footer className="footer-area style-01">
          <div className="footer-top">
            <div className="container custom-container-01">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="footer-widget widget widget_subscribe">
                    <div className="subscibe-wrapper">
                      <div className="content-wrap">
                        <div className="icon">
                          <img src="assets/img/icon/newslater.png" alt="" />
                        </div>
                        <div className="content">
                          <h4 className="title">Subscribe our newsletter</h4>
                          <p>
                          Enter your mail address to get our updates, of our latest tools
                          </p>
                        </div>
                      </div>
                      <div className="subscribe-form">
                        <div className="form-group">
                          <input
                            type="text"
                            name="fname"
                            placeholder="Enter your Email..."
                            className="form-control"
                            required
                            aria-required="true"
                          />
                          <div className="btn-wrap">
                            <a
                              href="service-single.html"
                              className="subscribe-btn"
                            >
                              <img src="assets/img/icon/bell.png" alt="" />
                              subscribe
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-middle">
                <div className="row">
                

                  <div className="col-lg-5 col-md-6 col-sm-6">
                    <div className="footer-widget widget widget_nav_menu">
                      <Link to='/'>
                      <img src='assets/img/logo/Super-tools-white.png' style={{ width: '220px', marginBottom: '2vh' }}/>
                     
                      </Link>
                      <p>This tool will instantly upload and transform the file into a PDF. Compress, edit or modify the output file, if necessary. Download the PDF to your device and make your life easy.</p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="footer-widget widget widget_nav_menu">
                      <h4 className="widget-headline">Useful Links</h4>
                      <ul>

                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                          <Link to="#">Terms and conditions</Link>
                        </li>
                        <li>
                          <Link to="#">Privacy policy</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="footer-widget widget widget_nav_menu">
                      <h4 className="widget-headline">Popular Tools</h4>
                      <ul>
                        <li>
                          <a href="#pdf">PDF Generator</a>
                        </li>
                        <li>
                          <a href="#img">Image Editing Tools</a>
                        </li>
                      
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer-widget widget widget_nav_menu">
                      <h4 className="widget-headline">Information</h4>
                      <ul className="contact_info_list">
                      
                    
                        <div style={{ marginTop: '2vh' }}>
                          <p>Contact No: +92 304 79 79 567</p>
                         
                          <p>Email: info@limecircles.com</p>
                          </div>
                       
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container custom-container-01">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright-area-inner">
                    <p>
                      © 2023 SUPERTOOL. All rights reserved
                    </p>
                    <div className="footer-social-area">
                      <ul className="social-icon-02">
                        <li>
                          <a href="#0">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        footer area End Here
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}

     {/* back to top area start */}
     <div className="back-to-top">
        <span className="back-top">
          <i className="fa fa-angle-up" />
        </span>
      </div>
      {/* back to top area end */}
    </>
  )
}

export default Footer