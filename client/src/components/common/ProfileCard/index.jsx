import React, { Component } from 'react';
import PropTypes from 'prop-types';
import avatarImg from '../../../assets/img_avatar.png';
import Button from '../Button';
import './style.css';

class ProfileCard extends Component {
  state = {};

  render() {
    const {
      name, location, language, dialect,
    } = this.props;
    return (
      <div className="profileCard__main">
        <img src={avatarImg} alt="avatarImg" className="avatar__img" />
        <h1 className="profileCard__name">{ name }</h1>
        <h1 className="profileCard__location">{ location }</h1>
        <h1 className="profileCard__lang">
          { language }
        -
          { dialect }
        </h1>
        <Button className="button__profileCard" value="Show Profile" onClick={null} />
      </div>
    );
  }
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  dialect: PropTypes.string.isRequired,
};

export default ProfileCard;
