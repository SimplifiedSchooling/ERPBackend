const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createStudentSession = {
  body: Joi.object().keys({
    session_Id: Joi.string().required(),
    student_Id: Joi.string().required(),
    class_Id: Joi.string().required(),
    section_Id: Joi.string().required(),
  }),
};

const getStudentSession = {
  params: Joi.object().keys({
    student_session_Id: Joi.string().custom(objectId).required(),
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
    student_session_Id: Joi.required().custom(objectId).required(),
  }),
  body: Joi.object()
    .keys({
        session_Id: Joi.string().required(),
        student_Id: Joi.string().required(),
        class_Id: Joi.string().required(),
        section_Id: Joi.string().required(),
    })
    .min(1),
};
const deleteStudentSessionById = {
  params: Joi.object().keys({
    student_session_Id: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  createStudentSession,
  getAllStudentSession,
  getStudentSession,
  updateStudentSessionById,
  deleteStudentSessionById,
};
