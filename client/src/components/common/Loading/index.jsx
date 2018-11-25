import React from 'react';
import './style.css';

export default function Loading() {
  return (
    <div className="loading__main">
      <div className="spinner">
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>
    </div>
  );
}
