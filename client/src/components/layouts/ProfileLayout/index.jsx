import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import ProfileCard from '../../ProfilePage/ProfileCard';


const ProfileLayout = (props) => {
  const { component: Component, ...rest } = props;

  return (
    <Fragment>
      <Header login />
      <div className="profile__main">
        <div className="card__section">
          <ProfileCard />
        </div>
        <Route {...rest} component={Component} />
      </div>
      <Footer />
    </Fragment>
  );
};

export default ProfileLayout;
