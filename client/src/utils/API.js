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
  }
};
