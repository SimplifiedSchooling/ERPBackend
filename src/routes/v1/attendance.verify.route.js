const express = require('express');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('node-uuid');
const validate = require('../../middlewares/validate');
const { attendanceVerifyController } = require('../../controllers');
const { attendanceVerifyvalidation } = require('../../validations');

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
  .post(
    upload.single('file'),
    validate(attendanceVerifyvalidation.createAVerify),
    attendanceVerifyController.createAttendanceVerify
  )
  .get(validate(attendanceVerifyvalidation.queryAVerify), attendanceVerifyController.queryAttendanceVerify);

router
  .route('/:Id')
  .get(validate(attendanceVerifyvalidation.getAVerify), attendanceVerifyController.getAttendanceVerify)
  .patch(validate(attendanceVerifyvalidation.updateAverify), attendanceVerifyController.UpdateAttendanceVerify)
  .delete(validate(attendanceVerifyvalidation.deleteAverify), attendanceVerifyController.deleteAttendanceVerify);

router.route('/verified-attendance').get(attendanceVerifyController.getAttendanceDetailsController);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: AttendanceVerify
 *   description: Attendance verification management
 */

/**
 * @swagger
 * /attendance-verify/verified-attendance:
 *   get:
 *     summary: Get attendance details by class, section, and date
 *     tags: [AttendanceVerify]
 *     parameters:
 *       - in: query
 *         name: classId
 *         required: true
 *         description: ID of the class
 *         schema:
 *           type: string
 *       - in: query
 *         name: sectionId
 *         required: true
 *         description: ID of the section
 *         schema:
 *           type: string
 *       - in: query
 *         name: date
 *         required: true
 *         description: Attendance date
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with attendance details
 *       404:
 *         description: Attendance data not found
 *       500:
 *         description: Internal Server Error
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
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *               studentId1:
 *                 type: string
 *                 description: ID of student 1
 *               studentId2:
 *                 type: string
 *                 description: ID of student 2
 *               studentId3:
 *                 type: string
 *                 description: ID of student 3
 *               campusId:
 *                 type: string
 *                 description: Campus ID
 *               inchargeId:
 *                 type: string
 *                 description: Incharge ID
 *               classId:
 *                 type: string
 *                 description: class ID
 *               sectionId:
 *                 type: string
 *                 description: section ID
 *               backCount:
 *                 type: string
 *                 description: Back Count
 *               date:
 *                 type: string
 *                 description: date
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/'
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *
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
