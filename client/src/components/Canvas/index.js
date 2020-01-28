import React, { useState, useEffect } from "react";
import {Row, Container, Col} from "../Grid";
import API from "../../utils/API";
import _Div from "../_Div";

function Canvas(props) {

    const canvasId = props.canvasId;
    const [divStyle, setDivStyle] = useState({width: "50px", height: "50px", backgroundColor: "gray"});
    const [canvasDivs,setCanvasDivs] = useState();

    function populateCanvas(a){
        return  a.map((newDiv) => 
        <div key={newDiv._id} rgbcolor={newDiv.rgb_color} style={divStyle}>{newDiv.username}</div>)
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
    <Container>
        {canvasDivs}
    </Container>
    )
}

export default Canvas