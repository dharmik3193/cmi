import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const News = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        axios.get('https://cmiapi-kt1r.onrender.com/get_blog')
            .then(function (res) {
                for (var i = 0; i < res.data.data.length; i++) {
                    setBlog(res.data.data.slice(0, 3))
                }
                console.log(blog);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    return (
        <>
            {/* News Section */}
            <section className="news-section">
                <div className="container">
                    <div className="sec-title text-center">
                        <span className="sub-title">directly from blog</span>
                        <h2>
                            Our latest news &amp;
                            <br /> upcoming blog posts
                        </h2>
                    </div>
                    <div className="row">
                        {
                            blog.map((item, index) => {
                                return (
                                    <>
                                        {/* News Block */}
                                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" key={index}>
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
        </>

    )
}

export default News;