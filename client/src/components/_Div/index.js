import React from "react";


function _Div(props) {

    const divStyle =
        {  
            width: props.divStyle.width,
            height: props.divStyle.height,
            backgroundColor: props.RgbColor
        };

    return(
    <div style={divStyle}></div>)
};

export default _Div;