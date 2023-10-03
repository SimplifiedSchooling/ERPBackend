const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createClassTeacher = {
  body: Joi.object().keys({
    classId: Joi.string().required(),
    sectionId: Joi.string().required(),
    teacherId: Joi.string().required(),
  }),
};

const getClassTeacher = {
  params: Joi.object().keys({
    classteacherId: Joi.string().custom(objectId).required(),
  }),
};
const getClassTeachersByBookId = {
  params: Joi.object().keys({
    bookId: Joi.string().custom(objectId).required(),
  }),
};

const getClassTeachersByFilter = {
  params: Joi.object().keys({
    classId: Joi.string(),
    sectionId: Joi.string(),
    teacherId: Joi.string(),
  }),
};

const getAllClassTeacher = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const updateClassTeacherById = {
  params: Joi.object().keys({
    classteacherId: Joi.required().custom(objectId).required(),
  }),
  body: Joi.object()
    .keys({
      classId: Joi.string(),
      sectionId: Joi.string(),
      teacherId: Joi.string(),
    })
    .min(4),
};
const deleteClassTeacherById = {
  params: Joi.object().keys({
    classteacherId: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  createClassTeacher,
  getClassTeacher,
  getAllClassTeacher,
  updateClassTeacherById,
  deleteClassTeacherById,
  getClassTeachersByBookId,
  getClassTeachersByFilter,
};
