
const Header = () => {


    return (
        <>
            {/* Main Header*/}
            <header className="main-header header-style-one">
                {/* Main box */}
                <div className="main-box">
                    <div className="logo-box">
                        <div className="logo">
                            <a href="index.html">
                                <img src="images/logo.png" alt="" title="Tronis" />
                            </a>
                        </div>
                    </div>
                    {/*Nav Box*/}
                    <div className="nav-outer">
                        <nav className="nav main-menu">
                            <ul className="navigation">
                                <li className="current dropdown">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Pages</a>
                                    <ul>
                                        <li>
                                            <a href="page-about.html">About</a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#">Team</a>
                                            <ul>
                                                <li>
                                                    <a href="page-team.html">Team List</a>
                                                </li>
                                                <li>
                                                    <a href="page-team-details.html">Team Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="page-testimonial.html">Testimonial</a>
                                        </li>
                                        <li>
                                            <a href="page-pricing.html">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="page-faq.html">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="page-404.html">Page 404</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Courses</a>
                                    <ul>
                                        <li>
                                            <a href="page-courses.html">Courses List</a>
                                        </li>
                                        <li>
                                            <a href="page-course-details.html">Course Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#">News</a>
                                    <ul>
                                        <li>
                                            <a href="news-grid.html">News Grid</a>
                                        </li>
                                        <li>
                                            <a href="news-details.html">News Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="page-contact.html">Contact</a>
                                </li>
                            </ul>
                        </nav>
                        {/* Main Menu End*/}
                        <div className="outer-box">
                            <a href="tel:+92(8800)9806" className="info-btn">
                                <i className="icon fa fa-phone" />
                                <small>Call Anytime</small>
                                <br /> +92 (8800) - 8960
                            </a>
                            {/* <div class="ui-btn-outer">
						<button class="ui-btn ui-btn search-btn">
							<span class="icon lnr lnr-icon-search"></span>
						</button>
						<a href="#" class="ui-btn"><i class="lnr-icon-shopping-cart"></i></a>
					</div> */}
                            <a href="#" className="theme-btn btn-style-one">
                                <span className="btn-title">Have Any Questions ?</span>
                            </a>
                            {/* Mobile Nav toggler */}
                            <div className="mobile-nav-toggler">
                                <span className="icon lnr-icon-bars" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Main Box */}
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" />
                    {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo">
                                <a href="index.html">
                                    <img src="images/logo-2.png" alt="" title="" />
                                </a>
                            </div>
                            <div className="close-btn">
                                <i className="icon fa fa-times" />
                            </div>
                        </div>
                        <ul className="navigation clearfix">
                            {/*Keep This Empty / Menu will come through Javascript*/}
                        </ul>
                        <ul className="contact-list-one">
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <a href="tel:+92880098670">+92 (8800) - 98670</a>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Send Email</span>
                                    <a href="mailto:help@company.com">help@company.com</a>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock" />
                                    <span className="title">Send Email</span>
                                    Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                </div>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li>
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-facebook-f" />
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
                    </nav>
                </div>
                {/* End Mobile Menu */}
                {/* Header Search */}
                <div className="search-popup">
                    <span className="search-back-drop" />
                    <button className="close-search">
                        <span className="fa fa-times" />
                    </button>
                    <div className="search-inner">
                        <form method="post" action="index.html">
                            <div className="form-group">
                                <input
                                    type="search"
                                    name="search-field"
                                    defaultValue=""
                                    placeholder="Search..."
                                    required=""
                                />
                                <button type="submit">
                                    <i className="fa fa-search" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* End Header Search */}
                {/* Sticky Header  */}
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="inner-container">
                            {/*Logo*/}
                            <div className="logo">
                                <a href="index.html" title="">
                                    <img src="images/logo.png" alt="" title="" />
                                </a>
                            </div>
                            {/*Right Col*/}
                            <div className="nav-outer">
                                {/* Main Menu */}
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <ul className="navigation clearfix">
                                            {/*Keep This Empty / Menu will come through Javascript*/}
                                            <li>Home</li>
                                        </ul>
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler">
                                    <span className="icon lnr-icon-bars" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Sticky Menu */}
            </header>
            {/*End Main Header */}
        </>

    )
}

export default Header;