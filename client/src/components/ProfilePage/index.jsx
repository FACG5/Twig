import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Button from '../common/Button';
import './style.css';
import About from './About';
import Translations from './Translations';
import ProfileCard from './ProfileCard';
import Loading from '../common/Loading';

class Profile extends Component {
  state = {
    overView: true,
    translations: false,
  };

  componentWillMount() {
    const { history } = this.props;
    setTimeout(() => {
      axios
        .get('/api/v1/profile')
        .then((res) => {
          const results = res.data;
          const { profileResult, languageResult } = results;
          this.setState({ values: profileResult, languageResult });
        })
        .catch((error) => {
          const { status, data } = error.response;
          if (status === 401) {
            history.push('/');
          } else {
            this.setState({ error: data });
          }
        });
    }, 1000);
  }

  shiftTab = () => {
    this.setState(prev => ({
      overView: !prev.overView,
      translations: !prev.translations,
    }));
  };

  render() {
    const {
      overView, translations, values, languageResult, error,
    } = this.state;
    if (!values && !error) {
      return <Loading />;
    }
    return (
      <div className="profile__main">
        {error ? (
          <h4>{error}</h4>
        ) : (
          <Fragment>
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
                    translations ? 'tab__button--clicked' : null
                  }`}
                  value="Translations"
                />
              </div>
              {translations ? (
                <Translations />
              ) : (
                <About values={values} languageResult={languageResult} />
              )}
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Profile;
