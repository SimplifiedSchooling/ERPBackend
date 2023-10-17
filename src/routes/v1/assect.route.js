const express = require('express');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('node-uuid');
const validate = require('../../middlewares/validate');
const assectController = require('../../controllers/assect.controller');
const assectValidaton = require('../../validations/assect.validation');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, callback) => {
    const uniqueFileName = `${uuidv4()}${path.extname(file.originalname)}`;
    callback(null, uniqueFileName);
  },
});

const upload = multer({ storage });

const router = express.Router();

router
  .route('/')
  .post(upload.single('imagePath'), validate(assectValidaton.createAssect), assectController.createAssect)
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
 *   description: Assect management and retrieval
 */

/**
 * @swagger
 * /assect:
 *   post:
 *     summary: Create a Assect
 *     description: Create other Assect.
 *     tags: [Assect]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               assectName:
 *                 type: string
 *               imagePath:
 *                 type: string
 *                 format: binary
 *               invoiceNo:
 *                 type: number
 *               invoiceDate:
 *                 type: date
 *               quantity:
 *                 type: number
 *             example:
 *               assectName: Test
 *               imagePath: imagelink/icon1
 *               invoiceNo: 123
 *               invoiceDate: 1/01/2023
 *               quantity: 2
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Assect'
 *       "401":
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/Forbidden'
 *
 *
 *   get:
 *     summary: Get all Assect
 *     description: all Assect.
 *     tags: [Assect]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: assectName
 *         schema:
 *           type: string
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
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
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               assectName:
 *                 type: string
 *               imagePath:
 *                 type: string
 *                 format: binary
 *               invoiceNo:
 *                 type: number
 *               invoiceDate:
 *                 type: date
 *               quantity:
 *                 type: nunber
 *             example:
 *               assectName: English
 *               imagePath: imagelink/icon1
 *               invoiceNo: 1
 *               invoiceDate: 2/10/2023
 *               quantity: 2
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
