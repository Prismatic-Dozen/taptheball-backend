const prisma = require("../lib/db");

exports.getTopLeaderboard = async () => {
    const leaderboard = await prisma.score.findMany({
        orderBy: {
            highScore: "desc",
        },
        take: 10,
        include: {
            user: {
                select: {
                    name: true,
                    avatarUrl: true,
                },
            },
        },
    });

    return leaderboard.map((entry, index) => ({
        rank: index + 1,
        name: entry.user?.name || "Player",
        avatarUrl: entry.user?.avatarUrl,
        highScore: entry.highScore,
    }));
};