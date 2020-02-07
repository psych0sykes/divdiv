import React, { useState } from "react";
import {Row, Container, FlexRow} from "../Grid";
import {SubmitButton} from "../Form";
import API from "../../utils/API";
import "./style.css";

function DivForm(props) {

    const [color, setColor] = useState();
    const [message, setMessage] = useState();
    const [donation, setDonation] = useState();

    const handleFormSubmit = event => {
        event.preventDefault();

        console.log("submitting new div");
          API.saveDiv({
            rgb_color: color,
            message: message,
            username: props.username,
            donation_amount: donation,
            canvas_id: props.canvas_id,
            canvas_title: props.canvas_title
            })
            .then( window.location.assign("/canvas/" + props.canvas_id))
            .catch(err => console.log(err))
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
                            <input onChange={event => setDonation(event.target.value)} name="donation" placeholder="donation"/>
                        </div>
                        <div className="col-md-6 justify-content-start d-flex">
                            <div className="formHelp">
                                <h4>
                                    donation
                                </h4>
                                <p>
                                    Contribute to the {props.canvas_title} canvas
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