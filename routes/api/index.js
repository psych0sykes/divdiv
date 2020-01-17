const router = require("express").Router();
const divRoutes = require("./divs");

// Book routes
router.use("/divs", divRoutes);

module.exports = router;
