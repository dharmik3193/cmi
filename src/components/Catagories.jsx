import { Link } from "react-router-dom";
import { TbBrandAndroid } from "react-icons/tb";
import { SiNodedotjs, SiReacttable } from "react-icons/si";

const Catagories = () => {
    return (
        <>
            {/* Categories Section */}
            <section className="categories-section-current">
                <div className="container">
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
                                    <Link to='/courses'>
                                        Personality <br />
                                        Development
                                    </Link>
                                </h6>
                            </div>
                        </div>
                        {/* Category Block */}
                        <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="icon iconstr" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                </div>
                                <h6 className="title">
                                    <Link to='/courses'>
                                        Programming <br />
                                        Design
                                    </Link>
                                </h6>
                            </div>
                        </div>
                        {/* Category Block */}
                        <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <SiReacttable className="icon iconpadding"/>
                                </div>
                                <h6 className="title">
                                    <Link to='/courses'>
                                        Front end <br />
                                        Development
                                    </Link>
                                </h6>
                            </div>
                        </div>
                        {/* Category Block */}
                        <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <SiNodedotjs className="icon iconpadding"/>
                                </div>
                                <h6 className="title">
                                    <Link to='/courses'>
                                        Back end <br />
                                        Development
                                    </Link>
                                </h6>
                            </div>
                        </div>
                        {/* Category Block */}
                        <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <TbBrandAndroid className="icon iconstr"/>
                                </div>
                                <h6 className="title">
                                    <Link to='/courses'>
                                        Mobile App <br />
                                        Development
                                    </Link>
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
                                    <Link to='/courses'>
                                        Non Programming <br />
                                        Design
                                    </Link>
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