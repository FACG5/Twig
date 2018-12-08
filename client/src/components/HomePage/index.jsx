import React, { Fragment } from 'react';
import AboutUs from './AboutUs';
import Statistic from './Statistic';
import Goals from './Goals';
import homeImg from './volunteer.jpg';
import './style.css';

const HomePage = () => (
  <Fragment>
    <div className="home__image-container">
      <img className="home__image" src={homeImg} alt="home" />
      <p className="home__paragraph">&quot;We seek to provide written and audio translations for as many of the world’s 7,000+ languages as possible, in addition to video translations for as many of the world’s signed languages as possible for deaf communities&quot;</p>
      <h1 className="home__text">Twig: The Medical Database</h1>
    </div>
    <div className="home__main">
      <div className="home__main--background">
        <div className="contents">
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
