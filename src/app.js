const express = require("express");
const cors = require("cors");

const authRoutes = require("./auth/auth.routes");
const scoreRoutes = require("./score/score.routes");
const leaderboardRoutes = require("./leaderboard/leaderboard.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.use("/score", scoreRoutes);

app.use("/leaderboard", leaderboardRoutes);

app.get("/", (req, res) => {
    res.json({ message: "TapTheBall API running 🚀" });
});

module.exports = app;