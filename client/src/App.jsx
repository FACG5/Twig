import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MainPage from './components/MainPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import TranslationsPage from './components/TranslationsPage';

export default function App() {
  return (
    <Fragment>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/landing" component={HomePage} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/specialization/questions/id" component={TranslationsPage} />
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  );
}
