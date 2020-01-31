import React from "react";
import "./style.css"

export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}

export function FlexRow({ fluid, children, wrap }) {

  const style = {flexWrap: wrap ? wrap : "wrap"}

  return  <div className={`row${fluid ? "-fluid" : ""}`}>
            <div className="flexRow" style={style}>
              {children}
            </div>
          </div>;
}
