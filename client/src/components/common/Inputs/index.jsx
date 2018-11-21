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
    checked,
    id,
  } = props;
  return (
    <input
      id={id}
      type={type}
      name={name}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      onBlur={onBlur}
      value={value}
      checked={checked}
    />
  );
};

Input.defaultProps = {
  disabled: false,
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
  checked: PropTypes.bool,
  id: PropTypes.number,
};

export default Input;
