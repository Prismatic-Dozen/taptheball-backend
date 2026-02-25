const leaderboardService = require("./leaderboard.service");

exports.getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await leaderboardService.getTopLeaderboard();

        res.json({
            success: true,
            data: leaderboard,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch leaderboard" });
    }
};