import React, { useState, useEffect } from "react";
import {Row, Container, Col} from "../Grid";
import {CenterItem, Slogan} from "../Section";
import Icon from "../Icon";
import IconThree from "../Icon/IconThree";
import API from "../../utils/API";
import "./style.css";

function AboutDivDiv(props) {

    return(
    <div className="aboutDivDiv">
        <Container>
            <CenterItem left={<Slogan>donate with a div</Slogan>} right={<IconThree size="50px"/>}/>
        </Container>
    </div>
    )
};

export default AboutDivDiv;