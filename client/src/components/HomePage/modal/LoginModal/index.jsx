import React, { Component } from 'react';
import './style.css';
import validator from 'validator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import axios from 'axios';
import Input from '../../../common/Inputs';
import Button from '../../../common/Button';
import { ModalConsumer } from '../ModalContext';
import LoadinModal from '../LoadingModal';

class Login extends Component {
  state = {};

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  setPopUp = (message, title, context) => {
    context.setPopUpMessage({
      message, title,
    });
  }

  onClick = async (context) => {
    const { history } = this.props;
    const { loginEmail, loginPassword } = this.state;
    if (!loginEmail || !loginPassword) {
      this.setPopUp('Please fill all of the fields !', 'Error !', context);
    } else if (!validator.isEmail(loginEmail)) {
      this.setPopUp('Invalid email adress !', 'Error !', context);
    } else {
      this.setState({ loggingIn: true });
      const loginData = { loginEmail, loginPassword };
      setTimeout(() => {
        axios
          .post('/api/v1/login', loginData)
          .then((loginResult) => {
            if (loginResult.status === 200) {
              this.setState({ loggingIn: false }, () => {
                history.push('/main');
                context.closeModel();
              });
            }
          })
          .catch((error) => {
            this.setState({ loggingIn: false });
            const { data } = error.response;
            context.setPopUpMessage({ message: data, title: 'Error !' });
          });
      }, 1000);
    }
  };

  render() {
    const { loggingIn } = this.state;
    return (
      <ModalConsumer>
        {context => (
          <div className="modal">
            <div className="modal__content">
              <div className="modalHead">
                <h1>Login to Twig</h1>
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
              <h3>Don&apos;t Have an account?</h3>
              <Button
                className="joinButton"
                value="Join"
                onClick={context.switchModel}
              />
              {loggingIn ? <LoadinModal /> : null }
            </div>
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
