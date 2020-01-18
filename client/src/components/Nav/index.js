import React from "react";
import "./style.css"

function Nav() {
return(
<nav>
  <a href="/"><span id="siteTitle">divdiv</span></a>
  <div id="navItems">
    <div className="md:flex hidden">
      <a className="block md:text-white mr-4 navLink" href="" id="navYourDiv">your div</a>
    </div>
    <div>
        <a href="/auth/signin" id="navLogin">login</a>
    </div>
  </div>
</nav>
);
}

export default Nav;

