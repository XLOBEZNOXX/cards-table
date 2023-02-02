import React from 'react'
import "./button.css"

function ACButton({color, size = "lg", text}) {
  

    return (
    <button className="ac-button" style={{background: `${color}`}}>{text}{size}</button>
  )
}

export default ACButton