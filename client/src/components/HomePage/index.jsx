import React, { Fragment } from 'react';
import Header from '../common/Header/index';
import AboutUs from './AboutUs/index';
import Statistic from './Statistic/index';
import Footer from '../common/Footer/index';
import './style.css';

const HomePage = () => (
  <Fragment>
    <Header />
    <div className="home__image">
      <h1 className="home__text">Medical Translation</h1>
    </div>
    <div className="home__main">
      <div className="home__section">
        <div className="contents">
          <AboutUs />
          <Statistic />
          <Footer />
        </div>
      </div>
    </div>
  </Fragment>
);

export default HomePage;
