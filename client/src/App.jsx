import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MainPage from './components/MainPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ProfilePage from './components/ProfilePage';
import { ModalProvider } from './components/HomePage/modal/ModalContext';

export default function App() {
  return (
    <ModalProvider>
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/landing" component={HomePage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route path="/" component={MainPage} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </ModalProvider>
  );
}
