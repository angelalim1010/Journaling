import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import LoginHomepage from './components/LoginHomepage';
import JournalEntry from './components/JournalEntry';

import AuthState from './context/auth/authState';
import setAuthToken from './utils/setAuthToken';


const App = () => {
  const authToken = localStorage.getItem('token');
  setAuthToken(authToken);
  return (
    <AuthState>
      <Router>
        <div className='App'>
          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/homepage' component={LoginHomepage} />
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
