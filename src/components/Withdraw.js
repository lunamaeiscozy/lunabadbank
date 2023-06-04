import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Withdraw = () => {
  const { user, setUser } = useContext(UserContext);
  const [amount, setAmount] = useState('');

  const handleWithdraw = (e) => {
    e.preventDefault();
    const withdrawalAmount = parseFloat(amount);
    if (!isNaN(withdrawalAmount) && withdrawalAmount > 0 && withdrawalAmount <= user.balance) {
      const updatedUser = { ...user, balance: user.balance - withdrawalAmount };
      setUser(updatedUser);
      setAmount('');
    } else {
      console.log('Invalid withdrawal amount');
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Make a Withdrawal</Card.Title>
        <Form onSubmit={handleWithdraw}>
          <Form.Group controlId="formAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter withdrawal amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Withdraw
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Withdraw;
