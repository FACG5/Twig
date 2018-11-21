import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProgressBar from '../common/ProgressBar';
import ProfileCard from '../common/ProfileCard';
import './style.css';
import Specialization from './Spectialization';
import QuestionPage from './QuestionsPage';
import TranslationsPage from './TranslationsPage';

class MainPage extends Component {
  state = {};

  render() {
    return (
      <div className="mainpage">
        <div>
          <ProfileCard />
          <ProgressBar />
        </div>
        <div className="mainpage__content">
          <Switch>
            <Route exact path="/" component={Specialization} />
            <Route exact path="/:name" component={QuestionPage} />
            <Route
              exact
              path="/:name/questions/:questionid"
              component={TranslationsPage}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default MainPage;
