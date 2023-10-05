const express = require('express');
const validate = require('../../middlewares/validate');
const StudentAttendanceValidation = require('../../validations/studentattendance.validation');
const StudentAttendanceController = require('../../controllers/studentattendance.controller');

const router = express.Router();
router
  .route('/classwiseStudentAttendanceList')
  .get(
    validate(StudentAttendanceValidation.todaysAttendanceForSchool),
    StudentAttendanceController.getClasswiseAttendanceStudentList
  );
router
  .route('/getTodaysAttendanceforSchool')
  .get(
    validate(StudentAttendanceValidation.todaysAttendanceForSchool),
    StudentAttendanceController.todaysAttendanceForSchool
  );
router
  .route('/getWeekStatus')
  .get(validate(StudentAttendanceValidation.getWeekStatus), StudentAttendanceController.getWeekStatus);
router
  .route('/getAttendanceByClassAndsectionAndDate')
  .get(validate(StudentAttendanceValidation.attendanceData), StudentAttendanceController.getAttendanceByclassSectionDate);
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
 * /StudentAttendance/getAttendanceByClassAndsectionAndDate:
 *   get:
 *     summary:  A list of students attendence matching the specified class, section and date
 *     tags: [StudentAttendance]
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
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *         description: The date to filter by.
 *     responses:
 *       '200':
 *         description: A list of students attendence matching the specified class, section and date
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
 * /StudentAttendance/getTodaysAttendanceforSchool:
 *   get:
 *     summary:  A list of students todays attendence list for school matching the specified campusID and date
 *     tags: [StudentAttendance]
 *     parameters:
 *       - in: query
 *         name: campusId
 *         schema:
 *           type: string
 *         description: The ID of the campusId to filter by.
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *         description: The date to filter by.
 *     responses:
 *       '200':
 *         description:  A list of students todays attendence list for school matching the specified campusID and date
 *         content:
 *           application/json:
 *             example:
 *               totalStudents: 100
 *               presentStudents: 50
 *               absentStudents: 30
 *               halfdayStudents: 20
 *       '400':
 *         description: Attendance summary not found.
 *       '500':
 *         description: Internal server error. An error occurred while processing the request.
 */

/**
 * @swagger
 * /StudentAttendance/getWeekStatus:
 *   get:
 *     summary:  A list of students attendence matching the specified class, section and date
 *     tags: [StudentAttendance]
 *     parameters:
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         description: The ID of the userId to filter by.
 *     responses:
 *       '200':
 *         description: A list of students attendence matching the specified class, section and date
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
 *               - classId
 *               - sectionId
 *               - studentId
 *               - date
 *               - attendancetype
 *               - remark
 *               - attedanceTakenBy
 *               - campusId
 *             example:
 *               classId: 650c141a483c21d899148b29
 *               sectionId: 650c141a483c21d899148b29
 *               studentId: 650c141a483c21d899148b29
 *               attedanceTakenBy: 650c141a483c21d899148b29
 *               campusId: 650c141a483c21d899148b29
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
 *         name: date
 *         schema:
 *           type: string
 *         description: date
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
 *               - attendancetype
 *               - remark
 *             example:
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
