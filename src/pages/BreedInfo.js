import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InfoBreed from '../components/Breeds/InfoBreed';
import ListBreeds from '../components/Breeds/ListBreeds';
import { useParams } from 'react-router-dom';

export default function BreedInfo() {
  const { breed } = useParams();
  return (
    <Container>
      <Row>
        <h1>{breed}</h1>
        <ListBreeds></ListBreeds>
        <InfoBreed></InfoBreed>
      </Row>
    </Container>
  );
}
