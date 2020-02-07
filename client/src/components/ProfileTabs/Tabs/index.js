import React, {useEffect, useState} from "react";
import CanvasDivsByUser from "../../Canvas/CanvasDivsByUser";
import {FlexRow} from "../../Grid";
import TopCanvas from "../../TopCanvas";
import API from "../../../utils/API";
import "./style.css";

export function Divs(props) {
return (
    <div>
        <FlexRow>  
            <CanvasDivsByUser width="300px" div="50px" click={true}/>
        </FlexRow>
    </div>
)
}
export function Canvases(props) {

    const [canvases, setCanvases] = useState([]);

    useEffect(() => {


        const fetchData = async (username) => {
            const result = await API.getCanvasByUser(username).catch(err => console.log(err));
            // console.log(result.data)
            setCanvases(result.data);
        }
        fetchData(props.username)
      }, []);

    return  <div>
                <TopCanvas array={canvases}/>
            </div>;
}
  export function Account(props) {
  return <div>Account {props.username}</div>;
}

