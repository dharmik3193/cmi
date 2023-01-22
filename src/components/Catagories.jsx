const Catagories = () => {
    return (
        <>
            {/* Categories Section */}
            <section className="categories-section-current">
                <div className="auto-container">
                    <div className="anim-icons">
                        <span className="icon icon-group-1 bounce-y" />
                        <span className="icon icon-group-2 bounce-y" />
                    </div>
                    <div className="sec-title text-center">
                        <span className="sub-title">Checkout our categories</span>
                        <h2>
                            Top categories for popular <br />
                            courses to show
                        </h2>
                    </div>
                    <div className="row justify-content-center">
                        {/* Category Block */}
                        <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-student-2" />
                                </div>
                                <h6 className="title">
                                    <a href="page-course-details.html">
                                        Business <br />
                                        Management
                                    </a>
                                </h6>
                            </div>
                        </div>
                        {/* Category Block */}
                        <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-stationary" />
                                </div>
                                <h6 className="title">
                                    <a href="page-course-details.html">
                                        Arts and <br />
                                        Design
                                    </a>
                                </h6>
                            </div>
                        </div>
                        {/* Category Block */}
                        <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-online-learning" />
                                </div>
                                <h6 className="title">
                                    <a href="page-course-details.html">
                                        Computer <br />
                                        Science
                                    </a>
                                </h6>
                            </div>
                        </div>
                        {/* Category Block */}
                        <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-study" />
                                </div>
                                <h6 className="title">
                                    <a href="page-course-details.html">
                                        Personal <br />
                                        Development
                                    </a>
                                </h6>
                            </div>
                        </div>
                        {/* Category Block */}
                        <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-pie-chart" />
                                </div>
                                <h6 className="title">
                                    <a href="page-course-details.html">
                                        Business and <br />
                                        Finance
                                    </a>
                                </h6>
                            </div>
                        </div>
                        {/* Category Block */}
                        <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-web-2" />
                                </div>
                                <h6 className="title">
                                    <a href="page-course-details.html">
                                        Video and <br />
                                        Photography
                                    </a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Product Categories */}
        </>

    )
}
export default Catagories;