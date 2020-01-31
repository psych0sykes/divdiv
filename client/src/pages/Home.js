import React, { Component } from "react";
import NewDivForm from "../components/NewDivForm";
import { Col, Row, Container, FlexRow } from "../components/Grid";
import TopCanvas from "../components/TopCanvas";
import AboutDivDiv from "../components/AboutDivDiv";
import {Slogan} from "../components/Section";
import Icon from "../components/Icon";



class Home extends Component {

    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <TopCanvas/>
                    </Row>
                    <FlexRow wrap="nowrap">
                        <Icon size="25"/>
                        <Slogan>Company Slogan Goes Here</Slogan>
                        <Icon size="25"/>
                    </FlexRow>
                    <Row>
                        <AboutDivDiv/>
                    </Row>
                    <Row>
                        
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;