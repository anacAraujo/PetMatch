import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Quiz() {
  return (
    <Container>
      <Row className="m-5 no-gutters shadow-lg">
        <h3 className="pb-3 mt-4">About Me</h3>
        <p>Tell us about your lifestyle and preferences</p>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Select an animal</option>
            <option value="1">Cat</option>
            <option value="2">Dog</option>
          </Form.Select>
        </Col>
        <Col></Col>
        <div className="col-md-6 bg-white p-5">
          {/* {"" !== notice &&
                        <div className="alert alert-warning" role="alert">
                            {notice}
                        </div>
                    } */}

          <div className="form-style">
            <form>
              <div className="form-group pb-3">
                {/* <input type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}></input> */}
              </div>
              <div className="form-group pb-3">
                {/* <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}></input> */}
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <input name="" type="checkbox" value="" /> <span className="pl-2 font-weight-bold">Remember Me</span>
                </div>
                {/* TODO: Add password reset functionality */}
                <div>
                  <Link
                    to="#"
                    onClick={() => {
                      test();
                    }}
                  >
                    Forget Password?
                  </Link>
                </div>
              </div>
              <div className="pb-2">
                {/* <button type="submit" className="btn btn-dark w-100 font-weight-bold mt-2" onClick={(e) => loginWithUsernameAndPassword(e)}>Submit</button> */}
              </div>
            </form>
            <div className="sideline">OR</div>
            <div>
              {/* TODO: Add Facebook or Google login functionality */}
              <button type="submit" className="button w-100 font-weight-bold mt-2">
                <i aria-hidden="true"></i> Login With Facebook
              </button>
            </div>
            <div className="pt-4 text-center">
              Need to sign up for an account? <Link to="/signup">Click here.</Link>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}
