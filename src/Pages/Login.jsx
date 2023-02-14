import { useEffect } from "react";
import Footer from "../components/Footer";

const Login = () => {

    useEffect(() => {

    }, [])

    return (
        <>

            <div style={{width:"100%"}}>
                <div className="main-box-login my-5">
                    <div>
                        <img src={require('../Assets/codesign.png')}></img>
                    </div>
                    <div>
                        <input type="text" placeholder="Email Id" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <div>
                        <input type="button" value="Login" />
                    </div>
                </div>
            </div>
            {/* <Footer/> */}

        </>
    )
}

export default Login;

