import React from 'react';
import PropTypes from 'prop-types';
import OverviewInformation from './OverviewInformation';
import './style.css';

const Overview = (props) => {
  const { values } = props;
  const {
    location,
    gender,
    age,
    registerDate,
    dialectName,
    languageName,
    jobTitle,
  } = values;

  return (
    <div className="overview__box">
      <h3 className="overview__title">Overview</h3>
      <hr />
      <div className="overview__content">
        <OverviewInformation
          icon="language"
          join="Language :"
          text={languageName}
        />
        <OverviewInformation
          icon="language"
          join="Dialect :"
          text={dialectName}
        />
        <OverviewInformation icon="birthday-cake" text={age} />
        <OverviewInformation icon="transgender" text={gender} />
        <OverviewInformation icon="graduation-cap" text={jobTitle} />
        <OverviewInformation icon="map-marked-alt" text={location} />
        <OverviewInformation
          icon="clipboard-list"
          join="Member since"
          text={registerDate && registerDate.slice(0, 7)}
        />
        <OverviewInformation icon="id-card" text="Profile 10% complete" />
      </div>
    </div>
  );
};

Overview.propTypes = {
  values: PropTypes.instanceOf(Object).isRequired,
};

export default Overview;
