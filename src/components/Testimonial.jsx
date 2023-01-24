import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";

const Testimonial = () => {
  const [screen,setscreen] = useState((window.innerWidth<768)?1:2)

  const handleResize = () => {
    if (window.innerWidth <768) {
      setscreen(1)
    }else{
      setscreen(2)
      // screen=4
    }
  }

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
                <div className="auto-container">
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
                                        Quisque commodo, magna nec accu man euismod tellus mi ornare
                                        enim.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial Column */}
                        <div className="testimonial-column col-xl-8 col-lg-7 col-md-12">
                            <div className="carousel-outer">
                                {/* <div className="testimonial-carousel owl-carousel owl-theme"> */}
                                    <OwlCarousel items={screen}
                                        className="owl-theme carousel-outer testimonial-carousel"
                                        loop
                                        nav={false}
                                        dots={false}
                                        // margin={8}
                                    >
                                        {/* Testimonial Block */}
                                        <div className="testimonial-block">
                                            <div className="inner-box">
                                                <div className="content-box">
                                                    <figure className="thumb">
                                                        <img src="images/resource/testi-thumb-1.jpg" alt="" />
                                                    </figure>
                                                    <div className="rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                    <div className="text">
                                                        Lorem ipsum is simply free text dolor sit amet,
                                                        consectetur adipisicing elit, sed do incididunt ut labore
                                                        et dolore magna aliqua.
                                                    </div>
                                                    <div className="info-box">
                                                        <span className="icon-quote" />
                                                        <h4 className="name">Jame sickres</h4>
                                                        <span className="designation">Market Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Testimonial Block */}
                                        <div className="testimonial-block">
                                            <div className="inner-box">
                                                <div className="content-box">
                                                    <figure className="thumb">
                                                        <img src="images/resource/testi-thumb-2.jpg" alt="" />
                                                    </figure>
                                                    <div className="rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                    <div className="text">
                                                        Lorem ipsum is simply free text dolor sit amet,
                                                        consectetur adipisicing elit, sed do incididunt ut labore
                                                        et dolore magna aliqua.
                                                    </div>
                                                    <div className="info-box">
                                                        <span className="icon-quote" />
                                                        <h4 className="name">Aleesha brown</h4>
                                                        <span className="designation">Market Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Testimonial Block */}
                                        <div className="testimonial-block">
                                            <div className="inner-box">
                                                <div className="content-box">
                                                    <figure className="thumb">
                                                        <img src="images/resource/testi-thumb-1.jpg" alt="" />
                                                    </figure>
                                                    <div className="rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                    <div className="text">
                                                        Lorem ipsum is simply free text dolor sit amet,
                                                        consectetur adipisicing elit, sed do incididunt ut labore
                                                        et dolore magna aliqua.
                                                    </div>
                                                    <div className="info-box">
                                                        <span className="icon-quote" />
                                                        <h4 className="name">Jame sickres</h4>
                                                        <span className="designation">Market Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Testimonial Block */}
                                        <div className="testimonial-block">
                                            <div className="inner-box">
                                                <div className="content-box">
                                                    <figure className="thumb">
                                                        <img src="images/resource/testi-thumb-2.jpg" alt="" />
                                                    </figure>
                                                    <div className="rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                    <div className="text">
                                                        Lorem ipsum is simply free text dolor sit amet,
                                                        consectetur adipisicing elit, sed do incididunt ut labore
                                                        et dolore magna aliqua.
                                                    </div>
                                                    <div className="info-box">
                                                        <span className="icon-quote" />
                                                        <h4 className="name">Aleesha brown</h4>
                                                        <span className="designation">Market Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Testimonial Block */}
                                        <div className="testimonial-block">
                                            <div className="inner-box">
                                                <div className="content-box">
                                                    <figure className="thumb">
                                                        <img src="images/resource/testi-thumb-1.jpg" alt="" />
                                                    </figure>
                                                    <div className="rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                    <div className="text">
                                                        Lorem ipsum is simply free text dolor sit amet,
                                                        consectetur adipisicing elit, sed do incididunt ut labore
                                                        et dolore magna aliqua.
                                                    </div>
                                                    <div className="info-box">
                                                        <span className="icon-quote" />
                                                        <h4 className="name">Jame sickres</h4>
                                                        <span className="designation">Market Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Testimonial Block */}
                                        <div className="testimonial-block">
                                            <div className="inner-box">
                                                <div className="content-box">
                                                    <figure className="thumb">
                                                        <img src="images/resource/testi-thumb-2.jpg" alt="" />
                                                    </figure>
                                                    <div className="rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                    <div className="text">
                                                        Lorem ipsum is simply free text dolor sit amet,
                                                        consectetur adipisicing elit, sed do incididunt ut labore
                                                        et dolore magna aliqua.
                                                    </div>
                                                    <div className="info-box">
                                                        <span className="icon-quote" />
                                                        <h4 className="name">Aleesha brown</h4>
                                                        <span className="designation">Market Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </OwlCarousel>
                                {/* </div> */}
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