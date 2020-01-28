import React, { useState, useEffect } from "react";
import {Row, Container, Col} from "../Grid";
import API from "../../utils/API";

function Canvas(props) {

    const canvasId = props.canvasId;
    const [canvasDivs, setCanvasDivs] = useState();


    const getCanvasDivs = a => {
        API.getCanvasDivs(a)
        .then(res => setCanvasDivs(res.data))
        .catch(err => console.log(err));
    };

    useEffect(() => {
        getCanvasDivs(canvasId);
    } , [] )

    return(
    <div>{props.shimSham}</div>
    )
}

export default Canvas