import React from "react";
import './style.css'
export default function Input(props) {
  const { className, placeholder } = props;
  return <input type="text" className={ className } placeholder = { placeholder } />;
}
