import CardAnimal from './CardAnimal';
import * as petfinder from '../../utils/petfinder';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';

export default function ListAnimals(props) {
  const [animals, setAnimals] = useState([]);

  let { type, breed, age, size, gender, good_with_children, good_with_dogs, good_with_cats, limit, sort } = props;

  useEffect(() => {
    async function getAnimals() {
      const filters = {
        type: type,
        breed: breed,
        age: age,
        size: size,
        gender: gender,
        good_with_children: good_with_children,
        good_with_dogs: good_with_dogs,
        good_with_cats: good_with_cats,
        limit: limit,
        sort: sort,
      };

      const result = await petfinder.getAnimals(filters);
      setAnimals(result);
    }

    getAnimals();
  }, [breed]);

  return (
    <Row>
      {animals.map((animal) => (
        <CardAnimal
          key={animal.id}
          type={type}
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
