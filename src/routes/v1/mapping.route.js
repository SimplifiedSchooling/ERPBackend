const express = require('express');
const validate = require('../../middlewares/validate');
const { mappingController } = require('../../controllers');
const { mappingValidation } = require('../../validations');

const router = express.Router();

router
  .route('/')
  .post(validate(mappingValidation.createMapping), mappingController.createMapping)
  .get(validate(mappingValidation.queryMapping), mappingController.queryMapping);

router
  .route('/:mappingId')
  .get(validate(mappingValidation.getMappingById), mappingController.getMappingById)
  .patch(validate(mappingValidation.updateMapping), mappingController.updateMappingById)
  .delete(validate(mappingValidation.deleteMappingById), mappingController.deleteMapping);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Mapping
 *   description: Mapping management
 */

/**
 * @swagger
 * /mapping:
 *   post:
 *     summary: Create a mapping
 *     tags: [Mapping]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the class
 *               boardId:
 *                 type: string
 *                 description: ID of the boardId
 *               mediumId:
 *                 type: string
 *                 description: ID of the mediumId
 *               classId:
 *                 type: string
 *                 description: ID of the classId
 *               subjectId:
 *                 type: string
 *                 description: ID of the subjectId
 *               bookId:
 *                 type: string
 *                 description: ID of the bookId
 *             example:
 *               name: class10
 *               boardId: 614a7e7d7f1d813bbf8e89b7
 *               mediumId: 614a7e7d7f1d813bbf8e89a9
 *               classId: 614a7e7d7f1d813bbf8e89b7
 *               subjectId: 614a7e7d7f1d813bbf8e89a9
 *               bookId: 614a7e7d7f1d813bbf8e89a9
 *
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Mapping'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get query mapping
 *     tags: [Mapping]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: board
 *         schema:
 *           type: string
 *         description: mapping name *
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
 *         description: Maximum number of mapping
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
 *                     $ref: '#/components/schemas/Mapping'
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
 * /mapping/{mappingId}:
 *   get:
 *     summary: Get a mapping
 *     tags: [Mapping]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: mappingId
 *         required: true
 *         schema:
 *           type: string
 *         description: mappingId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Mapping'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a mapping
 *     tags: [Mapping]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: mappingId
 *         required: true
 *         schema:
 *           type: string
 *         description: mappingId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the class
 *               boardId:
 *                 type: string
 *                 description: ID of the boardId
 *               mediumId:
 *                 type: string
 *                 description: ID of the mediumId
 *               classId:
 *                 type: string
 *                 description: ID of the classId
 *               subjectId:
 *                 type: string
 *                 description: ID of the subjectId
 *               bookId:
 *                 type: string
 *                 description: ID of the bookId
 *             example:
 *               name: class10
 *               boardId: 614a7e7d7f1d813bbf8e89b7
 *               mediumId: 614a7e7d7f1d813bbf8e89a9
 *               classId: 614a7e7d7f1d813bbf8e89b7
 *               subjectId: 614a7e7d7f1d813bbf8e89a9
 *               bookId: 614a7e7d7f1d813bbf8e89a9
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Mapping'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a mapping
 *     tags: [Mapping]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: mappingId
 *         required: true
 *         schema:
 *           type: string
 *         description: mappingId
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
