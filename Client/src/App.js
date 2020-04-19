import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './css/bootstrap.css';

import Home from './HomePage';

import LogIn from './components_usersConnection/LogIn';
import SignUp from './components_usersConnection/SignUp';
import ForgetPassWord from './components_usersConnection/ForgetPassWord';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/home" component={Home} />
            <Route exact path='/' component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/forgetpassword" component={ForgetPassWord} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;


/*
<nav className="navbar navbar-expand-lg navbar-light">
<div className="container">
  <div className="collapse navbar-collapse">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to={"/login"}>Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/home"}>Home</Link>
      </li>
    </ul>
  </div>
</div>
</nav>*/