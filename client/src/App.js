import React, { Component } from "react";
import Nav from "./components/Nav";
import Divs from "./components/Canvas";
import NewDivForm from "./components/NewDivForm";

class App extends Component {
  render() {
    return (
      <div>
          <Nav/>
          <Divs shimSham="hot damn"></Divs>
          <NewDivForm></NewDivForm>
      </div>
    );
  }
}

export default App;
