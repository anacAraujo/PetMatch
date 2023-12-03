import CardAnimal from './CardAnimal';
import petfinder from '../utils/petfinder';
import { useState, useEffect } from 'react';

export default function ListAnimals() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    async function getAnimals() {
      const result = await petfinder.getAnimals();
      setAnimals(result);
      console.log('Animals: ', result);
    }
    getAnimals();
  }, []);

  return (
    <div>
      <ul>
        {animals.map((animal) => (
          <CardAnimal
            key={animal.id}
            name={animal.name}
            breed={animal.breeds.primary}
            age={animal.age}
            photo={animal.photos[0].medium}
          ></CardAnimal>
        ))}
      </ul>
    </div>
  );
}
