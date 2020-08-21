import React from 'react'

export default ({ title = 'about', text = '' }) => {
  const mystyle = {
    textIndent: "25px",
    textAlign: "justify",
  }
  return (
    // <div style="text-indent: 50px; text-align: justify; letter-spacing: 1px;">
    <div>
      <h1>{title}</h1>
      <div style={mystyle}>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
      </div>
    </div>
  )
}
