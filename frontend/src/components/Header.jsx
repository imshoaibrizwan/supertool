import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      {/*  search Popup start */}
      <div className="body-overlay" id="body-overlay" />
      <div className="search-popup" id="search-popup">
        <form action="index.html" className="search-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search....."
            />
          </div>
          <button className="close-btn border-none">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
      {/* Search Popup End */}

        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Nav Area Start Here
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <div className="nav-area-wrapper-relative">
          <nav className="navbar navbar-area navbar-expand-lg navigation-style-02">
            <div className="container custom-container custom-container-01">
              <div className="responsive-menu">
                <div className="logo-wrapper">
                  <Link to="/" className="logo">
                    <h3 style={{ color: "red" }}>SUPERTOOL</h3>
                  </Link>
                </div>
                <button
                  className="navbar-toggler navbar-bs-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#themeim_main_menu"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
              </div>
              <div className="collapse navbar-collapse" id="themeim_main_menu">
                <ul className="navbar-nav">
                  <li className="menu-item-has-children current-menu-item">
                    <Link to="/">Home</Link>
                    {/* <ul className="sub-menu">
                      <li>
                        <a href="index.html">Home One</a>
                      </li>
                      <li>
                        <a href="index-02.html">Home Two</a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                </ul>
              </div>
              <div className="nav-right-content">
                <div className="icon-part">
                  <ul>
                    <li id="search">
                      <a href="#">
                        <img src="assets/img/icon/search-icon.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <Link to="/contact" className="btn-common nav-btn">
                    Free consultation
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Nav Area End Here
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
   
    </>
  )
}

export default Header