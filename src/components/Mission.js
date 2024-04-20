import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import dog from '../assets/images/exemple-dog.jpg';

export default function Mission() {
  return (
    <Row>
      <Col xs={8} md={6} className="my-5">
        <Image src={dog} rounded className="mt-5" style={{ width: '100%', height: 'auto' }}></Image>
      </Col>
      <Col className="my-5 mx-5 p-5 text-right">
        <p>About</p>
        <h2>Who we are</h2>
        <p className="my-4">
          Our platform is dedicated to making the process of finding your ideal furry friend an exciting and fulfilling
          experience. We strive to be the bridge that brings together individuals and their perfect animal companions,
          ensuring compatibility, happiness, and a lifetime of shared moments.
        </p>
        <Button className="my-3 px-5 py-3" variant="primary" href="/about">
          Learn more
        </Button>
      </Col>
    </Row>
  );
}
