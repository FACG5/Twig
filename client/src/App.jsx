import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MainPage from './components/MainPage';
import Profile from './components/ProfilePage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/landing" component={HomePage} />
        <Route path="/profile" component={Profile} />
        <Route render={() => <h1>Error Page</h1>} />
      </Switch>
    </Router>
  );
}
