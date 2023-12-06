import CardAnimal from './CardAnimal';
import * as petfinder from '../../utils/petfinder';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';

export default function ListAnimals(props) {
  const [animals, setAnimals] = useState([]);

  let { breed } = props;

  useEffect(() => {
    async function getAnimals() {
      const result = await petfinder.getAnimals(breed);
      setAnimals(result);
      console.log('Animals: ', result);
    }

    getAnimals();
  }, []);

  return (
    <Row>
      {animals.map((animal) => (
        <CardAnimal
          key={animal.id}
          name={animal.name}
          breed={animal.breeds.primary}
          age={animal.age}
          photo={animal.photos[0].medium}
          gender={animal.gender}
          description={animal.description}
          organization_id={animal.organization_id}
        ></CardAnimal>
      ))}
    </Row>
  );
}
