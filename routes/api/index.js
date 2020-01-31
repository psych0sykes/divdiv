const router = require("express").Router();
const divRoutes = require("./divs");
const canvasRoutes = require("./canvas");
const userRoutes = require("./user");

// Book routes
router.use("/divs", divRoutes);
router.use("/canvas", canvasRoutes);
router.use("/user", userRoutes);

module.exports = router;
