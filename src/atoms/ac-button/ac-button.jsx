import React from 'react'
import "./ac-button.css"

function ACButton({color, size = "lg", text}) {
  let classes = `ac-button-lg`;

  if (size === "sm") {
    classes = "ac-button-sm";
  }

  if (size === "md") {
    classes = "ac-button-md";
  }

  return (
    <button className={`ac-button ${classes}`} style={{background: `${color}`}}>
      {text}
    </button>
  )
}

export default ACButton