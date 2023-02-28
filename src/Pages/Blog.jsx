import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import $ from 'jquery';
import { Link } from "react-router-dom";


const Blog = () => {

    const [blog, setBlog] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        // window.addEventListener('scroll', loadScript);
        axios.get('https://cmiapi-kt1r.onrender.com/get_blog')
            .then(function (res) {
                // handle success
                console.log(res.data.data);
                setBlog(res.data.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        setInterval(() => {
            setisLoading(false)
        }, 2000);

    }, [])

    useEffect(() => {
        var mobileMenuContent = $('.main-header .main-menu .navigation').html();
        $('.sticky-header .navigation').append(mobileMenuContent);
        setInterval(() => {
            setisLoading(false)
        }, 1000);
        $(".clearfix li:nth-child(4)").addClass('current');
    })
    if (!isLoading) {
        return (
            <>
                <Header id="4" />
                <section
                    className="page-title"
                    style={{ backgroundImage: "url(images/background/page-title.jpg)" }}
                >
                    <div className="container">
                        <div className="title-outer">
                            <h1 className="title">News Grid</h1>
                            <ul className="page-breadcrumb">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>News</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* end main-content */}
                {/* News Section */}
                <section className="">
                    <div className="container pb-70">
                        <div className="row">
                            {
                                blog.map((item, i) => {
                                    return (
                                        <>
                                            {/* News Block */}
                                            <div key={i} className="news-block col-lg-4 col-md-6 col-sm-12">
                                                <div className="inner-box">
                                                    <div className="image-box">
                                                        <figure className="image">
                                                            <Link to={`/blog/${item._id}`}>
                                                                <img src={item.thumbnail} alt="" />
                                                            </Link>
                                                        </figure>
                                                        <span className="date">
                                                            {item.date}
                                                        </span>
                                                    </div>
                                                    <div className="content-box">
                                                        <div className="content">
                                                            <ul className="post-info">
                                                                <li>
                                                                    <i className="fa fa-user" /> by Admin
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-comments" /> {item.comment.length} Comments
                                                                </li>
                                                            </ul>
                                                            <h4 className="title">
                                                                <Link to={`/blog/${item._id}`}>
                                                                    {item.title}
                                                                </Link>
                                                            </h4>
                                                            <Link to={`/blog/${item._id}`} className="read-more">
                                                                Read More <i className="fa fa-long-arrow-alt-right" />
                                                            </Link>
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
                {/*End News Section */}
                <Footer />
            </>

        )
    } else {
        return (
            <><Preloader /></>
        )
    }
}

export default Blog;