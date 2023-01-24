import OwlCarousel from "react-owl-carousel";

const Coursehome = () => {
  const resp = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
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
              items={4}
              className="owl-theme clients-carousel"
              loop
              nav={false}
              dots={false}
              margin={8}
              responsive={resp}
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
