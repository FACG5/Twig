import React from 'react';
import Fade from 'react-reveal';
import './style.css';
import about from './volunteer-hands.jpg';

const AboutUs = () => (
  <Fade bottom>
    <div>
      <div className="about">
        <div>
          <h1 className="about__tittel">About Us</h1>
          <hr className="about_line" />
          <p className="about__text">
            Twig is a database of common medical questions translated by
            volunteer medical professionals and other translators. Twig
            volunteers also verify each translation’s quality, and may add new
            questions to the system. Once verified multiple times, translations
            are made available to medical professionals to use. In this way Twig
            is a typical crowdsourced wiki whose vision is directed by its
            members.
          </p>
        </div>
        <img className="about__image" src={about} alt="about" />
      </div>
      <hr className="content-line" />
    </div>
  </Fade>
);

export default AboutUs;
