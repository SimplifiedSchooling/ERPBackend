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
 *   name: Asset
 *   description: Asset management and retrieval
 */

/**
 * @swagger
 * /assets:
 *   post:
 *     summary: Create an assect
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
 *               - count
 *               - total
 *             properties:
 *               assectName:
 *                 type: string
 *                 description: The name of the assect
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
 *                       description: Invoice date (e.g., "2023-10-17")
 *                     quantity:
 *                       type: number
 *                       description: Quantity
 *                     imagePath:
 *                       type: string
 *                       format: binary
 *                       description: Image file
 *               total:
 *                 type: number
 *                 description: Total value of the assect
 *             example:
 *               assectName: Computer
 *               count: [
 *                 {
 *                   invoiceNo: 12345,
 *                   invoiceDate: "2023-10-17",
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
 *                $ref: '#/components/schemas/Assect'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Asset:
 *       type: object
 *       properties:
 *         assectName:
 *           type: string
 *         count:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               invoiceNo:
 *                 type: number
 *               invoiceDate:
 *                 type: string
 *                 format: date
 *               quantity:
 *                 type: number
 *               imagePath:
 *                 type: string
 *                 format: binary
 *         total:
 *           type: number
 */

// /**
//  * @swagger
//  * /assets:
//  *   post:
//  *     summary: Create a new asset
//  *     tags:
//  *       - Asset
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         multipart/form-data:
//  *           schema:
//  *             $ref: '#/components/schemas/Asset'
//  *     consumes:
//  *       - multipart/form-data
//  *     responses:
//  *       201:
//  *         description: New asset created successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Asset'
//  */

/**
 * @swagger
 * /assets:
 *   get:
 *     summary: Get a list of assets
 *     tags:
 *       - Asset
 *     responses:
 *       200:
 *         description: A list of assets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Asset'
 */

/**
 * @swagger
 * /assets/{assetId}:
 *   get:
 *     summary: Get an asset by ID
 *     tags:
 *       - Asset
 *     parameters:
 *       - in: path
 *         name: assetId
 *         required: true
 *         description: ID of the asset to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The asset
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Asset'
 *       404:
 *         description: Asset not found
 */

/**
 * @swagger
 * /assets/{assetId}:
 *   patch:
 *     summary: Update an asset by ID
 *     tags:
 *       - Asset
 *     parameters:
 *       - in: path
 *         name: assetId
 *         required: true
 *         description: ID of the asset to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Asset'
 *     consumes:
 *       - multipart/form-data
 *     responses:
 *       200:
 *         description: Asset updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Asset'
 *       404:
 *         description: Asset not found
 */

/**
 * @swagger
 * /assets/{assetId}:
 *   delete:
 *     summary: Delete an asset by ID
 *     tags:
 *       - Asset
 *     parameters:
 *       - in: path
 *         name: assetId
 *         required: true
 *         description: ID of the asset to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Asset deleted successfully
 *       404:
 *         description: Asset not found
 */
