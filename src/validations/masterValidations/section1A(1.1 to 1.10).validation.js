const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection1A10 = {
  body: Joi.object().keys({
    udisecode: Joi.string().required(),
    schoolname: Joi.string().required(),
    districtId: Joi.string().required(),
    udiseblockId: Joi.string().required(),
    typeofschool: Joi.string().required(),
    revenueblock: Joi.string(),
    villagename: Joi.string(),
    grampanchayatname: Joi.string(),
    urbanlocalbodies: Joi.string(),
    wardname: Joi.string(),
    address: Joi.string(),
    pincode: Joi.string()
      .regex(/^\d{6}$/)
      .optional(),
    assemblyconstituency: Joi.string(),
    parliamentaryconstituency: Joi.string(),
    latitude: Joi.string(),
    longitude: Joi.string(),
    stdcode: Joi.string()
      .regex(/^\d{3}$/)
      .optional(),
    landline: Joi.string()
      .regex(/^\d{8,}$/)
      .optional(),
    mobileno: Joi.string()
      .regex(/^\d{10}$/)
      .optional(),
    email: Joi.string().email().optional(),
    website: Joi.string().uri().optional(),
    profilecount: Joi.string(),
    scode: Joi.string(),
  }),
};

const getAllSection1A10 = {
  query: Joi.object().keys({
    udise_code: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSection1A10 = {
  params: Joi.object().keys({
    Section1A10Id: Joi.string().custom(objectId),
  }),
};

const updateSection1A10 = {
  params: Joi.object().keys({
    Section1A10Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      udisecode: Joi.string(),
      schoolname: Joi.string(),
      districtId: Joi.string(),
      udiseblockId: Joi.string(),
      typeofschool: Joi.string(),
      revenueblock: Joi.string(),
      villagename: Joi.string(),
      grampanchayatname: Joi.string(),
      urbanlocalbodies: Joi.string(),
      wardname: Joi.string(),
      address: Joi.string(),
      pincode: Joi.string()
        .regex(/^\d{6}$/)
        .optional(),
      assemblyconstituency: Joi.string(),
      parliamentaryconstituency: Joi.string(),
      latitude: Joi.string(),
      longitude: Joi.string(),
      stdcode: Joi.string()
        .regex(/^\d{3}$/)
        .optional(),
      landline: Joi.string()
        .regex(/^\d{8,}$/)
        .optional(),
      mobileno: Joi.string()
        .regex(/^\d{10}$/)
        .optional(),
      email: Joi.string().email().optional(),
      website: Joi.string().uri().optional(),
      profilecount: Joi.string(),
      scode: Joi.string(),
    })
    .min(1),
};

const deleteSection1A10 = {
  params: Joi.object().keys({
    Section1A10Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection1A10,
  getAllSection1A10,
  getSection1A10,
  updateSection1A10,
  deleteSection1A10,
};
