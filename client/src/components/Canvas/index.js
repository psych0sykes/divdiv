import React, { useState, useEffect } from "react";
import {Row, Container, Col} from "../Grid";
import API from "../../utils/API";
import _Div from "../_Div";
import "./style.css";

function Canvas(props) {

    const canvasId = props.canvasId;
    const divStyle = {width: props.divSize, height: props.divSize, backgroundColor: "gray"}
    const [canvasDivs,setCanvasDivs] = useState(<div></div>);
    const [donation, setDonation] = useState(0);

    const styles = {
        width: "100%",
        height: props.size,
        border: props.border
    }

    function divDirect(id) {
        console.log(id)
        if(props.click){
            window.location.assign("/div/" + id)
        }
    }

    function populateCanvas(a){
        console.log("populating canvas")
        return  a.map((newDiv) => 
        <div key={newDiv._id} onClick={() => divDirect(newDiv._id)}>
            <div className={props.click ? "clickDiv" : ""}>
                <_Div Key={newDiv._id} RgbColor={newDiv.rgb_color} divStyle={divStyle}>{newDiv.username}</_Div>
            </div>
        </div>)
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await API.getCanvasDivsArray(canvasId).catch(err => console.log(err));
            // console.log(result.data)
            setCanvasDivs(populateCanvas(result.data));
            var donations = 0
            for(var i = 0; i<result.data.length; i++){
                var amount = parseFloat(result.data[i].donation_amount) ? parseFloat(result.data[i].donation_amount) : 0;
                donations = amount + donations;
                // console.log(result.data)
            };
            props.supportTotal ? props.supportTotal(result.data.length) : console.log("=");
            props.donationTotal ? props.donationTotal(donations) : console.log("=");
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