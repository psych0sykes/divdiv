import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import {Login} from "../components/Login";
import {NewDivForm} from "../components/NewDivForm";

class Home extends Component {

    render() {
        return(
            <Container>
                <NewDivForm></NewDivForm>
            </Container>
        );
    }

}

export default Home;