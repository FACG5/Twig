import React, { Component } from 'react';
import avatarImg from '../../../assets/img_avatar.png';
import Button from '../Button';
import './style.css';

class ProfileCard extends Component {
  state = {};

  render() {
    return (
      <div className="profileCard__main">
        <img src={avatarImg} alt="avatarImg" className="avatarImg" />
        <h1 className="profileCard__name">John Doe</h1>
        <h1 className="profileCard__location">Gaza - Palestine</h1>
        <h1 className="profileCard__lang">Arabic - Palestinian</h1>
        <Button className="button__profileCard" value="Show Profile" onClick={null} />
      </div>
    );
  }
}

export default ProfileCard;
