import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import image from '../assets/images/quiz.jpg';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
  const [notice, setNotice] = useState('');
  const navigate = useNavigate();

  const setPreferences = async (e) => {
    e.preventDefault();

    try {
      // await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch {
      setNotice('Anser all the questions.');
    }
  };

  return (
    <Container className="">
      <Row className="m-5 no-gutters shadow-lg">
        <h3 className="pb-3 mt-4">Let's find your perfect match</h3>
        <p>Tell us about your lifestyle and preferences</p>
        {'' !== notice && (
          <div className="alert alert-warning" role="alert">
            {notice}
          </div>
        )}
        <Col className="mt-5">
          <Image src={image} className="img-fluid" style={{ width: '100%', height: 'auto' }} />
        </Col>
        <Col className="col-md-6 bg-white p-5">
          <Form className="primary">
            <div className="form-style mb-3">
              <Form.Group as={Col} id="type" className="d-flex flex-column align-items-start m-3">
                <Form.Label>I am looking for a:</Form.Label>
                <Form.Select defaultValue="Select an animal" className="text-align-right">
                  <option value="cat">Cat</option>
                  <option value="dog">Dog</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} id="age" className="d-flex flex-column align-items-start mt-4 mx-3">
                <Form.Label> That is:</Form.Label>
                <Form.Select defaultValue="Select an animal">
                  <option value="baby">Baby</option>
                  <option value="young">Young</option>
                  <option value="adult">Adult</option>
                  <option value="senior">Senior</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} id="size" className="d-flex flex-column align-items-start mt-4 mx-3">
                <Form.Select defaultValue="Select an animal">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="xlarge">XLarge</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} id="gender" className="d-flex flex-column align-items-start mt-4 mx-3">
                <Form.Select defaultValue="Select an animal">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Select>
              </Form.Group>

              <Form.Label className="d-flex flex-column align-items-start mt-4 mx-3"> I nedd it to be: </Form.Label>
              <div className="d-flex align-items-center justify-content-between">
                <Form.Group className="mb-3" id="good_with_children">
                  <Form.Check type="checkbox" label="Good with children" />
                </Form.Group>
                <Form.Group className="mb-3" id="good_with_dogs">
                  <Form.Check type="checkbox" label="Good with dogs" />
                </Form.Group>
                <Form.Group className="mb-3" id="good_with_cats">
                  <Form.Check type="checkbox" label="Good with cats" />
                </Form.Group>
              </div>

              <div className="d-grid gap-2">
                <Button variant="primary" onClick={(e) => setPreferences(e)}>
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
