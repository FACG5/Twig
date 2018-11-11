import React, { Fragment, Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ProgressBar from '../common/ProgressBar';
import ProfileCard from '../common/ProfileCard';
import './style.css';

class MainPage extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Header />
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
        <Footer />
      </Fragment>
    );
  }
}

export default MainPage;
