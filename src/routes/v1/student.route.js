const express = require('express');
const validate = require('../../middlewares/validate');
const StudentValidation = require('../../validations/student.validation');
const StudentController = require('../../controllers/student.controller');

const router = express.Router();
router
  .route('/')
  .post(validate(StudentValidation.createStudent), StudentController.createStudent)
  .get(validate(StudentValidation.getAllStudents), StudentController.getStudents);

router.route('/totalStudent').get(StudentController.getTotalMaleStudents);

router
  .route('/:studentId')
  .get(StudentController.getStudent)
  .patch(validate(StudentValidation.updateStudentById), StudentController.updateStudent)
  .delete(validate(StudentValidation.deleteStudentById), StudentController.deleteStudent);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Students
 *   description:   Students Management System
 */

/**
 * @swagger
 * /student:
 *   post:
 *     summary: Create a new Student
 *     tags: [Students]
 *     requestBody:
 *       description: Student object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentInput'
 *     responses:
 *       200:
 *         description: Student created successfully
 *   get:
 *     summary: Get list of Students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: List of Student retrieved successfully
 *
 * /student/{studentId}:
 *   patch:
 *     summary: Update a single student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the Student
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: Chapter not found
 *   delete:
 *     summary: Delete a single Student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the Student
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Student not found
 *   get:
 *     summary: Get a single Student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the Student
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Student not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     StudentInput:
 *       type: object
 *       properties:
 *         userName:
 *           type: string
 *           description: userName  for the student
 *         password:
 *           type: string
 *           description: Password must contain at least one letter and one number
 *         campusId:
 *           type: string
 *         class:
 *           type: string
 *         section:
 *           type: string
 *       example:
 *         userName: "ABC12345"
 *         password: "password1"
 *         campusId: "614a7e7d7f1d813bbf8e89b7"
 *         class: "Class 10"
 *         section: "A"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     StudentUpdateInput:
 *       type: object
 *       properties:
 *         userName:
 *           type: string
 *           description: userName  for the student
 *         password:
 *           type: string
 *           description: Password must contain at least one letter and one number
 *         campusId:
 *           type: string
 *         class:
 *           type: string
 *         section:
 *           type: string
 *       example:
 *         userName: "ABC12345"
 *         password: "password1"
 *         campusId: "614a7e7d7f1d813bbf8e89b7"
 *         class: "Class 10"
 *         section: "A"
 */
