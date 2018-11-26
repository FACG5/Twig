import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import { ModalProvider } from './components/HomePage/modal/ModalContext';
import DefaultLayout from './components/layouts/DefaultLayout';
import MainLayout from './components/layouts/MainLayout';
import Specialization from './components/MainPage/Spectialization';
import QuestionsPage from './components/MainPage/QuestionsPage';
import TranslationsPage from './components/MainPage/TranslationsPage';
import ErrorPage from './components/ErrorPage';

export default function App() {
  return (
    <Router>
      <ModalProvider>
        <Fragment>
          <Switch>
            <MainLayout exact path="/main" component={Specialization} />
            <DefaultLayout login exact path="/profile" component={ProfilePage} />
            <MainLayout
              exact
              path="/main/:name/questions/:questionId"
              component={TranslationsPage}
            />
            <MainLayout exact path="/main/:name" component={QuestionsPage} />
            <DefaultLayout exact path="/" component={HomePage} />
            <Route to="*" component={ErrorPage} />
          </Switch>
        </Fragment>
      </ModalProvider>
    </Router>
  );
}
