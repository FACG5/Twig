import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './style.css';

const OverviewInformation = (props) => {
  const { icon, text, join } = props;
  return (
    <div className="overview__information">
      <FontAwesomeIcon className="information__icon" icon={icon} />
      <h4>
        {join}
        {' '}
        {text}
      </h4>
    </div>
  );
};

OverviewInformation.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  join: PropTypes.string.isRequired,
};

export default OverviewInformation;
