import axios from "axios";
import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";

const Testimonial = () => {
    const [screen, setscreen] = useState((window.innerWidth < 768) ? 1 : 2)
    const [review, setreview] = useState([]);

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setscreen(1)
        } else {
            setscreen(2)
        }
    }

    useEffect(() => {

        axios.get(`https://attractive-gold-wetsuit.cyclic.app/get_review`)
            .then(function (res) {
                console.log(res.data.data);
                setreview(res.data.data.reverse())
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <>
            {/* Testimonial Section Three */}
            <section className="testimonial-section">
                <div className="anim-icons">
                    <span className="icon icon-dotted-map-2" />
                </div>
                <div className="container">
                    <div className="row">
                        {/* Title Column */}
                        <div className="title-column col-xl-4 col-lg-5 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Our testimonials</span>
                                    <h2>
                                        What they’re <br />
                                        saying about our <br />
                                        courses
                                    </h2>
                                    <div className="text">
                                        Codesign Multimedia Institute(CMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Web Development & All types of IT with full-fledged, result-oriented training experience.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial Column */}
                        <div className="testimonial-column col-xl-8 col-lg-7 col-md-12">
                            <div className="carousel-outer">
                                <OwlCarousel items={screen}
                                    className="owl-theme carousel-outer testimonial-carousel"
                                    loop
                                    nav={false}
                                    dots={false}
                                >

                                    {
                                        review.map((item,index) => {
                                            return (
                                                <div className="testimonial-block">
                                                    <div className="inner-box">
                                                        <div className="content-box">
                                                            <figure className="thumb">
                                                                <img src={item.image} alt="" />
                                                            </figure>
                                                            <div className="rating d-flex">
                                                                <div>
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                </div>
                                                                <div>
                                                                    ({item.rating})
                                                                </div>
                                                            </div>
                                                            <div className="text">
                                                                {item.subject}
                                                            </div>
                                                            <div className="info-box">
                                                                <span className="icon-quote" />
                                                                <h4 className="name">{item.name}</h4>
                                                                <span className="designation d-flex">
                                                                    <div className="m-1">Posted on</div>
                                                                    <div className="google_logo mx-2">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 85 36"
                                                                            className="injected-svg"
                                                                            data-src="https://static.elfsight.com/icons/google-logo-multicolor.svg"
                                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                        >
                                                                            <g fill="none">
                                                                                <path
                                                                                    fill="#4285F4"
                                                                                    d="M20.82 13.829h-9.86v2.926h6.994c-.346 4.104-3.76 5.854-6.983 5.854-4.123 0-7.72-3.244-7.72-7.791 0-4.43 3.43-7.841 7.73-7.841 3.317 0 5.272 2.115 5.272 2.115l2.05-2.122s-2.63-2.928-7.427-2.928C4.767 4.042.042 9.197.042 14.765c0 5.457 4.445 10.777 10.989 10.777 5.755 0 9.968-3.943 9.968-9.773 0-1.23-.178-1.94-.178-1.94Z"
                                                                                />
                                                                                <path
                                                                                    fill="#EA4335"
                                                                                    d="M28.9 11.71c-4.047 0-6.947 3.163-6.947 6.853 0 3.744 2.812 6.966 6.994 6.966 3.785 0 6.886-2.893 6.886-6.886 0-4.576-3.607-6.934-6.934-6.934Zm.04 2.714c1.99 0 3.875 1.609 3.875 4.2 0 2.538-1.878 4.193-3.885 4.193-2.205 0-3.945-1.766-3.945-4.212 0-2.394 1.718-4.181 3.954-4.181Z"
                                                                                />
                                                                                <path
                                                                                    fill="#FBBC05"
                                                                                    d="M44.008 11.71c-4.047 0-6.947 3.163-6.947 6.853 0 3.744 2.813 6.966 6.994 6.966 3.785 0 6.886-2.893 6.886-6.886 0-4.576-3.607-6.934-6.933-6.934Zm.04 2.714c1.99 0 3.876 1.609 3.876 4.2 0 2.538-1.878 4.193-3.885 4.193-2.206 0-3.945-1.766-3.945-4.212 0-2.394 1.718-4.181 3.954-4.181Z"
                                                                                />
                                                                                <path
                                                                                    fill="#4285F4"
                                                                                    d="M58.825 11.717c-3.714 0-6.633 3.253-6.633 6.904 0 4.16 3.384 6.918 6.57 6.918 1.969 0 3.016-.782 3.79-1.68v1.363c0 2.384-1.448 3.812-3.633 3.812-2.111 0-3.17-1.57-3.538-2.46l-2.655 1.11c.942 1.992 2.838 4.07 6.215 4.07 3.693 0 6.507-2.327 6.507-7.205V12.132h-2.897v1.17c-.89-.96-2.108-1.585-3.726-1.585Zm.27 2.709c1.82 0 3.69 1.554 3.69 4.21 0 2.699-1.866 4.187-3.731 4.187-1.98 0-3.823-1.608-3.823-4.161 0-2.653 1.914-4.236 3.863-4.236Z"
                                                                                />
                                                                                <path
                                                                                    fill="#EA4335"
                                                                                    d="M78.33 11.7c-3.504 0-6.445 2.788-6.445 6.901 0 4.353 3.279 6.934 6.781 6.934 2.924 0 4.718-1.6 5.79-3.033l-2.39-1.589c-.62.962-1.656 1.902-3.385 1.902-1.942 0-2.836-1.064-3.389-2.094l9.266-3.845-.481-1.126c-.896-2.207-2.984-4.05-5.747-4.05Zm.12 2.658c1.263 0 2.172.671 2.558 1.476L74.82 18.42c-.267-2.002 1.63-4.062 3.63-4.062Z"
                                                                                />
                                                                                <path fill="#34A853" d="M67.467 25.124h3.044V4.757h-3.044z" />
                                                                            </g>
                                                                        </svg></div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Testimonial Section Three */}
        </>

    )
}

export default Testimonial;