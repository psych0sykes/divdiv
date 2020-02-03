import React, { useState, useEffect } from "react";
import {Row, Container, Col, FlexRow} from "../Grid";
import {Divs, Canvases, Account} from "./Tabs";
import "./style.css";


function ProfileTabs() {

    const [tab, setTab] = useState(<Divs/>);
    const tabDivs = () => setTab(<Divs/>);
    const tabCanvases = () => setTab(<Canvases/>);
    const tabAccount = () => setTab(<Account/>);

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