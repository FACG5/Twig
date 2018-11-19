import React, { Component } from 'react';
import './style.css';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import '../Button/style.css';
import Logo from './logo1.png';
import LoginModel from '../../HomePage/modal/LoginModal';
import JoinModel from '../../HomePage/modal/JoinModal';
import {
  ModalConsumer,
} from '../../HomePage/modal/ModalContext';

class Header extends Component {
  state = {};

  render() {
    const { history } = this.props;
    return (
      <ModalConsumer>
        {context => (
          <React.Fragment>
            <div className="header">
              <img src={Logo} alt="logo" className="header__logo" />
              <div className="header__buttons">
                <Button
                  value="join"
                  className="join"
                  onClick={context.showModel}
                  id="joinModel"
                />
                <Button
                  value="login"
                  className="login"
                  onClick={context.showModel}
                  id="loginModel"
                />
              </div>
            </div>
            {context.loginModel ? (
              <LoginModel
                history={history}
              />
            ) : null}
            {context.joinModel ? (
              <JoinModel />
            ) : null}
          </React.Fragment>
        )}
      </ModalConsumer>
    );
  }
}
Header.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(Header);
