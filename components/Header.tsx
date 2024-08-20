import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <header className="header jnj-header-item-2 redux-header" data-scroll="out"> {/* Header Start */}
      <div className="jnj-header-overlay"> {/* Header overlay */}
        <div className="jnj-menu-wrapper jnj-sticky">
          <div className="container">
            <div className="jnj-header-main"> {/* Header Menu Area */}
              <div className="jnj-site-branding-area d-flex align-items-center justify-content-between">
                <div className="jnj-header-logo">
                  <a className="jnj-logo" href="wordpress/hevin.html">
                    <img src="/logo.svg" className="jnj-site-logo" alt="hevin-logo" /> <img src="wordpress/hevin/wp-content/themes/hevin/assets/images/logo.svg" className="jnj-site-sticky-logo" alt="hevin-logo" /> </a>
                </div>
                {/* Navbar */}
                <div className="header-container">
                  <nav className="navbar jnj-nav-area navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <div className="jnj-menu-container">
                        <ul id="jnj-menu" className="navbar-nav mr-auto">
                          <li id="menu-item-3712" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3712">
                            <a href="#home">Home</a></li>
                          <li id="menu-item-1313" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1313">
                            <a href="#services">Services</a>
                            <ul className="sub-menu">
                              <li id="menu-item-3673" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3673">
                                <a href="/services/">Services All</a>
                              </li>
                              <li id="menu-item-3375" className="menu-item menu-item-type-post_type menu-item-object-services menu-item-3375">
                                <a href="/services/digitalOcian">Service
                                  Details</a></li>
                            </ul>
                          </li>
                          <li id="menu-item-2023" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2023">
                            <a href="#about-me">About Me</a></li>
                          <li id="menu-item-1314" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1314">
                            <a href="#projects">Portfolio</a>
                            <ul className="sub-menu">
                              <li id="menu-item-3683" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3683">
                                <a href="wordpress/hevin/project.html">All Portfolio</a>
                              </li>
                              <li id="menu-item-3376" className="menu-item menu-item-type-post_type menu-item-object-project menu-item-3376">
                                <a href="wordpress/hevin/project/figma-design.html">Portfolio
                                  Details</a></li>
                            </ul>
                          </li>
                          <li id="menu-item-2024" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2024">
                            <a href="#reviews">Reviews</a></li>
                          <li id="menu-item-1315" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1315">
                            <a href="#blog">Blog</a>
                            <ul className="sub-menu">
                              <li id="menu-item-2541" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2541">
                                <a href="wordpress/hevin/blog-standard.html">Blog
                                  Standard</a></li>
                              <li id="menu-item-1365" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1365">
                                <a href="wordpress/hevin/blog-all.html">Blog All</a>
                              </li>
                              <li id="menu-item-3377" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3377">
                                <a href="wordpress/hevin/examples-to-steal-in-2022.html">Blog
                                  Details</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav> {/* Navbar End */}
                </div>{/* Header Menu Area End */}
                <div className="jnj-menu-right-items d-flex align-items-center">
                  <div className="jnj-button"> <a href="#footer-contact"> Contact Me </a>
                  </div>
                </div>
                <div id="jnj-mobile-view" />
              </div>
            </div> {/* Header Menu Area End */}
          </div>
        </div>
      </div>{/* End Header overlay */}
    </header>


  );
}

export default Header;