import axios from "axios";

export default {
  getDivs: function() {
    return axios.get("/api/divs");
  },
  getCanvasAll: function() {
    // console.log("API")
    return axios.get("/api/canvas/all");
  },
  getCanvasDivsArray: function(id) {
    return axios.get("/api/divs/canvas/" + id);
  },
  getCanvasDivsByUser: function(id) {
    return axios.get("/api/divs/canvas/user/" + id);
  },
  getCanvasByUser: function(id) {
    console.log("API " + id)
    return axios.get("/api/canvas/find/user/" + id);
  },
  getCanvasById: function(id) {
    console.log("API " + id)
    return axios.get("/api/canvas/find/id/" + id);
  },
  getDivById: function(id) {
    // console.log("API " + id)
    return axios.get("/api/divs/find/id/" + id);
  },
  getUserByName: function(username) {
    // console.log("API " + id)
    return axios.get("/api/user/find/name/" + username);
  },
  saveDiv: function(divObj) {
    // console.log(divObj)
    return axios.post("/api/divs/create/:canvas_title/:id", divObj);
  },
  saveCanvas: function(canvObj) {
    // console.log(canvObj)
    return axios.post("/api/canvas/new", canvObj);
  },
  saveUser: function(userObj) {
    // console.log(userObj)
    return axios.post("/api/user/new", userObj);
  },
  login: function(creds) {
    // console.log(creds)
    return axios.post("/api/user/login/local", creds);
  },
  logout: function(req) {
    // console.log("out")
    return axios.get("/api/user/logout", req);
  },
  loggedIn: function(req) {
    return axios.get("/api/user/in");
  },
  createPaymentIntent: function(req) {
    return axios.post("/api/create-payment-intent");
  }

};
