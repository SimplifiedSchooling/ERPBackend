const Joi = require('joi');
const { objectId } = require('../../validations/custom.validation');

const createDistrict = {
  body: Joi.object().keys({
    districtName: Joi.string().required(),
  }),
};

const getDistrictById = {
  params: Joi.object().keys({
    DistrictId: Joi.string().custom(objectId),
  }),
};

const getAllDistrict = {
  query: Joi.object().keys({
    districtName: Joi.string(),
  }),
};

const updateDistrictTypeyId = {
  params: Joi.object().keys({
    DistrictId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
        districtName: Joi.string().required(),
    })
    .min(1),
};
const deleteDistrictTypeById = {
  params: Joi.object().keys({
    DistrictId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createDistrict,
  getAllDistrict,
  getDistrictById,
  updateDistrictTypeyId,
  deleteDistrictTypeById,
};
