import React, { Fragment } from 'react';
import Header from '../common/Header';
import AboutUs from './AboutUs';
import Statistic from './Statistic';
import Footer from '../common/Footer';
import './style.css';

export default function HomePage() {
  return (
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
}
