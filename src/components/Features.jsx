import { GiProcessor } from "react-icons/gi";
import { GiShakingHands } from "react-icons/gi";

const Features = () => {

    return (
        <>
            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="row">
                        {/* Feature Block */}
                        <div className="feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp">
                            <div className="inner-box ">
                                {/* <TbCertificate className="icon"/> */}
                                <svg stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="15" cy="15" r="3"></circle><path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path><path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"></path><line x1="6" y1="9" x2="18" y2="9"></line><line x1="6" y1="12" x2="9" y2="12"></line><line x1="6" y1="15" x2="8" y2="15"></line></svg>
                                <h5 className="title feature-title-one">
                                    Online
                                    <br /> Certifications
                                </h5>
                            </div>
                        </div>
                        {/* Feature Block */}
                        <div
                            className="feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                            data-wow-delay="400ms"
                        >
                            <div className="inner-box ">
                                {/* <i className="icon flaticon-elearning" /> */}
                                <i className="icon flaticon-online-learning" />
                                <h5 className="title">
                                    Top
                                    <br /> Instructors
                                </h5>
                            </div>
                        </div>
                        {/* Feature Block */}
                        <div
                            className="feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                            data-wow-delay="800ms"
                        >
                            <div className="inner-box ">
                                {/* <i className="icon flaticon-web-2" /> */}
                                <GiProcessor className="icon"/>
                                <h5 className="title">
                                    Latest <br />
                                    Technology
                                </h5>
                            </div>
                        </div>
                        {/* Feature Block */}
                        <div
                            className="feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                            data-wow-delay="1200ms"
                        >
                            <div className="inner-box ">
                                {/* <i className="icon flaticon-users" /> */}
                                <GiShakingHands className="icon"/>
                                <h5 className="title">
                                    Lifetime <br />
                                    Support
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Features Section*/}
        </>

    )
}

export default Features;