const router = require("express").Router();
const userControllers = require("../../controllers/divControllers");


router.route("/user")
  .get(userControllers.findUser)



module.exports = router;