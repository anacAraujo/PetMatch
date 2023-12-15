export default function Footer() {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start">
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2021 Pet Match:
        <a className="text-dark" href="https://mdbootstrap.com/">
          {' '}
          PetMatch.com
        </a>
        <p>Choose PetMatch – where lasting relationships between people and pets begin.</p>
      </div>
    </footer>
  );
}
