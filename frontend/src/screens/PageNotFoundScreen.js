import React from "react";
import { Link } from "react-router-dom";

const PageNotFoundScreen = () => {
  return (
    <>
      <div className="error-wrapper">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-inner">
                <div className="row align-items-center row-reverse">
                  <div className="offset-lg-1 col-lg-5">
                    <div className="content">
                      <h5 className="title">404</h5>
                      <span className="text">
                        Don’t panic, we won’t need to put it in nice.
                      </span>
                      <div className="btn-wrap">
                        <Link
                          to="/"
                          className="btn-common add-to-cart btn-active"
                        >
                          Back to homepage
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <img src="assets/img/404/01.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFoundScreen;
