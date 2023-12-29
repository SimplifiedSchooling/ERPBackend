const Joi = require('joi');
// const { objectId } = require('./custom.validation');

const createLeaveCert = {
  body: Joi.object().keys({
    apllyedName: Joi.string().required(),
    scode: Joi.string().required(),
    StudentId: Joi.string().required(),
    date: Joi.string().required(),
    status: Joi.boolean(),
    class: Joi.string(),
    gender: Joi.string().valid('Male', 'Female', 'Other'),
    certificate: Joi.string(),
    admissionNo: Joi.string(),
  }),
};

const queryLeavingcert = {
  query: Joi.object().keys({
    scode: Joi.string().required(),
    // admissionNo: Joi.string(),
    // apllyedName: Joi.string(),
    // StudentId: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const searchStudents = {
  body: Joi.object().keys({
    scode: Joi.string().required(),
    searchQuery: Joi.string(),
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
  searchStudents,
};
