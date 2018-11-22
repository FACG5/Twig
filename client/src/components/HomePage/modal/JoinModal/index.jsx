import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../../../common/Inputs';
import Button from '../../../common/Button';
import JoinDetails from './JoinDetails';
import PopUp from '../../../common/PopUp';
import { ModalConsumer } from '../ModalContext';

class Join extends Component {
  state = {}

  joinCheck = (context) => {
    const {
      firstName, lastName, email, password,
    } = context.data;
    if (firstName && lastName && email && password) {
      context.updateState({ completeJoin: true });
    } else {
      context.setPopUpMessage({ message: 'please fill all of the fileds !', title: ' Error !' });
    }
  }

  render() {
    return (
      <ModalConsumer>
        {context => (
          <div className="modal">
            {!context.completeJoin ? (
              <div className="modal__content">
                <div className="modalHead">
                  <h1>Join TWIG</h1>
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
            {context.popUpMessage ? (
              <PopUp
                title="wrong user info !"
                message={context.popUpMessage.message}
                closePopUp={context.closePopUp}
              />
            ) : null}
          </div>
        )}
      </ModalConsumer>
    );
  }
}

export default Join;
