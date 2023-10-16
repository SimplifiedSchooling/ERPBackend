const express = require('express');
const validate = require('../../middlewares/validate');
const assectController = require('../../controllers/assect.controller');
const assectValidaton = require('../../validations/assect.validation');

const router = express.Router();

router
  .route('/')
  .post(validate(assectValidaton.createAssect), assectController.createAssect)
  .get(validate(assectValidaton.queryAssect), assectController.queryAssect);

router
  .route('/:assectId')
  .get(validate(assectValidaton.getAssect), assectController.getAssect)
  .patch(validate(assectValidaton.updateAssect), assectController.updateAssect)
  .delete(validate(assectValidaton.deleteAssect), assectController.deleteAssect);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Assect
 *   description: Assect management
 */

/**
 * @swagger
 * /assect:
 *   post:
 *     summary: Create a Assect
 *     tags: [Assect]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - assectName
 *               - invoiceNo
 *               - invoiceDate,
 *               - quantity
 *             properties:
 *               assectName:
 *                 type: string *
 *               invoiceNo:
 *                 type: number
 *               invoiceDate:
 *                 type: date
 *               quantity:
 *                 type: number
 *             example:
 *               assectName: Test
 *               invoiceNo: 1234
 *               invoiceDate: 2023/03/12
 *               quantity: 12
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Assect'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get query Assect
 *     tags: [Assect]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: assectName
 *         schema:
 *           type: string
 *         description: Assect name *
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
 *         description: Maximum number of Assect
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
 *                     $ref: '#/components/schemas/Assect'
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
 * /assect/{assectId}:
 *   get:
 *     summary: Get a Assect
 *     tags: [Assect]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: assectId
 *         required: true
 *         schema:
 *           type: string
 *         description: assectId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Assect'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Assect
 *     tags: [Assect]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: assectId
 *         required: true
 *         schema:
 *           type: string
 *         description: assectId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               assectName:
 *                 type: string *
 *               invoiceNo:
 *                 type: number
 *               invoiceDate:
 *                 type: date
 *               quantity:
 *                 type: number
 *             example:
 *               assectName: Test1234
 *               invoiceNo: 9876
 *               invoiceDate: 2023/03/16
 *               quantity: 01
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Assect'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Assect
 *     tags: [Assect]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: assectId
 *         required: true
 *         schema:
 *           type: string
 *         description: assectId
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
