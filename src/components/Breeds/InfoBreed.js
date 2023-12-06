import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ninjas from '../../utils/ninjas';
import Col from 'react-bootstrap/Col';
import ListAnimals from '../Animals/ListAnimals';

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
          <img src={info.image_link} alt={info.name} style={{ width: '200px', height: 'auto' }} />
          <p>
            The {info.name} is a breed that is {info.good_with_children === 5 ? 'very good' : 'not very good'} with
            children. It has a shedding level of {info.shedding} out of 5, which means it{' '}
            {info.shedding > 3 ? 'sheds a lot' : 'does not shed much'}. This breed is{' '}
            {info.barking === 5 ? 'very vocal' : 'not very vocal'}, with a barking level of {info.barking} out of 5. It
            has an energy level of {info.energy} out of 5, indicating it is{' '}
            {info.energy > 3 ? 'high energy' : 'low energy'}. The {info.name} is{' '}
            {info.protectiveness === 5 ? 'very protective' : 'not very protective'}, with a protectiveness level of{' '}
            {info.protectiveness} out of 5. This breed is {info.trainability === 5 ? 'very easy' : 'very difficult'} to
            train, with a trainability level of {info.trainability} out of 5.
          </p>
        </div>
      ))}
      <h3>Some {breed}s</h3>
      <ListAnimals breed={breed}></ListAnimals>
    </Col>
  );
}
