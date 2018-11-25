import React, { Component } from 'react';
import axios from 'axios';
import OverviewInformation from './OverviewInformation';
import './style.css';

class Overview extends Component {
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
      location, gender, age, registerDate, dialectName, languageName, jobTitle,
    } = values;

    return (
      <div className="overview__box">
        <h3 className="overview__title">Overview</h3>
        <hr />
        <div className="overview__content">
          <OverviewInformation icon="language" join="Language :" text={languageName} />
          <OverviewInformation icon="language" join="Dialect :" text={dialectName} />
          <OverviewInformation icon="birthday-cake" text={age} />
          <OverviewInformation icon="transgender" text={gender} />
          <OverviewInformation icon="graduation-cap" text={jobTitle} />
          <OverviewInformation icon="map-marked-alt" text={location} />
          <OverviewInformation icon="clipboard-list" join="Member since" text={registerDate && registerDate.slice(0, 7)} />
          <OverviewInformation icon="id-card" text="Profile 10% complete" />
        </div>
      </div>
    );
  }
}

export default Overview;
