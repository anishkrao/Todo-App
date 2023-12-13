import React from 'react'

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div style={{color: "#9e9e9e", display: "flex", justifyContent: "center"}}><p>Copyright {year}</p></div>
  )
}
