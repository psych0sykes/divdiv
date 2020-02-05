import React, { useState } from "react";
import {Row, Container, FlexRow} from "../Grid";
import {SubmitButton} from "../Form";
import API from "../../utils/API";
import "./style.css";

function DivForm(props) {

    const [color, setColor] = useState();
    const [message, setMessage] = useState();

    const handleFormSubmit = event => {
        event.preventDefault();

        console.log("submitting new div");
        //   API.saveCanvas({
        //     canvas_title: canvasTitle,
        //     owner: props.username,
        //     bio: bio,
        //     canvas_id: "test"
        //     })
        //     .then()
        //     .catch(err => console.log(err))
        };

    return(
        <Container>
            <form onSubmit={handleFormSubmit}>
                    <Row>
                        <div className="col-md-6 justify-content-end d-flex">
                            <input onChange={event => setColor(event.target.value)} type="text" name="rgb_color" placeholder="div color"/>
                        </div>
                        <div className="col-md-6 justify-content-start d-flex">
                            <div className="formHelp">
                                <h4>
                                    div color
                                </h4>
                                <p>
                                    Pick your color
                                </p>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-md-6 justify-content-end d-flex">
                            <textarea onChange={event => setMessage(event.target.value)} name="message" placeholder="message"/>
                        </div>
                        <div className="col-md-6 justify-content-start d-flex">
                            <div className="formHelp">
                                <h4>
                                    message
                                </h4>
                                <p>
                                    Give your div a message
                                </p>
                            </div>
                        </div>
                    </Row>
                    <FlexRow>
                        <SubmitButton>create div</SubmitButton>
                    </FlexRow>
            </form>
        </Container>
    );
}

export default DivForm;