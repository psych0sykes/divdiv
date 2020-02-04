import React from "react";
import {Row, Container, Col} from "../../Grid";
import "./style.css";

function CanvasBio(props) {

    return (
        <div className="canvasBio">
            <p>
                {props.bio}
            </p>   
        </div>
    )
}

export default CanvasBio