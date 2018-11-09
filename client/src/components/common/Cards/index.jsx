import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Card = (props) => {
  const { values } = props;
  return (
    <ul className="box">
      {values.map((element) => {
        const { value, id } = element;
        return (
          <li index={id} className="box__card">{value}</li>
        );
      })}
    </ul>
  );
};

Card.propTypes = {
  values: PropTypes.instanceOf(Array).isRequired,
};

export default Card;
