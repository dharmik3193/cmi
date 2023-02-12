import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"
import { Link, useParams } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import Header from "../components/Header";

const SingleCourse = () => {

    const [course, setCourse] = useState();
    const [courses, setCourses] = useState([]);
    const [isdata, setIsdata] = useState(false);
    const [isalldata, setIsalldata] = useState(false);

    const params = useParams();

    useEffect(() => {
        console.log(params.id);
        axios.get(`https://cmiapi-kt1r.onrender.com/course/${params.id}`)
            .then(function (res) {
                // handle success
                console.log(res.data.data);
                setCourse(res.data.data)
                setIsdata(true)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        axios.get(`https://cmiapi-kt1r.onrender.com/getall_courses`)
            .then(function (res) {
                // handle success
                console.log(res.data.data);
                setCourses(res.data.data)
                setIsalldata(true)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    if (isdata && isalldata) {
        return (
            <>
                <Header id="2"/>
                <Helmet>
                    <meta name="title" content={`${course.title} Course in Surat | React JS Training in Surat | React JS Jobs`} />
                    <meta property="og:title" content={`${course.title} Course in Surat | React JS Training in Surat | React JS Jobs`} />
                    <meta property="og:description" content="Codesign Multimedia is the #No 1 IT Training institute in Surat. Provide 100% Job Placement Guarantee. Join now Computer course in Surat" />
                    <meta name="twitter:title" content={`${course.title} Course in Surat | React JS Training in Surat | React JS Jobs`} />
                    <meta name="twitter:description" content="Codesign Multimedia is the #No 1 IT Training institute in Surat. Provide 100% Job Placement Guarantee. Join now Computer course in Surat" />
                    <title>{`${course.title} Course in Surat | React JS Training in Surat | React JS Jobs`}</title>
                </Helmet>
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
                                    <img src={course.image} alt="" />
                                    <h2 className="mt-4">{`${course.title} Training - The Advance Guide To ${course.title} Course In Surat`}</h2>
                                    <p>{course.description}</p>
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
                                                    <h4 className="title">Course Duration</h4>
                                                    <span className="sub-title">{course.duration}</span>
                                                </div>
                                            </div>
                                            {/* Category Block Two */}
                                            <div className="category-block-current-two col-lg-4 col-md-6 col-sm-6">
                                                <div className="inner-box">
                                                    <div className="icon-box">
                                                        {/* <i class="fa-regular fa-clock"></i> */}
                                                        <AiOutlineClockCircle />
                                                    </div>
                                                    <h4 className="title">Lacture Duration</h4>
                                                    <span className="sub-title">2 HOURS / Day</span>
                                                </div>
                                            </div>
                                            {/* Category Block Two */}
                                            <div className="category-block-current-two col-lg-4 col-md-6 col-sm-6">
                                                <div className="inner-box">
                                                    <div className="icon-box">
                                                        <i className="icon flaticon-study" />
                                                    </div>
                                                    <h4 className="title">Job Opportunities</h4>
                                                    <span className="sub-title">Yes</span>
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
                                                <i className="fa fa-user-circle" />
                                            </span>
                                            Students: <span>Max 10</span>
                                        </li>
                                    </ul>
                                    <div className="course-details-price">
                                        <p className="course-details-price-text">To Start Your</p>
                                        <p className="course-details-price-amount">DEMO LACTURE</p>
                                        <a
                                            href="#"
                                            className="theme-btn btn-style-two course-details-price-btn"
                                        >
                                            BOOK SEAT NOW
                                        </a>
                                    </div>
                                    <div className="latest-course mb-30">
                                        <h4 className="latest-course-title mb-30">New Courses</h4>
                                        {
                                            courses.map((item) => {
                                                return (
                                                    <>
                                                        <div className="latest-course-item">
                                                            <div className="latest-course-img">
                                                                <img src={item.image} alt="" />
                                                            </div>
                                                            <div className="latest-course-content">
                                                                <h5>
                                                                    <Link to={`/course/${item._id}`}>{item.title}</Link>
                                                                </h5>
                                                                <div className="latest-course-stars">
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <span>{item.rating}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
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
}

export default SingleCourse