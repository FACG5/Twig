import React, { Component } from 'react';
import Button from '../Button/index';
import './style.css';
import '../Button/style.css';
import Logo from './logo1.png';

class Header extends Component {
  state = {
    model: false,
  };

  showModel =() => {
    this.setState(prevState => ({ model: !prevState.model }));
  }

  render() {
    return (
      <div className="header">
        <img src={Logo} alt="logo" className="header__logo" />
        <div className="header__buttons">
          <Button value="join" className="join" onClick={() => this.showModel} join />
          <Button value="login" className="login" onClick={() => this.showModel} login />
        </div>
      </div>
    );
  }
}

export default Header;
