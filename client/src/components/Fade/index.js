import React from "react";
import "./style.css";


function Fade(props) {

    const style = {
        display: props.display,
    }
    
    return (
        <div style={style} className="fade"></div>
    )
}

export default Fade
