import React, { useState, useEffect } from "react";
import {Row, Container, Col} from "../Grid";
import API from "../../utils/API";
import _Div from "../_Div";
import Canvas from "../Canvas";

function TopCanvas(props) {

    return(
    <div className="topCanvas">
        <div>
            <Row>
                <Canvas canvasId="69" width="250px" height="250px"/>
            </Row>
            <Row>
                <h2>Food Pantry</h2>
            </Row>
        </div>
        <div>
            <Row>
                <Canvas canvasId="6969" width="250px" height="250px"/>
            </Row>
            <Row>
                <h2>Save the Koalas</h2>
            </Row>
        </div>
        <div>
            <Row>
                <Canvas canvasId="696969" width="250px" height="250px"/>
            </Row>
            <Row>
                <h2>Brent VS Cancer</h2>
            </Row>
        </div>
    </div>
    )
}

export default TopCanvas