import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Card = (props) => {
  const { values } = props;
  return (
    <ul>
      {values.map((element) => {
        const { value, id } = element;
        return (
          <li index={id} className="card">{value}</li>
        );
      })}
    </ul>
  );
};

Card.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
