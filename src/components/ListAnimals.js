import tokenData from '../utils/getToken';
import CardAnimal from './CardAnimal';

export default function ListAnimals() {
  const getAnimals = async (animals) => {
    let animalsInfo = await tokenData();
    return animalsInfo.animals;
  };

  const displayAnimalInfo = animalsInfo.map((animal, idx) => (
    <CardAnimal
      key={animal.id}
      name={animal.name}
      breed={animal.breeds[2]}
      age={animal.age}
      photo={animal.photos[0]}
    ></CardAnimal>
  ));

  return (
    <div
      onLoad={() => {
        getAnimals();
      }}
    >
      <h1>Animals</h1>
      <ul>{displayAnimalInfo}</ul>
    </div>
  );
}
