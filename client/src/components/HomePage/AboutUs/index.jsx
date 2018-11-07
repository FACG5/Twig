import React from 'react';
import './style.css';
import about from './aboutUs.jpeg';

export default function AboutUs() {
  return (
    <div className="about">
      <div>
        <h1 className="about__tittel">About Us</h1>
        <hr className="about_line" />
        <p className="about__text">
           It is dangerous for someone to give or receive medical
           information in their second language. Twig aims at resolving
           this problem by providing reliable and accessible medical translation
           from native people.
        </p>
      </div>
      <img className="about__image" src={about} alt="about" />
    </div>
  );
}
