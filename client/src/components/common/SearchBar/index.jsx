import React, { Fragment } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = (props) => {
  const {
    className, submitHandler, onChange, value,
  } = props;
  return (
    <Fragment>
      <form className={className}>
        <input className="search__text" type="text" placeholder="Search..." name="search" onChange={onChange} value={value} />
        <button className="search__button" type="submit" onClick={submitHandler}><FontAwesomeIcon icon={faSearch} size="lg" /></button>
      </form>
    </Fragment>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  submitHandler: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
