import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import jsCookie from 'js-cookie';
import axios from 'axios';
import PropTypes from 'prop-types';
import SearchBar from '../../common/SearchBar';
import Card from './QuestionCard';
import './style.css';
import Loading from '../../common/Loading';
import Button from '../../common/Button';
import AddQuestionModal from './AddQuestionModal';

class QuesionsPage extends Component {
  state = {
    values: [],
    section: '',
    message: '',
    found: true,
    items: [],
    showModal: false,
  };

  componentWillMount() {
    const token = jsCookie.get('jwt');
    const { id } = jwt_decode(token);
    this.setState({ userId: id });
    const { match, history } = this.props;
    const { params } = match;
    const { name } = params;

    setTimeout(() => {
      axios
        .get(`/api/v1/specialization/${name}`)
        .then((data) => {
          const results = data.data;
          this.setState({
            values: results,
            items: results,
            section: name,
            avatarUrl: results[0].avatar_url,
          });
        })
        .catch((error) => {
          const { status, data } = error.response;
          if (status === 401) {
            history.push('/');
          } else {
            this.setState({ error: data });
          }
        });
    }, 1000);
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    const { values } = this.state;
    let list = values;
    list = list.filter(
      item => item.question.toLowerCase().indexOf(value.toLowerCase()) !== -1,
    );
    if (list.length !== 0) {
      this.setState({ items: list, found: true });
    } else {
      this.setState({ items: null, found: false });
    }
  };

  search = (event) => {
    event.preventDefault();
  };

  sortDate = () => {
    const { items } = this.state;
    const sorteListByDate = items.sort((a, b) => a.date < b.date);
    this.setState({ items: sorteListByDate, found: true });
  };

  showModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  updateValues = (element) => {
    this.setState(
      { items: element, values: element },
    );
  }

  render() {
    const {
      items, section, avatarUrl, found, input, error, values, showModal, userId,
    } = this.state;
    if (!values.length && !error) {
      return <Loading />;
    }
    if (values.length) {
      return (
        <div className="questions__box">
          <div>
            <div className="questions__header">
              <div className="questions__header__logo">
                <img src={avatarUrl} alt="img" />
                <h2 className="questions__title">{section}</h2>
              </div>
              <SearchBar
                className="questions__search"
                submitHandler={this.search}
                onChange={this.onChange}
                value={input}
              />
            </div>
            {!found && (
              <h1 className="questions__notFound">
                Sorry, no result was found!
              </h1>
            )}
            <Link to="/main/">
              <Button
                value="Back to Categories"
                className="button__back-categories"
                id="back-categories"
              />
            </Link>
            <Button
              value="Add Question"
              className="button__add-question"
              onClick={this.showModal}
              id="add-question"
            />
            <div className="question__cards">
              <Card values={items} section={section} userId={userId} />
            </div>
            {found && (
              <p className="questions__showmore" />
            )}
            {showModal ? (
              <AddQuestionModal
                showModal={this.showModal}
                speclalizationsId={values[0].speclalizationsId}
                updateValues={this.updateValues}
                section={section}
              />
            ) : null}
          </div>
        </div>
      );
    }
    return (
      <div className="questions__box">
        <h4 className="error__message">{error}</h4>
      </div>
    );
  }
}
QuesionsPage.propTypes = {
  match: PropTypes.isRequired,
  history: PropTypes.isRequired,
};

export default QuesionsPage;
