import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

class ProfileCard extends Component {
  state = {
    values: [],
  };

  componentWillMount() {
    axios.get('/api/v1/profile').then((res) => {
      const results = res.data;
      const { profileResult } = results;
      this.setState({ values: profileResult });
    }).catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        this.setState({ message: 'Page Not Found' });
      }
    });
  }

  render() {
    const { values } = this.state;
    const {
      firstName, lastName, jobDescription, avatarUrl, email,
    } = values;

    return (
      <div className="profile__card">
        <img src={avatarUrl} alt="avatarImg" className="avatar__img" />
        <h1 className="card__name">
          { firstName }
          {'  '}
          {lastName}
        </h1>
        <h1 className="card__jobtitle">{jobDescription}</h1>
        <h1 className="card__jobtitle">{email}</h1>
      </div>
    );
  }
}

export default ProfileCard;
