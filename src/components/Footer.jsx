const Footer = () => {
    return (
        <>
            {/* Main Footer */}
            <footer className="main-footer">
                <div
                    className="bg-image zoom-two"
                    style={{ backgroundImage: "url(./images/background/4.jpg)" }}
                />
                {/*Widgets Section*/}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src="images/logo-2.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="text">
                                        Get 26,000+ best online courses from us
                                    </div>
                                    <ul className="social-icon-two">
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-2 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h4 className="widget-title">Explore</h4>
                                    <ul className="user-links">
                                        <li>
                                            <a href="#">Gallery</a>
                                        </li>
                                        <li>
                                            <a href="#">News &amp; Articles</a>
                                        </li>
                                        <li>
                                            <a href="#">FAQ's</a>
                                        </li>
                                        <li>
                                            <a href="#">Sign In/Registration</a>
                                        </li>
                                        <li>
                                            <a href="#">Coming Soon</a>
                                        </li>
                                        <li>
                                            <a href="#">Contacts</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-2 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h4 className="widget-title">Links</h4>
                                    <ul className="user-links">
                                        <li>
                                            <a href="#">About</a>
                                        </li>
                                        <li>
                                            <a href="#">Courses</a>
                                        </li>
                                        <li>
                                            <a href="#">Instructor</a>
                                        </li>
                                        <li>
                                            <a href="#">Events</a>
                                        </li>
                                        <li>
                                            <a href="#">Instructor Profile</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget contact-widget">
                                    <h4 className="widget-title">Contact</h4>
                                    <div className="widget-content">
                                        <ul className="contact-info">
                                            <li>
                                                <i className="fa fa-phone-square" />{" "}
                                                <a href="tel:+926668880000">+92 (0088) 6823</a>
                                            </li>
                                            <li>
                                                <i className="fa fa-envelope" />{" "}
                                                <a href="mailto:needhelp@potisen.com">
                                                    needhelp@company.com
                                                </a>
                                            </li>
                                            <li>
                                                <i className="fa fa-map-marker-alt" /> 80 Broklyn Golden
                                                Street. New York. USA
                                            </li>
                                        </ul>
                                        <div className="subscribe-form">
                                            <form method="post" action="#">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="email"
                                                        defaultValue=""
                                                        placeholder="Email Address"
                                                        required=""
                                                    />
                                                    <button type="button" className="theme-btn btn-style-one">
                                                        <i className="fa fa-long-arrow-alt-right" />
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
                {/*Footer Bottom*/}
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">
                                © Copyright 2022 by <a href="index.html">Company.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*End Main Footer */}
        </>

    )
}

export default Footer