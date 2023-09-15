const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection1D60 = {
  body: Joi.object().keys({
    schoolgrantrecipt: Joi.string().trim(),
    schoolgrantexpen: Joi.string().trim(),
    librarygrantrecipt: Joi.string().trim(),
    librarygrantexpen: Joi.string().trim(),
    repairgrantreceipt: Joi.string().trim(),
    repairgrantexpen: Joi.string().trim(),
    phyedugrantreceipt: Joi.string().trim(),
    phyedugrantexpen: Joi.string().trim(),
    mediagrantreceipt: Joi.string().trim(),
    mediagrantexpen: Joi.string().trim(),
    traininggrantreceipt: Joi.string().trim(),
    traininggrantexpen: Joi.string().trim(),
    preschoolgrantreceipt: Joi.string().trim(),
    preschoolgrantexpen: Joi.string().trim(),
    ngo: Joi.string().trim(),
    ngoName: Joi.string().trim(),
    ngoAmount: Joi.number(),
    psu: Joi.string().trim(),
    psuName: Joi.string().trim(),
    psuAmount: Joi.number(),
    Community: Joi.string().trim(),
    communityName: Joi.string().trim(),
    communityAmount: Joi.number(),
    Other: Joi.string().trim(),
    otherName: Joi.string().trim(),
    otherAmount: Joi.number(),
    ictItem: Joi.string().trim(),
    sportEqu: Joi.string().trim(),
    libraryBooks: Joi.string().trim(),
  }),
};

const getAllSection1D60 = {
  query: Joi.object().keys({
    schoolgrantrecipt: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSection1D60 = {
  params: Joi.object().keys({
    Section1D60Id: Joi.string().custom(objectId),
  }),
};

const updateSection1D60 = {
  params: Joi.object().keys({
    Section1D60Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      schoolgrantrecipt: Joi.string().trim(),
      schoolgrantexpen: Joi.string().trim(),
      librarygrantrecipt: Joi.string().trim(),
      librarygrantexpen: Joi.string().trim(),
      repairgrantreceipt: Joi.string().trim(),
      repairgrantexpen: Joi.string().trim(),
      phyedugrantreceipt: Joi.string().trim(),
      phyedugrantexpen: Joi.string().trim(),
      mediagrantreceipt: Joi.string().trim(),
      mediagrantexpen: Joi.string().trim(),
      traininggrantreceipt: Joi.string().trim(),
      traininggrantexpen: Joi.string().trim(),
      preschoolgrantreceipt: Joi.string().trim(),
      preschoolgrantexpen: Joi.string().trim(),
      ngo: Joi.string().trim(),
      ngoName: Joi.string().trim(),
      ngoAmount: Joi.number(),
      psu: Joi.string().trim(),
      psuName: Joi.string().trim(),
      psuAmount: Joi.number(),
      Community: Joi.string().trim(),
      communityName: Joi.string().trim(),
      communityAmount: Joi.number(),
      Other: Joi.string().trim(),
      otherName: Joi.string().trim(),
      otherAmount: Joi.number(),
      ictItem: Joi.string().trim(),
      sportEqu: Joi.string().trim(),
      libraryBooks: Joi.string().trim(),
    })
    .min(1),
};

const deleteSection1D60 = {
  params: Joi.object().keys({
    Section1D60Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection1D60,
  getAllSection1D60,
  getSection1D60,
  updateSection1D60,
  deleteSection1D60,
};
