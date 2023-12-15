import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import ListAnimals from '../components/Animals/ListAnimals';
import Footer from '../components/Footer';

export default function Profile() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const { type, age, size, gender, good_with_children, good_with_dogs, good_with_cats } = JSON.parse(
    localStorage.getItem('quizResponse')
  );

  const [selectedTab, setSelectedTab] = useState('My Matches');
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const logoutUser = async (e) => {
    e.preventDefault();

    await signOut(auth);
    navigate('/');
  };

  return (
    <>
      <Container className=" mt-5">
        <Row className=" justify-content-center mt-5">
          <div className=" text-center mt-5">
            <h2>
              Welcome <em className="text-decoration-underline">{user?.email}</em>.
            </h2>
          </div>
          <Nav variant="tabs" className="m-5">
            <Nav.Item>
              <Nav.Link onClick={() => handleTabClick('My Information')}>My Information</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => handleTabClick('My Preferences')}>My Preferences</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => handleTabClick('My Matches')}>My Matches</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          {selectedTab === 'My Information' && (
            <Col>
              <h3>My Information</h3>
              <p>Email: {user?.email}</p>
              <Button className="my-5 px-4" onClick={(e) => logoutUser(e)}>
                Logout
              </Button>
            </Col>
          )}

          {selectedTab === 'My Preferences' && (
            <Row>
              <p>I am looking for a {type}! </p>
              <p>
                I would rather it was an {age} pet, that is {size} and a {gender}.
              </p>
              <p>
                It has to be {good_with_children ? 'good with children, ' : ''}{' '}
                {good_with_dogs ? 'good with dogs, ' : ''} {good_with_cats ? 'good with cats' : ''}
              </p>

              <Button href="/quiz">Retake Quiz</Button>
            </Row>
          )}

          {selectedTab === 'My Matches' && (
            <Row>
              <ListAnimals
                type={type}
                age={age}
                size={size}
                gender={gender}
                good_with_children={good_with_children}
                good_with_dogs={good_with_dogs}
                good_with_cats={good_with_cats}
                limit={3}
                sort={'-recent'}
              ></ListAnimals>
            </Row>
          )}
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}
