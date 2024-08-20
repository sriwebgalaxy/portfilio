import React from 'react'

export default function page() {
    return (
        <div>
            <div id="page" className="site">
                <header className="header jnj-header-item-2 redux-header" data-scroll="out"> {/* Header Start */}
                    <div className="jnj-header-overlay"> {/* Header overlay */}
                        <div className="jnj-menu-wrapper jnj-sticky jnj-header-fix">
                            <div className="container">
                                <div className="jnj-header-main">  {/* Header Menu Area */}
                                    <div className="jnj-site-branding-area d-flex align-items-center justify-content-between">
                                        <div className="jnj-header-logo">
                                            <a className="jnj-logo" href="https://jandjteams.com/wordpress/hevin/">
                                                <img src="https://jandjteams.com/wordpress/hevin/wp-content/themes/hevin/assets/images/logo.svg" className="jnj-site-logo" alt="hevin-logo" />         <img src="https://jandjteams.com/wordpress/hevin/wp-content/themes/hevin/assets/images/logo.svg" className="jnj-site-sticky-logo" alt="hevin-logo" />                   </a>
                                        </div>
                                        {/* Navbar */}
                                        <div className="header-container">                      <nav className="navbar jnj-nav-area navbar-expand-lg navbar-light">
                                            <div className="collapse navbar-collapse" id="navbarSupportedContent"> <div className="jnj-menu-container"><ul id="jnj-menu" className="navbar-nav mr-auto"><li id="menu-item-3712" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3712"><a href="https://jandjteams.com/wordpress/hevin/#home">Home</a></li>
                                                <li id="menu-item-1313" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-1313"><a href="https://jandjteams.com/wordpress/hevin/#services">Services</a>
                                                    <ul className="sub-menu">
                                                        <li id="menu-item-3673" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3673"><a href="https://jandjteams.com/wordpress/hevin/services/">Services All</a></li>
                                                        <li id="menu-item-3375" className="menu-item menu-item-type-post_type menu-item-object-services current-menu-item menu-item-3375"><a href="https://jandjteams.com/wordpress/hevin/services/digital-design/" aria-current="page">Service Details</a></li>
                                                    </ul>
                                                </li>
                                                <li id="menu-item-2023" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2023"><a href="https://jandjteams.com/wordpress/hevin/#about-me">About Me</a></li>
                                                <li id="menu-item-1314" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1314"><a href="https://jandjteams.com/wordpress/hevin/#projects">Portfolio</a>
                                                    <ul className="sub-menu">
                                                        <li id="menu-item-3683" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3683"><a href="https://jandjteams.com/wordpress/hevin/project/">All Portfolio</a></li>
                                                        <li id="menu-item-3376" className="menu-item menu-item-type-post_type menu-item-object-project menu-item-3376"><a href="https://jandjteams.com/wordpress/hevin/project/figma-design/">Portfolio Details</a></li>
                                                    </ul>
                                                </li>
                                                <li id="menu-item-2024" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2024"><a href="https://jandjteams.com/wordpress/hevin/#reviews">Reviews</a></li>
                                                <li id="menu-item-1315" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1315"><a href="https://jandjteams.com/wordpress/hevin/#blog">Blog</a>
                                                    <ul className="sub-menu">
                                                        <li id="menu-item-2541" className="menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-2541"><a href="https://jandjteams.com/wordpress/hevin/blog-standard/">Blog Standard</a></li>
                                                        <li id="menu-item-1365" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1365"><a href="https://jandjteams.com/wordpress/hevin/blog-all/">Blog All</a></li>
                                                        <li id="menu-item-3377" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3377"><a href="https://jandjteams.com/wordpress/hevin/examples-to-steal-in-2022/">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                            </ul></div>                        </div>
                                        </nav> {/* Navbar End */}                 </div>{/* Header Menu Area End */}
                                        <div className="jnj-menu-right-items d-flex align-items-center">
                                            <div className="jnj-button">                                     <a href="#footer-contact"> Contact Me                                </a>
                                            </div>                 </div>
                                        <div id="jnj-mobile-view"><div className="slicknav_menu"><a href="#" aria-haspopup="true" role="button" tabIndex={0} className="slicknav_btn slicknav_collapsed" style={{ outline: 'none' }}><span className="slicknav_menutxt"> </span><span className="slicknav_icon"><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /></span></a><ul className="slicknav_nav slicknav_hidden" style={{ display: 'none' }} aria-hidden="true" role="menu"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3712"><a href="https://jandjteams.com/wordpress/hevin/#home" role="menuitem" tabIndex={-1}>Home</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-1313 slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{ outline: 'none' }} /><a href="https://jandjteams.com/wordpress/hevin/#services" tabIndex={-1}>Services</a>
                                                <span className="slicknav_arrow">+</span><ul className="sub-menu slicknav_hidden" role="menu" style={{ display: 'none' }} aria-hidden="true">
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3673"><a href="https://jandjteams.com/wordpress/hevin/services/" role="menuitem" tabIndex={-1}>Services All</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-services current-menu-item menu-item-3375"><a href="https://jandjteams.com/wordpress/hevin/services/digital-design/" aria-current="page" role="menuitem" tabIndex={-1}>Service Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2023"><a href="https://jandjteams.com/wordpress/hevin/#about-me" role="menuitem" tabIndex={-1}>About Me</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1314 slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{ outline: 'none' }} /><a href="https://jandjteams.com/wordpress/hevin/#projects" tabIndex={-1}>Portfolio</a>
                                                <span className="slicknav_arrow">+</span><ul className="sub-menu slicknav_hidden" role="menu" style={{ display: 'none' }} aria-hidden="true">
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3683"><a href="https://jandjteams.com/wordpress/hevin/project/" role="menuitem" tabIndex={-1}>All Portfolio</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-project menu-item-3376"><a href="https://jandjteams.com/wordpress/hevin/project/figma-design/" role="menuitem" tabIndex={-1}>Portfolio Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2024"><a href="https://jandjteams.com/wordpress/hevin/#reviews" role="menuitem" tabIndex={-1}>Reviews</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1315 slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{ outline: 'none' }} /><a href="https://jandjteams.com/wordpress/hevin/#blog" tabIndex={-1}>Blog</a>
                                                <span className="slicknav_arrow">+</span><ul className="sub-menu slicknav_hidden" role="menu" style={{ display: 'none' }} aria-hidden="true">
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-2541"><a href="https://jandjteams.com/wordpress/hevin/blog-standard/" role="menuitem" tabIndex={-1}>Blog Standard</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1365"><a href="https://jandjteams.com/wordpress/hevin/blog-all/" role="menuitem" tabIndex={-1}>Blog All</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3377"><a href="https://jandjteams.com/wordpress/hevin/examples-to-steal-in-2022/" role="menuitem" tabIndex={-1}>Blog Details</a></li>
                                                </ul>
                                            </li>
                                        </ul></div></div>
                                    </div>
                                </div> {/* Header Menu Area End */}
                            </div>
                        </div>
                    </div>{/* End Header overlay */}
                </header> {/* Header End */}
                <div className="jnj-breadcrumb jnj-hight-one text-center jnj-breadcrumb-color">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">                            <h2 className="jnj-title">Digital Design</h2>                         <div className="jnj-breadcrumb-item"><span className="jnj-item-home"><a className="bread-link bread-home" href="https://jandjteams.com/wordpress/hevin" title="Home">Home</a></span><span className="separator separator-home"> / </span><span className="jnj-bread jnj-item-cat"><a className="jnj-bread-cat" href="https://jandjteams.com/wordpress/hevin/services" title="Services">Services</a></span><span className="separator"> / </span><span className="jnj-bread jnj-item-current">Digital Design</span></div>                  </div>
                        </div>
                    </div>
                </div>
                <div className="site-content-contain">
                    <div id="content" className="site-content container">                     <label className="jnj-theme-preferences">
                        <input type="checkbox" className="jnj-checkbox" id="jnj-checkbox" />
                        <label htmlFor="jnj-checkbox" className="jnj-label">
                            <i className="fas fa-moon" />
                            <i className="fas fa-sun" />
                            <div className="jnj-ball" />
                        </label>
                    </label> <div className="wrap">
                            <div id="primary" className="content-area">
                                <main id="main" className="site-main">				<div className="row">
                                    <div className="content-area jnj-content-service col-sm-12 col-md-12 col-lg-9 col-xl-9 order-lg-2 order-xl-2">
                                        <div className="jnj-service-image">
                                            <img width={1000} height={600} src="https://jandjteams.com/wordpress/hevin/wp-content/uploads/2022/11/project-img4-1000x600.jpg" className="attachment-jnj-service-detail size-jnj-service-detail wp-post-image" alt="project-img4" decoding="async" fetchPriority="high" />						</div>
                                        <div className="jnj-services-category"> 								<a href="https://jandjteams.com/wordpress/hevin/services-category/design-system/">
                                            Design System								</a> 						</div>
                                        <h4 className="jnj-service-title">Digital Design</h4>
                                        <div data-elementor-type="wp-post" data-elementor-id={1899} className="elementor elementor-1899">
                                            <div className="elementor-section elementor-top-section elementor-element elementor-element-1ac745d elementor-section-boxed elementor-section-height-default elementor-section-height-default jnj-transparent-color" data-id="1ac745d" data-element_type="section">
                                                <div className="elementor-container elementor-column-gap-default">
                                                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0d6dce8 jnj-transparent-color" data-id="0d6dce8" data-element_type="column">
                                                        <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-3557224 elementor-widget elementor-widget-text-editor" data-id={3557224} data-element_type="widget" data-widget_type="text-editor.default">
                                                                <div className="elementor-widget-container">
                                                                    Donec imperdiet risus at tortor consequat maximus et eget magna. Cras ornare sagittis augue, id sollicitudin justo tristique ut. Nullam ex enim, euismod vel bibendum ultrices, fringilla vel eros. Donec euismod leo lectus, et euismod metus euismod sed. Quisque quis suscipit ipsum, at pellentesque velit. Duis a congue sem.						</div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-f6c8039 elementor-widget elementor-widget-text-editor" data-id="f6c8039" data-element_type="widget" data-widget_type="text-editor.default">
                                                                <div className="elementor-widget-container">
                                                                    <p>Donec imperdiet risus at tortor consequat maximus et eget magna. Cras ornare sagittis augue, id sollicitudin justo tristique ut. Nullam ex enim, euismod vel bibendum ultrices, fringilla vel eros. Donec euismod leo lectus, et euismod metus euismod sed. Quisque quis suscipit ipsum, at pellentesque velit. Duis a congue sem. Donec imperdiet risus at tortor consequat maximus et eget magna. Cras ornare sagittis augue, id sollicitudin justo tristique ut. Nullam ex enim, euismod vel bibendum ultrices, fringilla vel eros. Donec euismod leo lectus, et euismod metus euismod sed. Quisque quis suscipit ipsum, at pellentesque velit. Duis a congue sem.</p>						</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="elementor-section elementor-top-section elementor-element elementor-element-13154d1 elementor-section-boxed elementor-section-height-default elementor-section-height-default jnj-transparent-color" data-id="13154d1" data-element_type="section">
                                                <div className="elementor-container elementor-column-gap-default">
                                                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b84b278 jnj-transparent-color" data-id="b84b278" data-element_type="column">
                                                        <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-a3845a2 elementor-widget elementor-widget-jnj-heading" data-id="a3845a2" data-element_type="widget" data-widget_type="jnj-heading.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="jnj-elementor jnj-heading-item-2 text-align-left">         <h3 className="jnj-heading-title dark-color">Questions ? You're Covered</h3>
                                                                    </div> 		</div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-84d3532 elementor-widget elementor-widget-accordion" data-id="84d3532" data-element_type="widget" data-widget_type="accordion.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="elementor-accordion">
                                                                        <div className="elementor-accordion-item">
                                                                            <div id="elementor-tab-title-1391" className="elementor-tab-title elementor-active" data-tab={1} role="button" aria-controls="elementor-tab-content-1391" aria-expanded="true" tabIndex={0} aria-selected="true">
                                                                                <span className="elementor-accordion-icon elementor-accordion-icon-left" aria-hidden="true">
                                                                                    <span className="elementor-accordion-icon-closed"><i className="fas fa-plus" /></span>
                                                                                    <span className="elementor-accordion-icon-opened"><i className="fas fa-minus" /></span>
                                                                                </span>
                                                                                <a className="elementor-accordion-title" tabIndex={0}>Developing core applications</a>
                                                                            </div>
                                                                            <div id="elementor-tab-content-1391" className="elementor-tab-content elementor-clearfix elementor-active" data-tab={1} role="region" aria-labelledby="elementor-tab-title-1391" style={{ display: 'block' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nullam ex enim, euismod vel bibendum ultrices, fringilla vel eros.</div>
                                                                        </div>
                                                                        <div className="elementor-accordion-item">
                                                                            <div id="elementor-tab-title-1392" className="elementor-tab-title" data-tab={2} role="button" aria-controls="elementor-tab-content-1392" aria-expanded="false">
                                                                                <span className="elementor-accordion-icon elementor-accordion-icon-left" aria-hidden="true">
                                                                                    <span className="elementor-accordion-icon-closed"><i className="fas fa-plus" /></span>
                                                                                    <span className="elementor-accordion-icon-opened"><i className="fas fa-minus" /></span>
                                                                                </span>
                                                                                <a className="elementor-accordion-title" tabIndex={0}>Unique brand identity and strategy</a>
                                                                            </div>
                                                                            <div id="elementor-tab-content-1392" className="elementor-tab-content elementor-clearfix" data-tab={2} role="region" aria-labelledby="elementor-tab-title-1392">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nullam ex enim, euismod vel bibendum ultrices, fringilla vel eros.</div>
                                                                        </div>
                                                                        <div className="elementor-accordion-item">
                                                                            <div id="elementor-tab-title-1393" className="elementor-tab-title" data-tab={3} role="button" aria-controls="elementor-tab-content-1393" aria-expanded="false">
                                                                                <span className="elementor-accordion-icon elementor-accordion-icon-left" aria-hidden="true">
                                                                                    <span className="elementor-accordion-icon-closed"><i className="fas fa-plus" /></span>
                                                                                    <span className="elementor-accordion-icon-opened"><i className="fas fa-minus" /></span>
                                                                                </span>
                                                                                <a className="elementor-accordion-title" tabIndex={0}>Tailor-made digital products</a>
                                                                            </div>
                                                                            <div id="elementor-tab-content-1393" className="elementor-tab-content elementor-clearfix" data-tab={3} role="region" aria-labelledby="elementor-tab-title-1393">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nullam ex enim, euismod vel bibendum ultrices, fringilla vel eros.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="elementor-section elementor-top-section elementor-element elementor-element-b7ead4e elementor-section-boxed elementor-section-height-default elementor-section-height-default jnj-transparent-color" data-id="b7ead4e" data-element_type="section">
                                                <div className="elementor-container elementor-column-gap-default">
                                                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ad52178 jnj-transparent-color" data-id="ad52178" data-element_type="column">
                                                        <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-9cea2a2 elementor-widget elementor-widget-jnj-heading" data-id="9cea2a2" data-element_type="widget" data-widget_type="jnj-heading.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="jnj-elementor jnj-heading-item-2 text-align-left">         <h3 className="jnj-heading-title dark-color">Learning From Failure</h3>
                                                                    </div> 		</div>
                                                            </div>
                                                            <div className="elementor-section elementor-inner-section elementor-element elementor-element-efa1be4 elementor-section-boxed elementor-section-height-default elementor-section-height-default jnj-transparent-color" data-id="efa1be4" data-element_type="section">
                                                                <div className="elementor-container elementor-column-gap-default">
                                                                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-24d6e95 jnj-transparent-color" data-id="24d6e95" data-element_type="column">
                                                                        <div className="elementor-widget-wrap elementor-element-populated">
                                                                            <div className="elementor-element elementor-element-e984e57 elementor-widget elementor-widget-List" data-id="e984e57" data-element_type="widget" data-widget_type="List.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <ul className="jnj-list-item-1 jnj-elementor">
                                                                                        <li>
                                                                                            <span className="jnj-list-icon color-default">                        <i className="fas fa-check" aria-hidden="true" />               </span>
                                                                                            <span className="jnj-list-title color-default"> Donec imperdiet risus at tortor consequat.              </span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span className="jnj-list-icon color-default">                        <i className="fas fa-check" aria-hidden="true" />               </span>
                                                                                            <span className="jnj-list-title color-default"> Cras ornare sagittis augue, id sollicitudin justo tristique ut.              </span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span className="jnj-list-icon color-default">                        <i className="fas fa-check" aria-hidden="true" />               </span>
                                                                                            <span className="jnj-list-title color-default"> Nullam ex enim, euismod vel bibendum ultrices.              </span>
                                                                                        </li> </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d6cad01 jnj-transparent-color" data-id="d6cad01" data-element_type="column">
                                                                        <div className="elementor-widget-wrap elementor-element-populated">
                                                                            <div className="elementor-element elementor-element-432a053 elementor-widget elementor-widget-List" data-id="432a053" data-element_type="widget" data-widget_type="List.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <ul className="jnj-list-item-1 jnj-elementor">
                                                                                        <li>
                                                                                            <span className="jnj-list-icon color-default">                        <i className="fas fa-check" aria-hidden="true" />               </span>
                                                                                            <span className="jnj-list-title color-default"> Donec imperdiet risus at tortor consequat.              </span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span className="jnj-list-icon color-default">                        <i className="fas fa-check" aria-hidden="true" />               </span>
                                                                                            <span className="jnj-list-title color-default"> Cras ornare sagittis augue, id sollicitudin justo tristique ut.              </span>
                                                                                        </li>
                                                                                        <li>
                                                                                            <span className="jnj-list-icon color-default">                        <i className="fas fa-check" aria-hidden="true" />               </span>
                                                                                            <span className="jnj-list-title color-default"> Nullam ex enim, euismod vel bibendum ultrices.              </span>
                                                                                        </li> </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="jnj-navigation">
                                            <nav className="navigation post-navigation" aria-label="Posts">
                                                <h2 className="screen-reader-text">Post navigation</h2>
                                                <div className="nav-links"><div className="nav-previous"><a href="https://jandjteams.com/wordpress/hevin/services/art-direction/" rel="prev">
                                                    <div><i className="fas fa-arrow-left" /></div>
                                                    <div><span aria-hidden="true" className="nav-subtitle">Previous</span> <span className="nav-title"><span className="nav-title-icon-wrapper" />Art Direction</span></div></a></div><div className="nav-next"><a href="https://jandjteams.com/wordpress/hevin/services/branding/" rel="next">
                                                        <div><span className="screen-reader-text">Next Post</span><span aria-hidden="true" className="nav-subtitle">Next</span> <span className="nav-title">Business Branding<span className="nav-title-icon-wrapper" /></span></div>
                                                        <div><i className="fas fa-arrow-right" /></div></a></div></div>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="widget-area jnj-widget-sercice jnj-sidebar col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                        <div className="sercice-list"> <div id="jnj_servicecat-2" className="widget widget_jnj_servicecat"><h2 className="widget-title">Service List</h2>
                                            <ul className="jnj-service"> 	                <li className="jnj-list ">
                                                <a href="https://jandjteams.com/wordpress/hevin/services/art-direction/" className="cat_link">Art Direction</a>
                                            </li> 	                <li className="jnj-list ">
                                                    <a href="https://jandjteams.com/wordpress/hevin/services/branding/" className="cat_link">Business Branding</a>
                                                </li> 	                <li className="jnj-list  jnj-active">
                                                    <a href="https://jandjteams.com/wordpress/hevin/services/digital-design/" className="cat_link">Digital Design</a>
                                                </li> 	                <li className="jnj-list ">
                                                    <a href="https://jandjteams.com/wordpress/hevin/services/game-development/" className="cat_link">Web UI/UX Design</a>
                                                </li> 	                <li className="jnj-list ">
                                                    <a href="https://jandjteams.com/wordpress/hevin/services/graphic-design/" className="cat_link">Application Design</a>
                                                </li> 	                <li className="jnj-list ">
                                                    <a href="https://jandjteams.com/wordpress/hevin/services/illustration-design/" className="cat_link">Illustration Design</a>
                                                </li> 	      </ul> </div><div id="custom_html-2" className="widget_text widget widget_custom_html"><div className="textwidget custom-html-widget"><div className="jnj-service-add">
                                                    <h6><a href="#">About me</a></h6>
                                                </div></div></div>						</div>
                                    </div>
                                </div> 		</main>{/* #main */}
                            </div>{/* #primary */}
                        </div>{/* .wrap */}
                    </div>{/* #content */}
                    <footer id="footer-contact" className="jnj-footer elementor-element jnj-footer-color"> 		<div className="jnj-footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="jnj-contact-area">
                                        <div className="jnj-heading-item-1 jnj-elementor text-align-left">
                                            <div className="jnj-heading-subtitle primary-color">CONTACT ME</div>
                                            <h3 className="jnj-heading-title dark-color">Lets Discuss Your Project</h3>
                                        </div> 								<div className="jnj-iconbox-item-2">
                                            <div className="jnj-iconbox-area d-flex"> 											<div className="jnj-iconbox-icon ">
                                                <img src="https://jandjteams.com/wordpress/hevin/wp-content/uploads/2022/11/footer-icon3.png" alt="image" />
                                            </div>
                                                <div className="jnj-iconbox-details">
                                                    <div className="jnj-iconbox-content color-default">
                                                        Phone											</div>
                                                    <div className="jnj-iconbox-heading">
                                                        <h3 className="jnj-iconbox-title color-default">
                                                            +00 001 002 003												</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 								<div className="jnj-iconbox-item-2">
                                            <div className="jnj-iconbox-area d-flex">											<div className="jnj-iconbox-icon ">
                                                <img src="https://jandjteams.com/wordpress/hevin/wp-content/uploads/2022/11/footer-icon2.png" alt="image" />
                                            </div> 										<div className="jnj-iconbox-details">
                                                    <div className="jnj-iconbox-content color-default">
                                                        EMAIL											</div>
                                                    <div className="jnj-iconbox-heading">
                                                        <h3 className="jnj-iconbox-title color-default">
                                                            help@example.com
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>								<div className="jnj-iconbox-item-2">
                                            <div className="jnj-iconbox-area d-flex">											<div className="jnj-iconbox-icon ">
                                                <img src="https://jandjteams.com/wordpress/hevin/wp-content/uploads/2022/11/footer-icon1.png" alt="image" />
                                            </div> 										<div className="jnj-iconbox-details">
                                                    <div className="jnj-iconbox-content color-default">
                                                        LOCATION											</div>
                                                    <div className="jnj-iconbox-heading">
                                                        <h3 className="jnj-iconbox-title color-default">
                                                            Hevin 101, California, USA												</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 							    <ul className="jnj-social-icon"> 											<li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li> 											<li>
                                                <a href="https://www.twitter.com/" target="_blank">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li> 											<li>
                                                <a href="https://www.linkedin.com/" target="_blank">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li> 								</ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="jnj-contact-form">
                                        <div className="wpcf7 js" id="wpcf7-f3025-o1" lang="en-US" dir="ltr">
                                            <div className="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true" /> <ul /></div>
                                            <form action="/wordpress/hevin/services/digital-design/#wpcf7-f3025-o1" method="post" className="wpcf7-form init" aria-label="Contact form" data-status="init">
                                                <div style={{ display: 'none' }}>
                                                    <input type="hidden" name="_wpcf7" defaultValue={3025} />
                                                    <input type="hidden" name="_wpcf7_version" defaultValue="5.8.2" />
                                                    <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
                                                    <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f3025-o1" />
                                                    <input type="hidden" name="_wpcf7_container_post" defaultValue={0} />
                                                    <input type="hidden" name="_wpcf7_posted_data_hash" />
                                                </div>
                                                <h4 className="jnj-heading-title text-center">Fill The Form
                                                </h4>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <p><span className="wpcf7-form-control-wrap" data-name="your-name"><input size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your Full Name" type="text" name="your-name" /></span>
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <p><span className="wpcf7-form-control-wrap" data-name="your-email"><input size={40} className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email Address" type="email" name="your-email" /></span>
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <p><span className="wpcf7-form-control-wrap" data-name="your-message"><textarea cols={40} rows={10} className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Your Message" name="your-message" defaultValue={""} /></span>
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-12 col-md-4 col-sm-12">
                                                        <div className="jnj-button-text">
                                                            <p><input type="submit" defaultValue="Send Message" className="wpcf7-form-control has-spinner wpcf7-submit" /><span className="wpcf7-spinner" />
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div><div className="wpcf7-response-output" aria-hidden="true" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="jnj-footer-bottom">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="copyright-text">
                                            <div className="jnj-marquee-text">
                                                <div className="jnj-marquee-item">
                                                    © 2023 <a href="https://jandjteams.com/wordpress/hevin/">Hevin.</a> All Rights Reserved										<span className="jnj-marquee-seperator">*</span>
                                                    © 2023 <a href="https://jandjteams.com/wordpress/hevin/">Hevin.</a> All Rights Reserved										<span className="jnj-marquee-seperator">*</span>
                                                    © 2023 <a href="https://jandjteams.com/wordpress/hevin/">Hevin.</a> All Rights Reserved										<span className="jnj-marquee-seperator">*</span>
                                                    © 2023 <a href="https://jandjteams.com/wordpress/hevin/">Hevin.</a> All Rights Reserved										<span className="jnj-marquee-seperator">*</span>
                                                    © 2023 <a href="https://jandjteams.com/wordpress/hevin/">Hevin.</a> All Rights Reserved										<span className="jnj-marquee-seperator">*</span>
                                                    © 2023 <a href="https://jandjteams.com/wordpress/hevin/">Hevin.</a> All Rights Reserved										<span className="jnj-marquee-seperator">*</span>
                                                    © 2023 <a href="https://jandjteams.com/wordpress/hevin/">Hevin.</a> All Rights Reserved										<span className="jnj-marquee-seperator">*</span>
                                                    © 2023 <a href="https://jandjteams.com/wordpress/hevin/">Hevin.</a> All Rights Reserved										<span className="jnj-marquee-seperator">*</span>
                                                    © 2023 <a href="https://jandjteams.com/wordpress/hevin/">Hevin.</a> All Rights Reserved										<span className="jnj-marquee-seperator">*</span>
                                                </div>
                                                <div className="jnj-marquee-item">
                                                    © 2023 <a href="https://jandjteams.com/wordpress/hevin/">Hevin.</a> All Rights Reserved											<span className="jnj-marquee-seperator">*</span>
                                                    © 2023 <a href="https://jandjteams.com/wordpress/hevin/">Hevin.</a> All Rights Reserved											<span className="jnj-marquee-seperator">*</span>
                                                    © 2023 <a href="https://jandjteams.com/wordpress/hevin/">Hevin.</a> All Rights Reserved											<span className="jnj-marquee-seperator">*</span>
                                                    © 2023 <a href="https://jandjteams.com/wordpress/hevin/">Hevin.</a> All Rights Reserved											<span className="jnj-marquee-seperator">*</span>
                                                    © 2023 <a href="https://jandjteams.com/wordpress/hevin/">Hevin.</a> All Rights Reserved											<span className="jnj-marquee-seperator">*</span>
                                                    © 2023 <a href="https://jandjteams.com/wordpress/hevin/">Hevin.</a> All Rights Reserved											<span className="jnj-marquee-seperator">*</span>
                                                    © 2023 <a href="https://jandjteams.com/wordpress/hevin/">Hevin.</a> All Rights Reserved											<span className="jnj-marquee-seperator">*</span>
                                                    © 2023 <a href="https://jandjteams.com/wordpress/hevin/">Hevin.</a> All Rights Reserved											<span className="jnj-marquee-seperator">*</span>
                                                    © 2023 <a href="https://jandjteams.com/wordpress/hevin/">Hevin.</a> All Rights Reserved											<span className="jnj-marquee-seperator">*</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* .wrap */}
                    </footer>{/* #colophon */}
                </div>{/* .site-content-contain */}
            </div>

        </div>
    )
}
