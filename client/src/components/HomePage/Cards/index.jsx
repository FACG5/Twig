import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalConsumer } from '../modal/ModalContext';
import Button from '../../common/Button';
import './style.css';


const Cards = (props) => {
  const goToMain = (context) => {
    const { history } = props;
    Promise.resolve(
      history.push('/main'),
    ).then(() => {
      const { pathname } = history.location;
      if (pathname === '/') {
        context.updateState({ loginModel: true });
      }
    });
  };
  return (
    <ModalConsumer>
      {context => (
        <Fade bottom>
          <div className="cards__container">
            <h1 className="cards__title">What Can You Do On Twig</h1>
            <div className="cards__boxes">
              <div className="cards__box">
                <div className="cards__icon">
                  <FontAwesomeIcon icon="notes-medical" size="4x" color="#bc3636" />
                </div>
                <h3 className="cards__box-title">Translation Categories</h3>
                <hr className="cards__line" />
                <p>
                  In the translation categories section, you can view translation
                  categories and choose the category you interested in translating.
                </p>
              </div>
              <div className="cards__box">
                <div className="cards__icon">
                  <FontAwesomeIcon icon="question-circle" size="4x" color="#bc3636" />
                </div>
                <h3 className="cards__box-title">Questions</h3>
                <hr className="cards__line" />
                <p>
                  In the questions section, you can view questios of the category that
                  you choose, and you can add and edit your own questions.
                </p>
              </div>
              <div className="cards__box">
                <div className="cards__icon">
                  <FontAwesomeIcon icon="language" size="4x" color="#bc3636" />
                </div>
                <h3 className="cards__box-title">Translations & Verifications</h3>
                <hr className="cards__line" />
                <p>
                  In the translations section, you can view the translations of
                  specific question depending on your language and dialect that you
                  choose in the registration and you can add your own text/audio/video
                  translation to it, also you can verify other volunteers&apos;
                  translation of the same question.
                </p>
              </div>
            </div>
            <Link to="/main/">
              <Button
                value="TRY it out here "
                className="button__hompage-try"
                onClick={() => goToMain(context)}
              />
            </Link>
            <hr className="content-line" />
          </div>
        </Fade>
      )}
    </ModalConsumer>
  );
};

Cards.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(Cards);
