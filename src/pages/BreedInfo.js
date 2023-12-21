import React from 'react';
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InfoBreed from '../components/Breeds/InfoBreed';
import ListBreeds from '../components/Breeds/ListBreeds';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ListAnimals from '../components/Animals/ListAnimals';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function BreedInfo() {
  const { type, breed } = useParams();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="mt-5" style={{ textAlign: 'left' }}>
        <Button variant="primary" className="m-5" onClick={handleShow}>
          Choose Breed
        </Button>
      </div>
      <Container className="p-0">
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Breeds</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ListBreeds type={type}></ListBreeds>
          </Offcanvas.Body>
        </Offcanvas>

        <Row>
          <InfoBreed type={type} breed={breed}></InfoBreed>
        </Row>

        <Row>
          <h3 className="m-3">Some {breed}s available</h3>
          <ListAnimals type={type} breed={breed} limit={8}></ListAnimals>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}
