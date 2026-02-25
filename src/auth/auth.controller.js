const { loginWithPlayGames } = require("./auth.service");

async function playGamesAuth(req, res) {
    try {
        const { idToken } = req.body;

        if (!idToken) {
            return res.status(400).json({ error: "Missing idToken" });
        }

        const result = await loginWithPlayGames(idToken);

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: "Authentication failed" });
    }
}

module.exports = { playGamesAuth };