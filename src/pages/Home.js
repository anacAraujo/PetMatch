import React from 'react'; // Importing the React library
import Container from 'react-bootstrap/Container'; // Importing the Container component from react-bootstrap
import Button from 'react-bootstrap/Button'; // Importing the Button component from react-bootstrap
import ListAnimals from '../components/Animals/ListAnimals'; // Importing the ListAnimals component from the local file
import Mission from '../components/Mission'; // Importing the Mission component from the local file
import Footer from '../components/Footer'; // Importing the Footer component from the local file
import { auth } from '../utils/firebase'; // Importing the auth object from the firebase utility file

import '../assets/styles/pages/Home.scss'; // Importing the SCSS styles for the Home page

// Defining the Home component
export default function Home() {
  console.log('HOME currentUser: ', auth?.currentUser);
  return (
    <div>
      <header className="header">
        <h1>PET MATCH</h1>
        <p>Find your PERFECT companion!</p>
      </header>
      <Container>
        {' '}
        {/* Using the Container component to wrap the content */}
        <p>What we belive in</p>
        <h3>Our mission is to find the best match for you and your pet!</h3>
        {/* Rendering the Mission component */}
        <Mission></Mission>
        <h3 className="mb-4">Some of our pets available</h3>
        {/* Rendering the ListAnimals component to display some dogs - dog is the defailt value of type of animal */}
        <ListAnimals type={'dog'}></ListAnimals>
        {/* Rendering the ListAnimals component to display some cats */}
        <ListAnimals type={'cat'}></ListAnimals>
        {auth.currentUser ? ( // Checking if there is a current user logged in
          <Button variant="primary" className="m-5 px-5 py-3" href="/profile">
            See My Matches
          </Button> // If there is a current user, render a button that leads to the user's profile
        ) : (
          <Button variant="primary" className="m-5 px-5 py-3" href="/login">
            See More
          </Button> // If there is no current user, render a button that leads to the login page
        )}
      </Container>
      {/* Rendering the Footer component */}
      <Footer></Footer>
    </div>
  );
}
