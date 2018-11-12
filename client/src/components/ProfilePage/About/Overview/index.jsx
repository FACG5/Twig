import React from 'react';
import OverviewInformation from './OverviewInformation';
import './style.css';

export default function Overview() {
  return (
    <div className="overview__box">
      <h3 className="overview__title">Overview</h3>
      <hr />
      <div className="overview__content">
        <OverviewInformation icon="globe" text="Arabic - Palestine" />
        <OverviewInformation icon="transgender" text="20, Female" />
        <OverviewInformation icon="graduation-cap" text="MD, PhD, Cardiac Electrophysiology" />
        <OverviewInformation icon="map-marked-alt" text="Gaza - Palestine" />
        <OverviewInformation icon="clipboard-list" text="Member since Obtober, 2018" />
        <OverviewInformation icon="id-card" text="Profile 10% complete" />
      </div>
    </div>
  );
}
