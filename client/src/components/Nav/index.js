import React, {useState} from "react";
import Icon from "../Icon";
import Login from "../Login";
import Fade from "../Fade";
import API from "../../utils/API";
import "./style.css";

function Nav(props) {

  const [displayLogin,setDisplayLogin] = useState("none")

  function loginClick() {
    displayLogin === "none" ? setDisplayLogin("block") : setDisplayLogin("none");
  }
  
  function logOutClick() {
    API.logOut()
    .then(props.loggedIn())
    .catch(err => console.log(err));
  }

  return(
    <div>
      <Fade display={displayLogin}/>
      <Login display={displayLogin} close={loginClick} loggedIn={props.loggedIn}/>
    <nav>
      <a href="/">
        <span id="siteTitle">
          <span>divdiv</span>
          <Icon size="30px" colors={["orangered","white","blue","yellow","orange","red"]}/>
        </span>
      </a>
      <div id="navItems">
          <a className="navLink" href="/campaign/create" id="createCanvas">start a campaign</a>
        <div>
            <div id="navLogin" onClick={props.status ? logOutClick : loginClick}>{props.status ? "log out" : "log in"}</div>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Nav;

