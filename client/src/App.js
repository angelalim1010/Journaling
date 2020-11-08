import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import LoginHomepage from './components/LoginHomepage';
import MainHomepage from './components/MainHomepage';
import JournalEntry from './components/JournalEntry';


import AuthState from './context/auth/authState';


const App = () => {
  return (
    <AuthState>
      <Router>
        <div className='App'>
          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <Switch>
                <Route exact path='/' component={MainHomepage} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/homepage' component={LoginHomepage} />
                {/* <Route path= '/mainhomepage' component={MainHomepage} /> */}
                <Route path= '/journalentry' component={JournalEntry} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </AuthState>
  );
}



export default App;
