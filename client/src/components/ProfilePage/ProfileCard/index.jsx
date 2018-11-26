import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const ProfileCard = (props) => {
  const { values } = props;
  const {
    firstName, lastName, jobDescription, avatarUrl, email,
  } = values;

  return (
    <div className="profile__card">
      <img src={avatarUrl} alt="avatarImg" className="avatar__img" />
      <h1 className="card__name">
        {firstName}
        {'  '}
        {lastName}
      </h1>
      <h1 className="card__jobtitle">{jobDescription}</h1>
      <h1 className="card__jobtitle">{email}</h1>
    </div>
  );
};

ProfileCard.propTypes = {
  values: PropTypes.instanceOf(Object).isRequired,
};

export default ProfileCard;
