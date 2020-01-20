import React from "react";
import {Row, Container, Col} from "../Grid";
import {SubmitButton} from "../Form";

function NewDivForm() {
    return(
        <Container>
            <form id="newDivForm">
                <Row>
                    <input type="text" name="username" placeholder="email"/>
                </Row>
                <Row>
                    <input type="text" name="donationAmount" placeholder="donation"/>
                </Row>
                <Row>
                    <input type="text" name="color" placeholder="color"/>
                </Row>
                <Row>
                    <input type="text" name="canvasId" placeholder="canvas id"/>
                </Row>
                <Row>
                    <input type="text" name="message" placeholder="message"/>
                </Row>
                <Row>
                    <SubmitButton></SubmitButton>
                </Row>
            </form>
        </Container>
    );
}

export default NewDivForm;