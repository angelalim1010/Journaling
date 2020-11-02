import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Login from './components/Login';
import Signup from './components/Signup';
import LoginHomepage from './components/LoginHomepage';
import MainHomepage from './components/MainHomepage';
import JournalEntry from './components/JournalEntry';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <Route path='/homepage' component={LoginHomepage} />
              <Route path= '/mainhomepage' component={MainHomepage} />
              <Route path= '/journalentry' component={JournalEntry} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
