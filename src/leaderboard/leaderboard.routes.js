const express = require("express");
const router = express.Router();
const controller = require("./leaderboard.controller");

/**
 * @swagger
 * tags:
 *   name: Leaderboard
 *   description: Leaderboard APIs
 */

/**
 * @swagger
 * /leaderboard:
 *   get:
 *     summary: Get leaderboard
 *     description: Fetch top players leaderboard sorted by score
 *     tags: [Leaderboard]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         required: false
 *         description: Number of top players to return
 *     responses:
 *       200:
 *         description: Leaderboard fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 leaderboard:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       rank:
 *                         type: integer
 *                         example: 1
 *                       userId:
 *                         type: string
 *                         example: user_123
 *                       name:
 *                         type: string
 *                         example: PlayerOne
 *                       score:
 *                         type: integer
 *                         example: 2500
 *       500:
 *         description: Server error
 */

router.get("/", controller.getLeaderboard);

module.exports = router;