import React, { Component, Fragment } from 'react';
import './style.css';

class Select extends Component {
  state = { }

  render() {
    return (
      <Fragment>
        <select className="styled" id="selector">
          <option disabled selected value="Filter Questions">Filter Questions</option>
          <option value="date">date</option>
        </select>
      </Fragment>
    );
  }
}

export default Select;
