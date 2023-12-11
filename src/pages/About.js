import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/pages/About.scss';

export default function About() {
  return (
    <>
      <div className="title">
        <h1>About us</h1>
      </div>
      <Container>
        <h3 className="my-5">Our mission is to find the best match for you and your pet!</h3>

        <p>
          Welcome to PetMatch, your gateway to finding the perfect companion to share your life's journey. At PetMatch,
          we understand that the bond between pets and their owners is a unique and irreplaceable connection that brings
          immeasurable joy. Our platform is dedicated to making the process of finding your ideal furry friend an
          exciting and fulfilling experience.
        </p>
        <p style={{ textAlign: 'justify' }}>
          PetMatch is on a mission to create lasting connections between people and pets, fostering relationships that
          enhance the lives of both. We strive to be the bridge that brings together individuals and their perfect
          animal companions, ensuring compatibility, happiness, and a lifetime of shared moments.
        </p>
        <h2>Innovative Matchmaking</h2>
        <p>
          What sets PetMatch apart is our cutting-edge matchmaking technology. Our advanced algorithm takes into account
          your lifestyle, preferences, and unique personality traits, as well as the distinctive characteristics of each
          pet in our extensive database. We go beyond superficial qualities to create matches that are based on deep
          compatibility, setting the stage for a harmonious and loving relationship.
        </p>
        <h2>Responsible Pet Adoption</h2>
        <p>
          PetMatch is proud to collaborate with reputable shelters, rescue organizations, and ethical breeders. We
          provide a diverse selection of adoptable pets, each with a detailed profile outlining their temperament,
          activity level, and specific needs. Our commitment to responsible pet ownership ensures that every adoption is
          a well-informed and thoughtful decision.
        </p>
        <h2>Comprehensive Support</h2>
        <p>
          Your journey with PetMatch doesn't end with adoption. We offer a wealth of resources to support you in
          becoming the best pet parent you can be. From expert advice and training tips to a vibrant community of fellow
          pet enthusiasts, PetMatch is your go-to source for all things related to responsible pet ownership.
        </p>
        <h2>Join PetMatch Today</h2>
        <p>
          Embark on a life-changing adventure with PetMatch and discover the joy of unconditional love, unwavering
          companionship, and the extraordinary bond that only a pet can bring into your life. We're not just matching
          people to pets; we're creating lifelong connections that warm hearts and create tails that wag with happiness.
        </p>
        <p>Choose PetMatch – where lasting relationships between people and pets begin.</p>
      </Container>
    </>
  );
}