const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createDemolished = {
  body: Joi.object().keys({
    reference_no: Joi.number().required(),
    to_title: Joi.string().required(),
    address: Joi.string().required(),
    from_title: Joi.string().required(),
    date: Joi.date().required(),
    imagePath: Joi.string(),
    note: Joi.string(),
    type: Joi.string(),
  }),
};

const getAllDemolished = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getDemolishedById = {
  params: Joi.object().keys({
    demolishedId: Joi.string().custom(objectId),
  }),
};

const updateDemolishedById = {
  params: Joi.object().keys({
    demolishedId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      reference_no: Joi.number(),
      to_title: Joi.string(),
      address: Joi.string(),
      from_title: Joi.string(),
      date: Joi.date(),
      imagePath: Joi.string(),
      type: Joi.string(),
      note: Joi.string(),
    })
    .min(1),
};

const deleteDemolishedById = {
  params: Joi.object().keys({
    demolishedId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createDemolished,
  getAllDemolished,
  getDemolishedById,
  updateDemolishedById,
  deleteDemolishedById,
};
