const express = require('express');
const validate = require('../../middlewares/validate');
const StudentSessionValidation = require('../../validations/student.session.validation');
const studentSessionController = require('../../controllers/student.session.controller');

const router = express.Router();
router
  .route('/studentsByClassAndSection')
  .get(
    validate(StudentSessionValidation.getAllStudentByclassAndsection),
    studentSessionController.getStudentsByClassAndSection
  );
router
  .route('/')
  .post(validate(StudentSessionValidation.createStudentSession), studentSessionController.createStudentSession)
  .get(validate(StudentSessionValidation.getAllStudentSession), studentSessionController.getStudentSession);

router
  .route('/:studentSessionId')
  .get(validate(StudentSessionValidation.getStudentSession), studentSessionController.getStudentSession)
  .patch(validate(StudentSessionValidation.updateStudentSessionById), studentSessionController.updateSingleStudentSession)
  .delete(validate(StudentSessionValidation.deleteStudentSessionById), studentSessionController.deleteSingleStudentSession);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: StudentSession
 *   description:   studentSession Management System
 */

/**
 * @swagger
 * /studentSession/studentsByClassAndSection:
 *   get:
 *     summary: Get students by class and section
 *     tags: [StudentSession]
 *     parameters:
 *       - in: query
 *         name: classId
 *         schema:
 *           type: string
 *         description: The ID of the class to filter by.
 *       - in: query
 *         name: sectionId
 *         schema:
 *           type: string
 *         description: The ID of the section to filter by.
 *     responses:
 *       '200':
 *         description: A list of students matching the specified class and section.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'  # Replace with the actual schema for a student
 *       '400':
 *         description: Bad request. Invalid parameters provided.
 *       '500':
 *         description: Internal server error. An error occurred while processing the request.
 */

/**
 * @swagger
 * /studentSession:
 *   post:
 *     summary: Create a new studentSession
 *     tags: [StudentSession]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - sessionId
 *               - studentId
 *               - classId
 *               - sectionId
 *             properties:
 *               sessionId:
 *                 type: string
 *               studentId:
 *                 type: string
 *               classId:
 *                 type: string
 *               sectionId:
 *                 type: string
 *             example:
 *               sessionId: 650d6ee360838756a214b446
 *               studentId: 650d6f1660838756a214b449
 *               classId: 650d6e6660838756a214b43c
 *               sectionId: 650d6dfa60838756a214b436
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StudentSessionInput'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all studentSessions
 *     tags: [StudentSession]
 *     parameters:
 *       - in: query
 *         name: studentSessionName
 *         schema:
 *           type: string
 *         description: studentSession name
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
 *         description: Maximum number of studentSessions
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
 *                     $ref: '#/components/schemas/StudentSessionInput'
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
 * /studentSession/{studentSessionId}:
 *   patch:
 *     summary: Update a single studentSession by ID
 *     tags: [StudentSession]
 *     parameters:
 *       - in: path
 *         name: studentSessionId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the studentSession
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentSessionUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: StudentSession not found
 *   delete:
 *     summary: Delete a single studentSession by ID
 *     tags: [StudentSession]
 *     parameters:
 *       - in: path
 *         name: studentSessionId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the studentSession
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: StudentSession not found
 *   get:
 *     summary: Get a single studentSession by ID
 *     tags: [StudentSession]
 *     parameters:
 *       - in: path
 *         name: studentSessionId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the studentSession
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: StudentSession not found
 *
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     StudentSessionInput:
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
 *     StudentSessionUpdateInput:
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
