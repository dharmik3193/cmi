import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import $ from 'jquery';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('');

    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        var mobileMenuContent = $('.main-header .main-menu .navigation').html();
        $('.sticky-header .navigation').append(mobileMenuContent);
        $( ".clearfix li:nth-child(5)" ).addClass('current');

        setInterval(() => {
            setisLoading(false)
        }, 1000);

    })

    const add_inquiry = (e) => {
        e.preventDefault()
        axios.post('https://cmiapi-kt1r.onrender.com/contact', {
            name: name,
            email: email,
            subject: subject,
            phone: mobile,
            message: message

        })
            .then(function (res) {
                console.log(res);
                setName('')
                setEmail('')
                setSubject('');
                setMobile('');
                setMessage('');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const reset = () => {
        setName('')
        setEmail('')
        setSubject('');
        setMobile('');
        setMessage('');
    }

    if (!isLoading) {
        return (
            <>
                <Header id="5" />
                <section
                    className="page-title"
                    style={{ backgroundImage: "url(images/background/page-title.jpg)" }}
                >
                    <div className="auto-container">
                        <div className="title-outer">
                            <h1 className="title">Contact Us</h1>
                            <ul className="page-breadcrumb">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* end main-content */}
                {/*Contact Details Start*/}
                <section className="contact-details">
                    <div className="container ">
                        <div className="row">
                            <div className="col-xl-7 col-lg-6">
                                <div className="sec-title">
                                    <span className="sub-title">Send us email</span>
                                    <h2>Feel free to write</h2>
                                </div>
                                {/* Contact Form */}
                                <form
                                    id="contact_form"
                                    name="contact_form"
                                    className=""
                                    action="includes/sendmail.php"
                                    method="post"
                                >
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="mb-3">
                                                <input
                                                    name="form_name"
                                                    className="form-control"
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) => { setName(e.target.value) }}
                                                    placeholder="Enter Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="mb-3">
                                                <input
                                                    name="form_email"
                                                    className="form-control required email"
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => { setEmail(e.target.value) }}
                                                    placeholder="Enter Email"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="mb-3">
                                                <input
                                                    name="form_subject"
                                                    className="form-control required"
                                                    type="text"
                                                    value={subject}
                                                    onChange={(e) => { setSubject(e.target.value) }}
                                                    placeholder="Enter Subject"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="mb-3">
                                                <input
                                                    name="form_phone"
                                                    className="form-control"
                                                    type="text"
                                                    value={mobile}
                                                    onChange={(e) => { setMobile(e.target.value) }}
                                                    placeholder="Enter Phone"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            name="form_message"
                                            className="form-control required"
                                            rows={7}
                                            value={message}
                                            onChange={(e) => { setMessage(e.target.value) }}
                                            placeholder="Enter Message"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            name="form_botcheck"
                                            className="form-control"
                                            type="hidden"
                                            defaultValue=""
                                        />
                                        <button
                                            type="button"
                                            className="theme-btn btn-style-one"
                                            data-loading-text="Please wait..."
                                            onClick={add_inquiry}
                                        >
                                            <span className="btn-title">Send message</span>
                                        </button>
                                        <button
                                            type="reset"
                                            className="theme-btn btn-style-one bg-theme-color5 button-contact"
                                        >
                                            <span className="btn-title" onClick={reset}>Reset</span>
                                        </button>
                                    </div>
                                </form>
                                {/* Contact Form Validation*/}
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="contact-details__right">
                                    <div className="sec-title">
                                        <span className="sub-title">Need any help?</span>
                                        <h2>Get in touch with us</h2>
                                        <div className="text">
                                            We’re here to help and answer any question you might have. We look forward to hearing from you 🙂
                                        </div>
                                    </div>
                                    <ul className="list-unstyled contact-details__info">
                                        <li>
                                            <div className="icon bg-theme-color2">
                                                <span className="lnr-icon-phone-plus" />
                                            </div>
                                            <div className="text">
                                                <h6>Have any question?</h6>
                                                <a href="tel:8160254080">
                                                    <span>Free</span> +91 81602 54080
                                                </a>
                                            </div>
                                        </li>
                                        <li className="row">
                                            <div className="icon col-6">
                                                <span className="lnr-icon-envelope1" />
                                            </div>
                                            <div className="text col-6">
                                                <h6>Write email</h6>
                                                <a href="mailto:info@codesignmultimedia.com">info@codesignmultimedia.com</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="lnr-icon-location" />
                                            </div>
                                            <div className="text text-details">
                                                <h6>Visit anytime</h6>
                                                <span>402, Middle point, Near dhara arcade,<br></br> Mahadev chowk, Mota Varachha, Surat.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Contact Details End*/}
                {/* Divider: Google Map */}
                <section>
                    <div className="container-fluid p-0">
                        <div className="row">
                            {/* Google Map HTML Codes */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8742442045004!2d72.88234441533888!3d21.236834786017166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fb6166e6473%3A0x654e32ec4b18c578!2sCodesign%20Multimedia%20Institute!5e0!3m2!1sen!2sin!4v1674996979919!5m2!1sen!2sin"
                                data-tm-width="100%"
                                height={500}
                                frameBorder={0}
                                allowFullScreen=""
                            />
                        </div>
                    </div>
                </section>
                <Footer />
            </>

        )
    } else {
        return (
            <><Preloader /></>
        )
    }
}

export default Contact;