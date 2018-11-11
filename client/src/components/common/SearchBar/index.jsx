import React, { Fragment } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = (props) => {
  const { className } = props;
  return (
    <Fragment>
      <form className={className}>
        <input className="search__text" type="text" placeholder="Search..." name="search" />
        <button className="search__button" type="submit"><FontAwesomeIcon icon={faSearch} size="lg" /></button>
      </form>
    </Fragment>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string.isRequired,
};

export default SearchBar;
