import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import axios from 'axios';
import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('')
    const subscribe = (e) => {
        e.preventDefault()
        axios.post('https://cmiapi1.onrender.com/add_newsletter', {
            email:email
          })
          .then(function (res) {
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
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
                            <div className="footer-column col-xl-4 col-lg-12 col-md-6 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="logo">
                                        <Link to='/'>
                                            {/* <img src="images/logo-2.png" alt="" /> */}
                                            <div className='footer_logo_bg' >
                                                <img src={require('../Assets/codesign.png')} alt="Codesign Logo" title="Codesign" className='footer_logo' />
                                            </div>
                                        </Link>
                                    </div>
                                    {/* <div className="text">
                                        Get 26,000+ best online courses from us
                                    </div> */}
                                    <p>
                                    Codesign Multimedia Institute is leading computer training institute in surat. We offers various type of computer training courses in Surat.
                                    </p>
                                    <ul className="social-icon-two">
                                        <li>
                                            <a href="https://twitter.com/Codesign402" target="_blank">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/codesign-multimedia-institute/" target="_blank">
                                            <FaLinkedin/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/codesign_multimedia_institute/" target="_blank">
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            {/* <div className="footer-column col-xl-2 col-lg-4 col-md-6 col-sm-12">
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
                            </div> */}
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h4 className="widget-title">Links</h4>
                                    <ul className="user-links">
                                        <li>
                                            <Link to='/about'>About</Link>
                                        </li>
                                        <li>
                                            <Link to='/courses'>Courses</Link>
                                        </li>
                                        <li>
                                            <Link to='/blog'>Blog</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Events</Link>
                                        </li>
                                        <li>
                                        <Link to='/'>Gallery</Link>
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
                                                <a href="tel:+918160254080">+91 81602 54080</a>
                                            </li>
                                            <li>
                                                <i className="fa fa-envelope" />{" "}
                                                <a href="mailto:info@codesignmultimedia.com">
                                                    info@codesignmultimedia.com
                                                </a>
                                            </li>
                                            <li>
                                                <i className="fa fa-map-marker-alt" /> 402, Middle point , Near dhara arcade , Mahadev chowk , Mota Varachha , Surat.
                                            </li>
                                        </ul>
                                        <div className="subscribe-form">
                                            <form>
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="email"
                                                        defaultValue=""
                                                        placeholder="Email Address"
                                                        required=""
                                                        onChange={(e)=>{setEmail(e.target.value)}}
                                                    />
                                                    <button type="button" className="theme-btn btn-style-one" onClick={subscribe}>
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
                                © Copyright 2023 by <a href="index.html">Codesign Multimedia Institute</a>
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