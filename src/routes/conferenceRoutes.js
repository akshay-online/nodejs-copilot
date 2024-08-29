const express = require('express');
const router = express.Router();
const ConferenceController = require('../controllers/conferenceController');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

/**
 * @swagger
 * tags:
 *   name: Conferences
 *   description: API endpoints for managing conferences
 */

/**
 * @swagger
 * /conferences/conferences:
 *   post:
 *     summary: Create a new conference
 *     tags: [Conferences]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Conference'
 *     responses:
 *       200:
 *         description: Conference created successfully
 *       400:
 *         description: Invalid request body
 */

router.post('/conferences', ConferenceController.createConference);

/**
 * @swagger
 * /conferences/conferences:
 *   get:
 *     summary: Get all conferences
 *     tags: [Conferences]
 *     responses:
 *       200:
 *         description: List of conferences
 */

router.get('/conferences', ConferenceController.getAllConferences);

/**
 * @swagger
 * /conferences/conferences/{id}:
 *   get:
 *     summary: Get conference by ID
 *     tags: [Conferences]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the conference
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Conference details
 *       404:
 *         description: Conference not found
 */

router.get('/conferences/:id', ConferenceController.getConferenceById);

/**
 * @swagger
 * /conferences/conferences/{id}:
 *   put:
 *     summary: Update conference by ID
 *     tags: [Conferences]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the conference
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Conference'
 *     responses:
 *       200:
 *         description: Conference updated successfully
 *       400:
 *         description: Invalid request body
 *       404:
 *         description: Conference not found
 */

router.put('/conferences/:id', ConferenceController.updateConference);

/**
 * @swagger
 * /conferences/conferences/{id}:
 *   delete:
 *     summary: Delete conference by ID
 *     tags: [Conferences]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the conference
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Conference deleted successfully
 *       404:
 *         description: Conference not found
 */

router.delete('/conferences/:id', ConferenceController.deleteConference);

module.exports = router;