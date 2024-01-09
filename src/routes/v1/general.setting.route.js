const express = require('express');
const validate = require('../../middlewares/validate');
const { generalSettingController } = require('../../controllers');
const { generalSettingValidation } = require('../../validations');

const router = express.Router();
router
  .route('/')
  .post(validate(generalSettingValidation.createGeneralSetting), generalSettingController.createGeneralSetting)
  .get(validate(generalSettingValidation.getAllGeneralSettings), generalSettingController.getGeneralSettings);

router
  .route('/:generalSettingId')
  .get(validate(generalSettingValidation.getGeneralSetting), generalSettingController.getGeneralSetting)
  .patch(validate(generalSettingValidation.updateGeneralSettingById), generalSettingController.updateGeneralSetting)
  .delete(validate(generalSettingValidation.deleteGeneralSettingById), generalSettingController.deleteGeneralSetting);
router
  .route('/filter/:scode')
  .get(validate(generalSettingValidation.getGeneralSettingByScode), generalSettingController.getGeneralSettingByScode);

module.exports = router;
/**
 * @swagger
 * tags:
 *   name: GeneralSetting
 *   description:   GeneralSetting Management System
 */
/**
 * @swagger
 * /generalsetting/filter/{scode}:
 *   get:
 *     summary: Get a GeneralSetting by scode
 *     tags: [GeneralSetting]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: scode
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Chapter'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 */
/**
 * @swagger
 * /generalsetting:
 *   post:
 *     summary: Create a new generalsetting
 *     tags: [GeneralSetting]
 *     requestBody:
 *       description: GeneralSetting object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GeneralSettingInput'
 *     responses:
 *       200:
 *         description: GeneralSetting created successfully
 *   get:
 *     summary: Get list of GeneralSetting
 *     tags: [GeneralSetting]
 *     responses:
 *       200:
 *         description: List of GeneralSetting retrieved successfully
 *
 * /generalsetting/{generalSettingId}:
 *   patch:
 *     summary: Update a single GeneralSetting by ID
 *     tags: [GeneralSetting]
 *     parameters:
 *       - in: path
 *         name: generalSettingId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the generalSetting
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GeneralSettingUpdateInput'
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       404:
 *         description: generalSetting not found
 *   delete:
 *     summary: Delete a single generalSettingId by ID
 *     tags: [GeneralSetting]
 *     parameters:
 *       - in: path
 *         name: generalSettingId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the generalSettingId
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: GeneralSetting not found
 *   get:
 *     summary: Get a generalSetting  by ID
 *     tags: [GeneralSetting]
 *     parameters:
 *       - in: path
 *         name: generalSettingId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the generalSettingId
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: GeneralSetting not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     GeneralSettingInput:
 *       type: object
 *       properties:
 *         schoolname:
 *           type: string
 *           description: Name of the school.
 *         address:
 *           type: string
 *           description: Address of the school.
 *         mobileno:
 *           type: number
 *           description: Mobile number of the school.
 *         email:
 *           type: string
 *           description: Email address of the school.
 *         scode:
 *           type: string
 *           description: School code.
 *         sessionId:
 *           type: string
 *           description: ID of the session.
 *         sessionStartMonth:
 *           type: string
 *           description: Start month of the session.
 *         Attendance:
 *           type: string
 *           description: Type of attendance.
 *         biometricAttendance:
 *           type: string
 *           enum: ['Disabled', 'Enabled']
 *           default: 'Disabled'
 *           description: Biometric attendance status.
 *         devices:
 *           type: string
 *           description: Devices used in the school.
 *         Language:
 *           type: string
 *           description: Language used in the school.
 *         languageRTLTextMode:
 *           type: string
 *           enum: ['Disabled', 'Enabled']
 *           default: 'Disabled'
 *           description: RTL text mode status.
 *         dateFormat:
 *           type: string
 *           description: Date format used in the school.
 *         timezone:
 *           type: string
 *           description: Timezone of the school.
 *         currency:
 *           type: string
 *           description: Currency used in the school.
 *         currencySymbol:
 *           type: string
 *           description: Currency symbol used in the school.
 *         admissionNo:
 *           type: string
 *           enum: ['Disabled', 'Enabled']
 *           default: 'Disabled'
 *           description: Admission number status.
 *         admissionNoPrefix:
 *           type: string
 *           description: Prefix for admission numbers.
 *         admissionNoDigit:
 *           type: number
 *           description: Number of digits in admission numbers.
 *         admissionStartFrom:
 *           type: string
 *           description: Start date for admission numbers.
 *         autoStaffID:
 *           type: string
 *           enum: ['Disabled', 'Enabled']
 *           default: 'Disabled'
 *           description: Auto-generate staff ID status.
 *         staffIdPrefix:
 *           type: string
 *           description: Prefix for staff IDs.
 *         staffNoDigit:
 *           type: number
 *           description: Number of digits in staff IDs.
 *         staffIdStartFrom:
 *           type: string
 *           description: Start date for staff IDs.
 *         duplicateFeesInvoice:
 *           type: string
 *           enum: ['Disabled', 'Enabled']
 *           default: 'Disabled'
 *           description: Duplicate fees invoice status.
 *         onlineAdmission:
 *           type: string
 *           enum: ['Disabled', 'Enabled']
 *           default: 'Disabled'
 *           description: Online admission status.
 *         feesDueDays:
 *           type: number
 *           description: Number of days for fees due.
 *         teacherRestrictedMode:
 *           type: string
 *           enum: ['Disabled', 'Enabled']
 *           default: 'Disabled'
 *           description: Teacher restricted mode status.
 *     GeneralSettingUpdateInput:
 *       type: object
 *       properties:
 *         schoolname:
 *           type: string
 *           description: Name of the school.
 *         address:
 *           type: string
 *           description: Address of the school.
 *         mobileno:
 *           type: number
 *           description: Mobile number of the school.
 *         email:
 *           type: string
 *           description: Email address of the school.
 *         scode:
 *           type: string
 *           description: School code.
 *         sessionId:
 *           type: string
 *           description: ID of the session.
 *         sessionStartMonth:
 *           type: string
 *           description: Start month of the session.
 *         Attendance:
 *           type: string
 *           description: Type of attendance.
 *         biometricAttendance:
 *           type: string
 *           enum: ['Disabled', 'Enabled']
 *           default: 'Disabled'
 *           description: Biometric attendance status.
 *         devices:
 *           type: string
 *           description: Devices used in the school.
 *         Language:
 *           type: string
 *           description: Language used in the school.
 *         languageRTLTextMode:
 *           type: string
 *           enum: ['Disabled', 'Enabled']
 *           default: 'Disabled'
 *           description: RTL text mode status.
 *         dateFormat:
 *           type: string
 *           description: Date format used in the school.
 *         timezone:
 *           type: string
 *           description: Timezone of the school.
 *         currency:
 *           type: string
 *           description: Currency used in the school.
 *         currencySymbol:
 *           type: string
 *           description: Currency symbol used in the school.
 *         admissionNo:
 *           type: string
 *           enum: ['Disabled', 'Enabled']
 *           default: 'Disabled'
 *           description: Admission number status.
 *         admissionNoPrefix:
 *           type: string
 *           description: Prefix for admission numbers.
 *         admissionNoDigit:
 *           type: number
 *           description: Number of digits in admission numbers.
 *         admissionStartFrom:
 *           type: string
 *           description: Start date for admission numbers.
 *         autoStaffID:
 *           type: string
 *           enum: ['Disabled', 'Enabled']
 *           default: 'Disabled'
 *           description: Auto-generate staff ID status.
 *         staffIdPrefix:
 *           type: string
 *           description: Prefix for staff IDs.
 *         staffNoDigit:
 *           type: number
 *           description: Number of digits in staff IDs.
 *         staffIdStartFrom:
 *           type: string
 *           description: Start date for staff IDs.
 *         duplicateFeesInvoice:
 *           type: string
 *           enum: ['Disabled', 'Enabled']
 *           default: 'Disabled'
 *           description: Duplicate fees invoice status.
 *         onlineAdmission:
 *           type: string
 *           enum: ['Disabled', 'Enabled']
 *           default: 'Disabled'
 *           description: Online admission status.
 *         feesDueDays:
 *           type: number
 *           description: Number of days for fees due.
 *         teacherRestrictedMode:
 *           type: string
 *           enum: ['Disabled', 'Enabled']
 *           default: 'Disabled'
 *           description: Teacher restricted mode status.
 */
