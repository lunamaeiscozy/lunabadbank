import { UserContext } from '../context/UserContext';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [balance, setBalance] = useState(0);
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setBalance(0);
    setPassword('');
  };

  return (
    <div>
      <h2>Create New Account</h2>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBalance">
              <Form.Label>Balance</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter initial balance"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create Account
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CreateAccount;