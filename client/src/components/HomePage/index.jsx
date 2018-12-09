import React from 'react';
import AboutUs from './AboutUs';
import Statistic from './Statistic';
import Goals from './Goals';
import Cards from './Cards';
import homeImg from './volunteer.png';
import './style.css';

const HomePage = () => (
  <div className="homepage">
    <div className="home__image-container">
      <img className="home__image" src={homeImg} alt="home" />
    </div>
    <div className="home__main">
      <div className="home__main--background">
        <div className="contents">
          <Cards />
          <AboutUs />
          <Goals />
          <Statistic />
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
