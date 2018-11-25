import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';

export default function LoginHeader(props) {
  const { showModel } = props;
  return (
    <Fragment>
      <Button
        value="join"
        className="join"
        onClick={showModel}
        id="joinModel"
      />
      <Button
        value="login"
        className="login"
        onClick={showModel}
        id="loginModel"
      />
    </Fragment>
  );
}

LoginHeader.propTypes = {
  showModel: PropTypes.func,
};
