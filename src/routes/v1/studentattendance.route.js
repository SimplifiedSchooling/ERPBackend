const express = require('express');
const validate = require('../../middlewares/validate');
const StudentAttendanceValidation = require('../../validations/studentattendance.validation');
const StudentAttendanceController = require('../../controllers/studentattendance.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(StudentAttendanceValidation.createStudentAttendance), StudentAttendanceController.createStudentAttendance)
  .get(validate(StudentAttendanceValidation.getAllStudentAttendance), StudentAttendanceController.getAllStudentAttendance);

router
  .route('/:StudentAttendanceId')
  .get(validate(StudentAttendanceValidation.getStudentAttendance), StudentAttendanceController.getStudentAttendanceById)
  .patch(validate(StudentAttendanceValidation.updateStudentAttendance), StudentAttendanceController.updateStudentAttendance)
  .delete(
    validate(StudentAttendanceValidation.deleteStudentAttendance),
    StudentAttendanceController.deleteStudentAttendance
  );

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: StudentAttendance
 *   description: StudentAttendance
 */

/**
 * @swagger
 * /StudentAttendance:
 *   post:
 *     summary: Create a StudentAttendance
 *     tags: [StudentAttendance]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - StudentSessionId
 *               - date
 *               - attendancetype
 *               - remark
 *             example:
 *               StudentSessionId: 650c141a483c21d899148b29
 *               date: 2023-09-15
 *               attendancetype: present  // 'present', 'absent', 'halfday', 'holiday'
 *               remark: Attended class
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StudentAttendance'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all StudentAttendance
 *     tags: [StudentAttendance]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: Residential
 *         schema:
 *           type: string
 *         description: Residential name
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
 *                     $ref: '#/components/schemas/StudentAttendance'
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
 * /StudentAttendance/{StudentAttendanceId}:
 *   get:
 *     summary: Get a StudentAttendance
 *     tags: [StudentAttendance]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: StudentAttendanceId
 *         required: true
 *         schema:
 *           type: string
 *         description: StudentAttendanceId
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StudentAttendance'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a StudentAttendance
 *     tags: [StudentAttendance]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: StudentAttendanceId
 *         required: true
 *         schema:
 *           type: string
 *         description: StudentAttendanceId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - StudentSessionId
 *               - date
 *               - attendancetype
 *               - remark
 *             example:
 *               StudentSessionId: 650c141a483c21d899148b29
 *               date: 2023-09-15
 *               attendancetype: present
 *               remark: Attended class
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/StudentAttendance'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type StudentAttendance
 *     tags: [StudentAttendance]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: StudentAttendanceId
 *         required: true
 *         schema:
 *           type: string
 *         description: StudentAttendanceId
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
