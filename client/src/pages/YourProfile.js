import React, { Component } from "react";
import { Col, Row, Container, FlexRow } from "../components/Grid";
import {Slogan} from "../components/Section";
import Icon from "../components/Icon";
import CanvasForm from "../components/CanvasForm";
import API from "../utils/API";



class CampaignCreate extends Component {

    state = {
        username: ""
    }

    componentDidMount() {
        this.status()
    }
    
    status = () => {
        API.loggedIn()
        .then((res) => {
          console.log(res.data.username)
          this.setState({username: res.data.username})})
        .catch((err) => console.log(err));
    }

    render() {
        return(
            <div>
                <Container>
                    <FlexRow wrap="nowrap">
                        <Icon size="25"/>
                        <Slogan>your profile</Slogan>
                        <Icon size="25"/>
                    </FlexRow>
                </Container>
            </div>
        );
    }
}

export default CampaignCreate;