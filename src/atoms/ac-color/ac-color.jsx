import React from 'react'
import "./ac-color.css"

function ACColor({color = "orange"}) {
    const styles = {
        height: "144px",
        width: "400px",
        background: color
      };
    return (
    <div style={styles}></div>
  )
}

export default ACColor