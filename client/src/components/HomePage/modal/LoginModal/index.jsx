import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import axios from 'axios';
import Input from '../../../common/Inputs';
import Button from '../../../common/Button';
import { ModalConsumer } from '../ModalContext';
import PopUp from '../../../common/PopUp';

class Login extends Component {
  state = {};

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {});
  };

  onClick = async (context) => {
    const { history } = this.props;
    const { loginEmail, loginPassword } = this.state;
    if (!loginEmail || !loginPassword) {
      context.setPopUpMessage({
        message: 'Please fill all of the fields !',
        title: 'Error !',
      });
    } else {
      const loginData = { loginEmail, loginPassword };
      axios
        .post('/login', loginData)
        .then((loginResult) => {
          if (loginResult.status === 200) {
            history.push('/');
            context.closeModel();
          }
        })
        .catch((error) => {
          const { data } = error.response;
          context.setPopUpMessage({ message: data, title: 'Error !' });
        });
    }
  };

  render() {
    return (
      <ModalConsumer>
        {context => (
          <div className="modal">
            <div className="modal__content">
              <div className="modalHead">
                <h1>Login To TWIG</h1>
                <FontAwesomeIcon
                  icon="times-circle"
                  className="closeButton"
                  onClick={context.closeModel}
                />
              </div>
              <hr />
              <div className="content">
                <Input
                  name="loginEmail"
                  type="email"
                  className="input__email"
                  placeholder="Enter your email"
                  onChange={this.onChange}
                  value={context.loginEmail}
                />
                <Input
                  name="loginPassword"
                  type="password"
                  className="input__password"
                  placeholder="Enter your password"
                  onChange={this.onChange}
                  value={context.loginPassword}
                />
                <Button
                  className="button__login"
                  value="Login"
                  onClick={() => this.onClick(context)}
                />
                <h3>Or</h3>
                <Button
                  className="button__linkedin"
                  value="Continue with LinkedIn"
                  onClick={null}
                />
              </div>
              <hr />
              <h3>Don&apos;t Have an accout ?</h3>
              <Button
                className="joinButton"
                value="Join"
                onClick={context.switchModel}
              />
            </div>
            {context.popUpMessage ? (
              <PopUp
                title={context.popUpMessage.title}
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
Login.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};
export default Login;
