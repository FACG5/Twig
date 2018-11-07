import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = (props) => {
  const {
    className, value, onClick, id,
  } = props;
  return (
    <button className={className} type="submit" onClick={onClick} id={id}>{value}</button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,

};

export default Button;
