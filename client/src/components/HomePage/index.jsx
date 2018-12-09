import React, { Fragment } from 'react';
import AboutUs from './AboutUs';
import Statistic from './Statistic';
import Goals from './Goals';
import Cards from './Cards';
import homeImg from './volunteer.png';
import './style.css';

const HomePage = () => (
  <Fragment>
    <div className="home__image-container">
      <img className="home__image" src={homeImg} alt="home" />
    </div>
    <div className="home__main">
      <div className="home__main--background">
        <div className="contents">
          <Cards />
          <hr className="content-line" />
          <AboutUs />
          <hr className="content-line" />
          <Goals />
          <hr className="content-line" />
          <Statistic />
        </div>
      </div>
    </div>
  </Fragment>
);

export default HomePage;
