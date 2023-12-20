import CardAnimal from './CardAnimal';
import * as petfinder from '../../utils/petfinder';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import cat from '../../assets/images/sorry-cat.jpg';
import dog from '../../assets/images/sorry-dog.jpg';

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

  if (!animals) {
    return <div>Loading...</div>;
  }
  if (animals.length === 0) {
    return (
      <Row className="mx-5 mb-5">
        <Col xs={6} md={4}>
          {type === 'cat' ? <Image fluid rounded src={cat}></Image> : <Image fluid rounded src={dog}></Image>}
        </Col>
        <Col className="mt-5">
          <h2 className="m-5">Sorry!</h2>
          <p className="mb-5">No animals found.</p>
          <p>
            It seems that there are no pets looking for homes that match what you are looking for! Remember, it's a good
            thing: this means they've already found their family and their forever home.
          </p>
          <p>Try changing your preferences or check back later.</p>
        </Col>
      </Row>
    );
  }
  return (
    <Row className="my-4">
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
          link={animal.url}
        ></CardAnimal>
      ))}
    </Row>
  );
}
