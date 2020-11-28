import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Disclaimer from './components/legal/Disclaimer';
import Terms from './components/legal/Terms';
import Privacy from './components/legal/Privacy';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Dashboard from './components/Dashboard';
import JournalEntry from './components/JournalEntry';

import AuthState from './context/auth/authState';
import setAuthToken from './utils/setAuthToken';
import ZenyuNavbar from './components/ZenyuNavbar';


const App = () => {
  const authToken = localStorage.getItem('token');
  setAuthToken(authToken);
  return (
    <AuthState>
      <Router>
        <div className='App'>
          <div className='auth-wrapper'>
            <div className='auth-inner'>
                 {<ZenyuNavbar/>}

              <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/terms' component={Terms} />
                <Route path='/disclaimer' component={Disclaimer} />
                <Route path='/privacy' component={Privacy} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/dashboard' component={Dashboard} />
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
