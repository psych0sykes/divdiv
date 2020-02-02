import React, { useState } from "react";
import {Row, Container, Col, FlexRow} from "../Grid";
import {SubmitButton, FlexFormInput} from "../Form";
import API from "../../utils/API";
import "./style.css";

function CanvasForm(props) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    const handleFormSubmit = event => {
        event.preventDefault();

        console.log("submitting new div");
          API.saveCanvas({
            })
            .then()
            .catch(err => console.log(err))
        };

    return(
        <Container>
            <form id="newCanvasForm" onSubmit={handleFormSubmit}>
                    <FlexFormInput title="username" description="how other users will know you">
                        <input onChange={event => setUsername(event.target.value)} type="text" name="username" placeholder="username"/>
                    </FlexFormInput>
                    <FlexFormInput title="password" description="not for sharing">
                        <input onChange={event => setPassword(event.target.value)} type="password" name="password" placeholder="password"/>
                    </FlexFormInput>
                    <FlexFormInput title="email" description="no spam, we promise">
                        <input onChange={event => setEmail(event.target.value)} type="text" name="email" placeholder="email"/>
                    </FlexFormInput>
                    <FlexFormInput title="first name" description="your name">
                        <input onChange={event => setFirstName(event.target.value)} type="text" name="firstName" placeholder="first name"/>
                    </FlexFormInput>
                    <FlexFormInput title="last name" description="also you name, but the second one">
                        <input onChange={event => setLastName(event.target.value)} type="text" name="lastName" placeholder="last name"/>
                    </FlexFormInput>
                    <FlexRow>
                        <SubmitButton>sign up</SubmitButton>
                    </FlexRow>
            </form>
        </Container>
    );
}

export default CanvasForm;