const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection1B54 = {
  body: Joi.object().keys({
    sdmpdev: Joi.string().trim(),
    structuralaudit: Joi.string().trim(),
    nonstructuralaudit: Joi.string().trim(),
    CCTVavi: Joi.string().trim(),
    fireextinguisheravai: Joi.string().trim(),
    havenodalteacher: Joi.string().trim(),
    schoolsaftytraining: Joi.string().trim(),
    disastermangtaught: Joi.string().trim(),
    defensetrainingforgirls: Joi.string().trim(),
    noofgirlsproselfdefensetraining: Joi.string().trim(),
    displaysaftyguidondisboard: Joi.string().trim(),
    teachergrantcounselor: Joi.string().trim(),
    guidandcounseling: Joi.string().trim(),
    sanitizationofparent: Joi.string().trim(),
    awargenforstudent: Joi.string().trim(),
    provisionforfeedbackstudent: Joi.string().trim(),
    complaintbox: Joi.string().trim(),
    providecopiesofsaftyguid: Joi.string().trim(),
    frequecyofsaftyaudit: Joi.string().trim(),
  }),
};

const getAllSection1B54 = {
  query: Joi.object().keys({
    sdmpdev: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSection1B54 = {
  params: Joi.object().keys({
    Section1B54Id: Joi.string().custom(objectId),
  }),
};

const updateSection1B54 = {
  params: Joi.object().keys({
    Section1B54Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      sdmpdev: Joi.string().trim(),
      structuralaudit: Joi.string().trim(),
      nonstructuralaudit: Joi.string().trim(),
      CCTVavi: Joi.string().trim(),
      fireextinguisheravai: Joi.string().trim(),
      havenodalteacher: Joi.string().trim(),
      schoolsaftytraining: Joi.string().trim(),
      disastermangtaught: Joi.string().trim(),
      defensetrainingforgirls: Joi.string().trim(),
      noofgirlsproselfdefensetraining: Joi.string().trim(),
      displaysaftyguidondisboard: Joi.string().trim(),
      teachergrantcounselor: Joi.string().trim(),
      guidandcounseling: Joi.string().trim(),
      sanitizationofparent: Joi.string().trim(),
      awargenforstudent: Joi.string().trim(),
      provisionforfeedbackstudent: Joi.string().trim(),
      complaintbox: Joi.string().trim(),
      providecopiesofsaftyguid: Joi.string().trim(),
      frequecyofsaftyaudit: Joi.string().trim(),
    })
    .min(1),
};

const deleteSection1B54 = {
  params: Joi.object().keys({
    Section1B54Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection1B54,
  getAllSection1B54,
  getSection1B54,
  updateSection1B54,
  deleteSection1B54,
};
