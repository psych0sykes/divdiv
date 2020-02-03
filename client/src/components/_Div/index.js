import React from "react";


function _Div(props) {

    const divStyle =
        {  
            width: props.Style.width,
            height: props.Style.height,
            backgroundColor: props.RgbColor
        };

    return(
    <div style={divStyle}></div>)
};

export default _Div;