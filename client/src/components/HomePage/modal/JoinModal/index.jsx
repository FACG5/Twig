import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Input from '../../../common/Inputs';
import Button from '../../../common/Button';
import JoinDetails from './JoinDetails';

class Join extends Component {
  state = { completeJoin: false };

  onChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  };

  completeJoinCheck = () => {
    const {
      first, last, email, password,
    } = this.state;
    if (first && last && email && password) {
      this.setState({ completeJoin: true });
    }
  };

  logState = () => {}

  render() {
    const { closeModel, switchModel } = this.props;
    const { completeJoin } = this.state;
    return (
      <div className="modal">
        {!completeJoin ? (
          <div className="modelContent">
            <div className="modalHead">
              <h1>Join TWIG</h1>
              <FontAwesomeIcon
                icon="times-circle"
                className="closeButton"
                onClick={closeModel}
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
              <Button
                className="loginButton"
                value="Join"
                onClick={() => this.completeJoinCheck()}
                id="completeJoin"
              />
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
        ) : <JoinDetails onChange={this.onChange} logState = {this.logState} />}
      </div>
    );
  }
}

Join.propTypes = {
  closeModel: PropTypes.func.isRequired,
  switchModel: PropTypes.func.isRequired,
};

export default Join;
