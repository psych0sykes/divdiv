import React, { Component } from "react";
import NewDivForm from "../components/NewDivForm";
import { Col, Row, Container } from "../components/Grid";
import Canvas from "../components/Canvas";



class Home extends Component {

    render() {
        return(
            <Container>
                <Row>
                    <NewDivForm/>
                </Row>
                <Row>
                    <Canvas canvasId="69"/>
                </Row>
            </Container>
        );
    }
}

export default Home;