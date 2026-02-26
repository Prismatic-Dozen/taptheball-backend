const leaderboardService = require("./leaderboard.service");

exports.getLeaderboard = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;

        const leaderboard = await leaderboardService.getTopLeaderboard(limit);

        res.status(200).json({
            success: true,
            count: leaderboard.length,
            data: leaderboard,
        });
    } catch (err) {
        console.error("Leaderboard Error:", err);

        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};