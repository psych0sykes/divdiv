import React from "react";
import CanvasByUser from "../../Canvas/CanvasByUser";
import "./style.css"

export function Divs() {
return (
    <div>  
        <CanvasByUser width="300px" div="50px"/>
    </div>
)
}
export function Canvases({userId}) {
    return <div>Canvases</div>;
}
  export function Account({userId}) {
    return <div>Account</div>;
}

