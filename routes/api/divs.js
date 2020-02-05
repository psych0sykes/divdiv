const router = require("express").Router();
const divControllers = require("../../controllers/divControllers");

router.route("/canvas/:id")
  .get(divControllers.findCanvas)

router.route("/canvas/user/:id")
  .get(divControllers.findCanvasByUser)

router.route("/find/:id")
  .get(divControllers.findDivById)

router.route("/")
  .get(divControllers.findAll)
  .post(divControllers.newDiv)



module.exports = router;