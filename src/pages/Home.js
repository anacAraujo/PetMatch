import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ListAnimals from '../components/Animals/ListAnimals';
import Mission from '../components/Mission';
import Footer from '../components/Footer';

import '../assets/styles/pages/Home.scss';

export default function Home() {
  return (
    <div>
      <header className="header">
        <h1>PET MATCH</h1>
        <p>Find your PERFECT companion!</p>
      </header>
      <Container>
        <p>What we belive in</p>
        <h3 className="mb-5">Our mission is to find the best match for you and your pet!</h3>
        <Mission></Mission>
        <h3 className="mb-5">Some of our pets available</h3>
        <ListAnimals></ListAnimals>
        <Button variant="primary" className="m-5 px-5 py-3" href="/login">
          See More
        </Button>
      </Container>
      <Footer></Footer>
    </div>
  );
}
