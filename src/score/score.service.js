const prisma = require("../lib/db");

exports.saveScore = async (userId, score) => {
    const numericScore = Number(score);

    if (isNaN(numericScore)) {
        throw new Error("Invalid score value");
    }

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
                highScore: numericScore,
            },
        });
    }

    if (numericScore > existingScore.highScore) {
        return prisma.score.update({
            where: { userId },
            data: {
                highScore: numericScore,
            },
        });
    }

    return existingScore;
};