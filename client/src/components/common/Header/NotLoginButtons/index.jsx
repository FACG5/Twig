import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../../Button';
import { ModalConsumer } from '../../../HomePage/modal/ModalContext';

class LoginHeader extends Component {
  goToMain = (history, context) => {
    Promise.resolve(
      history.push('/main'),
    ).then(() => {
      const { pathname } = history.location;
      if (pathname === '/') {
        context.updateState({ loginModel: true });
      }
    });
  };

  render() {
    const { showModel, history } = this.props;
    return (
      <ModalConsumer>
        {context => (
          <Fragment>
            <Button
              value="Dashboard"
              className="dashboard__button"
              id="loginModel"
              onClick={() => this.goToMain(history, context)}
            />
            <Button
              value="Join"
              className="join"
              onClick={showModel}
              id="joinModel"
            />
            <Button
              value="login"
              className="login"
              onClick={showModel}
              id="loginModel"
            />
          </Fragment>
        )}
      </ModalConsumer>
    );
  }
}

LoginHeader.propTypes = {
  showModel: PropTypes.func,
};

export default withRouter(LoginHeader);
