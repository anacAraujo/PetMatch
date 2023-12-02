import React from 'react';
import Quiz from '../components/Quiz';
import DisplayAnimals from '../components/CardAnimal';
import Container from 'react-bootstrap/Container';

import '../assets/styles/pages/Home.scss';

export default function Home() {
  return (
    <div>
      <header className="header">
        <h1>PET MATCH</h1>
        <p>Find your PERFECT companion!</p>
      </header>
      <Container>
        <div>
          <h2>Our Mission</h2>
          <p>Our mission is to find the best match for you and your pet!</p>
        </div>
        <DisplayAnimals></DisplayAnimals>
      </Container>
    </div>
  );
}
