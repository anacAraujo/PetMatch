import React, { useState } from "react";
import "../styles/login.scss";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../layout";
import loginImg from "../assets/images/login-dog.jpg";
import tokenData from "./getToken";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { FaFacebookSquare } from "react-icons/fa";


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

        let a = await tokenData()
        console.log("token 1: " + a);
    }

    return (
        <Container>
            <Row className="m-5 no-gutters shadow-lg">
                <Col className=" d-none d-md-block">
                    <img src={loginImg} className="img-fluid" />
                </Col>
                <Col className=" g-white p-5">
                    {"" !== notice &&
                        <div className="alert alert-warning" role="alert">
                            {notice}
                        </div>
                    }
                    <h3 className="pb-3">Login</h3>
                    <Form >
                        <div className="form-style mb-3">
                            <Form.Control className="mb-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Form.Control className="mb-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <Form.Check className="mb-3 "
                                type='checkbox'
                                id='default-checkbox'
                                label='Remember Me' //TODO
                            />
                            <Link className="color-purple" onClick={() => { test() }}>Forget Password?</Link>
                            {/* TODO: Add password reset functionality */}
                        </div>
                        <div className="d-grid gap-2">
                            <Button variant="dark" onClick={(e) => loginWithUsernameAndPassword(e)}>
                                Login
                            </Button>
                        </div>
                        <div className="sideline">OR</div>
                        <div className="d-grid gap-2">
                            <Button variant="primary">
                                <FaFacebookSquare className="mx-2" />
                                Login With Facebook
                            </Button>  {/* TODO: Add Facebook or Google login functionality */}
                        </div>
                        <div className="pt-4 text-center">
                            Need to sign up for an account? <Link className="color-purple" to="/signup">Click here.</Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}