import React, {useState} from "react";
import Icon from "../Icon";
import Login from "../Login";
import API from "../../utils/API";
import "./style.css";

function Nav() {

  const [displayLogin,setDisplayLogin] = useState("none")
  const [loggedIn,setLoggedIn] = useState(false);

  function loginClick() {
    displayLogin === "none" ? setDisplayLogin("block") : setDisplayLogin("none");
  }
  
  function signOutClick() {
    setLoggedIn(false);
    API.logout()
    .then(console.log("out"))
    .catch(err => console.log(err));
  }

  return(
    <div>
      <Login display={displayLogin} close={loginClick} loggedIn={setLoggedIn}/>
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
            <div id="navLogin" onClick={loggedIn ? signOutClick : loginClick}>{loggedIn ? "sign out" : "login"}</div>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Nav;

