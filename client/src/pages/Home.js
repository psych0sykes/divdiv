import React, { Component } from "react";
import { Row, Container, FlexRow } from "../components/Grid";
import TopCanvas from "../components/TopCanvas";
import AboutDivDiv from "../components/AboutDivDiv";
import {Slogan} from "../components/Section";
import Icon from "../components/Icon";


class Home extends Component {

    render() {

        const topCanvases = [
            {_id: "5e362edd02a34659ea1dc487",
            canvas_title: "Helping Hand",
            },
            {_id: "5e362edd02a34659ea1dc488",
            canvas_title: "Save Walter White"},
            {_id: "5e362edd02a34659ea1dc489",
            canvas_title: "Koala Aid"}
        ]

        return(
            <div>
                <Container>
                    <FlexRow wrap="nowrap">
                        <Icon size="25"/>
                            <Slogan>petition support and fundraise, visually.</Slogan>
                        <Icon size="25"/>
                    </FlexRow>
                    <FlexRow>
                        <p>
                            Get support for your petition with a dividv canvas.
                        </p>
                    </FlexRow>
                    <Row>
                        <TopCanvas array={topCanvases}/>
                    </Row>
                    <Row>
                        <AboutDivDiv/>
                    </Row>
                    <Row>
                        
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
