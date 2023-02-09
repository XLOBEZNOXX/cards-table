import React from 'react'
import "./ac-typography.css"

function ACTypography({text, variant = "h1"}) {
    let typo;
    switch(variant)
    {
    case "h2":
        typo = <h2>{text}</h2>
        break;
    case "h3":
        typo = <h3>{text}</h3>
        break;
    case "p":
        typo = <p>{text}</p>
        break;
    default: typo = <h1>{text}</h1>
    }
    return (
    <div className='typography-container'>
        {typo}
    </div>
  )
}

export default ACTypography