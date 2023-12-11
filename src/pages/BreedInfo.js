import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InfoBreed from '../components/Breeds/InfoBreed';
import ListBreeds from '../components/Breeds/ListBreeds';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function BreedInfo() {
  const { breed } = useParams();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div style={{ textAlign: 'left' }}>
        <Button variant="primary" className="m-2" onClick={handleShow}>
          Choose Breed
        </Button>
      </div>
      <Container className="p-0">
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Breeds</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ListBreeds></ListBreeds>
          </Offcanvas.Body>
        </Offcanvas>

        <Row>
          <InfoBreed></InfoBreed>
        </Row>
      </Container>
    </>
  );
}
