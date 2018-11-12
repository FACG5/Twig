import React from 'react';
import './style.css';

export default function LanguageLevel() {
  return (
    <div className="language__box">
      <h3 className="language__title">Language Level</h3>
      <hr />
      <div className="language__content">
        <ul>
          <li> I’m a native speaker / mothertongue. </li>
          <li> I have tested at upper intermediate or advanced level. </li>
          <li> I have completed University or professional training this language.  </li>
          <li> I’m self-taught. </li>
        </ul>
      </div>
    </div>
  );
}
