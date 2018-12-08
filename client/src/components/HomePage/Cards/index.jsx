import React, { Fragment } from 'react';
import './style.css';


const Cards = () => (
  <Fragment>
    <h1 className="cards__title">What Can You Do On Twig</h1>
    <div className="cards__boxes">
      <div className="cards__box">
        <h3 className="cards__box-title">Translation Categories</h3>
        <p>In the translation categories section, you can view translation categories and choose the category you interested to translate</p>
      </div>
      <div className="cards__box">
        <h3 className="cards__box-title">Questions</h3>
        <p>In the questions section, you can view questios of the category that you choose, and you can add and edit your own questions</p>
      </div>
      <div className="cards__box">
        <h3 className="cards__box-title">Translations & Verifications</h3>
        <p>In the translations section, you can view the translations of specific question depends on your language and dialect that you choose in the registration and you can add your own text/audio/video translation to it, also you can verify other volunteers translation of the same question</p>
      </div>
    </div>
  </Fragment>
);

export default Cards;
