const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createAttendance = {
  body: Joi.object().keys({
    student_session_id: Joi.string().required(),
    date: Joi.string().required(),
    attedance_type: Joi.string().required(),
    remark: Joi.string().required(),
  }),
};

const getAttendance = {
  params: Joi.object().keys({
    attendanceId: Joi.string().custom(objectId).required(),
  }),
};

const getAllAttendance = {
  query: Joi.object().keys({
    attedance_type: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const updateAttendanceById = {
  params: Joi.object().keys({
    attendanceId: Joi.required().custom(objectId).required(),
  }),
  body: Joi.object()
    .keys({
        student_session_id: Joi.string().required(),
        date: Joi.string().required(),
        attedance_type: Joi.string().required(),
        remark: Joi.string().required(),
    })
    .min(1),
};
const deleteAttendanceById = {
  params: Joi.object().keys({
    attendanceId: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  createAttendance,
  getAttendance,
  getAllAttendance,
  updateAttendanceById,
  deleteAttendanceById,
};
