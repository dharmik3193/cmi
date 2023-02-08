const SingleCourse = () => {
    return (
        <>
            <section
                className="page-title"
                style={{ backgroundImage: "url(/images/background/page-title.jpg)" }}
            >
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">Course Details</h1>
                        <ul className="page-breadcrumb">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="#">Pages</a>
                            </li>
                            <li>Courses</li>
                        </ul>
                    </div>
                </div>
            </section>


            <section className="course-details">
                <div className="container">
                    <div className="row flex-xl-row-reverse">
                        {/*Start courses Details Content*/}
                        <div className="col-xl-8 col-lg-8">
                            <div className="courses-details__content">
                                <img src="/images/resource/course-details.jpg" alt="" />
                                <h2 className="mt-4">course Overview</h2>
                                <p>
                                    Lorem ipsum is simply free text used by copytyping refreshing. Neque
                                    porro est qui dolorem ipsum quia quaed inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt explicabo. Aelltes port lacus
                                    quis enim var sed efficitur turpis gilla sed sit amet finibus eros.
                                    Lorem Ipsum is simply dummy text of the printing.
                                </p>
                                <p>
                                    When an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries,
                                    but also the leap into electronic typesetting, remaining essentially
                                    unchanged.{" "}
                                </p>
                                <div className="content mt-40">
                                    <div className="text">
                                        <h3>What You Will Learn?</h3>
                                        <p>
                                            Lorem ipsum is simply free text used by copytyping refreshing.
                                            Neque porro est qui dolorem ipsum quia quaed inventore veritatis
                                            et quasi architecto beatae vitae dicta sunt explicabo.
                                        </p>
                                    </div>
                                    <div className="row mt-30">
                                        {/* Category Block Two */}
                                        <div className="category-block-current-two col-lg-4 col-md-6 col-sm-6">
                                            <div className="inner-box">
                                                <div className="icon-box">
                                                    <i className="icon flaticon-elearning" />
                                                </div>
                                                <h4 className="title">Online degree programs</h4>
                                                <span className="sub-title">26 Courses</span>
                                            </div>
                                        </div>
                                        {/* Category Block Two */}
                                        <div className="category-block-current-two col-lg-4 col-md-6 col-sm-6">
                                            <div className="inner-box">
                                                <div className="icon-box">
                                                    <i className="icon flaticon-study-1" />
                                                </div>
                                                <h4 className="title">Non-degree programs</h4>
                                                <span className="sub-title">38 Courses</span>
                                            </div>
                                        </div>
                                        {/* Category Block Two */}
                                        <div className="category-block-current-two col-lg-4 col-md-6 col-sm-6">
                                            <div className="inner-box">
                                                <div className="icon-box">
                                                    <i className="icon flaticon-study" />
                                                </div>
                                                <h4 className="title">Off campus programs</h4>
                                                <span className="sub-title">13 Courses</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" mt-25">
                                    <h3>Frequently Asked Question</h3>
                                    <p>
                                        Lorem ipsum is simply free text used by copytyping refreshing.
                                        Neque porro est qui dolorem ipsum quia quaed inventore veritatis
                                        et quasi architecto beatae vitae dicta sunt explicabo.
                                    </p>
                                    <ul
                                        className="accordion-box wow fadeInRight animated"
                                        style={{ visibility: "visible", animationName: "fadeInRight" }}
                                    >
                                        {/*Block*/}
                                        <li className="accordion block">
                                            <div className="acc-btn">
                                                Is my technology allowed on tech?
                                                <div className="icon fa fa-plus" />
                                            </div>
                                            <div className="acc-content" style={{ display: "none" }}>
                                                <div className="content">
                                                    <div className="text">
                                                        There are many variations of passages the majority have
                                                        suffered alteration in some fo injected humour, or
                                                        randomised words believable.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Block*/}
                                        <li className="accordion block">
                                            <div className="acc-btn">
                                                How to soft launch your business?
                                                <div className="icon fa fa-plus" />
                                            </div>
                                            <div
                                                className="acc-content current"
                                                style={{ display: "none" }}
                                            >
                                                <div className="content">
                                                    <div className="text">
                                                        There are many variations of passages the majority have
                                                        suffered alteration in some fo injected humour, or
                                                        randomised words believable.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Block*/}
                                        <li className="accordion block active-block">
                                            <div className="acc-btn active">
                                                How to turn visitors into contributors
                                                <div className="icon fa fa-plus" />
                                            </div>
                                            <div className="acc-content" style={{ display: "block" }}>
                                                <div className="content">
                                                    <div className="text">
                                                        There are many variations of passages the majority have
                                                        suffered alteration in some fo injected humour, or
                                                        randomised words believable.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End courses Details Content*/}
                        {/*Start courses Details Sidebar*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="course-sidebar">
                                <ul className="course-details-info">
                                    <li className="course-details-info-link">
                                        <span className="course-details-info-icon">
                                            <i className="fa fa-clock" />
                                        </span>
                                        Durations: <span>10 hours</span>
                                    </li>
                                    <li className="course-details-info-link">
                                        <span className="course-details-info-icon">
                                            <i className="fa fa-folder-open" />
                                        </span>
                                        Lectures: <span>15</span>
                                    </li>
                                    <li className="course-details-info-link">
                                        <span className="course-details-info-icon">
                                            <i className="fa fa-user-circle" />
                                        </span>
                                        Students: <span>Max 50</span>
                                    </li>
                                    <li className="course-details-info-link">
                                        <span className="course-details-info-icon">
                                            <i className="fa fa-flag" />
                                        </span>
                                        Skill Level: <span>Advanced</span>
                                    </li>
                                    <li className="course-details-info-link">
                                        <span className="course-details-info-icon">
                                            <i className="fa fa-bell" />
                                        </span>
                                        Language: <span>English</span>
                                    </li>
                                </ul>
                                <div className="course-details-price">
                                    <p className="course-details-price-text">Course price</p>
                                    <p className="course-details-price-amount">$18.00</p>
                                    <a
                                        href="#"
                                        className="theme-btn btn-style-two course-details-price-btn"
                                    >
                                        Buy This Course
                                    </a>
                                </div>
                                <div className="latest-course mb-30">
                                    <h4 className="latest-course-title mb-30">New Courses</h4>
                                    <div className="latest-course-item">
                                        <div className="latest-course-img">
                                            <img src="images/resource/course-1.jpg" alt="" />
                                        </div>
                                        <div className="latest-course-content">
                                            <a className="latest-course-author" href="#">
                                                by <span>Advanced</span>
                                            </a>
                                            <h5>
                                                <a href="page-course-details.html">Modern Languages</a>
                                            </h5>
                                            <div className="latest-course-stars">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <span>4.8</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="latest-course-item">
                                        <div className="latest-course-img">
                                            <img src="images/resource/course-2.jpg" alt="" />
                                        </div>
                                        <div className="latest-course-content">
                                            <a className="latest-course-author" href="#">
                                                by <span>Advanced</span>
                                            </a>
                                            <h5>
                                                <a href="page-course-details.html">Modern Technologies</a>
                                            </h5>
                                            <div className="latest-course-stars">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <span>5.0</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="latest-course-item">
                                        <div className="latest-course-img">
                                            <img src="images/resource/course-3.jpg" alt="" />
                                        </div>
                                        <div className="latest-course-content">
                                            <a className="latest-course-author" href="#">
                                                by <span>Advanced</span>
                                            </a>
                                            <h5>
                                                <a href="page-course-details.html">Development Studies</a>
                                            </h5>
                                            <div className="latest-course-stars">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <span>4.9</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End courses Details Sidebar*/}
                    </div>
                </div>
            </section>



        </>
    )
}

export default SingleCourse