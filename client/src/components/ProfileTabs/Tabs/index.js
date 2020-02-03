import React from "react";
import CanvasDivsByUser from "../../Canvas/CanvasDivsByUser";
import {FlexRow} from "../../Grid";
import "./style.css"

export function Divs() {
return (
    <div>
        <FlexRow>  
            <CanvasDivsByUser width="300px" div="50px"/>
        </FlexRow>
    </div>
)
}
export function Canvases({userId}) {
    return  <div>

            </div>;
}
  export function Account({userId}) {
    return <div>Account</div>;
}

