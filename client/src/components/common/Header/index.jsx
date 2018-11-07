import React, { Component } from 'react';
import Button from '../Button/index';
import './style.css';
import '../Button/style.css';
import Logo from './logo1.png';

class Header extends Component {
  state = {
  login:false ,
  join:false
};
  render() {
    return (
      <div className="header">
        <img src={Logo} alt="logo" className="header__logo" />
        <div className="header__buttons">
          <Button value="join" className="join" />
          <Button value="login" className="login" />
        </div>
      </div>
    );
  }
}

export default Header;
