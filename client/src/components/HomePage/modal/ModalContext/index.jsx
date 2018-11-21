import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();
class Provider extends Component {
  state = {
    firstStage: true,
    joinModel: false,
    loginModel: false,
    languages: ['arabic', 'french'],
    dialects: ['dialect1', 'dialect2'],
    data: {
      skills: [],
      first: '',
      last: '',
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

    closePopUp: () => {
      this.setState({ popUpMessage: null });
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
      const { data } = this.state;
      if (data.jobTitle) {
        axios.post('/api/v1/signup', data);
      } else {
        this.setState({
          popUpMessage: {
            message: 'please choose your Job title',
            title: ' Error !',
          },
        });
      }
    },
  };

  render() {
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  }
}

export const ModalProvider = Provider;
export const ModalConsumer = Context.Consumer;
