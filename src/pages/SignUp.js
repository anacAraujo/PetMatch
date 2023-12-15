import React, { useState } from 'react';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import signUpImg from '../assets/images/quizz.jpg';

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notice, setNotice] = useState('');

  const signupWithUsernameAndPassword = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/');
      } catch {
        setNotice('Sorry, something went wrong. Please try again.');
      }
    } else if (password.length < 6) {
      setNotice('Password must be at least 6 characters long.');
    } else {
      setNotice("Passwords don't match. Please try again.");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        {'' !== notice && (
          <div className="alert alert-warning" role="alert">
            {notice}
          </div>
        )}
        <Col>
          <Form className="mx-5 mt-3 pt-3 pb-3">
            <div className="form-style mb-3">
              <Form.Control
                className="mb-2"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control
                className="mb-2"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Control
                className="mb-2"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2">
              <Button onClick={(e) => signupWithUsernameAndPassword(e)}>Sign Up</Button>
            </div>
            <div className="mt-3 text-center">
              <span>
                Go back to login? <Link to="/login">Click here.</Link>
              </span>
            </div>
          </Form>
        </Col>
        <Col>
          <Image rounded src={signUpImg} className="img-fluid"></Image>
        </Col>
      </Row>
    </Container>
  );
}
