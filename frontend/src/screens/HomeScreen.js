import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = ({ showPage }) => {
  return (
    <>
      {showPage && (
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

                    {/* <ul className="nav nav-pills">
                  <li className="nav-item" id="pdf">
                    <a
                      href="#"
                      className="nav-link active"
                      data-bs-toggle="pill"
                      data-bs-target="#discipline"
                    >
                      PDF Generator
                    </a>
                  </li>
                  <li className="nav-item" id="img">
                    <a
                      href="#"
                      className="nav-link"
                      data-bs-toggle="pill"
                      data-bs-target="#collage"
                    >
                      Image Editing Tools
                    </a>
                  </li>
                </ul> */}
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="discipline">
                      <div className="tools-wrap">
                        <div className="destination-single-item style-01 tools">
                          <Link to="/htmltopdf">
                            <div className="thumbnail child bounce">
                              <img
                                src="assets/img/tools/word_pdf.png"
                                alt=""
                                width="60"
                                height="60"
                              />
                            </div>

                            <h6 className="name">HTML to PDF</h6>
                          </Link>
                        </div>

                        <div className="destination-single-item style-01 tools">
                          <Link to="/imagestopdf">
                            <div className="thumbnail child bounce">
                              <img
                                src="assets/img/tools/png_to_pdf.png"
                                alt=""
                                width="50"
                                height="50"
                              />
                            </div>
                            <h6 className="name">Images to PDf</h6>
                          </Link>
                        </div>

                        <div className="destination-single-item style-01 tools">
                          <Link to="/cropimage">
                            <div className="thumbnail child bounce">
                              <img
                                src="assets/img/tools/crop_img.png"
                                alt=""
                                width="50"
                                height="50"
                              />
                            </div>
                            <h6 className="name">Crop Image</h6>
                          </Link>
                        </div>
                        <div className="destination-single-item style-01 tools">
                          <Link to="/compressimage">
                            <div className="thumbnail child bounce">
                              <img
                                src="assets/img/tools/img_compression.png"
                                alt=""
                                width="50"
                                height="50"
                              />
                            </div>
                            <h6 className="name">Image Compressor</h6>
                          </Link>
                        </div>
                        {/* <div className="destination-single-item style-01 tools">
                      <Link to="/videotogif">
                        <div className="thumbnail child bounce">
                          <img
                            src="assets/img/tools/video_gif.png"
                            alt=""
                            width="50"
                            height="50"
                          />
                        </div>
                        <h6 className="name">Video to GIF Converter</h6>
                      </Link>
                    </div> */}
                        <div className="destination-single-item style-01 tools">
                          <Link to="/resizeimage">
                            <div className="thumbnail child bounce">
                              <img
                                src="assets/img/tools/img_resizer.png"
                                width="50"
                                height="50"
                                alt=""
                              />
                            </div>
                            <h6 className="name">Image Resizer</h6>
                          </Link>
                        </div>
                        <div className="destination-single-item style-01 tools">
                          <Link to="/imagetotext">
                            <div className="thumbnail child bounce">
                              <img
                                src="assets/img/tools/img_text.png"
                                width="50"
                                height="50"
                                alt=""
                              />
                            </div>
                            <h6 className="name">Image to Text Converter</h6>
                          </Link>
                        </div>
                        <div className="destination-single-item style-01 tools">
                          <Link to="/hashstring">
                            <div className="thumbnail child bounce">
                              <img
                                src="assets/img/tools/md5_generator.png"
                                width="50"
                                height="50"
                                alt=""
                              />
                            </div>
                            <h6 className="name">MD5 GENERATOR</h6>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* <div className="tab-pane fade" id="collage">
                  <div className="tools-wrap">
                    <div className="destination-single-item style-01 tools">
                      <Link to="/cropimage">
                        <div className="thumbnail child bounce">
                          <img
                            src="assets/img/tools/crop_img.png"
                            alt=""
                            width="50"
                            height="50"
                          />
                        </div>
                        <h6 className="name">Crop Image</h6>
                      </Link>
                    </div>
                    <div className="destination-single-item style-01 tools">
                      <Link to="/compressimage">
                        <div className="thumbnail child bounce">
                          <img
                            src="assets/img/tools/img_compression.png"
                            alt=""
                            width="50"
                            height="50"
                          />
                        </div>
                        <h6 className="name">Image Compressor</h6>
                      </Link>
                    </div>
                    <div className="destination-single-item style-01 tools">
                      <Link to="/videotogif">
                        <div className="thumbnail child bounce">
                          <img
                            src="assets/img/tools/video_gif.png"
                            alt=""
                            width="50"
                            height="50"
                          />
                        </div>
                        <h6 className="name">Video to GIF Converter</h6>
                      </Link>
                    </div>
                    <div className="destination-single-item style-01 tools">
                      <Link to="/resizeimage">
                        <div className="thumbnail child bounce">
                          <img
                            src="assets/img/tools/img_resizer.png"
                            width="50"
                            height="50"
                            alt=""
                          />
                        </div>
                        <h6 className="name">Image Resizer</h6>
                      </Link>
                    </div>
                  </div>
                </div> */}
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
          <section className="destination-section style-01 margin-top-110 instruction">
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
                    Open <br /> OnlineSuperTool.com
                  </h6>
                </div>
                <div className="destination-single-item style-02">
                  <div className="thumbnail">
                    <img src="assets/img/icon/step-02.png" alt="" />
                  </div>
                  <h6 className="name">
                    Select Your Required <br /> &amp; Tool
                  </h6>
                </div>
                <div className="destination-single-item style-02">
                  <div className="thumbnail">
                    <img src="assets/img/icon/step-03.png" alt="" />
                  </div>
                  <h6 className="name">
                    Add your input data &amp; <br /> (Content/file)
                  </h6>
                </div>
                <div className="destination-single-item style-02">
                  <div className="thumbnail">
                    <img src="assets/img/icon/step-04.png" alt="" />
                  </div>
                  <h6 className="name">
                    Click on Convert to &amp; <br /> see the magic
                  </h6>
                </div>
                <div className="destination-single-item style-02">
                  <div className="thumbnail">
                    <img src="assets/img/icon/step-05.png" alt="" />
                  </div>
                  <h6 className="name">
                    Get and download <br /> your converted <br /> file/Content
                  </h6>
                </div>
              </div>
            </div>
          </section>
          {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Steps Section Area End Here
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        </>
      )}
    </>
  );
};

export default HomeScreen;
