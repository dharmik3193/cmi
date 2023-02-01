import axios from "axios";
import { useEffect, useState } from "react";

const Courses = () => {

    const [course, setCourse] = useState([]);
    const [isdata, setIsdata] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/getall_courses')
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
    }, [])
    if (isdata) {
        return (
            <>
                <section
                    className="page-title"
                    style={{ backgroundImage: "url(images/background/page-title.jpg)" }}
                >
                    <div className="auto-container">
                        <div className="title-outer">
                            <h1 className="title">Courses</h1>
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
                {/* end main-content */}
                {/* Courses Section */}
                <section className="">
                    <div className="container pb-100">
                        <div className="row">
                            {/* Course Block Two*/}
                            {
                                course.map((item) => {
                                    return (
                                        <>
                                            <div className="course-block-two col-lg-4 col-md-6 col-sm-12">
                                                <div className="inner-box">
                                                    <div className="image-box">
                                                        <figure className="image">
                                                            <a href="page-course-details.html">
                                                                <img src={item.image} alt="" />
                                                            </a>
                                                        </figure>
                                                        <div className="value">{item.level}</div>
                                                    </div>
                                                    <div className="content-box">
                                                        <ul className="course-info">
                                                            <li>
                                                                <i className="fa fa-clock" /> {item.duration}
                                                            </li>
                                                        </ul>
                                                        <h5 className="title">
                                                            <a href="page-course-details.html">
                                                                {item.title}
                                                            </a>
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
                {/* End Courses Section*/}
            </>

        )
    }
}

export default Courses;