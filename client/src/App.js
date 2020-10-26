import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Login from './components/Login';
import Signup from './components/Signup';
import LoginHomepage from './components/LoginHomepage';
import MainHomepage from './components/MainHomepage';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <Route path='/homepage' component={LoginHomepage} />
              <Route path= '/' component={MainHomepage} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
