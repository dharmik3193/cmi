import axios from "axios";
import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

const Coursehome = () => {
  const [screen, setscreen] = useState(
    window.innerWidth <= 1024 && window.innerWidth > 768
      ? 3
      : window.innerWidth <= 768 && window.innerWidth > 425
        ? 2
        : window.innerWidth <= 425 && window.innerWidth > 0
          ? 1
          : 4
  );
  const [course, setCourse] = useState([]);
  const [isdata, setIsdata] = useState(false);
  const handleResize = () => {
    if (window.innerWidth <= 1024 && window.innerWidth > 768) {
      setscreen(3);
    } else if (window.innerWidth <= 768 && window.innerWidth > 579) {
      setscreen(2);
    } else if (window.innerWidth <= 579 && window.innerWidth > 0) {
      setscreen(1);
    } else {
      setscreen(4);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    axios.get('https://attractive-gold-wetsuit.cyclic.app/getall_courses')
      .then(function (res) {
        setCourse(res.data.data)
        setIsdata(true)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  if (isdata) {
    return (
      <>
        {/* Courses Section */}
        <section className="courses-section">
          <div className="container">
            <div className="anim-icons">
              <span className="icon icon-e wow zoomIn" />
            </div>
            <div className="sec-title">
              <span className="sub-title">popular courses</span>
              <h2>
                Pick a course to &nbsp;
                <br />
                boost up your skills
              </h2>
            </div>
            <div className="carousel-outer">
              {/* Courses Carousel */}
              <OwlCarousel
                items={screen}
                className="owl-theme clients-carousel"
                loop
                nav={false}
                dots={false}
                margin={8}
              >
                {/* Course Block */}
                {
                  course.map((item, index) => {
                    return (
                      <>
                        <div className="course-block" key={index}>
                          <div className="inner-box">
                            <div className="image-box">
                              <figure className="image">
                                <Link to={`course/${item._id}`}>
                                  <img src={item.thumbnail} alt="" />
                                </Link>
                              </figure>
                              <div className="value">{item.level}</div>
                            </div>
                            <div className="content-box">
                              <h5 className="title">
                                <Link to={`course/${item._id}`}>
                                  {item.title}
                                </Link>
                              </h5>
                              <div className="other-info">
                                <div className="rating-box">
                                  <span className="text">({item.rating} /8 Rating)</span>
                                  <div className="rating">
                                    <span className="fa fa-star" />
                                    <span className="fa fa-star" />
                                    <span className="fa fa-star" />
                                    <span className="fa fa-star" />
                                    <span className="fa fa-star" />
                                  </div>
                                </div>
                                <div className="duration">
                                  <i className="fa fa-clock" /> {item.duration}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                }

              </OwlCarousel>
            </div>
            <div className="bottom-text">
              <div className="content">
                <strong>{course.length}+</strong> more skillful courses you can explore{" "}
                <Link to='/courses' className="theme-btn btn-style-one small">
                  Explore All Courses
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* End Courses Section*/}
      </>
    );
  }

};

export default Coursehome;
