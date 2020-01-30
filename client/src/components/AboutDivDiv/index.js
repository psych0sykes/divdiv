import React, { useState, useEffect } from "react";
import {Row, Container, Col} from "../Grid";
import API from "../../utils/API";
import "./style.css";

function AboutDivDiv(props) {

    return(
    <div className="aboutDivDiv">
        <Container>
            <Row>
                <Col size="4">
                    icons go here in this col
                </Col>
                <Col size="8">
                    words and bullet points will go in this col
                </Col>
            </Row>   
        </Container>
    </div>
    )
};

export default AboutDivDiv;