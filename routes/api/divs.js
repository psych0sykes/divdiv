const router = require("express").Router();
const divControllers = require("../../controllers/divControllers");

router.route("/canvas/:id")
  .get(divControllers.findCanvas)

router.route("/canvas/user/:id")
  .get(divControllers.findCanvasByUser)

router.route("/find/id/:id")
  .get(divControllers.findDivById)

router.route("/create/")
  .post(divControllers.newDiv)

router.route("/")
  .get(divControllers.findAll)



module.exports = router;