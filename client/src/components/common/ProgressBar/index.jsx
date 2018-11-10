import React, { Component } from 'react';
import './style.css';

class ProgressBar extends Component {
  state = {};

  render() {
    return (
      <div className="progress">
        <h2 className="progress__title">MY PROFILE</h2>
        <hr className="progress__line" />
        <div className="progress__bar">
          <span className="progress__bar--meter">10% Completed</span>
        </div>
        <p className="progress__text">Complete My Profile</p>
      </div>
    );
  }
}

export default ProgressBar;
