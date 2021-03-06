import React from "react";
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
    API.logout()
    .then(window.location.assign("/"))
    .catch(err => console.log(err));
  }

  return(
    <div>
      <Fade display={displayLogin}/>
      <Login display={displayLogin} close={loginClick} loggedIn={props.loggedIn}/>
    <nav>
      <a href="/" style={{border: "none"}}>
        <span id="siteTitle">
          <span>divdiv</span>
          <Icon size="30px" colors={["orangered","white","blue","yellow","orange","red"]}/>
        </span>
      </a>
      <div id="navItems">
          <a href="/user/account"><div className="navLink">your divdiv</div></a>
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

