import React from 'react';
import Fade from 'react-reveal';
import './style.css';
import goals from './goals.jpg';

const Goals = () => (
  <Fade bottom>
    <div>
      <div className="goals">
        <div>
          <h1 className="goals__tittel">Goals</h1>
          <hr className="goals_line" />
          <p className="goals__text">
            Our goal is to offer patients who face language barriers the
            opportunity to communicate about their health in the language that
            is closest to them. We would like to offer medical professionals a
            high quality, free tool to use to enable better communication.
          </p>
        </div>
        <img className="goals__image" src={goals} alt="goals" />
      </div>
      <hr className="content-line" />
    </div>
  </Fade>
);

export default Goals;
