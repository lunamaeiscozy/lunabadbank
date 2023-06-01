import React, { useContext } from 'react';
import { UserContext } from './UserProvider';
import { Card, Table } from 'react-bootstrap';

function AllData() {
  const { users } = useContext(UserContext);

  return (
    <Card bg="secondary" text="white">
      <Card.Header>All User Data</Card.Header>
      <Card.Body>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.balance}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default AllData;