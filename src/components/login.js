import React, { useState } from "react";
import "../styles/login.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../layout";
import loginImg from "../assets/img/login-dog.jpg"

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");

    const value = React.useContext(UserContext);

    const loginWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            value.func(true);
            navigate("/");
        } catch {
            setNotice("You entered a wrong username or password.");
        }
    }

    // return (
    //     <div className="container">
    //         <div className="row m-5 no-gutters shadow-lg">
    //             <div className="col justify-content-center">
    //                 <form className="col-md-6 bg-white p-5 form-style">
    //                     {"" !== notice &&
    //                         <div className="alert alert-warning" role="alert">
    //                             {notice}
    //                         </div>
    //                     }
    //                     <h1 className="pb-3">Login</h1>
    //                     <div className="form-floating mb-3">
    //                         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
    //                         <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    //                     </div>
    //                     <div className="form-floating mb-3">
    //                         <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
    //                         <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    //                     </div>
    //                     <div className="d-grid">
    //                         <button type="submit" className="btn btn-primary pt-3 pb-3" onClick={(e) => loginWithUsernameAndPassword(e)}>Submit</button>
    //                     </div>
    //                     <div className="mt-3 text-center">
    //                         <span>Need to sign up for an account? <Link to="../signup">Click here.</Link></span>
    //                     </div>
    //                 </form>
    //             </div>
    //             <div className="col-md-6 d-none d-md-block">
    //                 <img src={loginImg} alt="dog" className="img-fluid"></img>
    //             </div>
    //         </div>
    //     </div>
    // );

    return (
        <div className="container">
            <div className="row m-5 no-gutters shadow-lg">
                <div className="col-md-6 d-none d-md-block">
                    <img src={loginImg} className="img-fluid" />
                </div>
                <div className="col-md-6 bg-white p-5">
                    {"" !== notice &&
                        <div className="alert alert-warning" role="alert">
                            {notice}
                        </div>
                    }
                    <h3 className="pb-3">Login</h3>
                    <div className="form-style">
                        <form>
                            <div className="form-group pb-3">
                                <input type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <div className="form-group pb-3">
                                <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center"><input name="" type="checkbox" value="" /> <span className="pl-2 font-weight-bold">Remember Me</span></div>
                                <div ><a className="color-purple" href="#">Forget Password?</a></div>
                            </div>
                            <div className="pb-2">
                                <button type="submit" className="btn btn-dark w-100 font-weight-bold mt-2" onClick={(e) => loginWithUsernameAndPassword(e)}>Submit</button>
                            </div>
                        </form>
                        <div className="sideline">OR</div>
                        <div>
                            <button type="submit" className="button w-100 font-weight-bold mt-2"><i className="fa fa-facebook" aria-hidden="true"></i> Login With Facebook</button>
                        </div>
                        <div className="pt-4 text-center">
                            Need to sign up for an account? <Link className="color-purple" to="../components/signup">Click here.</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}