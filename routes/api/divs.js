const router = require("express").Router();
const divControllers = require("../../controllers/divControllers");

// Matches with "/api/divs"
router.route("/")
  .get(divControllers.findAll)
  .post(divControllers.newDiv)

module.exports = router;