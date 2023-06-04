import logo from './logo.svg';
import './App.css';
import React from 'react';
import { UserProvider } from './context/UserContext';
import AppRouter from './navigation/AppRouter';

function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}

export default App;
