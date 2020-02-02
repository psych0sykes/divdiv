import React from "react";
import {Row} from "../Grid";
import "./style.css";

export function SubmitButton({children}) {
return <button type="submit" className="submitButton">{children}</button>;
}

export function FlexFormInput({children, title, description}) {


    return (
        <Row>
            <div className="col-md-6 justify-content-end d-flex">
                {children}
            </div>
            <div className="col-md-6 justify-content-start d-flex">
                <div className="formHelp">
                    <h4>
                        {title}
                    </h4>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </Row>
    );
}