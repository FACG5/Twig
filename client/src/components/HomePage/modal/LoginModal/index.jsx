import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Input from '../../../common/Inputs';
import Button from '../../../common/Button';

class Login extends Component {
  state = {};

   onChange = (e) => {
     const { name, value } = e.target;
     this.setState({ [name]: value });
   };

   render() {
     const { switchModel, closeModel } = this.props;
     return (
       <div className="modal">
         <div className="modelContent">
           <div className="modalHead">
             <h1>Login To TWIG</h1>
             <FontAwesomeIcon
               icon="times-circle"
               className="closeButton"
               onClick={closeModel}
             />
           </div>
           <hr />
           <div className="content">
             <Input
               name="email"
               type="email"
               className="input__email"
               placeholder="Enter your email"
               onChange={this.onChange}
             />
             <Input
               name="password"
               type="password"
               className="input__password"
               placeholder="Enter your password"
               onChange={this.onChange}
             />
             <Button className="button__login" value="Join" onClick={null} />
             <h3>Or</h3>
             <Button
               className="button__linkedin"
               value="Continue with LinkedIn"
               onClick={null}
             />
           </div>
           <hr />
           <h3>Don't Have an accout ?</h3>
           <Button className="joinButton" value="Join" onClick={switchModel} />
         </div>
       </div>
     );
   }
}
Login.propTypes = {
  closeModel: PropTypes.func.isRequired,
  switchModel: PropTypes.func.isRequired,
};
export default Login;
