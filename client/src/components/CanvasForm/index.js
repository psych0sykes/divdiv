import React, { useState } from "react";
import {Row, Container, Col, FlexRow} from "../Grid";
import {SubmitButton} from "../Form";
import API from "../../utils/API";
import "./style.css";

function NewDivForm(props) {

    const [canvasTitle, setCanvasTitle] = useState();
    const [bio, setBio] = useState();

    const handleFormSubmit = event => {
        event.preventDefault();

        console.log("submitting new div");
          API.saveCanvas({
            canvas_title: canvasTitle,
            owner: props.username,
            bio: bio
            })
            .then()
            .catch(err => console.log(err))
        };

    return(
        <Container>
            <form id="newCanvasForm" onSubmit={handleFormSubmit}>
                    <Row>
                        <Col size="6">
                            <input value={canvasTitle} onChange={event => setCanvasTitle(event.target.value)} type="text" name="canvas_title" placeholder="canvas title"/>
                        </Col>
                        <Col size="6">
                            <div className="formHelp">
                                <h4>
                                    canvas title
                                </h4>
                                <p>
                                    What cause are you supporting?
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="6">
                            <textarea value={bio} onChange={event => setBio(event.target.value)} name="bio" placeholder="canvas bio"/>
                        </Col>
                        <Col size="6">
                            <div className="formHelp">
                                <h4>
                                    bio
                                </h4>
                                <p>
                                    Describe your campaign! Why are you gathering support?
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <FlexRow>
                        <SubmitButton>create canvas</SubmitButton>
                    </FlexRow>
            </form>
                <Row>
                    <div>{canvasTitle}</div>
                    <br></br>
                </Row>
        </Container>
    );
}

export default NewDivForm;