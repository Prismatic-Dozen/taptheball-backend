const scoreService = require("./score.service");

exports.saveScore = async (req, res) => {
    try {
        const { userId, score } = req.body;

        const result = await scoreService.saveScore(userId, score);

        res.json(result);
    } catch (err) {
        if (err.message === "User not found") {
            return res.status(404).json({ error: "User not found" });
        }

        console.error(err);
        res.status(500).json({ error: "Failed to save score" });
    }
};

exports.getScore = async (req, res) => {
    try {
        const { userId } = req.params;

        const result = await scoreService.getScoreByUser(userId);

        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch score" });
    }
};