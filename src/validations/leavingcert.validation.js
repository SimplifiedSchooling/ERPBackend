const Joi = require('joi');
// const { objectId } = require('./custom.validation');

const createLeaveCert = {
  body: Joi.object().keys({
    apllyedName: Joi.string().required(),
    scode: Joi.string().required(),
    StudentId: Joi.string().required(),
    date: Joi.string().required(),
    status: Joi.boolean().required(),
  }),
};

const queryLeavingcert = {
  query: Joi.object().keys({
    apllyedName: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getLeavingcertById = {
  params: Joi.object().keys({
    leavingCertId: Joi.string(),
  }),
};

module.exports = {
  createLeaveCert,
  queryLeavingcert,
  getLeavingcertById,
};
