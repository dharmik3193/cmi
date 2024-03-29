import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const handleClick = (id) => {
        setIsActive1(true)
        if (id === 1) {
            setIsActive1(true); setIsActive2(!true); setIsActive3(!true); setIsActive4(!true); setIsActive5(!true)
        } else if (id == 2) {
            setIsActive1(!true); setIsActive2(true); setIsActive3(!true); setIsActive4(!true); setIsActive5(!true)
        } else if (id == 3) {
            setIsActive1(!true); setIsActive2(!true); setIsActive3(true); setIsActive4(!true); setIsActive5(!true)
        } else if (id == 4) {
            setIsActive1(!true); setIsActive2(!true); setIsActive3(!true); setIsActive4(true); setIsActive5(!true)
        } else if (id == 5) {
            setIsActive1(!true); setIsActive2(!true); setIsActive3(!true); setIsActive4(!true); setIsActive5(true)
        }
        return false;
    };
    useEffect(() => {
        handleClick(props.id)
    }, [])



    return (
        <>
            {/* Main Header*/}
            <header className="main-header header-style-one">
                <div className="container">
                    {/* Main box */}
                    <div>
                        <div className="row align-items-center justify-content-between">
                            <div className="logo-box col-xl-7 col-lg-6 col-10">
                                <div className="logo">
                                    <Link to={'/'} onClick={() => { window.location.reload(false) }}>
                                        <img src={require('../Assets/codesign.webp')} alt="Codesign Logo" title="Codesign" />
                                    </Link>
                                </div>
                            </div>
                            {/*Nav Box*/}
                            <div className="nav-outer col-xl-5 col-lg-6 col-2">
                                <nav className="nav main-menu">
                                    <ul className="navigation">
                                        <li className={isActive1 ? "current" : ""}>
                                            <Link to='/'>Home</Link>
                                        </li>
                                        <li className={isActive2 ? "current" : ""}>
                                            <Link to='/courses'>Courses</Link>
                                        </li>
                                        <li className={isActive3 ? "current" : ""}>
                                            <Link to='/about'>About</Link>
                                        </li>
                                        <li className={isActive4 ? "current" : ""}>
                                            <Link to='/blog'>Blog</Link>
                                        </li>
                                        <li className={isActive5 ? "current" : ""}>
                                            <Link to='/contact'>Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                                {/* Main Menu End*/}
                                <div className="outer-box">
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
                        <nav className="menu-box">
                            <div className="upper-box">
                                <div className="nav-logo">
                                    <a href="index.html">
                                        <img src={require('../Assets/codesign.webp')} alt="Codesign Logo" title="Codesign" />
                                    </a>
                                </div>
                                <div className="close-btn">
                                    <i className="icon fa fa-times" />
                                </div>
                            </div>
                            <ul className="navigation clearfix">
                                {/*JS Menu*/}
                                {/* <li className={isActive1 ? "current" : ""} onClick={() => { window.location.reload(false) }}>
                                            <Link to='/'>Home</Link>
                                        </li>
                                        <li className={isActive2 ? "current" : ""}>
                                            <Link to='/courses'>Courses</Link>
                                        </li>
                                        <li className={isActive3 ? "current" : ""}>
                                            <Link to='/about'>About</Link>
                                        </li>
                                        <li className={isActive4 ? "current" : ""}>
                                            <Link to='/blog'>Blog</Link>
                                        </li>
                                        <li className={isActive5 ? "current" : ""}>
                                            <Link to='/contact'>Contact</Link>
                                        </li> */}
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
                        <div className="container">
                            <div className="inner-container">
                                {/*Logo*/}
                                <div className="logo">
                                    <a href="index.html" title="">
                                        <img src={require('../Assets/codesign.webp')} alt="Codesign Logo" title="Codesign" />
                                    </a>
                                </div>
                                {/*Right Col*/}
                                <div className="nav-outer">
                                    {/* Main Menu */}
                                    <nav className="main-menu">
                                        <div className="navbar-collapse show collapse clearfix">
                                            <ul className="navigation clearfix">
                                                {/*JS Menu*/}
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