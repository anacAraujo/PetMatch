import Col from 'react-bootstrap/Col';
import dogceo from '../../utils/dogceo';
import { useState, useEffect } from 'react';

export default function ListBreeds() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    async function getAllBreeds() {
      const result = await dogceo.getAllBreeds();
      setBreeds(result);
      console.log('Breeds: ', result);
    }
    getAllBreeds();
  }, []);

  return (
    <Col>
      {breeds.map((breed) => (
        <p>{breed}</p>
      ))}
    </Col>
  );
}
