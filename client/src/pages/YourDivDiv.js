import React, { Component } from "react";
import { Col, Row, Container, FlexRow } from "../components/Grid";
import {Slogan} from "../components/Section";
import Icon from "../components/Icon";
import CanvasForm from "../components/CanvasForm";
import API from "../utils/API";
import ProfileTabs from "../components/ProfileTabs";



class YourDivDiv extends Component {

    render() {
        return(
            <div>
                <Container>
                    <FlexRow wrap="nowrap">
                        <Icon size="25"/>
                        <Slogan>your profile</Slogan>
                        <Icon size="25"/>
                    </FlexRow>
                    <ProfileTabs/>
                </Container>
            </div>
        );
    }
}

export default YourDivDiv;