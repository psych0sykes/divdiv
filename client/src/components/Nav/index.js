import React, {useState} from "react";
import Icon from "../Icon";
import Login from "../Login";
import "./style.css";

function Nav() {

  const [displayLogin,setDisplayLogin] = useState("none")

  function loginClick() {
    displayLogin === "none" ? setDisplayLogin("block") : setDisplayLogin("none");
  }

  return(
    <div>
      <Login display={displayLogin} close={loginClick}/>
    <nav>
      <a href="/">
        <span id="siteTitle">
          <span>divdiv</span>
          <Icon size="30px" colors={["orangered","white","blue","yellow","orange","red"]}/>
        </span>
      </a>
      <div id="navItems">
          <a className="navLink" href="" id="navYourDiv">your div</a>
        <div>
            <div id="navLogin" onClick={loginClick}>login</div>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Nav;

