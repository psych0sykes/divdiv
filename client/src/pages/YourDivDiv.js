import React, { Component } from "react";
import { Col, Row, Container, FlexRow } from "../components/Grid";
import {Slogan} from "../components/Section";
import Icon from "../components/Icon";
import CanvasForm from "../components/CanvasForm";
import API from "../utils/API";



class YourDivDiv extends Component {

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
                    <Row>
                        <div className="col-mdd-6 justify-content-end d-flex">
                            
                        </div>
                        <div className="col-mdd-6 justify-content-start d-flex">
                            
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default YourDivDiv;