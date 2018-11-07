import React from 'react';
import Header from '../common/Header';
import './style.css';

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="home__image">
        <h1 className="home__text">Medical Translation</h1>
      </div>
    </div>);
}
