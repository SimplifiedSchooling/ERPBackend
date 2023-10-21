const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const { v4: uuidv4 } = require('node-uuid');
const validate = require('../../middlewares/validate');
const { assectController } = require('../../controllers');
const { assectValidaton } = require('../../validations');

// const storage = multer.diskStorage({
//   destination: 'uploads/',
//   filename: (req, file, callback) => {
//     const uniqueFileName = `${uuidv4()}${path.extname(file.originalname)}`;
//     callback(null, uniqueFileName);
//   },
// });

// const upload = multer({ storage });
// upload.single('imagePath'),
const router = express.Router();

router
  .route('/')
  .post(validate(assectValidaton.createAssetSchema), assectController.createAssect)
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
 *   name: Asset
 *   description: API for Asset management
 */

/**
 * @swagger
 * /assets:
 *   post:
 *     summary: Create an Assect
 *     tags: [Asset]
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
 *               description:
 *                 type: string
 *               assectName:
 *                 type: string
 *               count:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     invoiceNo:
 *                       type: number
 *                     invoiceDate:
 *                       type: string
 *                       format: date
 *                     quantity:
 *                       type: number
 *                     description:
 *                       type: string
 *                     imagePath:
 *                       type: string
 *                 example:
 *                   [
 *                     {
 *                       invoiceNo: 12345,
 *                       invoiceDate: "2023-07-01",
 *                       quantity: 5,
 *                       description: "Description 1",
 *                       imagePath: "path/to/image1.jpg"
 *                     },
 *                     {
 *                       invoiceNo: 67890,
 *                       invoiceDate: "2023-07-15",
 *                       quantity: 3,
 *                       description: "Description 2",
 *                       imagePath: "path/to/image2.jpg"
 *                     }
 *                   ]
 *               totalasset:
 *                 type: number
 *               totaldestroyed:
 *                 type: number
 *               expiredate:
 *                 type: date
 *               reason:
 *                 type: string
 *             example:
 *               assectName: test123
 *               invoiceNo: 123
 *               invoiceDate: 10/12/2023
 *               quantity: 2
 *               description: This is the asset
 *               imagePath: jpg/pdf/google.com
 *               totalasset: 4
 *               totaldestroyed: 3
 *               expiredate: 12/10/2022
 *               reason: Remove the asset
 *
 *     responses:
 *       '201':
 *         description: Assect created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Assect'
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error

 *   get:
 *     summary: Get Assects
 *     tags: [Asset]
 *     parameters:
 *       - in: query
 *         name: scode
 *         schema:
 *           type: string
 *         description: Assect code
 *       - in: query
 *         name: assectName
 *         schema:
 *           type: string
 *         description: Assect name
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Assect'
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error

 * /assets/{id}:
 *   patch:
 *     summary: Update an Assect by ID
 *     tags: [Asset]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Assect ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Assect'
 *     responses:
 *       '200':
 *         description: Assect updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Assect'
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Assect not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /assets/{assectId}:
 *   get:
 *     summary: Get a Asset
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
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               assectName:
 *                 type: string *
 *               description:
 *                 type: string
 *               imagePath:
 *                 type: string
 *                 format: binary
 *               expiredate:
 *                 type: date
 *               reason:
 *                 type: string
 *               totalasset:
 *                 type: number
 *               totaldestroyed:
 *                 type: number
 *             example:
 *               assectName: test123
 *               totalasset: 10
 *               totaldestroyed: 7
 *               description: This is the asset
 *               imagePath: jpg/pdf/google.com
 *               expiredate: 12/10/2022
 *               reason: Remove the asset
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
