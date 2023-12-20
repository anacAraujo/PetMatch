import { useNavigate } from 'react-router-dom';
import { auth, db } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Nav, Container, Row, Col, Button, Image } from 'react-bootstrap';
import { useState } from 'react';
import ListAnimals from '../components/Animals/ListAnimals';
import Footer from '../components/Footer';
import { UserContext } from '../context/UserContext';
import cat from '../assets/images/profile-cat.jpg';
import dog from '../assets/images/profile-dog.jpg';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';

export default function Profile() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const value = React.useContext(UserContext);

  const { type, age, size, gender, good_with_children, good_with_dogs, good_with_cats } = JSON.parse(
    localStorage.getItem('quizResponse')
  );

  const [idPreference, setIdPreferences] = useState('');
  const preferencesCollectionRef = collection(db, 'preferences');

  useEffect(() => {
    const getPreferences = async () => {
      console.log(user);
      try {
        const data = await getDocs(preferencesCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const userPreferences = filteredData.filter((item) => item.id_user === user.uid);

        console.log('userPreferences', userPreferences);

        setIdPreferences(userPreferences[0].id);

        console.log('idPreferences', idPreference);
      } catch (error) {
        console.error(error);
      }
    };
    getPreferences();
  }, []);

  const [selectedTab, setSelectedTab] = useState('My Matches');
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const deletePreferences = async (id) => {
    const preferencesDoc = doc(db, 'preferences', id);
    await deleteDoc(preferencesDoc);
  };

  const logoutUser = async (e) => {
    e.preventDefault();

    await signOut(auth);
    value.func(false);
    navigate('/');
  };

  return (
    <>
      <Container className=" mt-5">
        <Row className=" justify-content-center mt-5">
          <div className=" text-center mt-5">
            <h2>
              Welcome <em className="text-decoration-underline">{user?.displayName || user?.email}</em>.
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
            <Row className="m-5">
              <Col xs={7} md={5}>
                {type === 'cat' ? <Image fluid rounded src={cat}></Image> : <Image fluid rounded src={dog}></Image>}
              </Col>
              <Col className="mt-5">
                <p>I am looking for a {type}! </p>
                <p>
                  I would rather it was an {age} pet, that is {size} and a {gender}.
                </p>
                <p>
                  It has to be {good_with_children ? 'good with children, ' : ''}{' '}
                  {good_with_dogs ? 'good with dogs, ' : ''} {good_with_cats ? 'good with cats' : ''}
                </p>

                <Button onClick={() => deletePreferences(idPreference)} className="px-5 py-3 m-5" href="/quiz">
                  Retake Quiz
                </Button>
              </Col>
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
