import React, { Fragment } from 'react';
import AboutUs from './AboutUs';
import Statistic from './Statistic';
import './style.css';

const HomePage = () => (
  <Fragment>
    <div className="home__image">
      <h1 className="home__text">Medical Translation</h1>
    </div>
    <div className="home__main">
      <div className="rgba">
        <div className="contents">
          <AboutUs />
          <hr className="content-line" />
          <Statistic />
        </div>
      </div>
    </div>
  </Fragment>
);

export default HomePage;
