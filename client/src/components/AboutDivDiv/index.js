import React from "react";
import {Container, FlexRow} from "../Grid";
import {CenterItem, Slogan, Spacer} from "../Section";
import IconThree from "../Icon/IconThree";
import IconSpin from "../Icon/IconSpin";
import "./style.css";

function AboutDivDiv(props) {

    function redirect(url) {
        window.location.assign(url)
    };

    return(
    <div className="aboutDivDiv">
        <Container>
            <Spacer space="75px"/>
            <CenterItem left={<IconSpin size="50"/>} right={<Slogan>donate a div</Slogan>}/>
            <FlexRow>
                <div>When you donate to a divdiv campaign, you get to create a div (a colored box) to add to the campaign canvas. Each canvas will fill with divs as more people support the campaign.
                </div>
            </FlexRow>
            <FlexRow>
                <button onClick={() => redirect("/canvas/browse")}>browse canvases</button>
            </FlexRow>
            <Spacer space="75px"/>
            <CenterItem left={<IconThree size="60"/>} right={<Slogan>create a canvas</Slogan>}/>
            <FlexRow>
                <div>Want to start your own divdiv campaing? Create your own canvas! You can share your canvas and gather support, while watching the canvas fill with color.</div>
            </FlexRow>
            <FlexRow>
                <button onClick={() => redirect("/canvas/create")}>create a canvas</button>
            </FlexRow>
            <Spacer space="75px"/>
        </Container>
    </div>
    )
};

export default AboutDivDiv;