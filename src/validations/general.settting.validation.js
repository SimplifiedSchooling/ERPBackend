const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createGeneralSetting = {
  body: Joi.object().keys({
    schoolname: Joi.string().required(),
    address: Joi.string(),
    mobileno: Joi.number(),
    email: Joi.string(),
    scode: Joi.string().required(),
    sessionId: Joi.string().custom(objectId).required(),
    sessionStartMonth: Joi.string(),
    Attendance: Joi.string(),
    biometricAttendance: Joi.string().valid('Disabled', 'Enabled').default('Disabled'),
    devices: Joi.string(),
    Language: Joi.string(),
    languageRTLTextMode: Joi.string().valid('Disabled', 'Enabled').default('Disabled'),
    dateFormat: Joi.string(),
    timezone: Joi.string(),
    currency: Joi.string(),
    currencySymbol: Joi.string(),
    admissionNo: Joi.string().valid('Disabled', 'Enabled').default('Disabled'),
    admissionNoPrefix: Joi.string(),
    admissionNoDigit: Joi.number(),
    admissionStartFrom: Joi.string(),
    autoStaffID: Joi.string().valid('Disabled', 'Enabled').default('Disabled'),
    staffIdPrefix: Joi.string(),
    staffNoDigit: Joi.number(),
    staffIdStartFrom: Joi.string(),
    duplicateFeesInvoice: Joi.string().valid('Disabled', 'Enabled').default('Disabled'),
    onlineAdmission: Joi.string().valid('Disabled', 'Enabled').default('Disabled'),
    feesDueDays: Joi.number(),
    teacherRestrictedMode: Joi.string().valid('Disabled', 'Enabled').default('Disabled'),
  }),
};

const getGeneralSetting = {
  params: Joi.object().keys({
    generalSettingId: Joi.string().custom(objectId),
  }),
};

const updateGeneralSettingById = {
  params: Joi.object().keys({
    generalSettingId: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object()
    .keys({
      schoolname: Joi.string().required(),
      address: Joi.string(),
      mobileno: Joi.number(),
      email: Joi.string(),
      scode: Joi.string().required(),
      sessionId: Joi.string().custom(objectId).required(),
      sessionStartMonth: Joi.string(),
      Attendance: Joi.string(),
      biometricAttendance: Joi.string().valid('Disabled', 'Enabled').default('Disabled'),
      devices: Joi.string(),
      Language: Joi.string(),
      languageRTLTextMode: Joi.string().valid('Disabled', 'Enabled').default('Disabled'),
      dateFormat: Joi.string(),
      timezone: Joi.string(),
      currency: Joi.string(),
      currencySymbol: Joi.string(),
      admissionNo: Joi.string().valid('Disabled', 'Enabled').default('Disabled'),
      admissionNoPrefix: Joi.string(),
      admissionNoDigit: Joi.number(),
      admissionStartFrom: Joi.string(),
      autoStaffID: Joi.string().valid('Disabled', 'Enabled').default('Disabled'),
      staffIdPrefix: Joi.string(),
      staffNoDigit: Joi.number(),
      staffIdStartFrom: Joi.string(),
      duplicateFeesInvoice: Joi.string().valid('Disabled', 'Enabled').default('Disabled'),
      onlineAdmission: Joi.string().valid('Disabled', 'Enabled').default('Disabled'),
      feesDueDays: Joi.number(),
      teacherRestrictedMode: Joi.string().valid('Disabled', 'Enabled').default('Disabled'),
    })
    .min(2),
};

const deleteGeneralSettingById = {
  params: Joi.object().keys({
    generalSettingId: Joi.string().custom(objectId),
  }),
};

const getGeneralSettingByScode = {
  params: Joi.object().keys({
    scode: Joi.string(),
  }),
};
const getAllGeneralSettings = {
  query: Joi.object().keys({
    schoolname: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

module.exports = {
  createGeneralSetting,
  getGeneralSetting,
  getAllGeneralSettings,
  updateGeneralSettingById,
  deleteGeneralSettingById,
  getGeneralSettingByScode,
};
