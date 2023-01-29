import Abouthome from "../components/Abouthome"
import Coursehome from "../components/Coursehome"

const About = () => {
    return (
        <>
            <>
                {/* Start main-content */}
                <section
                    className="page-title"
                    style={{ backgroundImage: "url(images/background/page-title.jpg)" }}
                >
                    <div className="auto-container">
                        <div className="title-outer">
                            <h1 className="title">About Us</h1>
                            <ul className="page-breadcrumb">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a href="#">Pages</a>
                                </li>
                                <li>About</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* end main-content */}
            </>

            <Abouthome />
            <Coursehome />
        </>
    )
}

export default About;