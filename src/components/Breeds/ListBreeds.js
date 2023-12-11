import Col from 'react-bootstrap/Col';
import petfinder from '../../utils/petfinder';
import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ListBreeds() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    async function getAllBreeds() {
      const result = await petfinder.getBreeds();
      let breedsNames = [];
      for (const breed of result) {
        breedsNames.push(breed.name);
      }
      setBreeds(breedsNames);
      console.log('Breeds: ', breeds);
    }
    getAllBreeds();
  }, []);
  return (
    <Col xs={4}>
      {Array.isArray(breeds) &&
        breeds.map((breed, idx) => (
          <div className="text-right" key={idx}>
            <Link to={`/breedinfo/${breed}`}>{breed}</Link>
          </div>
        ))}
    </Col>
  );
}
