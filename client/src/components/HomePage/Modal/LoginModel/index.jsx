import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Input from '../../../common/Inputs';
import Button from '../../../common/Button';

class Login extends Component {
  state = { };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { show, switchModel } = this.props;
    return (
      <div className="modelContent">
        <div className="modalHead">
          <h1>Login To TWIG</h1>
          <FontAwesomeIcon
            icon="times-circle"
            className="closeButton"
            onClick={show}
          />
        </div>
        <hr />
        <div className="content">
          <Input
            name="email"
            type="email"
            className="loginInput"
            placeholder="Enter your email"
            onChange={this.onChange}
          />
          <Input
            name="password"
            type="password"
            className="loginInput"
            placeholder="Enter your password"
            onChange={this.onChange}
          />
          <Button className="loginButton" value="Login" onClick={null} />
          <h3>Or</h3>
          <Button
            className="LinkedInButton"
            value="Continue with LinkedIn"
            onClick={null}
          />
        </div>
        <hr />
        <h3> Don't Have an accout ? </h3>
        <Button className="joinButton" value="Join" onClick={switchModel} />
      </div>
    );
  }
}

Login.propTypes = {
  show: PropTypes.func.isRequired,
  switchModel: PropTypes.func.isRequired,
};

export default Login;
