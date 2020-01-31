import React, { useState, useEffect } from "react";
import {Row, Container, Col} from "../Grid";
import API from "../../utils/API";
import _Div from "../_Div";
import Canvas from "../Canvas";
import "./style.css";

function TopCanvas(props) {

    return(
    <div className="topCanvas">
        <div className="topItem">
            <Container>
                <Row>
                    <Canvas canvasId="69" height="200px"/>
                </Row>
                <Row>
                    <div className="topCanvasTitle">
                        <h5>Food Pantry</h5>
                    </div>
                </Row>
                {/* <Row>
                    <Col size="6">
                        <div>
                            
                        </div>
                    </Col>
                    <Col size="6">
                        <div>
                            
                        </div>
                    </Col>
                </Row> */}
            </Container>
        </div>
        <div className="topItem">
            <Container>
                <Row>
                    <Canvas canvasId="6969" height="200px"/>
                </Row>
                <Row>
                    <div className="topCanvasTitle">
                        <h5>Save the Koalas</h5>
                    </div>
                </Row>
            </Container>
        </div>
        <div className="topItem">
            <Container>
                <Row>
                    <Canvas canvasId="696969" height="200px"/>
                </Row>
                <Row>
                    <div className="topCanvasTitle">
                        <h5>Brent VS Cancer</h5>
                    </div>
                </Row>
            </Container>
        </div>
    </div>
    )
}

export default TopCanvas