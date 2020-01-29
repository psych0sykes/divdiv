import React, { useState, useEffect } from "react";
import {Row, Container, Col} from "../Grid";
import API from "../../utils/API";
import _Div from "../_Div";

function Canvas(props) {

    const canvasId = props.canvasId;
    const [divSize, setDivSize] = useState("10px");
    const [divStyle, setDivStyle] = useState({width: divSize, height: divSize, backgroundColor: "gray"});
    const [canvasDivs,setCanvasDivs] = useState();

    const styles = {
        width: props.width,
        height: props.height,
        overflow: "hidden",
        border: "2px solid black",
    }

    function populateCanvas(a){
        return  a.map((newDiv) => 
        <div key={newDiv._id}>
        <_Div Key={newDiv._id} RgbColor={newDiv.rgb_color} Style={divStyle}>{newDiv.username}</_Div>
        </div>)
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await API.getCanvasDivsArray(canvasId).catch(err => console.log(err));
            console.log(result.data)
            setCanvasDivs(populateCanvas(result.data));
        }
        fetchData();
      }, []);
    

    return(
    <div style={styles}>
        <div className="canvas">
            {canvasDivs}
        </div>
    </div>
    )
}

export default Canvas