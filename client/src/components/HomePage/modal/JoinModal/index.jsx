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
    const { value, parentNode } = target;
    let valutToSave = '';
    if (target.type === 'checkbox') {
      valutToSave = target.checked;
    } else if (target.type === 'radio') {
      const { innerText } = parentNode;
      valutToSave = innerText;
    } else {
      valutToSave = value;
    }

    const { name } = target;
    this.setState({
      [name]: valutToSave,
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

  backFromDetails = () => {
    this.setState({ completeJoin: false });
  };

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
                  className="join__name"
                  placeholder="First Name"
                  onChange={this.onChange}
                />
                <Input
                  name="last"
                  type="text"
                  className="join__name"
                  placeholder="Last Name"
                  onChange={this.onChange}
                />
              </div>
              <Input
                name="email"
                type="email"
                className="input__email"
                placeholder="Enter your email"
                onChange={this.onChange}
              />
              <Input
                name="password"
                type="password"
                className="input__password"
                placeholder="Enter your password"
                onChange={this.onChange}
              />
              <Button
                className="button__join"
                value="Join"
                onClick={() => this.completeJoinCheck()}
                id="completeJoin"
              />
              <h3>Or</h3>
              <Button
                className="button__linkedin"
                value="Join with LinkedIn"
                onClick={null}
              />
            </div>
            <hr />
            <Button
              className="join__backtologin"
              value="Back To Login"
              onClick={switchModel}
            />
          </div>
        ) : (
          <JoinDetails
            onChange={this.onChange}
            backFromDetails={this.backFromDetails}
          />
        )}
      </div>
    );
  }
}

Join.propTypes = {
  closeModel: PropTypes.func.isRequired,
  switchModel: PropTypes.func.isRequired,
};

export default Join;
