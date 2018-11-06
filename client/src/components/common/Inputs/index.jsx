import React from 'react';
import './style.css';
import PropTypes from 'prop-types';


const Input = (props) => {
  const {
    className, placeholder, type, name,
  } = props;
  return (
    <input
      type={type}
      name={name}
      className={className}
      placeholder={placeholder}
    />
  );
};


Input.propTypes = {
  className: React.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
