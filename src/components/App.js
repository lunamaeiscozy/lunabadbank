import React, { useState } from 'react';
import Navigation from './Navigation';
import Home from './Home';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
  
    const handleNavigation = (page) => {
      setCurrentPage(page);
    };
  
    return (
      <React.StrictMode>
        <Navigation handleNavigation={handleNavigation} />
        {currentPage === 'home' ? <Home /> : null}
        {currentPage === 'create' ? <CreateAccount /> : null}
        {currentPage === 'deposit' ? <Deposit /> : null}
        {currentPage === 'withdraw' ? <Withdraw /> : null}
        {currentPage === 'alldata' ? <AllData /> : null}
      </React.StrictMode>
    );
  }
  
export default App;
