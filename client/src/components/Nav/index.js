import React, {useState} from "react";
import Icon from "../Icon";
import Login from "../Login";
import Fade from "../Fade";
import API from "../../utils/API";
import "./style.css";

function Nav(props) {

  const displayLogin = props.displayLogin

  function loginClick() {
    props.setDisplayLogin();
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
          <a href="/canvas/create"><div className="navLink">create a canvas</div></a>
        <div>
            <div id="navLogin" onClick={props.status ? logOutClick : loginClick}>{props.status ? "log out" : "log in"}</div>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Nav;

