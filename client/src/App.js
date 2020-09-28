import React from 'react';
import './App.css';
import Login from "./components/Login"
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Route exact path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
