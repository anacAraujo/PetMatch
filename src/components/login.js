import React, { useState } from "react";
import "../styles/login.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../layout";
import loginImg from "../assets/images/login-dog.jpg"
import getDogs from "./getDogs";
import tokenData from "./getToken";

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
    const test = async (e) => {
        
                let a =await tokenData()
                console.log("token 1: " +  a);
            }

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
                                {/* TODO: Add password reset functionality */}
                                <div ><a className="color-purple" href="#" onClick={() => {test()}}>Forget Password?</a></div>
                            </div>
                            <div className="pb-2">
                                <button type="submit" className="btn btn-dark w-100 font-weight-bold mt-2" onClick={(e) => loginWithUsernameAndPassword(e)}>Submit</button>
                            </div>
                        </form>
                        <div className="sideline">OR</div>
                        <div>
                            {/* TODO: Add Facebook or Google login functionality */}
                            <button type="submit" className="button w-100 font-weight-bold mt-2"><i className="fa fa-facebook" aria-hidden="true"></i> Login With Facebook</button>
                        </div>
                        <div className="pt-4 text-center">
                            Need to sign up for an account? <Link className="color-purple" to="/signup">Click here.</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}