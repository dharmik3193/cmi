import { useEffect } from "react";
import { useState } from "react";
import Abouthome from "../components/Abouthome"
import Coursehome from "../components/Coursehome"
import Footer from "../components/Footer";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import $ from 'jquery';


const About = () => {
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {

        setInterval(() => {
            setisLoading(false)
        }, 1000);


        // Update Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.header-style-one');
                var scrollLink = $('.scroll-to-top');
                var sticky_header = $('.main-header .sticky-header');

                if (windowpos > 100) {
                    sticky_header.addClass("fixed-header animated slideInDown");
                    scrollLink.fadeIn(300);
                } else {
                    sticky_header.removeClass("fixed-header animated slideInDown");
                    scrollLink.fadeOut(300);
                    mobilenav()

                }
                if (windowpos > 1) {
                    siteHeader.addClass("fixed-header");
                } else {
                    siteHeader.removeClass("fixed-header");
                }
            }
        }
        headerStyle();

        //Mobile Nav Hide Show
        function mobilenav() {
            if ($('.mobile-menu').length) {

                var mobileMenuContent = $('.main-header .main-menu .navigation').html();

                $('.mobile-menu .navigation').append(mobileMenuContent);
                $('.sticky-header .navigation').append(mobileMenuContent);
                $('.mobile-menu .close-btn').on('click', function () {
                    $('body').removeClass('mobile-menu-visible');
                });

                //Dropdown Button
                $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
                    $(this).prev('ul').slideToggle(500);
                    $(this).toggleClass('active');
                });

                //Menu Toggle Btn
                $('.mobile-nav-toggler').on('click', function () {
                    $('body').addClass('mobile-menu-visible');
                });

                //Menu Toggle Btn
                $('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function () {
                    $('body').removeClass('mobile-menu-visible');
                });

            }
        }
        mobilenav();


        /* ==========================================================================
     When document is Scrollig, do
     ========================================================================== */

        $(window).on('scroll', function () {
            headerStyle();
        });

    }, [])
    if (!isLoading) {
        return (
            <>
                <>
                    <Header id="3" />
                    {/* Start main-content */}
                    <section
                        className="page-title"
                        style={{ backgroundImage: "url(images/background/page-title.jpg)" }}
                    >
                        <div className="auto-container">
                            <div className="title-outer">
                                <h1 className="title">About Us</h1>
                                <ul className="page-breadcrumb">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">Pages</a>
                                    </li>
                                    <li>About</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    {/* end main-content */}
                </>

                <Abouthome />
                <Coursehome />
                <Footer />
            </>
        )
    } else {
        return (
            <><Preloader /></>
        )
    }
}

export default About;