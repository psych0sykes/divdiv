import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import CanvasCreate from "./pages/CanvasCreate";
import YourDivDiv from "./pages/YourDivDiv";
import CanvasView from "./pages/CanvasView";
import DivView from "./pages/DivView";
import DivCreate from "./pages/DivCreate";
import CanvasBrowse from "./pages/CanvasBrowse";
import Build from "./pages/Build";
import {StripeProvider} from 'react-stripe-elements';
import API from "./utils/API";

require('dotenv').config()

class App extends Component {

  state = {
    status: false,
    displayLogin: "none"
  }

  componentDidMount() {
    this.status()
  }

  status = () => {
    API.loggedIn()
    .then((res) => {
      // console.log(res.data.username)
      this.setState({status: true})})
    .catch((err) => {
      this.setState({status: false})})
  }

  setDisplayLogin = () => {
    this.state.displayLogin === "none" ? this.setState({displayLogin: "block"}) : this.setState({displayLogin: "none"});
  }

  render() {
    return (
      <Router>
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}>
        <div>
          <Nav status={this.state.status} loggedIn={this.status} displayLogin={this.state.displayLogin} setDisplayLogin={this.setDisplayLogin}/>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/canvas/browse" component={CanvasBrowse}/>
          <Route exact path="/canvas/create" component={this.state.status ? CanvasCreate : SignUp}/>
          <Route exact path="/div/create/canvas/:canvas_title/:id" component={this.state.status ? DivCreate : SignUp}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/user/account" component={this.state.status ? YourDivDiv : SignUp}/>
          <Route exact path="/canvas/:id" component={CanvasView}/>
          <Route exact path="/div/:id" component={DivView}/>
          <Route exact path="/build" component={Build}/>
          </Switch>
          {/* <button onClick={() => this.status()} style={{backgroundColor: "black", color: "white"}}>status</button>
          <button onClick={() => this.logout()} style={{backgroundColor: "black", color: "white"}}>log out</button> */}
        </div>
      </StripeProvider>
      </Router>
    );
  }
}

export default App;
