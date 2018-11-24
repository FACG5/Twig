import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../../common/Footer';


export default function DefaultLayout(props) {
  const { component: Component, ...rest } = props;

  return (
    <Fragment>
      <Header />
      <Route {...rest} component={Component} />
      <Footer />
    </Fragment>
  );
}
