const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createStudentSession = {
  body: Joi.object().keys({
    sessionId: Joi.string().required(),
    studentId: Joi.string().required(),
    classId: Joi.string().required(),
    sectionId: Joi.string().required(),
  }),
};

const getStudentSession = {
  params: Joi.object().keys({
    studentSessionId: Joi.string().custom(objectId).required(),
  }),
};

const getAllStudentSession = {
  query: Joi.object().keys({
    attedance_type: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const updateStudentSessionById = {
  params: Joi.object().keys({
    studentSessionId: Joi.required().custom(objectId).required(),
  }),
  body: Joi.object()
    .keys({
      sessionId: Joi.string(),
      studentId: Joi.string(),
      classId: Joi.string(),
      sectionId: Joi.string(),
    })
    .min(1),
};
const deleteStudentSessionById = {
  params: Joi.object().keys({
    studentSessionId: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  createStudentSession,
  getAllStudentSession,
  getStudentSession,
  updateStudentSessionById,
  deleteStudentSessionById,
};
