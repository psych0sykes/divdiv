import React, { useState } from "react";
import {Row, Container, Col} from "../Grid";
import {SubmitButton} from "../Form";
import API from "../../utils/API";

function NewDivForm() {

    const [username, setUsername] = useState("");
    const [donationAmount, setDonationAmount] = useState("");
    const [color, setColor] = useState("");
    const [canvasId, setCanvasId] = useState("");
    const [message, setMessage] = useState("");

    const handleFormSubmit = event => {
        debugger;
        event.preventDefault();
        console.log("submitting new div");
          API.saveDiv({
            rgb_color: color,
            username: username,
            donation_amount: donationAmount,
            canvas_id: canvasId,
            message: message})
            .then(res => console.log(res))
            .catch(err => console.log(err))
        };
    

    return(
        <Container>
            <form id="newDivForm" onSubmit={handleFormSubmit}>
                <Row>
                    <input value={username} onChange={event => setUsername(event.target.value)} type="text" name="username" placeholder="email"/>
                </Row>
                <Row>
                    <input value={donationAmount} onChange={event => setDonationAmount(event.target.value)} type="text" name="donationAmount" placeholder="donation"/>
                </Row>
                <Row>
                    <input value={color} onChange={event => setColor(event.target.value)} type="text" name="color" placeholder="color"/>
                </Row>
                <Row>
                    <input value={canvasId} onChange={event => setCanvasId(event.target.value)} type="text" name="canvasId" placeholder="canvas id"/>
                </Row>
                <Row>
                    <input value={message} onChange={event => setMessage(event.target.value)} type="text" name="message" placeholder="message"/>
                </Row>
                <Row>
                    <SubmitButton></SubmitButton>
                </Row>
            </form>
                <Row>
                    <div>{username}</div>
                    <br></br>
                    <div>{donationAmount}</div>
                    <br></br>
                    <div>{color}</div>
                    <br></br>
                    <div>{canvasId}</div>
                    <br></br>
                    <div>{message}</div>
                    <br></br>
                </Row>
        </Container>
    );
}

export default NewDivForm;