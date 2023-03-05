import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import $ from 'jquery';

const SingleBlog = () => {

    const params = useParams();

    const [blog, setBlog] = useState();
    const [blogs, setBlogs] = useState([]);
    const [isData, setIsData] = useState(false);
    const [isallData, setIsallData] = useState(false);

    useEffect(() => {
        console.log(params.id);
        axios.get(`http://54.199.201.46:8000/blog/${params.id}`)
            .then(function (res) {
                // handle success
                console.log(res.data);
                setBlog(res.data.data)
                setIsData(true)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        axios.get(`http://54.199.201.46:8000/get_blog`)
            .then(function (res) {
                // handle success
                console.log(res.data.data);
                setBlogs(res.data.data)
                setIsallData(true)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

        var mobileMenuContent = $('.main-header .main-menu .navigation').html();
        $('.sticky-header .navigation').append(mobileMenuContent);
        $(".clearfix li:nth-child(4)").addClass('current');



    if(isData && isallData)
    {
        return (
            <>
                <Header/>
                <section className="blog-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="blog-details__left">
                                    <div className="blog-details__img">
                                        <img src={blog.image} alt="" />
                                        <div className="blog-details__date">
                                            <span className="day">28</span>
                                            <span className="month">Aug</span>
                                        </div>
                                    </div>
                                    <div className="blog-details__content">
                                        <ul className="list-unstyled blog-details__meta">
                                            <li>
                                                <a href="news-details.html">
                                                    <i className="fas fa-user-circle" /> Admin
                                                </a>{" "}
                                            </li>
                                            <li>
                                                <a href="news-details.html">
                                                    <i className="fas fa-comments" /> {blog.comment.length} Comments
                                                </a>
                                            </li>
                                        </ul>
                                        <h3 className="blog-details__title">
                                            {blog.title}
                                        </h3>
                                        <p className="blog-details__text-2">
                                            {blog.description}
                                        </p>
                                        <p className="blog-details__text-2">
                                            Mauris non dignissim purus, ac commodo diam. Donec sit amet
                                            lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                                            Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at
                                            nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a
                                            rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque
                                            vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
                                        </p>
                                        <p className="blog-details__text-2">
                                            Mauris non dignissim purus, ac commodo diam. Donec sit amet
                                            lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                                            Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at
                                            nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a
                                            rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque
                                            vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
                                        </p>
                                    </div>
                                    <div className="blog-details__bottom">
                                        <p className="blog-details__tags">
                                            {" "}
                                            <span>Tags</span> <a href="news-details.html">Education</a>{" "}
                                            <a href="news-details.html">College</a>{" "}
                                        </p>
                                        <div className="blog-details__social-list">
                                            {" "}
                                            <a href="news-details.html">
                                                <i className="fab fa-twitter" />
                                            </a>{" "}
                                            <a href="news-details.html">
                                                <i className="fab fa-facebook" />
                                            </a>{" "}
                                            <a href="news-details.html">
                                                <i className="fab fa-pinterest-p" />
                                            </a>{" "}
                                            <a href="news-details.html">
                                                <i className="fab fa-instagram" />
                                            </a>{" "}
                                        </div>
                                    </div>
                                    <div className="nav-links">
                                        <div className="prev">
                                            <a href="news-details.html" rel="prev">
                                                True factors of the modern healthy lifestyle
                                            </a>
                                        </div>
                                        <div className="next">
                                            <a href="news-details.html" rel="next">
                                                How to lead a healthy &amp; well-balanced life
                                            </a>
                                        </div>
                                    </div>
                                    <div className="comment-one">
                                        <h3 className="comment-one__title">2 Comments</h3>
                                        <div className="comment-one__single">
                                            <div className="comment-one__image">
                                                {" "}
                                                <img src="images/resource/testi-thumb-1.jpg" alt="" />{" "}
                                            </div>
                                            <div className="comment-one__content">
                                                <h3>Kevin Martin</h3>
                                                <p>
                                                    Mauris non dignissim purus, ac commodo diam. Donec sit amet
                                                    lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                                                    Aliquam tellus nulla, sollicitudin at euismod.
                                                </p>
                                                <a
                                                    href="news-details.html"
                                                    className="theme-btn btn-style-one bg-theme-color4 comment-one__btn"
                                                >
                                                    <span className="btn-title">Reply</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="comment-one__single">
                                            <div className="comment-one__image">
                                                {" "}
                                                <img src="images/resource/testi-thumb-2.jpg" alt="" />{" "}
                                            </div>
                                            <div className="comment-one__content">
                                                <h3>Sarah Albert</h3>
                                                <p>
                                                    Mauris non dignissim purus, ac commodo diam. Donec sit amet
                                                    lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                                                    Aliquam tellus nulla, sollicitudin at euismod.
                                                </p>
                                                <a
                                                    href="news-details.html"
                                                    className="theme-btn btn-style-one bg-theme-color4 comment-one__btn"
                                                >
                                                    <span className="btn-title">Reply</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="comment-form">
                                            <h3 className="comment-form__title">Leave a Comment</h3>
                                            <form
                                                id="contact_form"
                                                name="contact_form"
                                                className=""
                                                action="includes/sendmail.php"
                                                method="post"
                                                noValidate="novalidate"
                                            >
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="mb-3">
                                                            <input
                                                                name="form_name"
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Enter Name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-3">
                                                            <input
                                                                name="form_email"
                                                                className="form-control required email"
                                                                type="email"
                                                                placeholder="Enter Email"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <textarea
                                                        name="form_message"
                                                        className="form-control required"
                                                        rows={5}
                                                        placeholder="Enter Message"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <input
                                                        name="form_botcheck"
                                                        className="form-control"
                                                        type="hidden"
                                                        defaultValue=""
                                                    />
                                                    <button
                                                        type="submit"
                                                        className="theme-btn btn-style-one"
                                                        data-loading-text="Please wait..."
                                                    >
                                                        <span className="btn-title">Submit Comment</span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="sidebar">
                                    <div className="sidebar__single sidebar__search">
                                        <form action="#" className="sidebar__search-form">
                                            <input type="search" placeholder="Search here" />
                                            <button type="submit">
                                                <i className="lnr-icon-search" />
                                            </button>
                                        </form>
                                    </div>
                                    <div className="sidebar__single sidebar__post">
                                        <h3 className="sidebar__title">Latest Posts</h3>
                                        <ul className="sidebar__post-list list-unstyled">
                                            <li>
                                                <div className="sidebar__post-image">
                                                    {" "}
                                                    <img src="images/resource/news-1.jpg" alt="" />{" "}
                                                </div>
                                                <div className="sidebar__post-content">
                                                    <h3>
                                                        {" "}
                                                        <span className="sidebar__post-content-meta">
                                                            <i className="fas fa-user-circle" />
                                                            Admin
                                                        </span>{" "}
                                                        <a href="news-details.html">
                                                            Top crypto exchange influencers
                                                        </a>
                                                    </h3>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__post-image">
                                                    {" "}
                                                    <img src="images/resource/news-2.jpg" alt="" />{" "}
                                                </div>
                                                <div className="sidebar__post-content">
                                                    <h3>
                                                        {" "}
                                                        <span className="sidebar__post-content-meta">
                                                            <i className="fas fa-user-circle" />
                                                            Admin
                                                        </span>{" "}
                                                        <a href="news-details.html">
                                                            Necessity may give us best virtual court
                                                        </a>{" "}
                                                    </h3>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__post-image">
                                                    {" "}
                                                    <img src="images/resource/news-3.jpg" alt="" />{" "}
                                                </div>
                                                <div className="sidebar__post-content">
                                                    <h3>
                                                        {" "}
                                                        <span className="sidebar__post-content-meta">
                                                            <i className="fas fa-user-circle" />
                                                            Admin
                                                        </span>{" "}
                                                        <a href="news-details.html">
                                                            You should know about business plan
                                                        </a>{" "}
                                                    </h3>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar__single sidebar__category">
                                        <h3 className="sidebar__title">Categories</h3>
                                        <ul className="sidebar__category-list list-unstyled">
                                            <li>
                                                <a href="news-details.html">
                                                    Artifical Intelligence
                                                    <span className="icon-right-arrow" />
                                                </a>{" "}
                                            </li>
                                            <li className="active">
                                                <a href="news-details.html">
                                                    Cloud Solution
                                                    <span className="icon-right-arrow" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="news-details.html">
                                                    Cyber Data
                                                    <span className="icon-right-arrow" />
                                                </a>{" "}
                                            </li>
                                            <li>
                                                <a href="news-details.html">
                                                    SEO Marketing
                                                    <span className="icon-right-arrow" />
                                                </a>{" "}
                                            </li>
                                            <li>
                                                <a href="news-details.html">
                                                    UI/UX Design
                                                    <span className="icon-right-arrow" />
                                                </a>{" "}
                                            </li>
                                            <li>
                                                <a href="news-details.html">
                                                    Web Development
                                                    <span className="icon-right-arrow" />
                                                </a>{" "}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar__single sidebar__tags">
                                        <h3 className="sidebar__title">Tags</h3>
                                        <div className="sidebar__tags-list">
                                            {" "}
                                            <a href="#">Education</a> <a href="#">Book</a>{" "}
                                            <a href="#">Collage</a> <a href="#">Digital</a>{" "}
                                            <a href="#">Software</a> <a href="#">Language</a>{" "}
                                        </div>
                                    </div>
                                    <div className="sidebar__single sidebar__comments">
                                        <h3 className="sidebar__title">Recent Comments</h3>
                                        <ul className="sidebar__comments-list list-unstyled">
                                            <li>
                                                <div className="sidebar__comments-icon">
                                                    {" "}
                                                    <i className="fas fa-comments" />{" "}
                                                </div>
                                                <div className="sidebar__comments-text-box">
                                                    <p>
                                                        A wordpress commenter on <br />
                                                        launch new mobile app
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__comments-icon">
                                                    {" "}
                                                    <i className="fas fa-comments" />{" "}
                                                </div>
                                                <div className="sidebar__comments-text-box">
                                                    <p>
                                                        {" "}
                                                        <span>John Doe</span> on template:
                                                    </p>
                                                    <h5>comments</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__comments-icon">
                                                    {" "}
                                                    <i className="fas fa-comments" />{" "}
                                                </div>
                                                <div className="sidebar__comments-text-box">
                                                    <p>
                                                        A wordpress commenter on <br />
                                                        launch new mobile app
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__comments-icon">
                                                    {" "}
                                                    <i className="fas fa-comments" />{" "}
                                                </div>
                                                <div className="sidebar__comments-text-box">
                                                    <p>
                                                        {" "}
                                                        <span>John Doe</span> on template:
                                                    </p>
                                                    <h5>comments</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }else
    {
        return(
            <Preloader/>
        )
    }
}

export default SingleBlog