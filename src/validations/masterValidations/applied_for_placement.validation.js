const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createAppliedForPlacement = {
  body: Joi.object().keys({
    placementName: Joi.string().required(),
  }),
};

const getAppliedForPlacementById = {
  params: Joi.object().keys({
    placementId: Joi.string().custom(objectId),
  }),
};

const getAllAppliedForPlacement = {
  query: Joi.object().keys({
    placementName: Joi.string(),
  }),
};

const updateAppliedForPlacementId = {
  params: Joi.object().keys({
    placementId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      placementName: Joi.string().required(),
    })
    .min(1),
};
const deleteAppliedForPlacementById = {
  params: Joi.object().keys({
    placementId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createAppliedForPlacement,
  getAllAppliedForPlacement,
  getAppliedForPlacementById,
  updateAppliedForPlacementId,
  deleteAppliedForPlacementById,
};
