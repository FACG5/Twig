import React from 'react';
import Header from '../common/Header/index';
import AboutUs from './AboutUs/index';
import Statistic from './Statistic/index';
import './style.css';

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="home__image">
        <h1 className="home__text">Medical Translation</h1>
      </div>
      <div className="home__main">
        <div className="home__section">
          <div className="contents">
            <AboutUs />
            <Statistic />
          </div>
        </div>
      </div>
    </div>
  );
}
