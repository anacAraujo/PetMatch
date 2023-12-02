import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import dog from '../assets/images/exemple-dog.jpg';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function CardAnimal(props) {
  const { name, breed, age, photo } = props;

  return (
    <div>
      <Card style={{ width: '18rem' }} className="mx-2">
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{breed}</ListGroup.Item>
          <ListGroup.Item>{age}</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
