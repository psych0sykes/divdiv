import React, { Component } from "react";
import {FlexRow, Container} from "../components/Grid";
import {Spacer} from "../components/Section";
import IconLoading from "../components/Icon/IconLoading";



class Build extends Component {

    state = {
        canvasArray: []
    }

    render() {
        return(
            <Container>
                <Spacer space="100px"/>
                <FlexRow>
                    <IconLoading size="40px"/>
                </FlexRow>
            </Container>
        );
    }
}

export default Build;