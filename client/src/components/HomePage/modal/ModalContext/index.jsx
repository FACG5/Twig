import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import PopUp from '../../../common/PopUp';

const Context = React.createContext();
class Provider extends Component {
  state = {
    firstStage: true,
    joinModel: false,
    loginModel: false,
    data: {
      skills: [],
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },

    updateState: (newState) => {
      this.setState(newState);
    },

    setJobTitle: (value) => {
      this.setState(prevState => ({
        data: { jobTitle: value, ...prevState.data },
      }));
    },

    changeStage: () => {
      this.setState(prevStat => ({
        firstStage: !prevStat.firstStage,
        data: { ...prevStat.data, skills: [] },
      }));
    },

    closePopUp: (redirect) => {
      if (redirect) {
        this.setState({ popUpMessage: null }, () => {
          this.setState({ joinModel: false, loginModel: true });
        });
      } else {
        this.setState({ popUpMessage: null });
      }
    },

    setPopUpMessage: (popUpMessage) => {
      this.setState({ popUpMessage });
    },

    storeValue: (event) => {
      const { target } = event;
      const {
        value, name, checked, id,
      } = target;
      let valutToSave = '';
      const { data } = this.state;
      const { skills } = data;
      if (target.type === 'checkbox') {
        if (checked) {
          skills.push({ id });
        } else {
          skills.pop({ id });
        }
      } else {
        valutToSave = value;
        this.setState(prevState => ({
          data: { ...prevState.data, [name]: valutToSave },
        }));
      }
    },

    validation: (event) => {
      const { target } = event;
      const { value } = target;
      if (!value.trim()) return event.target.classList.add('input__failed');
      return event.target.classList.remove('input__failed');
    },

    showModel: (event) => {
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
    },

    closeModel: () => {
      this.setState({ joinModel: false, loginModel: false });
    },

    switchModel: () => {
      this.setState(prevState => ({
        joinModel: !prevState.joinModel,
        loginModel: !prevState.loginModel,
      }));
    },

    signUp: () => {
      this.setState({ signingUp: true });
      setTimeout(() => {
        const { data } = this.state;
        const { setPopUpMessage } = this.state;
        if (data.jobTitle) {
          axios
            .post('/api/v1/signup', data)
            .then((result) => {
              this.setState({ signingUp: false });
              const { data: message } = result;
              setPopUpMessage({ title: 'success', message, redirect: true });
            })
            .catch((error) => {
              this.setState({ signingUp: false });
              const { data: message } = error.response;
              setPopUpMessage({ title: 'error', message });
            });
        } else {
          this.setState({
            popUpMessage: {
              message: 'please choose your Job title',
              title: ' Error !',
            },
          });
        }
      }, 1000);
    },
  };

  render() {
    const { children } = this.props;
    const { popUpMessage, closePopUp } = this.state;
    return (
      <Context.Provider value={this.state}>
        {popUpMessage ? (
          <PopUp
            title={popUpMessage.title}
            message={popUpMessage.message}
            closePopUp={closePopUp}
            redirect={popUpMessage.redirect}
          />
        ) : null}
        {children}
      </Context.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const ModalProvider = withRouter(Provider);
export const ModalConsumer = Context.Consumer;
