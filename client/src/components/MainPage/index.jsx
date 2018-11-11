import React, { Fragment, Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ProgressBar from '../common/ProgressBar';
import './style.css';

class MainPage extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Header />
        <div className="main" />
        <ProgressBar />
        <Footer />
      </Fragment>
    );
  }
}

export default MainPage;
