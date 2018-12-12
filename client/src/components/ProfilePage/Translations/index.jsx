import React, { Component } from 'react';
import './style.css';

class Translations extends Component {
  state = {}

  render() {
    return (
      <div className="translations__box">
        <h3 className="translations__title">Translation</h3>
        <hr />
        <div className="translations__content">
          <p>
            <h4>Under development</h4>
          </p>
        </div>
      </div>
    );
  }
}

export default Translations;
