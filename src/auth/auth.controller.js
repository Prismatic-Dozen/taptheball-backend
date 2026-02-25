const { loginWithGoogle } = require("./auth.service");

async function googleAuth(req, res) {
    try {
        const { idToken } = req.body;

        if (!idToken) {
            return res.status(400).json({ error: "Missing idToken" });
        }

        const result = await loginWithGoogle(idToken);

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: "Authentication failed" });
    }
}

module.exports = { googleAuth };