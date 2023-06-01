import React, { useState, useContext } from 'react';
import { UserContext } from './UserProvider';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Deposit({ user }) {
  const { users, setUsers } = useContext(UserContext);
  const [show, setShow] = useState(true);
  const [deposit, setDeposit] = useState('');

  function addDeposit() {
    const updatedUsers = users.map((u) => {
      if (u.id === user.id) {
        const updatedBalance = u.balance + Number(deposit);
        return { ...u, balance: updatedBalance };
      }
      return u;
    });
    setUsers(updatedUsers);
    setShow(false);
  }

  return (
    <Card bg="secondary" text="white">
      <Card.Header>Make A Deposit</Card.Header>
      <Card.Body>
        {show ? (
          <>
            <Card.Text>How Much Would You Like To Deposit?</Card.Text>
            <Form.Control
              type="input"
              placeholder="Enter Amount"
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
            />
            <Button variant="light" onClick={addDeposit}>
              Submit Deposit
            </Button>
          </>
        ) : (
          <Card.Title>Your Balance Has Been Updated</Card.Title>
        )}
      </Card.Body>
    </Card>
  );
}

export default DepositCard;
