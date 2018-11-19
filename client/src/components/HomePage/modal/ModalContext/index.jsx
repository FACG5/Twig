import React, { Component } from 'react';

const Context = React.createContext();
class Provider extends Component {
  state = {
    joinModel: false,
    loginModel: false,
    languages: ['arabic', 'french'],
    dialects: ['dialect1', 'dialect2'],
    data: {
      first: '',
      last: '',
      email: '',
      password: '',
      loginEmail: '',
      loginPassword: '',
    },
    updateState: (newState) => {
      this.setState(newState);
    },
    firstStage: true,
    setJobTitle: (value) => {
      this.setState(prevState => ({
        data: { jobTitle: value, ...prevState.data },
      }));
    },

    changeStage: () => {
      this.setState(prevStat => ({ firstStage: !prevStat.firstStage }));
    },

    closePopUp: () => {
      this.setState({ popUpMessage: null });
    },

    setPopUpMessage: (popUpMessage) => {
      this.setState({ popUpMessage });
    },


    storeValue: (event) => {
      const { target } = event;
      const { value } = target;
      let valutToSave = '';
      if (target.type === 'checkbox') {
        valutToSave = target.checked;
      } else {
        valutToSave = value;
      }
      const { name } = target;
      this.setState(prevState => ({
        data: { ...prevState.data, [name]: valutToSave },
      }));
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
  };

  render() {
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  }
}

export const ModalProvider = Provider;
export const ModalConsumer = Context.Consumer;
