import React, { Component } from "react";
import { Col, Row, Container, FlexRow } from "../components/Grid";
import {Slogan} from "../components/Section";
import Icon from "../components/Icon";



class CampaignCreate extends Component {

    render() {
        return(
            <div>
                <Container>
                <FlexRow wrap="nowrap">
                        <Icon size="25"/>
                        <Slogan>create your campaign</Slogan>
                        <Icon size="25"/>
                    </FlexRow>
                </Container>
            </div>
        );
    }
}

export default CampaignCreate;