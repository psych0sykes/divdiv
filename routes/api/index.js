const router = require("express").Router();
const divRoutes = require("./divs");
const canvasRoutes = require("./canvas");

// Book routes
router.use("/divs", divRoutes);
router.use("/canvas", canvasRoutes);

module.exports = router;
