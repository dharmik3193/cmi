const Abouthome2 = () => {
    return (
        <>
            {/* About Section Two*/}
            <section className="about-section-two">
                <div className="anim-icons">
                    <span className="icon icon-e wow zoomIn" />
                    <span className="icon icon-dots-2 bounce-x" />
                </div>
                <div className="container">
                    <div className="row">
                        <div
                            className="content-column col-lg-6 col-md-12 order-2 wow fadeInRight"
                            data-wow-delay="600ms"
                        >
                            <div className="inner-column">
                                <div className="sec-title">
                                    <h2>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h2>
                                    <div className="text">
                                    We stepped in the market with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields.
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="about-block col-lg-6 col-md-6 col-sm-6 wow fadeInUp">
                                        <div className="inner-box">
                                            <span className="info-text">Best career oriented courses</span>
                                            <div className="info-box">
                                                <div className="thumb">
                                                    <img src={require('../Assets/sahil-a.jpg')} alt="" />
                                                </div>
                                                <h5 className="name">Sahil Ramoliya</h5>
                                                <span className="designation">Student</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about-block style-two col-lg-6 col-md-6 col-sm-6 wow fadeInRight">
                                        <div className="inner-box">
                                            <span className="info-text">Best faculty support</span>
                                            <div className="info-box">
                                                <div className="thumb">
                                                    <img src={require('../Assets/jenil-a.jpg')} alt="" />
                                                </div>
                                                <h5 className="name">Jenil Mangukiya</h5>
                                                <span className="designation">Student</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12">
                            <div className="inner-column wow fadeInLeft">
                                <div className="icons-box">
                                    <span className="icon icon-dotted-map" />
                                    <span className="icon icon-dotted-line" />
                                    <span className="icon icon-papper-plan" />
                                </div>
                                <figure className="image overlay-anim wow fadeInUp">
                                    <img src="images/resource/about-3.jpg" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Emd About Section Two*/}
        </>
    )
}

export default Abouthome2;