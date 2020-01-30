import React from "react";
import "./style.css"

export function Slogan({children}) {

  const style = {
    display: "inline-block"
  }

  return (
  <div className="slogan"><div style={style}>{children}</div></div>
  );
}

export function Row(props) {
  return (
    <div></div>
  )
}

export function Col(props) {
  return (
    <div></div>
  )
}
