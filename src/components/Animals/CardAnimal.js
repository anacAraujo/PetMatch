import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import noImg from '../../assets/images/no-photo-found.png';
import { Link } from 'react-router-dom';
import OrganizationsContext from '../../context/OrganizationsContext';
import { useContext } from 'react';

export default function CardAnimal(props) {
  const organizations = useContext(OrganizationsContext);
  console.log('Organizations: ', organizations);

  let { name, breed, age, photo, gender, description, organization_id } = props;
  console.log('organization_id: ', organization_id);
  console.log('organizations[organization_id]: ', organizations[organization_id]);
  if (description === null) {
    description = `Hi there! My name is ${name}, and I am a cute pet looking for a home! Please adopt me! :)`;
  }

  if (photo === undefined) {
    photo = { noImg };
  }

  return (
    <Col>
      <Card style={{ width: '18rem' }} className="mx-2">
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
          <ListGroup.Item>Age: {age}</ListGroup.Item>
          <ListGroup.Item>Gender: {gender}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link style={{ textDecoration: 'none', color: 'inherit' }}>
            <Link to={`/breedinfo/${breed}`}>Breed: {breed}</Link>
          </Card.Link>
          <Card.Link style={{ textDecoration: 'none', color: 'inherit' }}>
            <Link to={``}>Organization: {organizations[organization_id]}</Link>
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
