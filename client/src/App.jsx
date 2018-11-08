import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MainPage from './components/MainPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/landing" component={HomePage} />
          <Route exact path="/" component={MainPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
