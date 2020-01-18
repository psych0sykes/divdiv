import React from "react";
import {Row, Container, Col} from "../Grid"
import "./style.css"

function Login() {
    return(
        <Container>
            <form id="loginForm">
                <Row>
                    <input type="text" name="email" placeholder="email"/>
                </Row>
                <Row>
                    <input type="text" name="password" placeholder="password"/>
                </Row>
                <Row>
                    <a href="/auth/login" id="loginButton">login</a>
                </Row>
            </form>
        </Container>
    )
};

export default Login;