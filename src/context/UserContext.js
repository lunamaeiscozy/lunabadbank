import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
      name: '',
      email: '',
      balance: 200,
      password: '',
    });
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export { UserContext, UserProvider };
