import React from "react";
import './style.css'
export default function Input(props) {
  const { className, placeholder, type, name } = props;
  return <input type={ type } name={ name } className={ className } placeholder = { placeholder } />;
}
