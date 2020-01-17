import React, { Component } from "react";
import Nav from "./components/Nav";
import Divs from "./components/Canvas"

class App extends Component {
  render() {
    return (
      <div>
          <Nav/>
          <Divs shimSham="hot damn"></Divs>
      </div>
    );
  }
}

export default App;
