import React, { useState, useEffect } from "react";
import {Row, Container, Col, FlexRow} from "../Grid";
import {CenterItem, Slogan} from "../Section";
import Icon from "../Icon";
import IconThree from "../Icon/IconThree";
import IconSpin from "../Icon/IconSpin";
import API from "../../utils/API";
import "./style.css";

function AboutDivDiv(props) {

    return(
    <div className="aboutDivDiv">
        <Container>
            <CenterItem left={<IconSpin size="50"/>} right={<Slogan>donate a div</Slogan>}/>
            <FlexRow>
                <div>When you donate to a divdiv campaign, you get to create a div (a colored box) to add to the campaign canvas. Each canvas will fill with divs as more people support the campaign.
                </div>
            </FlexRow>
            <CenterItem left={<IconThree size="60"/>} right={<Slogan>create a canvas</Slogan>}/>
            <FlexRow>
                <div>Want to start your own divdiv campaing? Create your own canvas! You can share your canvas and gather support, while watching the canvas fill with color.</div>
            </FlexRow>
        </Container>
    </div>
    )
};

export default AboutDivDiv;