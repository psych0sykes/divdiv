import React, { useState, useEffect } from "react";
import {Row, Container, Col} from "../Grid";
import API from "../../utils/API";
import _Div from "../_Div";
import "./style.css";

function Canvas(props) {

    const canvasId = props.canvasId;
    const divStyle = {width: props.divSize, height: props.divSize, backgroundColor: "gray"}
    const [canvasDivs,setCanvasDivs] = useState(<div></div>);

    const styles = {
        width: "100%",
        height: props.size,
    }

    function populateCanvas(a){
        console.log("populating canvas")
        return  a.map((newDiv) => 
        <div key={newDiv._id}>
        <_Div Key={newDiv._id} RgbColor={newDiv.rgb_color} Style={divStyle}>{newDiv.username}</_Div>
        </div>)
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await API.getCanvasDivsArray(canvasId).catch(err => console.log(err));
            // console.log(result.data)
            setCanvasDivs(populateCanvas(result.data));
        }
        fetchData();
      }, []);
    

    return(
    <div className="canvasWrapper" style={styles}>
        <div className="canvas">
            {canvasDivs}
        </div>
    </div>
    )
}

export default Canvas