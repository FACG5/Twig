import React, { Component } from 'react';
import './style.css';

class Location extends Component {
  state = {}

  render() {
    return (
      <div className="location__box">
        <h3 className="location__title">Location</h3>
        <hr />
        <div className="location__content">
          <p>
            <h4>Under development</h4>
          </p>
        </div>
      </div>
    );
  }
}

export default Location;
