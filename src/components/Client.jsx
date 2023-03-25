import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';

const Client = () => {

    const [screen,setscreen] = useState((window.innerWidth <= 1024 && window.innerWidth >768)?4:(window.innerWidth<=768 && window.innerWidth >425)?2:(window.innerWidth<=425 && window.innerWidth>0)?1:5);
    // var screen;
    const handleResize = () => {
      if (window.innerWidth <= 1024 && window.innerWidth >768) {
        setscreen(4)
        // screen=3;
      } else if(window.innerWidth<=768 && window.innerWidth >579){
        setscreen(2)
        // screen=2
      } else if(window.innerWidth<=579 && window.innerWidth>0)
      {
        setscreen(1)
        // screen=1
      }else{
        setscreen(5)
        // screen=4
      }
    }
  
    useEffect(() => {
      window.addEventListener("resize", handleResize)
    })

    return (
        <>
            {/* Clients Section   */}
            <section className="clients-section">
                <div className="container">
                    {/* Sponsors Outer */}
                    <div className="sponsors-outer">
                        <OwlCarousel items={screen}
                            className="owl-theme clients-carousel"
                            loop
                            nav={false}
                            dots={false}
                            margin={8}
                            >
                            <div className='slide-item'><img src={require('../Assets/partner1.png')} alt="" /></div>
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