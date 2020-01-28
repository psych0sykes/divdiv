const router = require("express").Router();
const divControllers = require("../../controllers/divControllers");

router.route("/:id")
  .get(divControllers.findCanvas)


module.exports = router;