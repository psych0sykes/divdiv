const router = require("express").Router();
const canvasControllers = require("../../controllers/canvasControllers");

router.route("/find/:id")
  .get(canvasControllers.findCanvas)

router.route("/new")
  .post(canvasControllers.newCanvas)

router.route("/find/user/:id")
  .get(canvasControllers.findCanvasByUser)

router.route("/find/id/:id")
  .get(canvasControllers.findCanvasById)

router.route("/all")
  .get(canvasControllers.findAll)


module.exports = router;