const express = require('express');
const validate = require('../../middlewares/validate');
const attendanceValidation = require('../../validations/attendance.validation');
const attendanceController = require('../../controllers/attendance.controller');

const router = express.Router();
router
  .route('/')
  .post(validate(attendanceValidation.createAttendance), attendanceController.createAttendance)
  .get(validate(attendanceValidation.getAllAttendance), attendanceController.getAttendance);

router
  .route('/:attendanceId')
  .get(validate(attendanceValidation.getAttendance), attendanceController.getSingleAttendance)
  .patch(validate(attendanceValidation.updateAttendanceById), attendanceController.updateSingleAttendance)
  .delete(validate(attendanceValidation.deleteAttendanceById), attendanceController.deleteSingleAttendance);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Attendance
 *   description:   Chapters Management System
 */

/**
 * @swagger
 * /attendance:
 *   post:
 *     summary: Create a new attendance
 *     tags: [Attendance]
 *     requestBody:
 *       description: Attendance object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AttendanceInput'
 *     responses:
 *       200:
 *         description: Attendance created successfully
 *   get:
 *     summary: Get all attendances
 *     tags: [Attendance]
 *     parameters:
 *       - in: query
 *         name: attendanceName
 *         schema:
 *           type: string
 *         description: attendance name
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
 *         description: Maximum number of attendances
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
 *                     $ref: '#/components/schemas/AttendanceInput'
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
 * /attendance/{attendanceId}:
 *   patch:
 *     summary: Update a single attendance by ID
 *     tags: [Attendance]
 *     parameters:
 *       - in: path
 *         name: attendanceId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the attendance
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AttendanceUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: Attendance not found
 *   delete:
 *     summary: Delete a single attendance by ID
 *     tags: [Attendance]
 *     parameters:
 *       - in: path
 *         name: attendanceId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the attendance
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Attendance not found
 *   get:
 *     summary: Get a single attendance by ID
 *     tags: [Attendance]
 *     parameters:
 *       - in: path
 *         name: attendanceId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the attendance
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Attendance not found
 *
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     AttendanceInput:
 *       type: object
 *       properties:
 *         student_session_id:
 *           type: string
 *           description: ID of the student_session_id
 *         date:
 *           type: string
 *           description: date
 *         attedance_type:
 *           type: string
 *           enum: [ holiday,late,present,absent,halfday ]
 *         remark:
 *           type: string
 *           description: remark
 *       example:
 *         student_session_id: 614a7e7d7f1d813bbf8e89a9
 *         date: 2023-09-13
 *         attedance_type: holiday,present,absent,halfday,late
 *         remark: due to ill , bus got late
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     AttendanceUpdateInput:
 *       type: object
 *       properties:
 *         student_session_id:
 *           type: string
 *           description: ID of the student_session_id
 *         date:
 *           type: string
 *           description: date
 *         attedance_type:
 *           type: string
 *           enum: [ holiday,late,present,absent,halfday ]
 *         remark:
 *           type: string
 *           description: remark
 *       example:
 *         student_session_id: 614a7e7d7f1d813bbf8e89a9
 *         date: 2023-09-13
 *         attedance_type:  holiday,present,absent,halfday,late
 *         remark: due to ill , bus got late
 */
