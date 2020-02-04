import React, {useEffect, useState} from "react";
import CanvasDivsByUser from "../../Canvas/CanvasDivsByUser";
import {FlexRow} from "../../Grid";
import TopCanvas from "../../TopCanvas";
import API from "../../../utils/API";
import "./style.css";

export function Divs() {
return (
    <div>
        <FlexRow>  
            <CanvasDivsByUser width="300px" div="50px"/>
        </FlexRow>
    </div>
)
}
export function Canvases() {

    const [canvases, setCanvases] = useState([]);

    useEffect(() => {


        const fetchData = async (username) => {
            const result = await API.getCanvasByUser(username).catch(err => console.log(err));
            // console.log(result.data)
            setCanvases(result.data);
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

    return  <div>
                <TopCanvas array={canvases}/>
            </div>;
}
  export function Account() {
    return <div>Account</div>;
}

