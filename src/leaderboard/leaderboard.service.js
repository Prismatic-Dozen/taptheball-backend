const prisma = require("../lib/db");

exports.getTopLeaderboard = async () => {
    return prisma.score.findMany({
        orderBy: {
            highScore: "desc",
        },
        take: 10,
        select: {
            highScore: true,
            lastScore: true,
            user: {
                select: {
                    name: true,
                    avatarUrl: true,
                },
            },
        },
    });
};