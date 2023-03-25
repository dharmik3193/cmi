import axios from "axios";
import { useEffect, useState } from "react";

const Signup = () => {

    const [course, setCourse] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [addcourse, setAddcourse] = useState('');

    useEffect(() => {

        axios.get('https://attractive-gold-wetsuit.cyclic.app/getall_courses')
            .then(function (res) {
                console.log(res.data.data);
                setCourse(res.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })

    }, [])

    const add_inquiry = (e) => {
        e.preventDefault()
        axios.post('https://attractive-gold-wetsuit.cyclic.app/add_inquiry', {
            name:name,
            email:email,
            course:addcourse
          })
          .then(function (res) {
            console.log(res);
            setName('')
            setEmail('');
            setAddcourse('')
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    return (
        <>
            {/* Signup Section */}
            <section className="signup-section">
                <div className="container">
                    <div className="anim-icons">
                        <span className="icon icon-paper-clip bounce-x" />
                    </div>
                    <div
                        className="outer-box"
                        style={{ backgroundImage: "url(./images/background/3.jpg)" }}
                    >
                        <span className="float-icon icon-pencil-line wow fadeInUp" />
                        <div className="row">
                            {/* Title Column */}
                            <div className="title-column col-lg-6 col-md-12 col-sm-12">
                                <div className="sec-title light">
                                    <h2>
                                        Sign up for a<br /> free trial lesson
                                        <br />
                                    </h2>
                                    <div className="text">
                                        Are you looking for training and placement?
                                        WE PROVIDE 100% PLACEMENT GUARANTEE! Are you looking for training and placements?
                                    </div>
                                </div>
                            </div>
                            {/* Form Column */}
                            <div className="form-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    {/* Sign Form */}
                                    <div className="signup-form wow fadeInLeft">
                                        {/*Contact Form*/}
                                        <form id="contact-form">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="full_name"
                                                    placeholder="Your name"
                                                    required="true"
                                                    value={name}
                                                    onChange={(e)=>{setName(e.target.value)}}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="Email"
                                                    placeholder="Mobile Number"
                                                    required="true"
                                                    value={email}
                                                    onChange={(e)=>{setEmail(e.target.value)}}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <select className="custom-select" value={addcourse} onChange={(e)=>{setAddcourse(e.target.value)}}>
                                                    <option value="">Select course</option>
                                                    {
                                                        course.map((item,index)=>{
                                                            return(
                                                                <option value={item.title} key={index}>{item.title}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <button
                                                    className="theme-btn btn-style-one"
                                                    onClick={add_inquiry}
                                                >
                                                    Send Request
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    {/*End Contact Form */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End FAQ Section */}
        </>

    )
}

export default Signup;