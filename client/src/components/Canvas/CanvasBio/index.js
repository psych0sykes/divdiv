import React from "react";
import "./style.css";

function CanvasBio(props) {

    return (
        <div className="canvasBio">
            <p>
                {props.bio}
            </p>   
            {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus justo dolor, tincidunt efficitur odio hendrerit quis. Pellentesque sed viverra felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce facilisis lacinia pretium. Donec scelerisque lobortis tellus vel gravida. Duis laoreet at libero iaculis scelerisque.
                 Morbi eleifend posuere turpis, sed posuere sapien tincidunt in. 
                In nisl justo, tristique in purus at, volutpat vehicula dui. Cras a leo ut libero rutrum sodales.
            </p> */}
        </div>
    )
}

export default CanvasBio