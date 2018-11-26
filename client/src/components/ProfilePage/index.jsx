import React, { Component } from 'react';
import axios from 'axios';
import Button from '../common/Button';
import './style.css';
import About from './About';
import LanguageLevel from './About/LanguageLevel';
import ProfileCard from './ProfileCard';
import Loading from '../common/Loading';

class Profile extends Component {
  state = {
    overView: true,
    languages: false,
  };

  componentWillMount() {
    setTimeout(() => {
      axios
        .get('/api/v1/profile')
        .then((res) => {
          const results = res.data;
          const { profileResult, languageResult } = results;
          this.setState({ values: profileResult, languageResult });
        })
        .catch((error) => {
          const { status } = error.response;
          if (status === 404) {
            this.setState({ message: 'Page Not Found' });
          }
        });
    }, 1000);
  }

  shiftTab = () => {
    this.setState(prev => ({
      overView: !prev.overView,
      languages: !prev.languages,
    }));
  };

  render() {
    const {
      overView, languages, values, languageResult,
    } = this.state;
    return values ? (
      <div className="profile__main">
        <div className="card__section">
          <ProfileCard values={values} />
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
          {languages ? <LanguageLevel values={values} /> : <About values={values} languageResult={languageResult} />}
        </div>
      </div>
    ) : (
      <Loading />
    );
  }
}

export default Profile;
