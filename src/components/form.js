import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Form() {

    return (
        <div className="container">
            <div className="row m-5 no-gutters shadow-lg">
                <div className="col-md-6 d-none d-md-block">
                    <img src={""} className="img-fluid" />
                </div>
                <div className="col-md-6 bg-white p-5">
                    {/* {"" !== notice &&
                        <div className="alert alert-warning" role="alert">
                            {notice}
                        </div>
                    } */}
                    <h3 className="pb-3">Login</h3>
                    <div className="form-style">
                        <form>
                            <div className="form-group pb-3">
                                {/* <input type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}></input> */}
                            </div>
                            <div className="form-group pb-3">
                                {/* <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}></input> */}
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center"><input name="" type="checkbox" value="" /> <span className="pl-2 font-weight-bold">Remember Me</span></div>
                                {/* TODO: Add password reset functionality */}
                                <div ><a className="color-purple" href="#" onClick={() => { test() }}>Forget Password?</a></div>
                            </div>
                            <div className="pb-2">
                                {/* <button type="submit" className="btn btn-dark w-100 font-weight-bold mt-2" onClick={(e) => loginWithUsernameAndPassword(e)}>Submit</button> */}
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
    )
}