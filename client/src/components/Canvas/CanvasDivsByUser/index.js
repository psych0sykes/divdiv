import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import _Div from "../../_Div";
import "../style.css";

function CanvasDivsByUser(props) {

    const [divStyle, setDivStyle] = useState({width: props.div, height: props.div, backgroundColor: "gray"});
    const [canvasDivs,setCanvasDivs] = useState();

    const styles = {
        height: props.height,
        overflow: "hidden",
        border: props.border
    }

    function populateCanvas(a){
        setDivStyle({width: props.div, height: props.div})
        return  a.map((newDiv) => 
        <div key={newDiv._id} onClick={() => divDirect(newDiv._id)}>
            <div className={props.click ? "clickDiv" : ""}>
                <_Div Key={newDiv._id} RgbColor={newDiv.rgb_color} divStyle={divStyle}>{newDiv.username}</_Div>
            </div>
        </div>
    )};

    function divDirect(id) {
        console.log(id)
        if(props.click){
            window.location.assign("/div/" + id)
        }
    }

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