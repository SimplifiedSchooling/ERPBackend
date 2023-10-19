const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createAssect = {
  body: Joi.object().keys({
    assectName: Joi.string(),
    invoiceNo: Joi.string(),
    invoiceDate: Joi.date(),
    quantity: Joi.number(),
    description: Joi.string(),
    imagePath: Joi.string(),
    totalasset: Joi.number(),
    totaldestroyed: Joi.number(),
    expiredate: Joi.date(),
    reason: Joi.string(),
  }),
};

const queryAssect = {
  query: Joi.object().keys({
    assectName: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getAssect = {
  params: Joi.object().keys({
    assectId: Joi.string().custom(objectId),
  }),
};

const updateAssect = {
  params: Joi.object().keys({
    assectId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    assectName: Joi.string(),
    // invoiceNo: Joi.number(),
    // invoiceDate: Joi.date(),
    description: Joi.string(),
    totalasset: Joi.number().optional(),
    totaldestroyed: Joi.number().optional(),
    expiredate: Joi.date(),
    reason: Joi.string(),
    imagePath: Joi.string(),
  }),
};

const deleteAssect = {
  params: Joi.object().keys({
    assectId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createAssect,
  queryAssect,
  getAssect,
  updateAssect,
  deleteAssect,
};
