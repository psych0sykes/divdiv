import React, { Component } from "react";
import NewDivForm from "../components/NewDivForm";
import { Col, Row, Container } from "../components/Grid";



class Home extends Component {

    render() {
        return(
            <Container>
                <NewDivForm/>
            </Container>
        );
    }
}

export default Home;