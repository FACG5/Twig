import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import avatarImg from '../../../assets/img_avatar.png';
import Button from '../Button';
import './style.css';

class ProfileCard extends Component {
  state = {
    redirect: false,
  };

  clickHandler = (e) => {
    e.preventDefault();
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/profile" />;
    }

    const {
      name, location, language, dialect,
    } = this.props;
    return (
      <div className="profile-card__main">
        <img src={avatarImg} alt="avatarImg" className="avatar__img" />
        <h1 className="profile-card__name">{ name }</h1>
        <h1 className="profile-card__location">{ location }</h1>
        <h1 className="profile-card__lang">
          { language }
        -
          { dialect }
        </h1>
        <Button className="button__profile-card" value="Show Profile" onClick={this.clickHandler} />
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
