import React from 'react';
import './style.css';
import PropTypes from 'prop-types';


const Input = (props) => {
  const {
    className, placeholder, type, name, onChange,
  } = props;
  return (
    <input
      type={type}
      name={name}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};


Input.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
