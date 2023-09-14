const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createStudent_session = {
  body: Joi.object().keys({
    session_Id: Joi.string().required(),
    student_Id: Joi.string().required(),
    class_Id: Joi.string().required(),
    section_Id: Joi.string().required(),
  }),
};

const getStudent_session = {
  params: Joi.object().keys({
    student_session_Id: Joi.string().custom(objectId).required(),
  }),
};

const getAllStudent_session = {
  query: Joi.object().keys({
    attedance_type: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const updateStudent_sessionById = {
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
const deleteStudent_sessionById = {
  params: Joi.object().keys({
    student_session_Id: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  createStudent_session,
  getStudent_session,
  getAllStudent_session,
  updateStudent_sessionById,
  deleteStudent_sessionById,
};
