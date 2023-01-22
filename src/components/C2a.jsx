const C2a = () => {
    return (
        <>
            {/* Call To Action Two */}
            <section
                className="call-to-action"
                style={{ backgroundImage: "url(./images/background/1.jpg)" }}
            >
                <div className="anim-icons container">
                    <span className="icon icon-calculator zoom-one" />
                    <span className="icon icon-pin-clip zoom-one" />
                    <span className="icon icon-dots" />
                </div>
                <div className="auto-container">
                    <div className="row">
                        <div className="title-column col-lg-8 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title light">
                                    <span className="style-font">Get your quality</span>
                                    <h1>
                                        Skills certificate <br />
                                        from the edulerns
                                    </h1>
                                    <a
                                        href="page-course-details.html"
                                        className="theme-btn btn-style-one"
                                    >
                                        <span className="btn-title">Get started now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-lg-4 col-md-12">
                            <figure className="image">
                                <img src="images/resource/cta.png" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Call To Action Two */}
        </>

    )
}

export default C2a;