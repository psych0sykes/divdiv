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
                    <Canvas canvasId="69" width="250px" height="250px"/>
                </Row>
            </Container>
        );
    }
}

export default Home;