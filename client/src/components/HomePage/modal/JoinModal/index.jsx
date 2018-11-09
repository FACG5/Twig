import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Input from '../../../common/Inputs';
import Button from '../../../common/Button';
import JoinDetails from './JoinDetails';
import PopUp from './ValidationPopUp';

class Join extends Component {
  state = {
    completeJoin: false,
    validPopUp: false,
  };

  onChange = (event) => {
    this.storeValue(event);
  };

  storeValue = (event) => {
    const { target } = event;
    const { value } = target;
    let valutToSave = '';
    if (target.type === 'checkbox') {
      valutToSave = target.checked;
    } else {
      valutToSave = value;
    }
    const { name } = target;
    this.setState({
      [name]: valutToSave,
    });
  };

  setJobTitle = (value) => {
    this.setState({ jobTitle: value });
  }

  validation = (event) => {
    const { target } = event;
    const { value } = target;
    if (!value.trim()) return event.target.classList.add('input__failed');
    return event.target.classList.remove('input__failed');
  };

  joinCheck = () => {
    const {
      first, last, email, password,
    } = this.state;
    if (first && last && email && password) {
      this.setState({ completeJoin: true });
    } else {
      this.setState({ validPopUp: true });
    }
  };

  closePopUp = () => {
    this.setState({ validPopUp: false });
  };

  backFromDetails = () => {
    this.setState({ completeJoin: false });
  };

  render() {
    const { closeModel, switchModel } = this.props;
    const {
      completeJoin,
      validPopUp,
      first,
      last,
      email,
      password,
    } = this.state;
    return (
      <React.Fragment>
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
                    onBlur={this.validation}
                    value={first}
                  />
                  <Input
                    name="last"
                    type="text"
                    className="join__name"
                    placeholder="Last Name"
                    onChange={this.onChange}
                    onBlur={this.validation}
                    value={last}
                  />
                </div>
                <Input
                  name="email"
                  type="email"
                  className="input__email"
                  placeholder="Enter your email"
                  onChange={this.onChange}
                  onBlur={this.validation}
                  value={email}
                />
                <Input
                  name="password"
                  type="password"
                  className="input__password"
                  placeholder="Enter your password"
                  onChange={this.onChange}
                  onBlur={this.validation}
                  value={password}
                />
                <Button
                  className="button__join"
                  value="Join"
                  onClick={() => this.joinCheck()}
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
              setJobTitle={this.setJobTitle}
            />
          )}
        </div>
        {validPopUp ? <PopUp closePopUp={this.closePopUp} /> : null}
      </React.Fragment>
    );
  }
}

Join.propTypes = {
  closeModel: PropTypes.func.isRequired,
  switchModel: PropTypes.func.isRequired,
};

export default Join;
