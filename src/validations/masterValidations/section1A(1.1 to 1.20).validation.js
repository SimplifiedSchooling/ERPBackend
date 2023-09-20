const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection1A20 = {
  body: Joi.object().keys({
    hoschool: Joi.string().trim().required(),
    hosname: Joi.string().trim(),
    hosmobileno: Joi.string()
      .regex(/^\d{10}$/)
      .optional(),
    schoolcategory: Joi.string().required(),
    htlclass: Joi.string().trim(),
    htlclasshigher: Joi.string().trim(),
    schoolcwsn: Joi.string().trim(),
    noclasses: Joi.string().trim(),
    arts: Joi.string().trim(),
    science: Joi.string().trim(),
    commerce: Joi.string().trim(),
    Vocational: Joi.string().trim(),
    Streams: Joi.string().trim(),
    typeschool: Joi.string().trim(),
    manggroup: Joi.string().trim(),
    mangcode: Joi.string().required(),
    code101: Joi.string().trim(),
    admintype: Joi.string().trim(),
    affilationBoard: Joi.string().trim(),
    affilationNo: Joi.string().trim(),
    nameofotherboard: Joi.string().trim(),
    affilationBoardHigherSecondary: Joi.string().trim(),
    affilationNoHigherSecondary: Joi.string().trim(),
    nameofotherboardHigherSecondary: Joi.string().trim(),
    respodentType: Joi.string().trim(),
    respodentName: Joi.string().trim(),
    respodentMobileNo: Joi.string().trim(),
    yearofestablishment: Joi.string().trim(),
    PrimaryClass: Joi.string().trim(),
    upperprimary: Joi.string().trim(),
    Secondary: Joi.string().trim(),
    higherSecondary: Joi.string().trim(),
  }),
};

const getAllSection1A20 = {
  query: Joi.object().keys({
    hoschool: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSection1A20 = {
  params: Joi.object().keys({
    Section1A20Id: Joi.string().custom(objectId),
  }),
};

const updateSection1A20 = {
  params: Joi.object().keys({
    Section1A20Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      hoschool: Joi.string().trim(),
      hosname: Joi.string().trim(),
      hosmobileno: Joi.string()
        .regex(/^\d{10}$/)
        .optional(),
      schoolcategory: Joi.string(),
      htlclass: Joi.string().trim(),
      htlclasshigher: Joi.string().trim(),
      schoolcwsn: Joi.string().trim(),
      noclasses: Joi.string().trim(),
      arts: Joi.string().trim(),
      science: Joi.string().trim(),
      commerce: Joi.string().trim(),
      Vocational: Joi.string().trim(),
      Streams: Joi.string().trim(),
      typeschool: Joi.string().trim(),
      manggroup: Joi.string().trim(),
      mangcode: Joi.string(),
      code101: Joi.string().trim(),
      admintype: Joi.string().trim(),
      affilationBoard: Joi.string().trim(),
      affilationNo: Joi.string().trim(),
      nameofotherboard: Joi.string().trim(),
      affilationBoardHigherSecondary: Joi.string().trim(),
      affilationNoHigherSecondary: Joi.string().trim(),
      nameofotherboardHigherSecondary: Joi.string().trim(),
      respodentType: Joi.string().trim(),
      respodentName: Joi.string().trim(),
      respodentMobileNo: Joi.string().trim(),
      yearofestablishment: Joi.string().trim(),
      PrimaryClass: Joi.string().trim(),
      upperprimary: Joi.string().trim(),
      Secondary: Joi.string().trim(),
      higherSecondary: Joi.string().trim(),
    })
    .min(1),
};

const deleteSection1A20 = {
  params: Joi.object().keys({
    Section1A20Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection1A20,
  getAllSection1A20,
  getSection1A20,
  updateSection1A20,
  deleteSection1A20,
};
