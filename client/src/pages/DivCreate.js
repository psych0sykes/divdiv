import React, { Component } from "react";
import { Row, Container, FlexRow } from "../components/Grid";
import {Slogan} from "../components/Section";
import Icon from "../components/Icon";
import DivForm from "../components/DivForm";
import API from "../utils/API";



class CanvasCreate extends Component {

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
                        <Slogan>create your div</Slogan>
                        <Icon size="25"/>
                    </FlexRow>
                    <Row>
                        <DivForm username={this.state.username}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CanvasCreate;