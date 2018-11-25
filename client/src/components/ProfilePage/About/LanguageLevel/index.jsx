import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

class LanguageLevel extends Component {
  state = {
    values: [],
  };

  componentWillMount() {
    axios.get('/api/v1/profile').then((res) => {
      const results = res.data;
      const { languageResult } = results;
      this.setState({ values: languageResult });
    }).catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        this.setState({ message: 'Page Not Found' });
      }
    });
  }

  render() {
    const { values } = this.state;
    const result = values.map((element) => {
      const description = element.skillsDescription;
      const id = element.skillsId;
      return <li key={id}>{description}</li>;
    });

    return (
      <div className="language__box">
        <h3 className="language__title">Language Level</h3>
        <hr />
        <div className="language__content">
          <ul>
            {result}
          </ul>
        </div>
      </div>
    );
  }
}

export default LanguageLevel;
