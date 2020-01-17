const router = require("express").Router();
const divController = require("../../controllers/divController");

// Matches with "/api/books"
router.route("/")
  .get(divController.findAll)

module.exports = router;