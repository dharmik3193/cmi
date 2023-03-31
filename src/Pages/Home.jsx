import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Abouthome from "../components/Abouthome";
import Abouthome2 from "../components/Abouthome2";
import C2a from "../components/C2a";
import Catagories from "../components/Catagories";
import Countdown from "../components/Countdown";
import Coursehome from "../components/Coursehome";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import News from "../components/News";
import Preloader from "../components/Preloader";
import Signup from "../components/Signup";
import Slider from "../components/Slider";
import Testimonial from "../components/Testimonial";
import $ from 'jquery';

const Home = () => {

    useEffect(() => {
        $( ".clearfix li:nth-child(1)" ).addClass('current');
    }, [])
    
    
    return (
        <>
            <Helmet>
                <meta name="title" content="React JS Course in Surat | React JS Training in Surat | React JS Jobs" />
                <meta property="og:title" content="React JS Course in Surat | React JS Training in Surat | React JS Jobs" />
                <meta property="og:description" content="Codesign Multimedia is the #No 1 IT Training institute in Surat. Provide 100% Job Placement Guarantee. Join now Computer course in Surat" />
                <meta name="twitter:title" content="React JS Course in Surat | React JS Training in Surat | React JS Jobs" />
                <meta name="twitter:description" content="Codesign Multimedia is the #No 1 IT Training institute in Surat. Provide 100% Job Placement Guarantee. Join now Computer course in Surat" />
                <title>React JS Course in Surat | React JS Training in Surat | React JS Jobs</title>
            </Helmet>
            <Header id="1" />
            <Slider />
            <Abouthome />
            <Coursehome />
            <Features />
            <Catagories />
            <Signup />
            <C2a />
            <Testimonial />
            <Abouthome2 />
            <News />
            <Footer />
        </>
    )

}

export default Home;