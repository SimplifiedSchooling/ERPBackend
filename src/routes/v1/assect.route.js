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
  .patch(upload.single('imagePath'), validate(assectValidaton.updateAssect), assectController.updateAssect)
  .delete(validate(assectValidaton.deleteAssect), assectController.deleteAssect);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Asset
 *   description: Asset management and retrieval
 */
/**
 * @swagger
 * /assets:
 *   post:
 *     summary: Create a Asset
 *     tags: [Asset]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - assectName
 *               - invoiceNo
 *               - invoiceDate
 *               - quantity
 *               - description
 *               - imagePath
 *               - totalasset
 *               - totaldestroyed
 *               - expiredate
 *               - reason
 *             properties:
 *               assectName:
 *                 type: string *
 *               invoiceNo:
 *                 type: number
 *               invoiceDate:
 *                 type: date
 *               quantity:
 *                 type: number
 *               description:
 *                 type: string
 *               imagePath:
 *                 type: string
 *                 description: The name of the asset
 *               count:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     invoiceNo:
 *                       type: number
 *                       description: Invoice number
 *                     invoiceDate:
 *                       type: string
 *                       format: date
 *                       description: Invoice date (e.g., "2023-10-10")
 *                     quantity:
 *                       type: number
 *                       description: Quantity
 *                     imagePath:
 *                       type: string
 *                       format: binary
 *                       description: Image file
 *                 example:
 *                   - invoiceNo: 12345
 *                     invoiceDate: "2023-10-10"
 *                     quantity: 5
 *                     imagePath: (binary data of the image file)
 *               total:
 *                 type: number
 *                 description: Total value of the asset
 *             example:
 *               assectName: Computer
 *               count: [
 *                 {
 *                   invoiceNo: 12345,
 *                   invoiceDate: "2023-10-10",
 *                   quantity: 5,
 *                   imagePath: (binary data of the image file)
 *                 }
 *               ]
 *               total: 5000
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get query Asset
 *     tags: [Asset]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: Asset
 *         schema:
 *           type: string
 *         description: Asset name *
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
 *         description: Maximum number of users
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
 *                     $ref: '#/components/schemas/Asset'
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
 * /assets/{assectId}:
 *   get:
 *     summary: Get a Asset
 *     tags: [Asset]
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
 *                $ref: '#/components/schemas/Asset'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Asset
 *     tags: [Asset]
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
 *         multipart/form-data:
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
 *               description:
 *                 type: string
 *               imagePath:
 *                 type: string
 *                 format: binary
 *               totalasset:
 *                 type: number
 *               totaldestroyed:
 *                 type: number
 *               expiredate:
 *                 type: date
 *               reason:
 *                 type: string
 *             example:
 *               assectName: Fake assectName
 *               invoiceNo: 1234
 *               invoiceDate: 10/12/2022
 *               quantity: 4
 *               description: This is the asset Description
 *               imagePath: jpg/pdf/google.com
 *               totalasset: 10
 *               totaldestroyed: 7
 *               expiredate: 12/10/2021
 *               reason: Remove the asset from the list
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Asset'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Asset
 *     tags: [Asset]
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
