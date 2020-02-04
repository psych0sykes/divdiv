import React, { useState, useEffect } from "react";
import {Row, Container, Col} from "../../Grid";
import API from "../../../utils/API";
import Canvas from "../../Canvas";
import "./style.css";

function CanvasCard (props) {

    return (
        
        <div className="canvasCard">
            <a href={"/canvas/" + props.canvasId}>
                <Container>
                    <Row>
                        <Canvas canvasId={props.canvasId} size={props.size} divSize={props.divSize}/>
                    </Row>
                    <Row>
                        <div className="canvasCardTitle">
                            <h5>{props.canvasTitle}</h5>
                        </div>
                    </Row>
                </Container>
            </a>
        </div>   
    )
}

export default CanvasCard