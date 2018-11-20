import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Select = (props) => {
  const { onChange } = props;

  return (
    <Fragment>
      <select className="styled" id="selector" onChange={onChange}>
        <option disabled selected value="Filter Questions">Filter Questions</option>
        <option value="date">date</option>
      </select>
    </Fragment>
  );
};
Select.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Select;
