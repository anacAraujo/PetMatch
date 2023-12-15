import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import noImg from '../../assets/images/no-photo-found.png';
import { Link } from 'react-router-dom';

export default function CardAnimal(props) {
  let { type, name, breed, age, photo, gender, description, organization_id, link } = props;

  if (!description) {
    description = `Hi there! My name is ${name}, and I am a cute pet looking for a home! Please adopt me! :)`;
  }

  if (photo) {
    photo = photo.medium;
  } else {
    photo = noImg;
  }

  return (
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          xs={6}
          md={4}
          variant="top"
          src={photo}
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Age: {age} | Gender: {gender}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link style={{ textDecoration: 'none', color: 'inherit' }}>
            <Link to={`/breedinfo/${type}/${breed}`}>Breed: {breed}</Link>
          </Card.Link>
        </Card.Body>
        <Card.Body>
          <Card.Link style={{ textDecoration: 'none', color: 'inherit' }}>
            <Link to={`/organization/${organization_id}`}>See organization</Link>
          </Card.Link>
        </Card.Body>
        <Card.Body>
          <Card.Link style={{ textDecoration: 'none', color: 'inherit' }}>
            <Link target="blank" to={link}>
              More Information
            </Link>
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
