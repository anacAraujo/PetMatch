import React from "react";
import Form from "./form";

export default function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PET MATCH</h1>
        <p>Find your PURRFECT companion!</p>
      </header>
      <div>
        <h2>Our Mission</h2>
        <p>Our mission is to find the best match for you and your pet!</p>
      </div>
      <Form></Form>
    </div>
  );
}