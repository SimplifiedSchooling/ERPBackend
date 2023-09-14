const express = require('express');
const validate = require('../../middlewares/validate');
const student_sessionValidation = require('../../validations/student_session.validation');
const student_sessionController = require('../../controllers/student_session.controller');

const router = express.Router();
router
  .route('/')
  .post(validate(student_sessionValidation.createStudent_session), student_sessionController.createStudent_session)
  .get(validate(student_sessionValidation.getAllStudent_session), student_sessionController.getStudent_session);

router
  .route('/:student_session_Id')
  .get(validate(student_sessionValidation.getStudent_session), student_sessionController.getSingleStudent_session)
  .patch(
    validate(student_sessionValidation.updateStudent_sessionById),
    student_sessionController.updateSingleStudent_session
  )
  .delete(
    validate(student_sessionValidation.deleteStudent_sessionById),
    student_sessionController.deleteSingleStudent_session
  );

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Student_session
 *   description:   student_session Management System
 */

/**
 * @swagger
 * /student_session:
 *   post:
 *     summary: Create a new student_session
 *     tags: [Student_session]
 *     requestBody:
 *       description: Student_session object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student_sessionInput'
 *     responses:
 *       200:
 *         description: Student_session created successfully
 *   get:
 *     summary: Get all student_sessions
 *     tags: [Student_session]
 *     parameters:
 *       - in: query
 *         name: student_sessionName
 *         schema:
 *           type: string
 *         description: student_session name
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
 *         description: Maximum number of student_sessions
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
 *                     $ref: '#/components/schemas/Student_sessionInput'
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
 * /student_session/{student_session_Id}:
 *   patch:
 *     summary: Update a single student_session by ID
 *     tags: [Student_session]
 *     parameters:
 *       - in: path
 *         name: student_session_Id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the student_session
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student_sessionUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: Student_session not found
 *   delete:
 *     summary: Delete a single student_session by ID
 *     tags: [Student_session]
 *     parameters:
 *       - in: path
 *         name: student_session_Id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the student_session
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Student_session not found
 *   get:
 *     summary: Get a single student_session by ID
 *     tags: [Student_session]
 *     parameters:
 *       - in: path
 *         name: student_session_Id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the student_session
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Student_session not found
 *
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Student_sessionInput:
 *       type: object
 *       properties:
 *         session_Id:
 *           type: string
 *           description: ID of the session_Id
 *         student_Id:
 *           type: string
 *           description: ID of the student_Id
 *         class_Id:
 *           type: string
 *           description: ID of the class_Id
 *         section_Id:
 *           type: string
 *           description: ID of the section_Id
 *       example:
 *         session_Id: 614a7e7d7f1d813bbf8e89a9
 *         student_Id: 614a7e7d7f1d813bbf8e89a9
 *         class_Id: 614a7e7d7f1d813bbf8e89a9
 *         section_Id: 614a7e7d7f1d813bbf8e89a9
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Student_sessionUpdateInput:
 *       type: object
 *       properties:
 *         session_Id:
 *           type: string
 *           description: ID of the session_Id
 *         student_Id:
 *           type: string
 *           description: ID of the student_Id
 *         class_Id:
 *           type: string
 *           description: ID of the class_Id
 *         section_Id:
 *           type: string
 *           description: ID of the section_Id
 *       example:
 *         session_Id: 614a7e7d7f1d813bbf8e89a9
 *         student_Id: 614a7e7d7f1d813bbf8e89a9
 *         class_Id: 614a7e7d7f1d813bbf8e89a9
 *         section_Id: 614a7e7d7f1d813bbf8e89a9
 */
