const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createAppliedForApprenticeship = {
  body: Joi.object().keys({
    apprenticeshipName: Joi.string().required(),
  }),
};

const getAppliedForApprenticeshipById = {
  params: Joi.object().keys({
    apprenticeshipId: Joi.string().custom(objectId),
  }),
};

const getAllAppliedForApprenticeship = {
  query: Joi.object().keys({
    apprenticeshipName: Joi.string(),
  }),
};

const updateAppliedForApprenticeshipId = {
  params: Joi.object().keys({
    apprenticeshipId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      apprenticeshipName: Joi.string().required(),
    })
    .min(1),
};
const deleteAppliedForApprenticeshipById = {
  params: Joi.object().keys({
    apprenticeshipId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createAppliedForApprenticeship,
  getAllAppliedForApprenticeship,
  getAppliedForApprenticeshipById,
  updateAppliedForApprenticeshipId,
  deleteAppliedForApprenticeshipById,
};
