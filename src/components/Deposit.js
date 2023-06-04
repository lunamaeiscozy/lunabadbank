import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Deposit = () => {
  const { user, setUser } = useContext(UserContext);
  const [amount, setAmount] = useState('');

  const handleDeposit = (e) => {
    e.preventDefault();
    const depositAmount = parseFloat(amount);
    if (!isNaN(depositAmount) && depositAmount > 0) {
      const updatedUser = { ...user, balance: user.balance + depositAmount };
      setUser(updatedUser);
      setAmount('');
    } else {
      console.log('Invalid deposit amount');
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Make a Deposit</Card.Title>
        <Form onSubmit={handleDeposit}>
          <Form.Group controlId="formAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter deposit amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Deposit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Deposit;
