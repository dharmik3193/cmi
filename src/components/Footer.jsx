import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('')
    const subscribe = (e) => {
        e.preventDefault()
        axios.post('https://attractive-gold-wetsuit.cyclic.app/add_newsletter', {
            email: email
        })
            .then(function (res) {
                console.log(res);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const [courses, setCourses] = useState([]);
    const [isalldata, setIsalldata] = useState(false);

    useEffect(() => {

        axios.get(`https://attractive-gold-wetsuit.cyclic.app/getall_courses`)
            .then(function (res) {
                setCourses(res.data.data)
                setIsalldata(true)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    if (isalldata) {
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
                        <div className="container align-center">
                            <div className="row">
                                {/*Footer Column*/}
                                <div className="footer-column col-lg-3 col-md-6 col-12">
                                    <div className="footer-widget about-widget">
                                        <div className="logo text-md-left text-center">
                                            <Link to='/'>
                                                {/* <img src="images/logo-2.png" alt="" /> */}
                                                <div >
                                                    <img src={require('../Assets/cslight.png')} alt="Codesign Logo" title="Codesign" className='footer_logo' />
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <p className='text-justify'>
                                                Codesign Multimedia Institute is leading computer training institute in surat. We offers various type of computer training courses in Surat.
                                            </p>
                                            <h6 className='widget-title'>follow us on</h6>
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
                                                        <FaLinkedin />
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
                                </div>
                                {/* Footer Column*/}
                                <div className="footer-column col-lg-3 col-md-6 col-6 px-5">
                                    <div className="footer-widget">
                                        <h4 className="widget-title">Explore</h4>
                                        <ul className="user-links">
                                            {
                                                courses.map((item,index) => {
                                                    return (
                                                        <li key={index}>
                                                            <Link to={`/course/${item._id}`}>{item.title}</Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                {/*Footer Column */}
                                <div className="footer-column col-lg-2 col-md-6 col-6 px-2">
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
                                <div className="footer-column col-lg-4 col-md-6 col-12">
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
                                                            onChange={(e) => { setEmail(e.target.value) }}
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
                        <div className="container">
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
}

export default Footer