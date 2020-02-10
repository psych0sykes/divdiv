import React, { useState } from "react";
import {FlexRow} from "../Grid";
import {Divs, Canvases, Account} from "./Tabs";
import "./style.css";


function ProfileTabs(props) {

    const [tab, setTab] = useState(<Divs username={props.username}/>);
    const tabDivs = () => setTab(<Divs username={props.username}/>);
    const tabCanvases = () => setTab(<Canvases username={props.username}/>);
    const tabAccount = () => setTab(<Account username={props.username}/>);

    const Populate = () => {
        return tab
    }
    
    return (
        <div>
            <FlexRow>
                <div className="profileTab" onClick={tabDivs}>divs</div>
                <div className="profileTab" onClick={tabCanvases}>canvases</div>
                <div className="profileTab" onClick={tabAccount}>account</div>
            </FlexRow>
            <FlexRow>
                <Populate/>
            </FlexRow>
        </div>
    )
} 

export default ProfileTabs