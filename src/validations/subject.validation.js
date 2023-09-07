const Joi = require('joi');

const createSubject = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    order: Joi.number().required(),
    code: Joi.number(),
    thumbnail: Joi.string(),
  }),
};

const getAllSubject = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSubject = {
  params: Joi.object().keys({
    subjectId: Joi.string(),
  }),
};

const updateSubject = {
  params: Joi.object().keys({
    subjectId: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      order: Joi.number(),
      code: Joi.number(),
      thumbnail: Joi.string(),
    })
    .min(1),
};

const deleteSubject = {
  params: Joi.object().keys({
    subjectId: Joi.string(),
  }),
};

module.exports = {
  createSubject,
  getSubject,
  updateSubject,
  deleteSubject,
  getAllSubject,
};
