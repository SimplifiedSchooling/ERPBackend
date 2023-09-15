const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection1C57 = {
  body: Joi.object().keys({
    middayMeal: Joi.string().trim(),
    NoOfDayMidDayMeal: Joi.number().integer(),
    NoofteacherAadharindatabase: Joi.number().integer(),
    schoolevaluation: Joi.string().trim(),
    schoolcertifiedFIT: Joi.string().trim(),
    schoolprovHolisticReportCard: Joi.string().trim(),
    exemplerschool: Joi.string().trim(),
    dispphotoofteacher: Joi.string().trim(),
    schooladoptedVidyaPraveshModule: Joi.string().trim(),
    studentAttendanceEle: Joi.string().trim(),
    teacherattendanceEle: Joi.string().trim(),
    consYouthClub: Joi.string().trim(),
    constEcoClub: Joi.string().trim(),
    teacherIdcard: Joi.string().trim(),
    SSSAcertiobtain: Joi.string().trim(),
  }),
};

const getAllSection1C57 = {
  query: Joi.object().keys({
    middayMeal: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSection1C57 = {
  params: Joi.object().keys({
    Section1C57Id: Joi.string().custom(objectId),
  }),
};

const updateSection1C57 = {
  params: Joi.object().keys({
    Section1C57Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      middayMeal: Joi.string().trim(),
      NoOfDayMidDayMeal: Joi.number().integer(),
      NoofteacherAadharindatabase: Joi.number().integer(),
      schoolevaluation: Joi.string().trim(),
      schoolcertifiedFIT: Joi.string().trim(),
      schoolprovHolisticReportCard: Joi.string().trim(),
      exemplerschool: Joi.string().trim(),
      dispphotoofteacher: Joi.string().trim(),
      schooladoptedVidyaPraveshModule: Joi.string().trim(),
      studentAttendanceEle: Joi.string().trim(),
      teacherattendanceEle: Joi.string().trim(),
      consYouthClub: Joi.string().trim(),
      constEcoClub: Joi.string().trim(),
      teacherIdcard: Joi.string().trim(),
      SSSAcertiobtain: Joi.string().trim(),
    })
    .min(1),
};

const deleteSection1C57 = {
  params: Joi.object().keys({
    Section1C57Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection1C57,
  getAllSection1C57,
  getSection1C57,
  updateSection1C57,
  deleteSection1C57,
};
