import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import CanvasCreate from "./pages/CanvasCreate";
import YourProfile from "./pages/YourProfile";
import API from "./utils/API";



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
      console.log(res.data.username)
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
      <div>
          <Nav status={this.state.status} loggedIn={this.status} displayLogin={this.state.displayLogin} setDisplayLogin={this.setDisplayLogin}/>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/canvas/create" component={this.state.status ? CanvasCreate : SignUp}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/user/account" component={this.state.status ? YourProfile : SignUp}/>
          </Switch>
          <button onClick={() => this.status()} style={{backgroundColor: "black", color: "white"}}>status</button>
          <button onClick={() => this.logout()} style={{backgroundColor: "black", color: "white"}}>log out</button>
      </div>
      </Router>
    );
  }
}

export default App;
