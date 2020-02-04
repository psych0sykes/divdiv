import React, { useState, useEffect } from "react";
import {Row, Container, Col} from "../../Grid";
import API from "../../../utils/API";
import _Div from "../../_Div";
import "../style.css";
import { Collection } from "mongoose";

function CanvasDivsByUser(props) {

    const [divStyle, setDivStyle] = useState({width: props.div, height: props.div, backgroundColor: "gray"});
    const [canvasDivs,setCanvasDivs] = useState();

    const styles = {
        height: props.height,
        overflow: "hidden",
        border: "2px solid black",
    }

    function populateCanvas(a){
        setDivStyle({width: props.div, height: props.div})
        return  a.map((newDiv) => 
        <div key={newDiv._id}>
        <_Div Key={newDiv._id} RgbColor={newDiv.rgb_color} Style={divStyle}>{newDiv.username}</_Div>
        </div>
    )};

    useEffect(() => {
        const fetchData = async (id) => {
            console.log(id);
            const result = await API.getCanvasDivsByUser(id).catch(err => console.log(err));
            console.log(result.data)
            setCanvasDivs(populateCanvas(result.data));  
        }
        const status = async () => {
            const result = await API.loggedIn()
            .then((res) => {
              console.log(res.data.username)
              fetchData(res.data.username)})
            .catch((err) => console.log(err));
        }
        status();
      }, []);
    

    return(
    <div style={styles}>
        <div className="canvas">
            {canvasDivs}
        </div>
    </div>
    )
}

export default CanvasDivsByUser