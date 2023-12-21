import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import image from '../assets/images/quiz.jpg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { setPreferencesDB } from '../utils/firebase';
import Footer from '../components/Footer';

export default function Quiz() {
  const navigate = useNavigate();

  // TODO get current preferences from DB, to fill the form

  const [type, setType] = useState('cat');
  const [age, setAge] = useState('baby');
  const [size, setSize] = useState('small');
  const [gender, setGender] = useState('male');
  const [good_with_children, setGood_with_children] = useState(false);
  const [good_with_dogs, setGood_with_dogs] = useState(false);
  const [good_with_cats, setGood_with_cats] = useState(false);

  const setPreferences = async (e) => {
    e.preventDefault();

    const preferences = {
      type,
      age,
      size,
      gender,
      good_with_children,
      good_with_dogs,
      good_with_cats,
    };

    await setPreferencesDB(preferences);

    navigate(`/profile `);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleGood_with_childrenChange = (e) => {
    setGood_with_children(e.target.checked);
  };

  // TODO refactor
  const handleGood_with_dogsChange = (e) => {
    setGood_with_dogs(e.target.checked);
  };

  const handleGood_with_catsChange = (e) => {
    setGood_with_cats(e.target.checked);
  };

  return (
    <>
      <Container>
        <Row className="m-5 no-gutters shadow-lg">
          <h3 className="pb-3 mt-4">Let's find your perfect match</h3>
          <p>Tell us about your lifestyle and preferences</p>
          <Col className="mt-5">
            <Image src={image} rounded fluid style={{ width: '100%', height: 'auto' }} />
          </Col>
          <Col className="col-md-6 bg-white p-5">
            <Form className="primary">
              <div className="form-style mb-3">
                <Form.Group as={Col} id="type" className="d-flex flex-column align-items-start m-3">
                  <Form.Label>I am looking for a:</Form.Label>
                  <Form.Select defaultValue="cat" onChange={handleTypeChange} className="text-align-right">
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} id="age" className="d-flex flex-column align-items-start mt-4 mx-3">
                  <Form.Label> That is:</Form.Label>
                  <Form.Select defaultValue="baby" onChange={handleAgeChange}>
                    <option value="baby">Baby</option>
                    <option value="young">Young</option>
                    <option value="adult">Adult</option>
                    <option value="senior">Senior</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} id="size" className="d-flex flex-column align-items-start mt-4 mx-3">
                  <Form.Select defaultValue="small" onChange={handleSizeChange}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">XLarge</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} id="gender" className="d-flex flex-column align-items-start mt-4 mx-3">
                  <Form.Select defaultValue="male" onChange={handleGenderChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Form.Select>
                </Form.Group>

                <Form.Label className="d-flex flex-column align-items-start mt-4 mx-3"> I nedd it to be: </Form.Label>
                <div className="d-flex align-items-center justify-content-between">
                  <Form.Group className="mb-3" id="good_with_children">
                    <Form.Check
                      type="checkbox"
                      label="Good with children"
                      checked={good_with_children}
                      onChange={handleGood_with_childrenChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" id="good_with_dogs">
                    <Form.Check
                      type="checkbox"
                      label="Good with dogs"
                      checked={good_with_dogs}
                      onChange={(e) => setGood_with_dogs(e.target.checked)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" id="good_with_cats">
                    <Form.Check
                      type="checkbox"
                      label="Good with cats"
                      checked={good_with_cats}
                      onChange={(e) => setGood_with_cats(e.target.checked)}
                    />
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
      <Footer></Footer>
    </>
  );
}
