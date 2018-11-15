import React, { Component, Fragment } from 'react';
import Button from '../common/Button';
import './style.css';
import About from './About';
import LanguageLevel from './About/LanguageLevel';
import ProfileCard from './ProfileCard';

class Profile extends Component {
  state = {
    overView: true,
    languages: false,
  };

  shiftTab = () => {
    this.setState(prev => ({
      overView: !prev.overView,
      languages: !prev.languages,
    }));
  };

  render() {
    const { pathname } = this.props.history.location;
    const { overView, languages } = this.state;
    return (
      <Fragment>
        <div className="profile__main">
          <div className="card__section">
            <ProfileCard />
          </div>
          <div>
            <div className="tabs__section">
              <Button
                onClick={this.shiftTab}
                className={`tab__button ${
                  overView ? 'tab__button--clicked' : null
                }`}
                value="About"
              />
              <Button
                onClick={this.shiftTab}
                className={`tab__button ${
                  languages ? 'tab__button--clicked' : null
                }`}
                value="Translations"
              />
            </div>
            {languages ? <LanguageLevel /> : <About />}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Profile;
