import React, { Component } from "react";
import { Col, Row, Container, FlexRow } from "../components/Grid";
import UserForm from "../components/UserForm";
import {Slogan} from "../components/Section";
import Icon from "../components/Icon";




class CampaignCreate extends Component {

    render() {
        return(
            <div>
                <FlexRow wrap="nowrap">
                    <Icon size="25"/>
                        <Slogan>create a dividv account</Slogan>
                    <Icon size="25"/>
                </FlexRow>
                <Container>
                    <UserForm/>
                </Container>
            </div>
        );
    }
}

export default CampaignCreate;