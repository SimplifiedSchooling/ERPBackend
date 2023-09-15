const express = require('express');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('node-uuid');
const validate = require('../../middlewares/validate');
const chapterValidation = require('../../validations/chapter.validation');
const chaterController = require('../../controllers/chapter.controller');

const router = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, callback) => {
    const uniqueFileName = `${uuidv4()}${path.extname(file.originalname)}`;
    callback(null, uniqueFileName);
  },
});

const upload = multer({ storage });
router
  .route('/')
  .post(upload.single('thumbnail'), validate(chapterValidation.createChapter), chaterController.createChapter)
  .get(validate(chapterValidation.getAllChapter), chaterController.getChapter);

router
  .route('/getChaptersByBookid/:bookId')
  .get(validate(chapterValidation.getChaptersByBookId), chaterController.getChaptersByBookId);

router
  .route('/:chapterId')
  .get(validate(chapterValidation.getChapter), chaterController.getSingleChapter)
  .patch(validate(chapterValidation.updateChapterById), chaterController.updateSingleClass)
  .delete(validate(chapterValidation.deleteChapterById), chaterController.deleteSingleChapter);

router
  .route('/filter/:boardId/:mediumId/:classId/:subjectId/:bookId')
  .get(validate(chapterValidation.getChaptersByFilter), chaterController.getChapterByFilter);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Chapters
 *   description:   Chapters Management System
 */

/**
 * @swagger
 * /chapter:
 *   post:
 *     summary: Create a new chapter
 *     tags: [Chapters]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               boardId:
 *                 type: string
 *                 description: ID of the board
 *               mediumId:
 *                 type: string
 *                 description: ID of the medium
 *               classId:
 *                 type: string
 *                 description: ID of the class
 *               subjectId:
 *                 type: string
 *                 description: ID of the subject
 *               bookId:
 *                 type: string
 *                 description: ID of the book
 *               chapterName:
 *                 type: string
 *                 description: Name of the chapter
 *               thumbnail:
 *                 type: string
 *                 format: binary
 *               order:
 *                 type: number
 *             required:
 *               - boardId
 *               - mediumId
 *               - classId
 *               - subjectId
 *               - bookId
 *               - chapterName
 *               - thumbnail
 *               - order
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ChapterInput'
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '403':
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all chapters
 *     tags: [Chapters]
 *     parameters:
 *       - in: query
 *         name: chapterName
 *         schema:
 *           type: string
 *         description: chapter name
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
 *         description: Maximum number of chapters
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
 *                     $ref: '#/components/schemas/ChapterInput'
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
 *
 * /chapter/{chapterId}:
 *   patch:
 *     summary: Update a single chapter by ID
 *     tags: [Chapters]
 *     parameters:
 *       - in: path
 *         name: chapterId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the chapter
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChapterUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: Chapter not found
 *   delete:
 *     summary: Delete a single chapter by ID
 *     tags: [Chapters]
 *     parameters:
 *       - in: path
 *         name: chapterId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the chapter
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Chapter not found
 *   get:
 *     summary: Get a single chapter by ID
 *     tags: [Chapters]
 *     parameters:
 *       - in: path
 *         name: chapterId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the chapter
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Chapter not found
 *
 * /chapter/getChaptersByBookid/{bookId}:
 *    get:
 *     summary: Get all chapters by bookId
 *     tags: [Chapters]
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the bookId
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Chapters not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ChapterInput:
 *       type: object
 *       properties:
 *         boardId:
 *           type: string
 *           description: ID of the board
 *         mediumId:
 *           type: string
 *           description: ID of the medium
 *         classId:
 *           type: string
 *           description: ID of the class
 *         subjectId:
 *           type: string
 *           description: ID of the subject
 *         bookId:
 *           type: string
 *           description: ID of the book
 *         chapterName:
 *           type: string
 *           description: Name of the chapter
 *         thumbnail:
 *           type: string
 *           description: path of thumbnail
 *         order:
 *           type: number
 *       example:
 *         boardId: 614a7e7d7f1d813bbf8e89a9
 *         mediumId: 614a7e7d7f1d813bbf8e89b0
 *         classId: 614a7e7d7f1d813bbf8e89b7
 *         subjectId: 614a7e7d7f1d813bbf8e89c2
 *         bookId: 614a7e7d7f1d813bbf8e89d0
 *         chapterName: Chapter 1
 *         order:  1
 *         thumbnail: dvhjgsdv/dshbvhdsgh
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ChapterUpdateInput:
 *       type: object
 *       properties:
 *         boardId:
 *           type: string
 *           description: ID of the board
 *         mediumId:
 *           type: string
 *           description: ID of the medium
 *         classId:
 *           type: string
 *           description: ID of the class
 *         subjectId:
 *           type: string
 *           description: ID of the subject
 *         bookId:
 *           type: string
 *           description: ID of the book
 *         chapterName:
 *           type: string
 *           description: Name of the chapter
 *         thumbnail:
 *           type: string
 *           description: path of thumbnail
 *       example:
 *         boardId: 614a7e7d7f1d813bbf8e89a9
 *         mediumId: 614a7e7d7f1d813bbf8e89b0
 *         classId: 614a7e7d7f1d813bbf8e89b7
 *         subjectId: 614a7e7d7f1d813bbf8e89c2
 *         bookId: 614a7e7d7f1d813bbf8e89d0
 *         chapterName: Chapter 1
 *         order:  1
 *         thumbnail: dvhjgsdv/dshbvhdsgh
 */
/**
 * @swagger
 * /chapter/filter/{boardId}/{mediumId}/{classId}/{subjectId}/{bookId}:
 *   get:
 *     summary: Get a chapter
 *     tags: [Chapters]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: boardId
 *         required: true
 *         description: The ID of the board
 *         schema:
 *           type: string
 *       - in: path
 *         name: mediumId
 *         required: true
 *         description: The ID of the medium
 *         schema:
 *           type: string
 *       - in: path
 *         name: classId
 *         required: true
 *         description: The ID of the class
 *       - in: path
 *         name: subjectId
 *         required: true
 *         description: The ID of the subject
 *       - in: path
 *         name: bookId
 *         required: true
 *         description: The ID of the book
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ChapterInput'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
