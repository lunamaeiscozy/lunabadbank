import React from 'react';
import ReactDOM from 'react-dom';
import UserProvider from './context/UserProvider';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Navbar />
      <Home />
      <CreateAccount />
      <Deposit />
      <Withdraw />
      <AllData />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
