import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import { ModalProvider } from './components/HomePage/modal/ModalContext';
import HomeLayout from './components/layouts/HomeLayout';
import MainLayout from './components/layouts/MainLayout';
import Specialization from './components/MainPage/Spectialization';
import QuestionsPage from './components/MainPage/QuestionsPage';
import TranslationsPage from './components/MainPage/TranslationsPage';
import ErrorPage from './components/ErrorPage';
import ProfileLayout from './components/layouts/ProfileLayout';

export default function App() {
  return (
    <ModalProvider>
      <Router>
        <Fragment>
          <Switch>
            <MainLayout exact path="/main" component={Specialization} />
            <ProfileLayout exact path="/profile" component={ProfilePage} />
            <MainLayout
              exact
              path="/main/:name/questions/:questionId"
              component={TranslationsPage}
            />
            <MainLayout exact path="/main/:name" component={QuestionsPage} />
            <HomeLayout exact path="/" component={HomePage} />
            <Route to="*" component={ErrorPage} />
          </Switch>
        </Fragment>
      </Router>
    </ModalProvider>
  );
}
