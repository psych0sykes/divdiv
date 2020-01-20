const router = require("express").Router();
const divControllers = require("../../controllers/divControllers");

// Matches with "/api/books"
router.route("/")
  .get(divControllers.findAll)
  .post(divControllers.newDiv)

module.exports = router;