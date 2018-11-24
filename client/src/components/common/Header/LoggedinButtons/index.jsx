import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';


export default function LoggedinButtons(props) {
  const { logout } = props;
  return (
    <Fragment>
      <Button value="My profile" className="profile__button" />
      <Button value="Log out" className="logout__button" onClick={logout} />
    </Fragment>
  );
}

LoggedinButtons.propTypes = {
  logout: PropTypes.func,
};
