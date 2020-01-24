import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import NewDivForm from "./components/NewDivForm"
import Home from "./pages/Home";



class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <Nav/>
          <Switch>
          <Route exact path="/" component={Home} />
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
