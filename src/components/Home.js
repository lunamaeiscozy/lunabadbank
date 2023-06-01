import React from 'react';
import { Card } from 'react-bootstrap';

function Home() {
  return (
    <Card text="black">
      <Card.Header>My Bad Bank Home Page</Card.Header>
      <Card.Body>
        <Card.Title>Welcome to My Bad Bank!</Card.Title>
        <Card.Text>
          Use the navigation bar to explore the application, but please refrain from entering any personal information.
        </Card.Text>
        <Card.Img src="pig.png" className="img-fluid" alt="Piggy bank with coins" />
      </Card.Body>
    </Card>
  );
}

export default Home;