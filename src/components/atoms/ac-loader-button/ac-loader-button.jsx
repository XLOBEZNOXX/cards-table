import React from 'react'
import "./ac-loader-button.css";

function ACLoaderButton ({onLoad, text}) {
  return (
    <button onClick={onLoad} className="ac-loader-button">{text}</button>
  );
}

export default ACLoaderButton;