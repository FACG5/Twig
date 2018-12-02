import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../Button';

export default function LoggedinButtons(props) {
  const { logout } = props;
  return (
    <Fragment>
      <Link to="/main">
        <Button value="Translation Categories" className="specializations__button" />
      </Link>
      <Link to="/profile">
        <Button value="My profile" className="profile__button" />
      </Link>
      <Button value="Log out" className="logout__button" onClick={logout} />
    </Fragment>
  );
}

LoggedinButtons.propTypes = {
  logout: PropTypes.func,
};
