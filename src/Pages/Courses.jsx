import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import $ from 'jquery';


const Courses = () => {

    const [course, setCourse] = useState([]);
    const [isdata, setIsdata] = useState(false);
    const [isloading, setIsloading] = useState(false);

    useEffect(() => {
        axios.get('https://attractive-gold-wetsuit.cyclic.app/getall_courses')
            .then(function (res) {
                console.log(res.data.data);
                setCourse(res.data.data)
                setIsdata(true)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    useEffect(() => {
        var mobileMenuContent = $('.main-header .main-menu .navigation').html();
        $('.sticky-header .navigation').append(mobileMenuContent);

        $(".clearfix li:nth-child(2)").addClass('current');
        setInterval(() => {
            setIsloading(true)
        }, 1000);
    })
    if (isdata && isloading) {
        return (
            <>
                <Header id="2" />
                <section
                    className="page-title"
                    style={{ backgroundImage: "url(images/background/page-title.jpg)" }}
                >
                    <div className="container">
                        <div className="title-outer">
                            <h1 className="title">Courses</h1>
                            <ul className="page-breadcrumb">
                                <li>
                                    <a href="/">Home</a>
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
                    <div className="container pb-50">
                        <div className="row">
                            {/* Course Block Two*/}
                            {
                                course.map((item,index) => {
                                    return (
                                        <>
                                            <div className="course-block-two col-lg-3 col-md-6 col-sm-12" key={index}>
                                                <div className="inner-box">
                                                    <div className="image-box">
                                                        <figure className="image">
                                                            <Link to={`/course/${item._id}`}>
                                                                <img src={item.thumbnail} alt="" />
                                                            </Link>
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
                                                            <Link to={`/course/${item._id}`}>
                                                                {item.title}
                                                            </Link>
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
                <Footer />
            </>

        )
    } else {
        return (
            <><Preloader /></>
        )
    }
}

export default Courses;