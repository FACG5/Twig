import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../../common/Footer';


export default function DefaultLayout(props) {
  const { component, login, ...rest } = props;
  return (
    <Fragment>
      <Header login={login ? true : null} />
      <Route {...rest} component={component} />
      <Footer />
    </Fragment>
  );
}
