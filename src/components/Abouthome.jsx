import { Link } from "react-router-dom";

const Abouthome = () => {
  return (
    <>
      {/* About Section */}
      <section className="about-section">
        <div className="anim-icons">
          <span className="icon icon-dotted-map" />
        </div>
        <div className="container">
          <div className="row">
            <div
              className="content-column col-lg-6 col-md-12 order-2 wow fadeInRight"
              data-wow-delay="600ms"
            >
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Get to know us</span>
                  <h2>Grow your skills learn with us from experts</h2>
                  <div className="text">
                    We are committed to create skilled professionals, to fulfill
                    the gap between industry and employee by providing advanced
                    quality training and assessment services in skill and
                    behavioral areas.
                  </div>
                </div>
                <ul className="list-style-one two-column">
                  <li>
                    <i className="icon fa fa-check" /> Expert trainers
                  </li>
                  <li>
                    <i className="icon fa fa-check" /> 100% Placement
                  </li>
                  <li>
                    <i className="icon fa fa-check" /> Lifetime Support
                  </li>
                  <li>
                    <i className="icon fa fa-check" /> Skillfull Courses
                  </li>
                </ul>
                <div className="btn-box">
                  <Link to='/courses' className="theme-btn btn-style-one">
                    <span className="btn-title">Discover more</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12">
              <div className="anim-icons">
                <span className="icon icon-dotted-map-2" />
                <span className="icon icon-paper-plan" />
                <span className="icon icon-dotted-line" />
              </div>
              <div className="inner-column wow fadeInLeft">
                <figure className="image-1 overlay-anim wow fadeInUp">
                  <img src="images/resource/about-1.png" alt="" />
                </figure>
                <figure className="image-2 overlay-anim wow fadeInRight">
                  <img src="images/resource/about-2.jpg" alt="" />
                </figure>
                <div className="experience bounce-y">
                  <span className="count">Great</span> Learning Environment
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End About Section */}
    </>
  );
};

export default Abouthome;
