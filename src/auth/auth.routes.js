const express = require("express");
const router = express.Router();
const { googleAuth } = require("./auth.controller");

router.post("/google", googleAuth);

module.exports = router;