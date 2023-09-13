const express = require('express');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');
const { demolishedController } = require('../../controllers');
const { demolishedValidation } = require('../../validations');

const router = express.Router();

router
  .route('/')
  .post(auth('CREATE'), validate(demolishedValidation.createDemolished), demolishedController.createDemolished)
  .get(auth('GET'), validate(demolishedValidation.getAllDemolished), demolishedController.getAllDemolished);

router
  .route('/:demolishedId')
  .get(auth('GET'), validate(demolishedValidation.getDemolishedById), demolishedController.getDemolishedById)
  .patch(auth('UPDATE'), validate(demolishedValidation.updateDemolishedById), demolishedController.updateDemolishedById)
  .delete(auth('DELETE'), validate(demolishedValidation.deleteDemolishedById), demolishedController.deleteDemolishedById);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Demolished
 *   description: Demolished management
 */

/**
 * @swagger
 * /demolished:
 *   post:
 *     summary: Create a Demolished
 *     tags: [Demolished]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - reference_no
 *               - to_title
 *               - address
 *               - note
 *               - from_title
 *               - date
 *             properties:
 *               reference_no:
 *                 type: number
 *               to_title:
 *                 type: string
 *               address:
 *                 type: string
 *               note:
 *                 type: string
 *               from_title:
 *                 type: string
 *               date:
 *                 type: number
 *               imagePath:
 *                 type: string
 *               type:
 *                 type: string
 *             example:
 *               reference_no: 65
 *               to_title: gdffg
 *               address: pune, kharadi
 *               note: asasfhaskausbv
 *               from_title: afhgasfkh
 *               date: 01-01-1970 00:00:00
 *               imagePath: sgdd/sgdgds/sdg
 *               type: demolished
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Demolished'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Demolished
 *     tags: [Demolished]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: to_title
 *         schema:
 *           type: string
 *         description: to_title
 *       - in: query
 *         name: reference_no
 *         schema:
 *           type: number
 *         description: reference_no
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Demolished'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /demolished/{demolishedId}:
 *   get:
 *     summary: Get a Demolished
 *     tags: [Demolished]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: demolishedId
 *         required: true
 *         schema:
 *           type: string
 *         description: demolishedId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Demolished'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a demolished
 *     tags: [Demolished]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: demolishedId
 *         required: true
 *         schema:
 *           type: string
 *         description: demolishedId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reference_no:
 *                 type: number
 *               to_title:
 *                 type: string
 *               address:
 *                 type: string
 *               note:
 *                 type: string
 *               from_title:
 *                 type: string
 *               date:
 *                 type: number
 *               imagePath:
 *                 type: string
 *               type:
 *                 type: string
 *             example:
 *               reference_no: 65
 *               to_title: gdffg
 *               address: pune, kharadi
 *               note: asasfhaskausbv
 *               from_title: afhgasfkh
 *               date: 01-01-1970 00:00:00
 *               imagePath: sgdd/sgdgds/sdg
 *               type: demolished
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Demolished'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a demolished
 *     tags: [Demolished]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: demolishedId
 *         required: true
 *         schema:
 *           type: string
 *         description: demolishedId
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
