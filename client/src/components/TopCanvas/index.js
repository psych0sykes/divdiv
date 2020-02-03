import React from "react";
import CanvasCard from "../Canvas/CanvasCard";
import "./style.css";

function TopCanvas(props) {

    return(
    <div className="topCanvas">
        <CanvasCard canvasId="69" size="200px" divSize="10px" canvasTitle="Food Pantry"/>
        <CanvasCard canvasId="6969" size="200px" divSize="10px" canvasTitle="Koala Aid"/>
        <CanvasCard canvasId="696969" size="200px" divSize="10px" canvasTitle="Save Walter White"/>
    </div>
    )
}

export default TopCanvas