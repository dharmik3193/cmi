import Abouthome from "../components/Abouthome";
import Abouthome2 from "../components/Abouthome2";
import C2a from "../components/C2a";
import Catagories from "../components/Catagories";
import Client from "../components/Client";
import Countdown from "../components/Countdown";
import Coursehome from "../components/Coursehome";
import Features from "../components/Features";
import News from "../components/News";
import Signup from "../components/Signup";
import Slider from "../components/Slider";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";

const Home = () => {
    return (
        <>
            <Slider />
            <Abouthome />
            <Coursehome />
            <Features />
            <Catagories />
            <Signup />
            <Team />
            <C2a />
            <Testimonial />
            <Abouthome2 />
            <Countdown />
            <News />
            <Client />
        </>
    )
}

export default Home;