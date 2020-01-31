import React, {useState} from "react";
import {Row, Container, Col, FlexRow} from "../Grid";
import {SubmitButton} from "../Form";
import "./style.css";
import API from "../../utils/API";

function Login(props) {

    const style = {display: props.display}


    const handleFormSubmit = event => {
        event.preventDefault();
        console.log("log in");     
    };

    return(
        
        <Container style={style}>
            <FlexRow style={style}>
            <div className="loginCard" style={style}>
                <div id="loginExitButton" onClick={props.close}>X</div>
            <form id="loginForm" onSubmit={handleFormSubmit}>
                <Row>
                    <input type="text" name="email" placeholder="email"/>
                </Row>
                <Row>
                    <input type="text" name="password" placeholder="password"/>
                </Row>
                <Row>
                    <SubmitButton>login</SubmitButton>
                </Row>
            </form>
            </div>
            </FlexRow>
        </Container>
        
    )
};

export default Login;