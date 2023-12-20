import React, { useState, useEffect } from 'react';
import ninjas from '../../utils/ninjas';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function InfoBreed(props) {
  const { type, breed } = props;

  const [infoBreed, setInfoBreed] = useState([]);

  useEffect(() => {
    async function getInfoBreed() {
      const result = await ninjas.getInfoBreed(type, breed);
      if (Array.isArray(result)) {
        setInfoBreed(result);
      } else {
        console.error('getInfoBreed did not return an array', result);
      }
    }
    getInfoBreed();
  }, [breed]);

  return (
    <Col>
      <h1>{breed}</h1>
      {infoBreed.map((info, idx) => (
        <Row key={idx} className="m-5">
          <Col>
            <img src={info.image_link} alt={info.name} style={{ width: '400px', height: 'auto' }} />
          </Col>
          <Col>
            {type === 'dog' ? (
              <p>
                The {info.name} is a breed that is {info.good_with_children === 5 ? 'very good' : 'not very good'} with
                children and {info.good_with_other_dogs === 5 ? 'very good' : 'not very good'} with other dogs. It has a
                shedding level of {info.shedding} out of 5, which means it{' '}
                {info.shedding > 3 ? 'sheds a lot' : 'does not shed much'}. This breed requires{' '}
                {info.grooming > 3 ? 'a lot of' : 'not much'} grooming, with a grooming level of {info.grooming} out of
                5. It {info.drooling > 3 ? 'drools a lot' : 'does not drool much'}, with a drooling level of{' '}
                {info.drooling} out of 5. The {info.name} has a coat length of {info.coat_length} out of 5. It is{' '}
                {info.good_with_strangers === 5 ? 'very friendly' : 'not very friendly'} with strangers, with a
                strangers-friendly level of {info.good_with_strangers} out of 5. This breed is{' '}
                {info.playfulness > 3 ? 'very playful' : 'not very playful'}, with a playfulness level of{' '}
                {info.playfulness} out of 5. The {info.name} is{' '}
                {info.protectiveness > 3 ? 'very protective' : 'not very protective'}, with a protectiveness level of{' '}
                {info.protectiveness} out of 5. This breed is {info.trainability === 5 ? 'very easy' : 'very difficult'}{' '}
                to train, with a trainability level of {info.trainability} out of 5. It has an energy level of{' '}
                {info.energy} out of 5, indicating it is {info.energy > 3 ? 'high energy' : 'low energy'}. The{' '}
                {info.name} is {info.barking > 3 ? 'very vocal' : 'not very vocal'}, with a barking level of{' '}
                {info.barking} out of 5. The life expectancy of this breed is between {info.min_life_expectancy} and{' '}
                {info.max_life_expectancy} years.
              </p>
            ) : (
              <p>
                The {info.name} is a breed that originates from {info.origin} and is {info.length} inches long. It is{' '}
                {info.family_friendly > 3 ? 'very family-friendly' : 'not very family-friendly'}, with a family-friendly
                level of {info.family_friendly} out of 5. This breed has a shedding level of {info.shedding} out of 5,
                which means it {info.shedding > 3 ? 'sheds a lot' : 'does not shed much'}. Its general health level is{' '}
                {info.general_health} out of 5, indicating it is{' '}
                {info.general_health > 3 ? 'generally healthy' : 'not very healthy'}. The {info.name} is{' '}
                {info.playfulness === 5 ? 'very playful' : 'not very playful'}, with a playfulness level of{' '}
                {info.playfulness} out of 5. It is{' '}
                {info.children_friendly === 5 ? 'very friendly' : 'not very friendly'} with children, with a
                children-friendly level of {info.children_friendly} out of 5. This breed requires{' '}
                {info.grooming > 3 ? 'a lot of' : 'not much'} grooming, with a grooming level of {info.grooming} out of
                5. The {info.name} is {info.intelligence === 5 ? 'very intelligent' : 'not very intelligent'}, with an
                intelligence level of {info.intelligence} out of 5. It is{' '}
                {info.other_pets_friendly === 5 ? 'very friendly' : 'not very friendly'} with other pets, with an other
                pets-friendly level of {info.other_pets_friendly} out of 5.The life expectancy of this breed is between{' '}
                {info.min_life_expectancy} and {info.max_life_expectancy} years.
              </p>
            )}
          </Col>
        </Row>
      ))}
    </Col>
  );
}
