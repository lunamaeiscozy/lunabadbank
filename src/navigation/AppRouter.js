import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomNavbar from '../components/Navbar';
import Home from '../components/Home';
import Deposit from '../components/Deposit';
import Withdraw from '../components/Withdraw';
import AllData from '../components/AllData';
import CreateAccount from '../components/CreateAccount';


const AppRouter = () => {
  return (
    <Router>
      <CustomNavbar />
      <div className="container mt-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/deposit" component={Deposit} />
          <Route path="/withdraw" component={Withdraw} />
          <Route path="/all-data" component={AllData} />
          <Route path="/create-account" component={CreateAccount} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;