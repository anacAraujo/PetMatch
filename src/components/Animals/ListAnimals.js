import CardAnimal from './CardAnimal';
import * as petfinder from '../../utils/petfinder';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';

export default function ListAnimals(props) {
  const [animals, setAnimals] = useState([]);

  let { type, breed } = props;
  console.log('Breed!!!!!!: ', breed);

  useEffect(() => {
    async function getAnimals() {
      const filters = {
        type: type,
        breed: breed,
      };

      const result = await petfinder.getAnimals(filters);
      setAnimals(result);

      console.log('Animals: ', result);
    }

    getAnimals();
  }, [breed]);

  return (
    <Row>
      {animals.map((animal) => (
        <CardAnimal
          key={animal.id}
          name={animal.name}
          breed={animal.breeds.primary}
          age={animal.age}
          photo={animal.photos[0]}
          gender={animal.gender}
          description={animal.description}
          organization_id={animal.organization_id}
        ></CardAnimal>
      ))}
    </Row>
  );
}
