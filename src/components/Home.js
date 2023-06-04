import { UserContext } from '../context/UserContext';
import React from 'react';
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="pig.png" />
        <Card.Body>
          <Card.Title>Welcome to My Bad Bank</Card.Title>
          <Card.Text>
            This is a sample banking application built with React and react-bootstrap.
            Feel free to explore the different features and functionalities. This application is for demo purposes only. Please refrain from entering your personal information. 
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
