import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { className, value, onClick } = props;
  return (
    <button className={className} type="submit" onClick={onClick}>{value}</button>
  );
};

Button.propTypes = {
  className: React.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
