import React from "react";


function DivDiv(props) {

    const divStyle =
        {  
            width: props.divStyle.width,
            height: props.divStyle.height,
            backgroundColor: props.RgbColor
        };

    return(
    <div style={divStyle}></div>)
};

export default DivDiv;