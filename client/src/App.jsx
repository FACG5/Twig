import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/index';
import MainPage from './components/MainPage/index';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/categories" component={MainPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
