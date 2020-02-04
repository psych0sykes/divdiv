import axios from "axios";

export default {
  getDivs: function() {
    return axios.get("/api/divs");
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
  saveDiv: function(divObj) {
    console.log(divObj)
    return axios.post("/api/divs", divObj);
  },
  saveCanvas: function(canvObj) {
    console.log(canvObj)
    return axios.post("/api/canvas/new", canvObj);
  },
  saveUser: function(userObj) {
    console.log(userObj)
    return axios.post("/api/user/new", userObj);
  },
  login: function(creds) {
    console.log(creds)
    return axios.post("/api/user/login/local", creds);
  },
  logout: function(req) {
    console.log("out")
    return axios.get("/api/user/logout", req);
  },
  loggedIn: function(req) {
    return axios.get("/api/user/in");
  }

};
