import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import CanvasCreate from "./pages/CanvasCreate";
import API from "./utils/API";



class App extends Component {

  state = {
    status: false
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

  render() {
    return (
      <Router>
      <div>
          <Nav status={this.state.status} loggedIn={this.status}/>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/campaign/create" component={CanvasCreate} />
          </Switch>
          <button onClick={() => this.status()} >status</button>
          <button onClick={() => this.logout()} >log out</button>
      </div>
      </Router>
    );
  }
}

export default App;
