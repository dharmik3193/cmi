import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const Blog = () => {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
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
    }, [])
    return (
        <>
        <Header id="4"/>
            <section
                className="page-title"
                style={{ backgroundImage: "url(images/background/page-title.jpg)" }}
            >
                <div className="auto-container">
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
                            blog.map((item) => {
                                return (
                                    <>
                                        {/* News Block */}
                                        <div className="news-block col-lg-4 col-md-6 col-sm-12">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image">
                                                        <a href="news-details.html">
                                                            <img src={item.image} alt="" />
                                                        </a>
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
                                                            <a href="news-details.html">
                                                                {item.title}
                                                            </a>
                                                        </h4>
                                                        <a href="news-details.html" className="read-more">
                                                            Read More <i className="fa fa-long-arrow-alt-right" />
                                                        </a>
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
        </>

    )
}

export default Blog;