import React, { useState, useEffect } from "react";
import "./style.css"

function IconSpin(props) {
    console.log("ICON" + props.size)

const size = props.size + "px";
const [colorArray,setColorArray] = useState(["black","black","black","black"])
let colors = props.colors ? props.colors : ["orangered","black","blue","yellow","orange","red"]

// condition ? exprIfTrue : exprIfFalse

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}
useEffect(() => {
    const setColor = async () => {
        setColorArray(shuffle(colors));
    }
    setColor();
  }, []);

  const style= {
        backgroundColor: colorArray[0],
        width: props.size + "px",
        height: props.size + "px"
        };

  return (
    <div>
        <div style={style} className="spinIcon"/>
    </div>
  )
}

export default IconSpin