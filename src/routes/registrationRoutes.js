const express = require('express');
const router = express.Router();
const RegistrationController = require('../controllers/registrationController');

/**
 * @swagger
 * tags:
 *   name: Registrations
 *   description: API endpoints for managing registrations
 */

/**
 * @swagger
 * /registrations/registrations:
 *   post:
 *     summary: Create a new registration
 *     tags: [Registrations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Registration'
 *     responses:
 *       200:
 *         description: Registration created successfully
 *       400:
 *         description: Invalid request body
 */

router.post('/registrations', RegistrationController.createRegistration);

/**
 * @swagger
 * /registrations/registrations:
 *   get:
 *     summary: Get all registrations
 *     tags: [Registrations]
 *     responses:
 *       200:
 *         description: List of registrations
 */

router.get('/registrations', RegistrationController.getAllRegistrations);

/**
 * @swagger
 * /registrations/{id}:
 *   get:
 *     summary: Get registration by ID
 *     tags: [Registrations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the registration
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Registration details
 *       404:
 *         description: Registration not found
 */

router.get('/registrations/:id', RegistrationController.getRegistrationById);

/**
 * @swagger
 * /registrations/registrations/{id}:
 *   put:
 *     summary: Update registration by ID
 *     tags: [Registrations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the registration
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Registration'
 *     responses:
 *       200:
 *         description: Registration updated successfully
 *       400:
 *         description: Invalid request body
 *       404:
 *         description: Registration not found
 */

router.put('/registrations/:id', RegistrationController.updateRegistration);

/**
 * @swagger
 * /registrations/registrations/{id}:
 *   delete:
 *     summary: Delete registration by ID
 *     tags: [Registrations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the registration
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Registration deleted successfully
 *       404:
 *         description: Registration not found
 */

router.delete('/registrations/:id', RegistrationController.deleteRegistration);

module.exports = router;