import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const Client = () => {
    return (
        <>
            {/* Clients Section   */}
            <section className="clients-section">
                <div className="auto-container">
                    {/* Sponsors Outer */}
                    <div className="sponsors-outer">
                        {/*clients carousel*/}
                        {/* <ul className="clients-carousel owl-theme">
                            <li className="slide-item">
                                {" "}
                                <a href="#">
                                    <img src="images/resource/client.png" alt="" />
                                </a>{" "}
                            </li>
                            <li className="slide-item">
                                {" "}
                                <a href="#">
                                    <img src="images/resource/client.png" alt="" />
                                </a>{" "}
                            </li>
                            <li className="slide-item">
                                {" "}
                                <a href="#">
                                    <img src="images/resource/client.png" alt="" />
                                </a>{" "}
                            </li>
                            <li className="slide-item">
                                {" "}
                                <a href="#">
                                    <img src="images/resource/client.png" alt="" />
                                </a>{" "}
                            </li>
                            <li className="slide-item">
                                {" "}
                                <a href="#">
                                    <img src="images/resource/client.png" alt="" />
                                </a>{" "}
                            </li>
                        </ul> */}
                        <OwlCarousel items={5}
                            className="owl-theme clients-carousel"
                            loop
                            nav={false}
                            dots={false}
                            margin={8}
                            >
                            <div className='slide-item'><img src="images/resource/client.png" alt="" /></div>
                            <div className='slide-item'><img src="images/resource/client.png" alt="" /></div>
                            <div className='slide-item'><img src="images/resource/client.png" alt="" /></div>
                            <div className='slide-item'><img src="images/resource/client.png" alt="" /></div>
                            <div className='slide-item'><img src="images/resource/client.png" alt="" /></div>
                            <div className='slide-item'><img src="images/resource/client.png" alt="" /></div>
                            <div className='slide-item'><img src="images/resource/client.png" alt="" /></div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
            {/*End Clients Section */}
        </>

    )
}

export default Client;