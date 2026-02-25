const prisma = require("../lib/db");
const verifyGoogleToken = require("../lib/google");
const { generateToken } = require("../lib/jwt");

async function loginWithGoogle(idToken) {
    const payload = await verifyGoogleToken(idToken);

    const googleId = payload.sub;
    const email = payload.email;
    const name = payload.name;
    const avatarUrl = payload.picture;

    let user = await prisma.user.findUnique({
        where: { googleId },
    });

    if (!user) {
        user = await prisma.user.create({
            data: {
                googleId,
                email,
                name,
                avatarUrl,
            },
        });

        await prisma.score.create({
            data: { userId: user.id },
        });
    }

    const token = generateToken(user);

    return { user, token };
}

module.exports = { loginWithGoogle };