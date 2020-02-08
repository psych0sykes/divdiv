import React from "react";
import {FlexRow} from "../Grid";
import "./style.css";

export function Slogan({children}) {

  const style = {
    display: "inline-block"
  }

  return (
  <div className="slogan"><div style={style}>{children}</div></div>
  );
}

export function CenterItem({left, right}) {
  return (
          <FlexRow wrap="noWrap">
              <div className="col-sm-6 justify-content-end d-flex">
                  <div className="centerItemTitle">{left}</div>
              </div>
              <div className="col-sm-6 justify-content-start d-flex">
                  <div className="centerItemCaption">{right}</div>
              </div>
          </FlexRow>
  )
}

export function Spacer(props) {
  return (
      <div className="sectionSpacer" style={{height: props.space}}></div>
  )
}