import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import ProgressBar from '../../common/ProgressBar';
import ProfileCard from '../../common/ProfileCard';
import './style.css';

export default function MainLayout(props) {
  const { component: Component, ...rest } = props;

  return (
    <Fragment>
      <Header />
      <div className="mainpage">
        <div>
          <ProfileCard />
          <ProgressBar />
        </div>
        <div className="mainpage__content">
          <Route {...rest} component={Component} />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
