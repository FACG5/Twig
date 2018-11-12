import React from 'react';
import './style.css';

export default function AboutMe() {
  return (
    <div className="aboutme__box">
      <h3 className="aboutme__title">About Me</h3>
      <hr />
      <div className="aboutme__content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          officiis. Aliquid incidunt, perspiciatis eius cum voluptatibus culpa
          ut corporis temporibus saepe odit tempora sed dolores quo sit fuga
          deleniti ex?
        </p>
      </div>
    </div>
  );
}