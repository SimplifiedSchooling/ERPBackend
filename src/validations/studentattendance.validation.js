const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createStudentAttendance = {
  body: Joi.object().keys({
    // // StudentSessionId: Joi.string(),
    // classId: Joi.string().required(),
    // attedanceTakenBy: Joi.string().required(),
    // sectionId: Joi.string().required(),
    studentId: Joi.string().required(),
    time: Joi.string().required(),
    date: Joi.string().required(),
    // attendancetype: Joi.string().valid('present', 'absent', 'halfday', 'holiday').required(),
    // remark: Joi.string().allow('').required(),
  }),
};

const getAllStudentAttendance = {
  query: Joi.object().keys({
    date: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const attendanceData = {
  query: Joi.object().keys({
    classId: Joi.string().required(),
    sectionId: Joi.string().required(),
    date: Joi.string().required(),
  }),
};
const todaysAttendanceForSchool = {
  query: Joi.object().keys({
    scode: Joi.string().required(),
    date: Joi.string().required(),
  }),
};
const getWeekStatus = {
  query: Joi.object().keys({
    userId: Joi.string().required(),
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
  attendanceData,
  getWeekStatus,
  todaysAttendanceForSchool,
};
