const express = require('express');
// const validate = require('../../middlewares/validate');
const { quizSubmitController } = require('../../controllers');
// const boardValidation = require('../../validations/board.validation');

const router = express.Router();

router.route('/').post(quizSubmitController.submitQuiz);
//   .get(validate(boardValidation.queryBoard), boardController.queryBoard);

router.route('/:userId').get(quizSubmitController.resultQuiz);
//   .patch(validate(boardValidation.updateBoard), boardController.updateBoard)
//   .delete(validate(boardValidation.deleteBoard), boardController.deleteBoard);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: QuizSubmit
 *   description: QuizSubmit management
 */

/**
 * @swagger
 * /quizSubmit:
 *   post:
 *     summary: Submit quiz answers and calculate marks
 *     tags: [QuizSubmit]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - questionId
 *               - selectedOptions
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The user's ID.
 *               questionId:
 *                 type: string
 *                 description: The ID of the quiz question.
 *               selectedOptions:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: An array of user's answers.
 *             example:
 *               userId: 651179865c2c23a2615b4259
 *               questionId: 651a60b39e3e884e212805d7
 *               selectedOptions: [0, 2]
 *     responses:
 *       "201":
 *         description: Answers submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/QuizSubmit'
 *       "500":
 *         description: An error occurred while submitting answers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *               example:
 *                 error: An error occurred while submitting answers
 *   get:
 *     summary: Get query boards
 *     tags: [asfg]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: board
 *         schema:
 *           type: string
 *         description: Board name *
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
 *                     $ref: '#/components/schemas/Board'
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
 * /quizSubmit/{userId}:
 *   get:
 *     summary: Get a result
 *     tags: [QuizSubmit]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: userId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/QuizSubmit'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a board
 *     tags: [asfg]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: boardId
 *         required: true
 *         schema:
 *           type: string
 *         description: boardId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             example:
 *               name: fake name*
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Board'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a board
 *     tags: [asfg]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: boardId
 *         required: true
 *         schema:
 *           type: string
 *         description: boardId
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
