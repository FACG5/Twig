import React, { Component } from 'react';
import './style.css';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import '../Button/style.css';
import Logo from './logo1.png';
import LoginModel from '../../HomePage/modal/LoginModal';
import JoinModel from '../../HomePage/modal/JoinModal';

class Header extends Component {
  state = {
    joinModel: false,
    loginModel: false,
  };

  showModel = (event) => {
    const { id } = event.target;
    this.setState(
      {
        joinModel: false,
        loginModel: false,
      },
      () => {
        this.setState({ [id]: true });
      },
    );
  };

  closeModel = () => {
    this.setState({ joinModel: false, loginModel: false });
  };

  switchModel = () => {
    this.setState(prevState => (
      { joinModel: !prevState.joinModel, loginModel: !prevState.loginModel }
    ));
  }

  render() {
    const { joinModel, loginModel } = this.state;
    const { history } = this.props;
    return (
      <React.Fragment>
        <div className="header">
          <img src={Logo} alt="logo" className="header__logo" />
          <div className="header__buttons">
            <Button
              value="join"
              className="join"
              onClick={this.showModel}
              id="joinModel"
            />
            <Button
              value="login"
              className="login"
              onClick={this.showModel}
              id="loginModel"
            />
          </div>
        </div>
        {loginModel ? (
          <LoginModel
            closeModel={this.closeModel}
            switchModel={this.switchModel}
            history={history}
          />
        ) : null}
        {joinModel ? (
          <JoinModel
            closeModel={this.closeModel}
            switchModel={this.switchModel}
          />
        ) : null}
      </React.Fragment>
    );
  }
}
Header.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(Header);
