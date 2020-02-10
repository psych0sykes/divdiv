import React, { useState, useEffect } from "react";
import "./style.css"

function IconLoading(props) {

const fullSize = props.size + "px";
const halfSize = (parseFloat(props.size) / 2).toString() + "px";
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

  const style= [
    {width: fullSize,
        height: fullSize},

    {backgroundColor: colorArray[0],
        width: halfSize,
        height: halfSize},
    
    {backgroundColor: colorArray[1],
        width: halfSize,
        height: halfSize},
    
    {backgroundColor: colorArray[2],
        width: halfSize,
        height: halfSize},
            
    {backgroundColor: colorArray[3],
        width: halfSize,
        height: halfSize}
  ];

  return (
    <div>
        <div className="divIconLoading">
            <div className="insertIcon1" style={style[1]}></div>
            <div className="insertIcon2" style={style[2]}></div>
        </div>
        <div className="divIconLoading">
            <div className="insertIcon3" style={style[3]}></div>
            <div className="insertIcon4" style={style[4]}></div>
        </div>
    </div>
  )
}

export default IconLoading