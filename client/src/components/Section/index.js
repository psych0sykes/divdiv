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