import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ProgressBar from '../common/ProgressBar';
import './style.css';

export default function MainPage() {
  return (
    <div className="main">
      <Header />
      <ProgressBar />
      <Footer />
    </div>
  );
}
