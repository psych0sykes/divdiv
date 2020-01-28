import React, { useState, useEffect } from "react";
import {Row, Container, Col} from "../Grid";


function _Div(props) {

    const [divStyle, setDivStyle] = useState(
        {  
            width: props.Style.width,
            height: props.Style.height,
            backgroundColor: props.RgbColor
        })

    return(
    <div style={divStyle}></div>)
};

export default _Div;