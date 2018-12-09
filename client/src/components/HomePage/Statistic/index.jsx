import React, { Component, Fragment } from 'react';
import Fade from 'react-reveal';
import './style.css';
import satistic from './satistic.jpeg';

class Statistic extends Component {
  state = { }

  render() {
    return (
      <Fade bottom>
        <h1 className="satistic__tittel">We Have</h1>
        <hr className="satistic_line" />
        <div className="satistic">
          <img className="satistic__image" src={satistic} alt="satistic" />
          <div>
            <div className="satistic__Volunteers">
              <h1 className="number">30</h1>
              <h2 className="satistic__text">Volunteers</h2>
            </div>
            <div className="satistic__Questions">
              <h1 className="number">400</h1>
              <h2 className="satistic__text">Questions</h2>
            </div>
            <div className="satistic__Translations">
              <h1 className="number">4500</h1>
              <h2 className="satistic__text">Translations</h2>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Statistic;
