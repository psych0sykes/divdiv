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

    return(
        <Container>
            <form>
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
            </form>
            <FlexRow>
                    <Checkout divForm={{
            rgb_color: color,
            message: message,
            username: props.username,
            donation_amount: donation,
            canvas_id: props.canvas_id,
            canvas_title: props.canvas_title
            }}/>
            </FlexRow>
        </Container>
    );
}

export default DivForm;