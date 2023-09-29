const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCampus = {
  body: Joi.object().keys({
    mId: Joi.string(),
    // name: Joi.string(),
    schoolName: Joi.string(),
    password: Joi.string(),
    contact_number: Joi.string(),
    address: Joi.string(),
    date: Joi.date(),
  }),
};

const queryCampus = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getCampusById = {
  params: Joi.object().keys({
    campusId: Joi.string().custom(objectId),
  }),
};

const updateCampus = {
  params: Joi.object().keys({
    campusId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      mId: Joi.string(),
      // name: Joi.string(),
      schoolName: Joi.string(),
      password: Joi.string(),
      contact_number: Joi.string(),
      address: Joi.string(),
      date: Joi.date(),
    })
    .min(1),
};

const deleteCampusById = {
  params: Joi.object().keys({
    campusId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCampus,
  queryCampus,
  getCampusById,
  updateCampus,
  deleteCampusById,
};
