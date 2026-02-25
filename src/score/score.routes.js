const express = require("express");
const router = express.Router();
const controller = require("./score.controller");

/**
 * @swagger
 * tags:
 *   name: Score
 *   description: Score management APIs
 */

/**
 * @swagger
 * /score:
 *   post:
 *     summary: Save player score
 *     description: Save or update a player's score
 *     tags: [Score]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - score
 *             properties:
 *               userId:
 *                 type: string
 *                 example: user_123
 *               score:
 *                 type: integer
 *                 example: 1500
 *     responses:
 *       200:
 *         description: Score saved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Score saved successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /score/{userId}:
 *   get:
 *     summary: Get user score
 *     description: Retrieve score for a specific user
 *     tags: [Score]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *           example: user_123
 *     responses:
 *       200:
 *         description: Score fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                 score:
 *                   type: integer
 *       404:
 *         description: Score not found
 *       500:
 *         description: Server error
 */

router.post("/", controller.saveScore);
router.get("/:userId", controller.getScore);

module.exports = router;