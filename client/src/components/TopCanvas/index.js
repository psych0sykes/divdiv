import React, { useState, useEffect } from "react";
import {Row, Container, Col} from "../Grid";
import API from "../../utils/API";
import _Div from "../_Div";
import Canvas from "../Canvas";

function TopCanvas(props) {

    return(
    <div className="topCanvas">
        <Canvas canvasId="69" width="250px" height="250px"/>
        <Canvas canvasId="6969" width="250px" height="250px"/>
        <Canvas canvasId="696969" width="250px" height="250px"/>
    </div>
    )
}

export default TopCanvas