import React, { Component } from 'react';
import './style.css';
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
      message, title,
    });
    this.setState({ signingUp: false });
  }

  joinCheck = (context) => {
    this.setState({ signingUp: true });
    setTimeout(() => {
      const {
        firstName, lastName, email, password,
      } = context.data;
      if (firstName && lastName && email && password) {
        if (!validator.isEmail(email)) {
          this.setPopUp('please Enter valid email adress !', 'Error !', context);
        } else {
          this.setState({ signingUp: false });
          context.updateState({ completeJoin: true });
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
                  <Input
                    name="password"
                    type="password"
                    className="input__password"
                    placeholder="Enter your password"
                    onChange={context.storeValue}
                    onBlur={context.validation}
                    value={context.data.password}
                  />
                  <Button
                    className="button__join"
                    value="Join"
                    onClick={() => this.joinCheck(context)}
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
