import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const AllData = () => {
  const { user } = useContext(UserContext);

  return (
    <Card>
      <Card.Body>
        <Card.Title>User Information</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Name:</strong> {user.name}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email:</strong> {user.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Balance:</strong> {user.balance}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Password:</strong> {user.password}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default AllData;