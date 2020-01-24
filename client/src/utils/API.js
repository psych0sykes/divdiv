import axios from "axios";

export default {
  getDivs: function() {
    return axios.get("/api/divs");
  },

//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },

  saveDiv: function(divObj) {
    return axios.post("/api/divs", divObj);
  }
};
