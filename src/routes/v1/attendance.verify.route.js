const express = require('express');
const validate = require('../../middlewares/validate');
const { attendanceVerifyController } = require('../../controllers');
const { attendanceVerifyvalidation } = require('../../validations');

const router = express.Router();

router
  .route('/')
  .post(validate(attendanceVerifyvalidation.createAVerify), attendanceVerifyController.createAttendanceVerify)
  .get(validate(attendanceVerifyvalidation.queryAVerify), attendanceVerifyController.queryAttendanceVerify);

router
  .route('/:Id')
  .get(validate(attendanceVerifyvalidation.getAVerify), attendanceVerifyController.getAttendanceVerify)
  .patch(validate(attendanceVerifyvalidation.updateAverify), attendanceVerifyController.UpdateAttendanceVerify)
  .delete(validate(attendanceVerifyvalidation.deleteAverify), attendanceVerifyController.deleteAttendanceVerify);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: AttendanceVerify
 *   description: Attendance verification management
 */

/**
 * @swagger
 * /attendance-verify:
 *   post:
 *     summary: Create an attendance verification record
 *     tags: [AttendanceVerify]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AttendanceVerify'
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/AttendanceVerify'
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'

 *   get:
 *     summary: Get all attendance verification records
 *     tags: [AttendanceVerify]
 *     security:
 *       - bearerAuth: []
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
 *                     $ref: '#/components/schemas/AttendanceVerify'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'

 * /attendance-verify/{Id}:
 *   get:
 *     summary: Get a single attendance verification record by ID
 *     tags: [AttendanceVerify]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the attendance verification record
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AttendanceVerify'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'

 *   patch:
 *     summary: Update an attendance verification record by ID
 *     tags: [AttendanceVerify]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the attendance verification record
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AttendanceVerify'
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AttendanceVerify'
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'

 *   delete:
 *     summary: Delete an attendance verification record by ID
 *     tags: [AttendanceVerify]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the attendance verification record
 *     responses:
 *       "204":
 *         description: No Content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
