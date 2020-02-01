import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import CampaignCreate from "./pages/CampaignCreate";



class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <Nav/>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/campaign/create" component={CampaignCreate} />
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
