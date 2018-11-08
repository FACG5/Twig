import React, { Fragment } from 'react';
import Header from '../common/Header/index';
import AboutUs from './AboutUs/index';
import './style.css';

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <div className="home__image">
        <h1 className="home__text">Medical Translation</h1>
      </div>
      <div className="home__section"><AboutUs /></div>
    </Fragment>
  );
}
