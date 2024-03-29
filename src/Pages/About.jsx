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
        var mobileMenuContent = $('.main-header .main-menu .navigation').html();
        $('.sticky-header .navigation').append(mobileMenuContent);
        setInterval(() => {
            setisLoading(false)
        }, 1000);
        $( ".clearfix li:nth-child(3)" ).addClass('current');

    })
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
                        <div className="container">
                            <div className="title-outer">
                                <h1 className="title">About Us</h1>
                                <ul className="page-breadcrumb">
                                    <li>
                                        <a href="/">Home</a>
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