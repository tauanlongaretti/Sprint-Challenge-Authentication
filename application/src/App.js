import React from 'react';
import { Route, Switch } from "react-router-dom";
import Register from './components/Register.js';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import './App.css';

function App() {
  return (
    <div className="App">
     <Switch>
       <PrivateRoute exact path="/recipes" component={Dashboard} />
       <Route path="/login" component={Login} />
       <Route path="/register" component={Register} />
       <Route component={Login} />
       <Route component={Register} />
     </Switch>
    </div>
  );
}

export default App;
