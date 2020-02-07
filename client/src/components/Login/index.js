import React, {useState} from "react";
import {Row, Container, Col, FlexRow} from "../Grid";
import {SubmitButton} from "../Form";
import API from "../../utils/API";
import "./style.css";

function Login(props) {

    const style = {display: props.display};
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log("log in");
        console.log(username);
        API.login({username: username, password: password})
        .then(function(){
            props.close();
            props.loggedIn(true);
        })
        .catch(err => console.log(err));
    };

    return(
        <Container style={style}>
            <FlexRow style={style}>
            <div className="loginCard" style={style}>
                <div className="loginExitButton" onClick={props.close}>X</div>
            <form className="loginForm" onSubmit={handleFormSubmit}>
                <Row>
                    <input type="text" name="username" placeholder="username" onChange={event => setUsername(event.target.value)}/>
                </Row>
                <Row>
                    <input type="password" name="password" placeholder="password" onChange={event => setPassword(event.target.value)} />
                </Row>
                <Row>
                    <SubmitButton>log in</SubmitButton>
                </Row>
            </form>
            </div>
            </FlexRow>
        </Container>
    )
};

export default Login;