const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createStudentAttendance = {
  body: Joi.object().keys({
    StudentSessionId: Joi.string(),
    date: Joi.date(),
    attendancetype: Joi.string().valid('present', 'absent', 'halfday', 'holiday'),
    remark: Joi.string().allow(''),
  }),
};

const getAllStudentAttendance = {
  query: Joi.object().keys({
    applydate: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getStudentAttendance = {
  params: Joi.object().keys({
    StudentAttendanceId: Joi.string().custom(objectId),
  }),
};

const updateStudentAttendance = {
  params: Joi.object().keys({
    StudentAttendanceId: Joi.custom(objectId),
  }),
  body: Joi.object()
    .keys({
      StudentSessionId: Joi.string(),
      date: Joi.date(),
      attendancetype: Joi.string().valid('present', 'absent', 'halfday', 'holiday'),
      remark: Joi.string().allow(''),
    })
    .min(1),
};

const deleteStudentAttendance = {
  params: Joi.object().keys({
    StudentAttendanceId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createStudentAttendance,
  getAllStudentAttendance,
  getStudentAttendance,
  updateStudentAttendance,
  deleteStudentAttendance,
};
