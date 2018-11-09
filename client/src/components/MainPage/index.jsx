import React , { Fragment } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ProgressBar from '../common/ProgressBar';
import './style.css';

export default function MainPage() {
  return (
    <Fragment>
      <Header />
      <div className="main">
        <ProgressBar />
      </div>
      <Footer />
    </Fragment>
  );
}
