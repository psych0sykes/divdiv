import React from "react";
import CanvasCard from "../Canvas/CanvasCard";
import "./style.css";

function TopCanvas(props) {

    function PopulateCards(props){
        return  props.array.map((newCard) => 
        <CanvasCard key={newCard._id} canvasId={newCard._id} size={props.size} divSize={props.divSize} canvasTitle={newCard.canvas_title}/>
        )
    };

    return(
    <div className="topCanvas">
        <PopulateCards array={props.array} size="200px" divSize="10px"/>
    </div>
    )
}

export default TopCanvas