const prisma = require("../lib/db");

exports.saveScore = async (userId, score) => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
    });

    if (!user) {
        throw new Error("User not found");
    }

    const existingScore = await prisma.score.findUnique({
        where: { userId },
    });

    if (!existingScore) {
        return prisma.score.create({
            data: {
                userId,
                highScore: score,
                lastScore: score,
            },
        });
    }

    return prisma.score.update({
        where: { userId },
        data: {
            lastScore: score,
            highScore: Math.max(existingScore.highScore, score),
        },
    });
};