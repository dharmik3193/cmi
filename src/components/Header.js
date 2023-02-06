import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {

    

    return (
        <>
            {/* Main Header*/}
            <header className="main-header header-style-one">
                <div className="container">
                    {/* Main box */}
                    <div className="main-box">
                        <div className="row justify-content-between">
                            <div className="logo-box col-6">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src={require('../Assets/codesign.webp')} alt="Codesign Logo" title="Codesign" />
                                        {/* <img src="images/logo.png" alt="" title="" /> */}
                                    </a>
                                </div>
                            </div>
                            {/*Nav Box*/}
                            <div className="nav-outer col-6">
                                <nav className="nav main-menu">
                                    <ul className="navigation">
                                        <li className="current" onClick={()=>{window.location.reload(false)}}>
                                            <Link to='/'>Home</Link>
                                        </li>
                                        <li>
                                            <Link to='/courses'>Courses</Link>
                                        </li>
                                        <li>
                                            <Link to='/about'>About</Link>
                                        </li>
                                        <li>
                                            <Link to='/blog'>Blog</Link>
                                        </li>
                                        <li>
                                            <Link to='/contact'>Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                                {/* Main Menu End*/}
                                <div className="outer-box">
                                    {/* <a href="tel:+92(8800)9806" className="info-btn">
                                            <i className="icon fa fa-phone" />
                                            <small>Call Anytime</small>
                                            <br /> +92 (8800) - 8960
                                        </a> */}
                                    {/* <div class="ui-btn-outer">
						<button class="ui-btn ui-btn search-btn">
							<span class="icon lnr lnr-icon-search"></span>
						</button>
						<a href="#" class="ui-btn"><i class="lnr-icon-shopping-cart"></i></a>
					</div> */}
                                    {/* <a href="#" className="theme-btn btn-style-one">
                                            <span className="btn-title">Have Any Questions ?</span>
                                        </a> */}
                                    {/* Mobile Nav toggler */}
                                    <div className="mobile-nav-toggler">
                                        <span className="icon lnr-icon-bars" />
                                    </div>
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
                                        {/* <img src="images/logo-2.png" alt="" title="" /> */}
                                        <img src={require('../Assets/codesign.webp')} alt="Codesign Logo" title="Codesign" />
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
                                        <a href="tel:+918160254080">+91 81602 54080</a>
                                    </div>
                                </li>
                                <li>
                                    {/* Contact Info Box */}
                                    <div className="contact-info-box">
                                        <span className="icon lnr-icon-envelope1" />
                                        <span className="title">Send Email</span>
                                        <a href="mailto:info@codesignmultimedia.com">info@codesignmultimedia.com</a>
                                    </div>
                                </li>
                                <li>
                                    {/* Contact Info Box */}
                                    <div className="contact-info-box">
                                        <span className="icon lnr-icon-clock" />
                                        <span className="title">Open Hours</span>
                                        Mon - Sat 8:00 - 8:00, Sunday - 10:00 to 1:00
                                    </div>
                                </li>
                            </ul>
                            <ul className="social-links">
                                <li>
                                    <a href="https://twitter.com/Codesign402" target="_blank">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/90445650/" target="_blank">
                                        <i className="fab fa-linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/codesign_multimedia_institute/" target="_blank">
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
                                        {/* <img src="images/logo.png" alt="" title="" /> */}
                                        <img src={require('../Assets/codesign.webp')} alt="Codesign Logo" title="Codesign" />
                                    </a>
                                </div>
                                {/*Right Col*/}
                                <div className="nav-outer">
                                    {/* Main Menu */}
                                    <nav className="main-menu">
                                        <div className="navbar-collapse show collapse clearfix">
                                            <ul className="navigation clearfix">
                                                {/*Keep This Empty / Menu will come through Javascript*/}
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
                </div>
            </header>
            {/*End Main Header */}
        </>

    )
}

export default Header;