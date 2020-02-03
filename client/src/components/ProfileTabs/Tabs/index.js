import React from "react";
import CanvasByUser from "../../Canvas/CanvasByUser";
import "./style.css"

export function Divs({userId}) {
return (
    <div>  
        <CanvasByUser userId={userId}/>
    </div>
)
}
export function Canvases({userId}) {
    return <div>Canvases</div>;
}
  export function Account({userId}) {
    return <div>Account</div>;
}

