import React, { Component } from "react";
import { Col, Row, Container, FlexRow } from "../components/Grid";
import {Slogan} from "../components/Section";
import Icon from "../components/Icon";
import Canvas from "../components/Canvas"
import API from "../utils/API";



class CanvasCreate extends Component {

    state = {
        username: "",
        canvas_title: ""
    }

    componentDidMount() {
        this.status();
        this.title();
    }
    
    status = () => {
        API.loggedIn()
        .then((res) => {
        //   console.log(res.data.username)
          this.setState({username: res.data.username})})
        .catch((err) => console.log(err));
    }

    title = () => {
        API.getCanvasById(this.props.match.params.id)
        .then((res) => {
            console.log(res.data.canvas_title)
            this.setState({canvas_title: res.data.canvas_title})
        }).catch((err) => console.log(err));
    }


    render() {
        return(
            <div>
                <Container>
                    <FlexRow wrap="nowrap">
                        <Icon size="25"/>
                            <Slogan>{this.state.canvas_title}</Slogan>
                        <Icon size="25"/>
                    </FlexRow>
                    <Canvas canvasId={this.props.match.params.id} divSize="50px"/>
                </Container>
            </div>
        );
    }
}

export default CanvasCreate;