import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";

const Coursehome = () => {

  const [screen,setscreen] = useState((window.innerWidth <= 1024 && window.innerWidth >768)?3:(window.innerWidth<=768 && window.innerWidth >425)?2:(window.innerWidth<=425 && window.innerWidth>0)?1:4);
  // var screen;
  const handleResize = () => {
    if (window.innerWidth <= 1024 && window.innerWidth >768) {
      setscreen(3)
      // screen=3;
    } else if(window.innerWidth<=768 && window.innerWidth >579){
      setscreen(2)
      // screen=2
    } else if(window.innerWidth<=579 && window.innerWidth>0)
    {
      setscreen(1)
      // screen=1
    }else{
      setscreen(4)
      // screen=4
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
  return (
    <>
      {/* Courses Section */}
      <section className="courses-section">
        <div className="auto-container">
          <div className="anim-icons">
            <span className="icon icon-e wow zoomIn" />
          </div>
          <div className="sec-title">
            <span className="sub-title">popular courses</span>
            <h2>
              Pick a course to
              <br /> get started your study
            </h2>
          </div>
          <div className="carousel-outer">
            {/* Courses Carousel */}
            {/* <div className="courses-carousel owl-carousel owl-theme default-nav"> */}
            <OwlCarousel
              items={screen}
              className="owl-theme clients-carousel"
              loop
              nav={false}
              dots={false}
              margin={8}
            >
              {/* Course Block */}
              <div className="course-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="page-course-details.html">
                        <img src="images/resource/course-1.jpg" alt="" />
                      </a>
                    </figure>
                    {/* <span className="price">$49.00</span> */}
                    <div className="value">Advanced</div>
                  </div>
                  <div className="content-box">
                    <ul className="course-info">
                      <li>
                        <i className="fa fa-book" /> 8 Lessons
                      </li>
                      <li>
                        <i className="fa fa-users" /> 16 Students
                      </li>
                    </ul>
                    <h5 className="title">
                      <a href="page-course-details.html">
                        Starting seo as your home based business
                      </a>
                    </h5>
                    <div className="other-info">
                      <div className="rating-box">
                        <span className="text">(4.9 /8 Rating)</span>
                        <div className="rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                      </div>
                      <div className="duration">
                        <i className="fa fa-clock" /> 3 Weeks
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Course Block */}
              <div className="course-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="page-course-details.html">
                        <img src="images/resource/course-2.jpg" alt="" />
                      </a>
                    </figure>
                    <span className="price">$49.00</span>
                    <div className="value">Advanced</div>
                  </div>
                  <div className="content-box">
                    <ul className="course-info">
                      <li>
                        <i className="fa fa-book" /> 8 Lessons
                      </li>
                      <li>
                        <i className="fa fa-users" /> 16 Students
                      </li>
                    </ul>
                    <h5 className="title">
                      <a href="page-course-details.html">
                        Starting seo as your home based business
                      </a>
                    </h5>
                    <div className="other-info">
                      <div className="rating-box">
                        <span className="text">(4.9 /8 Rating)</span>
                        <div className="rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                      </div>
                      <div className="duration">3 Weeks</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Course Block */}
              <div className="course-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="page-course-details.html">
                        <img src="images/resource/course-3.jpg" alt="" />
                      </a>
                    </figure>
                    <span className="price">$49.00</span>
                    <div className="value">Advanced</div>
                  </div>
                  <div className="content-box">
                    <ul className="course-info">
                      <li>
                        <i className="fa fa-book" /> 8 Lessons
                      </li>
                      <li>
                        <i className="fa fa-users" /> 16 Students
                      </li>
                    </ul>
                    <h5 className="title">
                      <a href="page-course-details.html">
                        Starting seo as your home based business
                      </a>
                    </h5>
                    <div className="other-info">
                      <div className="rating-box">
                        <span className="text">(4.9 /8 Rating)</span>
                        <div className="rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                      </div>
                      <div className="duration">3 Weeks</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Course Block */}
              <div className="course-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="page-course-details.html">
                        <img src="images/resource/course-4.jpg" alt="" />
                      </a>
                    </figure>
                    <span className="price">$49.00</span>
                    <div className="value">Advanced</div>
                  </div>
                  <div className="content-box">
                    <ul className="course-info">
                      <li>
                        <i className="fa fa-book" /> 8 Lessons
                      </li>
                      <li>
                        <i className="fa fa-users" /> 16 Students
                      </li>
                    </ul>
                    <h5 className="title">
                      <a href="page-course-details.html">
                        Starting seo as your home based business
                      </a>
                    </h5>
                    <div className="other-info">
                      <div className="rating-box">
                        <span className="text">(4.9 /8 Rating)</span>
                        <div className="rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                      </div>
                      <div className="duration">3 Weeks</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Course Block */}
              <div className="course-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="page-course-details.html">
                        <img src="images/resource/course-1.jpg" alt="" />
                      </a>
                    </figure>
                    <span className="price">$49.00</span>
                    <div className="value">Advanced</div>
                  </div>
                  <div className="content-box">
                    <ul className="course-info">
                      <li>
                        <i className="fa fa-book" /> 8 Lessons
                      </li>
                      <li>
                        <i className="fa fa-users" /> 16 Students
                      </li>
                    </ul>
                    <h5 className="title">
                      <a href="page-course-details.html">
                        Starting seo as your home based business
                      </a>
                    </h5>
                    <div className="other-info">
                      <div className="rating-box">
                        <span className="text">(4.9 /8 Rating)</span>
                        <div className="rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                      </div>
                      <div className="duration">
                        <i className="fa fa-clock" /> 3 Weeks
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Course Block */}
              <div className="course-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="page-course-details.html">
                        <img src="images/resource/course-2.jpg" alt="" />
                      </a>
                    </figure>
                    <span className="price">$49.00</span>
                    <div className="value">Advanced</div>
                  </div>
                  <div className="content-box">
                    <ul className="course-info">
                      <li>
                        <i className="fa fa-book" /> 8 Lessons
                      </li>
                      <li>
                        <i className="fa fa-users" /> 16 Students
                      </li>
                    </ul>
                    <h5 className="title">
                      <a href="page-course-details.html">
                        Starting seo as your home based business
                      </a>
                    </h5>
                    <div className="other-info">
                      <div className="rating-box">
                        <span className="text">(4.9 /8 Rating)</span>
                        <div className="rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                      </div>
                      <div className="duration">3 Weeks</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Course Block */}
              <div className="course-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="page-course-details.html">
                        <img src="images/resource/course-3.jpg" alt="" />
                      </a>
                    </figure>
                    <span className="price">$49.00</span>
                    <div className="value">Advanced</div>
                  </div>
                  <div className="content-box">
                    <ul className="course-info">
                      <li>
                        <i className="fa fa-book" /> 8 Lessons
                      </li>
                      <li>
                        <i className="fa fa-users" /> 16 Students
                      </li>
                    </ul>
                    <h5 className="title">
                      <a href="page-course-details.html">
                        Starting seo as your home based business
                      </a>
                    </h5>
                    <div className="other-info">
                      <div className="rating-box">
                        <span className="text">(4.9 /8 Rating)</span>
                        <div className="rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                      </div>
                      <div className="duration">3 Weeks</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Course Block */}
              <div className="course-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="page-course-details.html">
                        <img src="images/resource/course-4.jpg" alt="" />
                      </a>
                    </figure>
                    <span className="price">$49.00</span>
                    <div className="value">Advanced</div>
                  </div>
                  <div className="content-box">
                    <ul className="course-info">
                      <li>
                        <i className="fa fa-book" /> 8 Lessons
                      </li>
                      <li>
                        <i className="fa fa-users" /> 16 Students
                      </li>
                    </ul>
                    <h5 className="title">
                      <a href="page-course-details.html">
                        Starting seo as your home based business
                      </a>
                    </h5>
                    <div className="other-info">
                      <div className="rating-box">
                        <span className="text">(4.9 /8 Rating)</span>
                        <div className="rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                      </div>
                      <div className="duration">3 Weeks</div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
            {/* </div> */}
          </div>
          <div className="bottom-text">
            <div className="content">
              <strong>23,000+</strong> more skillful courses you can explore{" "}
              <a
                href="page-courses.html"
                className="theme-btn btn-style-one small"
              >
                Explore All Courses
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End Courses Section*/}
    </>
  );
};

export default Coursehome;
