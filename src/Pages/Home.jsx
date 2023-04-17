import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Abouthome from "../components/Abouthome";
import Abouthome2 from "../components/Abouthome2";
import C2a from "../components/C2a";
import Catagories from "../components/Catagories";
import Coursehome from "../components/Coursehome";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import News from "../components/News";
import Signup from "../components/Signup";
import Slider from "../components/Slider";
import Testimonial from "../components/Testimonial";
import $ from 'jquery';

const Home = () => {

    const [data, setData] = useState(1)
    useEffect(() => {
        $(".clearfix li:nth-child(1)").addClass('current');
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
                {/* <!--Revolution Slider--> */}
                <script src="/plugins/revolution/js/jquery.themepunch.revolution.min.js"></script>
                <script src="/plugins/revolution/js/jquery.themepunch.tools.min.js"></script>
                <script src="/plugins/revolution/js/extensions/revolution.extension.actions.min.js"></script>
                <script src="/plugins/revolution/js/extensions/revolution.extension.carousel.min.js"></script>
                <script src="/plugins/revolution/js/extensions/revolution.extension.kenburn.min.js"></script>
                <script src="/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
                <script src="/plugins/revolution/js/extensions/revolution.extension.migration.min.js"></script>
                <script src="/plugins/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
                <script src="/plugins/revolution/js/extensions/revolution.extension.parallax.min.js"></script>
                <script src="/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
                <script src="/plugins/revolution/js/extensions/revolution.extension.video.min.js"></script>
                <script src="/js/main-slider-script.js"></script>
                {/* <!--Revolution Slider--> */}
                <script src="/js/jquery.fancybox.js"></script>
                <script src="/js/jquery-ui.js"></script>
                <script src="/js/appear.js"></script>
                <script src="/js/jquery.countdown.js"></script>
                <script src="/js/select2.min.js"></script>
                <script src="/js/owl.js"></script>
                <script src="/js/script.js" async></script>
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