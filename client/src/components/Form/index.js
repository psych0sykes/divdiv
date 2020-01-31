import React from "react";
import "./style.css";

export function SubmitButton({children}) {
return <button type="submit" className="submitButton">{children}</button>;
}