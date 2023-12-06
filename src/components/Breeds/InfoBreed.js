import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ninjas from '../../utils/ninjas';
import Col from 'react-bootstrap/Col';

export default function InfoBreed() {
  const { breed } = useParams();
  console.log('Breed: ', breed);

  const [infoBreed, setInfoBreed] = useState([]);
  console.log('Info breed: ', infoBreed);

  useEffect(() => {
    async function getInfoBreed() {
      const result = await ninjas.getInfoBreed('dogs', breed);
      if (Array.isArray(result)) {
        setInfoBreed(result);
      } else {
        console.error('getInfoBreed did not return an array', result);
      }
    }
    getInfoBreed();
  }, []);
  return (
    <Col>
      {infoBreed.map((info) => (
        <div>
          <p>{info.good_with_children}</p>
        </div>
      ))}
    </Col>
  );
}
