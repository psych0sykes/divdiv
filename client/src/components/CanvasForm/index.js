import React, { useState } from "react";
import {Row, Container, Col, FlexRow} from "../Grid";
import {SubmitButton} from "../Form";
import API from "../../utils/API";
import "./style.css";

function CanvasForm(props) {

    const [canvasTitle, setCanvasTitle] = useState();
    const [bio, setBio] = useState();

    const handleFormSubmit = event => {
        event.preventDefault();

        console.log("submitting new div");
          API.saveCanvas({
            canvas_title: canvasTitle,
            owner: props.username,
            bio: bio,
            canvas_id: "test"
            })
            .then((res) => {
                console.log(res.data);
                window.location.assign("/canvas/" + res.data._id)
            })
            .catch(err => console.log(err))
        };

    return(
        <Container>
            <form id="newCanvasForm" onSubmit={handleFormSubmit}>
                    <Row>
                        <div className="col-md-6 justify-content-end d-flex">
                            <input onChange={event => setCanvasTitle(event.target.value)} type="text" name="canvas_title" placeholder="canvas title"/>
                        </div>
                        <div className="col-md-6 justify-content-start d-flex">
                            <div className="formHelp">
                                <h4>
                                    canvas title
                                </h4>
                                <p>
                                    What cause are you supporting?
                                </p>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-md-6 justify-content-end d-flex">
                            <textarea onChange={event => setBio(event.target.value)} name="bio" placeholder="canvas bio"/>
                        </div>
                        <div className="col-md-6 justify-content-start d-flex">
                            <div className="formHelp">
                                <h4>
                                    bio
                                </h4>
                                <p>
                                    Describe your campaign! Why are you gathering support?
                                </p>
                            </div>
                        </div>
                    </Row>
                    <FlexRow>
                        <SubmitButton>create canvas</SubmitButton>
                    </FlexRow>
            </form>
        </Container>
    );
}

export default CanvasForm;