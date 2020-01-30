import React, { Component } from "react";
import NewDivForm from "../components/NewDivForm";
import { Col, Row, Container } from "../components/Grid";
import TopCanvas from "../components/TopCanvas";
import AboutDivDiv from "../components/AboutDivDiv";
import {Slogan} from "../components/Section";



class Home extends Component {

    render() {
        return(
            <Container>
                <Row>
                    <TopCanvas/>
                </Row>
                <Row>
                    <Slogan>Company Slogan Goes Here</Slogan>
                </Row>
                <Row>
                    <AboutDivDiv/>
                </Row>
            </Container>
        );
    }
}

export default Home;