import React from 'react';
import Container from 'react-bootstrap/Container';
import ListAnimals from '../components/Animals/ListAnimals';
import Mission from '../components/Mission';

import '../assets/styles/pages/Home.scss';

export default function Home() {
  return (
    <div>
      <header className="header">
        <h1>PET MATCH</h1>
        <p>Find your PERFECT companion!</p>
      </header>
      <Container>
        <Mission></Mission>
        <ListAnimals></ListAnimals>
      </Container>
    </div>
  );
}
