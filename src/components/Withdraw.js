import React, { useState, useContext } from 'react';
import { UserContext } from './UserProvider';
import { Card, Alert, Form, Button } from 'react-bootstrap';

function Withdraw() {
  const { users, setUsers } = useContext(UserContext);
  const [show, setShow] = useState(true);
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [status, setStatus] = useState('');

  function validateWithdrawal() {
    const currentUser = users.find(u => u.id === user.id);
    if (currentUser.balance >= withdrawalAmount) {
      handleWithdrawal(currentUser);
    } else {
      setStatus('Please enter a valid amount for withdrawal.');
    }
  }

  function handleWithdrawal(currentUser) {
    const updatedBalance = currentUser.balance - Number(withdrawalAmount);
    const updatedUsers = users.map((u) =>
      u.id === currentUser.id ? { ...u, balance: updatedBalance } : u
    );
    setUsers(updatedUsers);
    setShow(false);
  }

  return (
    <Card bg="secondary" text="white">
      <Card.Header>Make A Withdrawal</Card.Header>
      <Card.Body>
        {show ? (
          <>
            <Form.Control
              type="input"
              className="form-control"
              id="withdraw"
              placeholder="Enter Amount"
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(e.currentTarget.value)}
            />
            <br />
            <Button
              type="submit"
              className="btn btn-light"
              onClick={validateWithdrawal}
            >
              Submit Withdraw
            </Button>
            {status && (
              <Alert variant="warning">
                <strong>Warning!</strong> {status}
              </Alert>
            )}
          </>
        ) : (
          <>
            <h5>Your Balance Has Been Updated</h5>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default Withdraw;