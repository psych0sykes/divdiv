import React, { useState } from "react";
import { CompactPicker } from 'react-color';
import {Row, Container, FlexRow, Col} from "../Grid";
import {Spacer} from "../Section";
import {SubmitButton} from "../Form";
import {StripeProvider} from 'react-stripe-elements';
import Checkout from "../Checkout";
import API from "../../utils/API";
import "./style.css";

function DivForm(props) {

    const [color, setColor] = useState("#ff0000");
    const [message, setMessage] = useState();
    const [donation, setDonation] = useState();
    const [displayPicker, setDisplayPicker] = useState();

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

    const showPicker = () => {

    }

    return(
        <Container>
            <form onSubmit={handleFormSubmit}>
                    <Row>
                        <div className="col-md-6 justify-content-end d-flex">
                            <div>
                            <Row>
                                <input value={color} onChange={event => setColor(event.target.value)}/>
                            </Row>
                            <Spacer space="20px"/>
                            <Row>
                                <div>
                                <CompactPicker className="colorPicker" color={color} onChangeComplete={newColor => setColor(newColor.hex)}/>
                                </div>
                            </Row>
                            </div>
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
                            <div className="checkTheDiv" style={{backgroundColor: color}}/>
                        </div>
                    </Row>
                    <Spacer space="20px"/>
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
                    <FlexRow>
                        <SubmitButton>create div</SubmitButton>
                    </FlexRow>
            </form>
                    <FlexRow>
                        {/* <StripeProvider apiKey="pk_test_G0eoakryQbFM30QytnXchzDZ006lluffuY" > */}
                            <Checkout />
                        {/* </StripeProvider> */}
                    </FlexRow>
        </Container>
    );
}

export default DivForm;