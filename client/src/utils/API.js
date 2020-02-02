import axios from "axios";

export default {
  getDivs: function() {
    return axios.get("/api/divs");
  },
  getCanvasDivsArray: function(id) {
    return axios.get("/api/divs/canvas/" + id);
  },
  saveDiv: function(divObj) {
    console.log(divObj)
    return axios.post("/api/divs", divObj);
  },
  saveCanvas: function(canvObj) {
    console.log(canvObj)
    return axios.post("/api/canvas/new", canvObj);
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
