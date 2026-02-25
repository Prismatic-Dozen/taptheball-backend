const prisma = require("../lib/db");
const verifyPlayGamesToken = require("../lib/playgames");
const { generateToken } = require("../lib/jwt");

async function loginWithPlayGames(idToken) {

    const payload = await verifyPlayGamesToken(idToken);

    const playerId = payload.sub;
    const name = payload.name || payload.given_name || "Player";
    const avatarUrl = payload.picture || null;

    let user = await prisma.user.findUnique({
        where: { playerId },
    });

    if (!user) {
        user = await prisma.user.create({
            data: {
                playerId,
                name,
                avatarUrl,
            },
        });

        await prisma.score.create({
            data: { userId: user.id },
        });
    }

    const token = generateToken({
        id: user.id,
        playerId: user.playerId,
    });

    return { user, token };
}

module.exports = { loginWithPlayGames };