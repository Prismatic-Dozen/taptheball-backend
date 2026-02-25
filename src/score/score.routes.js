const express = require("express");
const router = express.Router();
const controller = require("./score.controller");

router.post("/", controller.saveScore);
router.get("/:userId", controller.getScore);

module.exports = router;