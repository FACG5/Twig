import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    className,
    placeholder,
    type,
    name,
    onChange,
    disabled,
    onBlur,
    value,
  } = props;
  return (
    <input
      type={type}
      name={name}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      onBlur={onBlur}
      value={value}
    />
  );
};

Input.defaultProps = {
  disabled: false,
  value: '',
};
Input.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Input;
