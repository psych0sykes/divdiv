import React, { Component } from "react";
import Nav from "./components/Nav";
import Divs from "./components/Canvas";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div>
          <Nav/>
          <Divs shimSham="hot damn"></Divs>
          <Login></Login>
      </div>
    );
  }
}

export default App;
