import React, { Component } from 'react';
import './style.css';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Logo from './logo1.png';
import LoginModel from '../../HomePage/modal/LoginModal';
import JoinModel from '../../HomePage/modal/JoinModal';
import { ModalConsumer } from '../../HomePage/modal/ModalContext';
import LoggedinButtons from './LoggedinButtons';
import NotLoginButtons from './NotLoginButtons';

class Header extends Component {
  state = {};

  logout = () => {
    const { history } = this.props;
    axios.get('/api/v1/logout').then(() => {
      history.push('/');
    });
  };

  render() {
    const { history, login } = this.props;
    return (
      <ModalConsumer>
        {context => (
          <React.Fragment>
            <div className="header">
              <Link to="/main">
                <img src={Logo} alt="logo" className="header__logo" />
              </Link>
              <div className="header__buttons">
                {login ? (
                  <LoggedinButtons logout={this.logout} />
                ) : (
                  <NotLoginButtons showModel={context.showModel} />
                )}
              </div>
            </div>
            {context.loginModel ? <LoginModel history={history} /> : null}
            {context.joinModel ? <JoinModel /> : null}
          </React.Fragment>
        )}
      </ModalConsumer>
    );
  }
}
Header.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  login: PropTypes.string,
};

export default withRouter(Header);
