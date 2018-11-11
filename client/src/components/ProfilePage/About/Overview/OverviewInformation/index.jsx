import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

export default function OverviewInformation(props) {
  const { icon, text } = props;
  return (
    <div className="overview__information">
      <FontAwesomeIcon className="information__icon" icon={icon} />
      <h4>{text}</h4>
    </div>
  );
}
