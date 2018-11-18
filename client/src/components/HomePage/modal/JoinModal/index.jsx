import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../../../common/Inputs';
import Button from '../../../common/Button';
import JoinDetails from './JoinDetails';
import PopUp from './ValidationPopUp';
import { ModalConsumer } from '../ModalContext';

export default function Join() {
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
                    name="first"
                    type="text"
                    className="join__name"
                    placeholder="First Name"
                    onChange={context.storeValue}
                    onBlur={context.validation}
                    value={context.data.first}
                  />
                  <Input
                    name="last"
                    type="text"
                    className="join__name"
                    placeholder="Last Name"
                    onChange={context.storeValue}
                    onBlur={context.validation}
                    value={context.data.last}
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
                  onClick={context.joinCheck}
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
          {context.validPopUp ? (
            <PopUp
              closePopUp={context.closePopUp}
              title="wrong user info !"
              message="please fill All of the field"
            />
          ) : null}
        </div>
      )}
    </ModalConsumer>
  );
}

Join.propTypes = {
  closeModel: PropTypes.func.isRequired,
  switchModel: PropTypes.func.isRequired,
};
