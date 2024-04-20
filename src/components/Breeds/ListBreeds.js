import Col from 'react-bootstrap/Col';
import petfinder from '../../utils/petfinder';
import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ListBreeds(props) {
  const [breeds, setBreeds] = useState([]);

  const { type } = props;

  useEffect(() => {
    async function getAllBreeds() {
      const result = await petfinder.getBreeds(type);
      let breedsNames = [];
      for (const breed of result) {
        breedsNames.push(breed.name);
      }
      setBreeds(breedsNames);
    }
    getAllBreeds();
  }, []);
  return (
    <Col xs={4}>
      {Array.isArray(breeds) &&
        breeds.map((breed, idx) => (
          <div className="text-right" key={idx}>
            <Link to={`/breedinfo/${type}/${breed}`}>{breed}</Link>
          </div>
        ))}
    </Col>
  );
}
