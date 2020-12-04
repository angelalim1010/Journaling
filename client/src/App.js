import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Disclaimer from './components/legal/Disclaimer';
import Terms from './components/legal/Terms';
import Privacy from './components/legal/Privacy';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/home/Home';
import Entry from './components/home/journal/Entry';
import Journal from './components/home/journal/Journal';
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
                <Route path='/terms' component={Terms} />
                <Route path='/disclaimer' component={Disclaimer} />
                <Route path='/privacy' component={Privacy} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/home' component={Home} />
                <Route path='/edit' component={Entry} />
                <Route path='/journal' component={Journal} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </AuthState>
  );
}


export default App;
