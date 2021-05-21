import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import './App.css';

const App = () => {

  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;