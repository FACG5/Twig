import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import validator from 'validator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../../../common/Inputs';
import Button from '../../../common/Button';
import JoinDetails from './JoinDetails';
import { ModalConsumer } from '../ModalContext';
import LoadingModal from '../LoadingModal';

class Join extends Component {
  state = {};

  setPopUp = (message, title, context) => {
    context.setPopUpMessage({
      message,
      title,
    });
    this.setState({ signingUp: false });
  };

  joinCheck = (context) => {
    this.setState({ signingUp: true });
    setTimeout(() => {
      const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      } = context.data;
      if (firstName && lastName && email && password) {
        if (!validator.isEmail(email)) {
          this.setPopUp(
            'please Enter valid email adress !',
            'Error !',
            context,
          );
        } else if (!validator.equals(password, confirmPassword)) {
          this.setPopUp('Passwords do not match', 'Error !', context);
        } else {
          axios
            .get('/api/v1/signup', { headers: { email } })
            .then(() => {
              this.setState({ signingUp: false });
              context.updateState({ completeJoin: true });
            })
            .catch((error) => {
              const { data: message } = error.response;
              this.setPopUp(message, 'Error !', context);
            });
        }
      } else {
        this.setPopUp('please fill all of the fileds !', 'Error !', context);
      }
    }, 1000);
  };

  render() {
    const { signingUp } = this.state;
    return (
      <ModalConsumer>
        {context => (
          <div className="modal">
            {!context.completeJoin ? (
              <div className="modal__content">
                {signingUp ? <LoadingModal /> : null}
                <div className="modalHead">
                  <h1>Join Twig</h1>
                  <FontAwesomeIcon
                    icon="times-circle"
                    className="closeButton"
                    onClick={context.closeModel}
                  />
                </div>
                <hr />
                <div className="content">
                  <div>
                    <Input
                      name="firstName"
                      type="text"
                      className="join__name"
                      placeholder="First Name"
                      onChange={context.storeValue}
                      onBlur={context.validation}
                      value={context.data.firstName}
                    />
                    <Input
                      name="lastName"
                      type="text"
                      className="join__name"
                      placeholder="Last Name"
                      onChange={context.storeValue}
                      onBlur={context.validation}
                      value={context.data.lastName}
                    />
                  </div>
                  <Input
                    name="email"
                    type="email"
                    className="input__email"
                    placeholder="Enter your email"
                    onChange={context.storeValue}
                    onBlur={context.validation}
                    value={context.data.email}
                  />
                  <div>
                    <Input
                      name="password"
                      type="password"
                      className="input__password"
                      placeholder="Password"
                      onChange={context.storeValue}
                      onBlur={context.validation}
                      value={context.data.password}
                    />
                    <Input
                      name="confirmPassword"
                      type="password"
                      className="input__password"
                      placeholder="Confirm password"
                      onChange={context.storeValue}
                      onBlur={context.validation}
                      value={context.data.confirmPassword}
                    />
                  </div>
                  <Button
                    className="button__join"
                    value="Join"
                    onClick={() => this.joinCheck(context)}
                    id="completeJoin"
                  />
                  <h3 className="or">Or</h3>
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
                  onClick={context.switchModel}
                />
              </div>
            ) : (
              <JoinDetails
                onChange={context.storeValue}
                backFromDetails={context.backFromDetails}
                setJobTitle={context.setJobTitle}
              />
            )}
          </div>
        )}
      </ModalConsumer>
    );
  }
}

export default Join;
