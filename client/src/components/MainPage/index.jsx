import React, { Fragment, Component } from 'react';
import ProgressBar from '../common/ProgressBar';
import ProfileCard from '../common/ProfileCard';
import './style.css';

class MainPage extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <div className="main">
          <div>
            <ProfileCard
              name="Ali ALI"
              location="Gaza - Palestine"
              language="Arabic"
              dialect="Palestinian"
            />
            <ProgressBar />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MainPage;
