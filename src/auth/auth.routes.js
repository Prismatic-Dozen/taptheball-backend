const express = require("express");
const router = express.Router();
const { playGamesAuth } = require("./auth.controller");

router.post("/playgames", playGamesAuth);

module.exports = router;