const express = require("express");
const router = express.Router();
const { googleAuth } = require("./auth.controller");

router.post("/auth/playgames", playGamesAuth);

module.exports = router;