import React, { Component } from "react";
import NewDivForm from "../components/NewDivForm";
import { Col, Row, Container } from "../components/Grid";
import Canvas from "../components/Canvas";
import TopCanvas from "../components/TopCanvas"



class Home extends Component {

    render() {
        return(
            <Container>
                <Row>
                    <TopCanvas/>
                </Row>
                <Row>
                    <NewDivForm/>
                </Row>
            </Container>
        );
    }
}

export default Home;