import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Button from '../Button';
import './style.css';

class ProfileCard extends Component {
  state = {
    values: [],
    redirect: false,
  };

  componentWillMount() {
    axios.get('/api/v1/details').then((res) => {
      const results = res.data;
      // console.log(results);
      this.setState({ values: results });
    }).catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        this.setState({ message: 'Page Not Found' });
      }
    });
  }

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

    const { values } = this.state;
    const {
      firstName, lastName, location, languageName, dialectName, avatarUrl,
    } = values;
    return (
      <div className="profile-card__main">
        <img src={avatarUrl} alt="avatarImg" className="avatar__img" />
        <h1 className="profile-card__name">
          { firstName }
          {'  '}
          {lastName}
        </h1>
        <h1 className="profile-card__location">{ location }</h1>
        <h1 className="profile-card__lang">
          { languageName }
          {'  -  '}
          { dialectName }
        </h1>
        <Button className="button__profile-card" value="Show Profile" onClick={this.clickHandler} />
      </div>
    );
  }
}

export default ProfileCard;
