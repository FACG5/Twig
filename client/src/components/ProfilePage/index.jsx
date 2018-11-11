import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import './style.css';
import About from './About';
import LanguageLevel from './About/LanguageLevel';

class Profile extends Component {
  state = {
    overView: true,
    languages: false,
  };

  shiftTab = () => {
    this.setState(prev => (
      { overView: !prev.overView, languages: !prev.languages }
    ));
  }

  render() {
    const { pathname } = this.props.history.location;
    const { overView, languages } = this.state;
    return (
      <div className="content">
        <div className="profile__tabs">
          <Link onClick={() => this.shiftTab()} to="/profile" className={`tab__button ${overView ? 'tab__button--clicked' : null}`}> about </Link>
          <Link onClick={() => this.shiftTab()} to="/profile/languages" className={`tab__button ${languages ? 'tab__button--clicked' : null}`}> Translations </Link>
        </div>
        {
          pathname.match('/profile/languages') ? <LanguageLevel /> : <About />
        }
      </div>
    );
  }
}

export default Profile;
