import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

class AboutMe extends Component {
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
    const { bio } = values;
    return (
      <div className="aboutme__box">
        <h3 className="aboutme__title">About Me</h3>
        <hr />
        <div className="aboutme__content">
          <p>{bio}</p>
        </div>
      </div>
    );
  }
}
export default AboutMe;
