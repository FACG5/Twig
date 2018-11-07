import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Input from '../../../common/Inputs';
import Button from '../../../common/Button';

class Join extends Component {
  state = {};

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { show, switchModel } = this.props;

    return (
      <div className="modelContent">
        <div className="modalHead">
          <h1>Join TWIG</h1>
          <FontAwesomeIcon
            icon="times-circle"
            className="closeButton"
            onClick={show}
          />
        </div>
        <hr />
        <div className="content">
          <div>
            <Input
              name="first"
              type="text"
              className="nameInput"
              placeholder="First Name"
              onChange={this.onChange}
            />
            <Input
              name="last"
              type="text"
              className="nameInput"
              placeholder="Last Name"
              onChange={this.onChange}
            />
          </div>
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
            value="Join with LinkedIn"
            onClick={null}
          />
        </div>
        <hr />
        <Button
          className="backToLogin"
          value="Back To Login"
          onClick={switchModel}
        />
      </div>
    );
  }
}

Join.propTypes = {
  show: PropTypes.func.isRequired,
  switchModel: PropTypes.func.isRequired,
};

export default Join;
