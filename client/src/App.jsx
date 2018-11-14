import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MainPage from './components/MainPage';
import QuestionsPage from './components/QuestionsPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ProfilePage from './components/ProfilePage';
import TranslationsPage from './components/TranslationsPage';

export default function App() {
  return (
    <Fragment>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/landing" component={HomePage} />
          <Route exact path="/" component={MainPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route exact path="/:specialization/questions/:id" component={TranslationsPage} />
          <Route exact path="/:specialization" component={QuestionsPage} />
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  );
}
