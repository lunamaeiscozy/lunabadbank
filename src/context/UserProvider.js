import React, { useState } from 'react';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const updateUserBalance = (userId, newBalance) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, balance: newBalance } : user
      )
    );
  };

  const deleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <UserContext.Provider
      value={{ users, addUser, updateUserBalance, deleteUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
