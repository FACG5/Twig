import React from 'react';
import './style.css';

export default function LoadingModal() {
  return (
    <div className="loading__main">
      <div className="spinner__modal">
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>
    </div>
  );
}
