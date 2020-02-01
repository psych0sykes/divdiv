import axios from "axios";

export default {
  getDivs: function() {
    return axios.get("/api/divs");
  },
  getCanvasDivsArray: function(id) {
    return axios.get("/api/canvas/" + id);
  },

//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },

  saveDiv: function(divObj) {
    console.log(divObj)
    return axios.post("/api/divs", divObj);
  },
  login: function(creds) {
    console.log(creds)
    return axios.post("/api/user/login/local", creds);
  },
  logout: function(req) {
    return axios.get("/api/user/logout", req);
  }
};
