const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSection1E62 = {
  body: Joi.object().keys({
    vocationalNSQF: Joi.string().trim(),
    sector1Id: Joi.string().trim(),
    sector1year: Joi.string().trim(),
    sector2Id: Joi.string().trim(),
    sector2year: Joi.string().trim(),
    sector3Id: Joi.string().trim(),
    sector3year: Joi.string().trim(),
    sector4Id: Joi.string().trim(),
    sector4year: Joi.string().trim(),
    vocCourseunder: Joi.string().trim(),
    schoolsetoftextbook: Joi.string().trim(),
    sepratrroomforVT: Joi.string().trim(),
    noVocecontent: Joi.string().trim(),
    trainingduration: Joi.string().trim(),
    servicetrainingDuration: Joi.string().trim(),
    Noofcalss10studentselfemppreyaer: Joi.string().trim(),
    Noofcalss12studentselfemppreyaer: Joi.string().trim(),
    avaiwithpresentcodition1: Joi.string().trim(),
    avaiwithpresentcodition2: Joi.string().trim(),
    avaiwithpresentcodition3: Joi.string().trim(),
    avaiwithpresentcodition4: Joi.string().trim(),
    sepratrroomavai1: Joi.string().trim(),
    sepratrroomavai2: Joi.string().trim(),
    sepratrroomavai3: Joi.string().trim(),
    sepratrroomavai4: Joi.string().trim(),
  }),
};

const getAllSection1E62 = {
  query: Joi.object().keys({
    schoolgrantrecipt: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.string().trim(),
    page: Joi.string().trim(),
  }),
};

const getSection1E62 = {
  params: Joi.object().keys({
    Section1E62Id: Joi.string().custom(objectId),
  }),
};

const updateSection1E62 = {
  params: Joi.object().keys({
    Section1E62Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      vocationalNSQF: Joi.string().trim(),
      sector1Id: Joi.string().trim(),
      sector1year: Joi.string().trim(),
      sector2Id: Joi.string().trim(),
      sector2year: Joi.string().trim(),
      sector3Id: Joi.string().trim(),
      sector3year: Joi.string().trim(),
      sector4Id: Joi.string().trim(),
      sector4year: Joi.string().trim(),
      vocCourseunder: Joi.string().trim(),
      schoolsetoftextbook: Joi.string().trim(),
      sepratrroomforVT: Joi.string().trim(),
      noVocecontent: Joi.string().trim(),
      trainingduration: Joi.string().trim(),
      servicetrainingDuration: Joi.string().trim(),
      Noofcalss10studentselfemppreyaer: Joi.string().trim(),
      Noofcalss12studentselfemppreyaer: Joi.string().trim(),
      avaiwithpresentcodition1: Joi.string().trim(),
      avaiwithpresentcodition2: Joi.string().trim(),
      avaiwithpresentcodition3: Joi.string().trim(),
      avaiwithpresentcodition4: Joi.string().trim(),
      sepratrroomavai1: Joi.string().trim(),
      sepratrroomavai2: Joi.string().trim(),
      sepratrroomavai3: Joi.string().trim(),
      sepratrroomavai4: Joi.string().trim(),
    })
    .min(1),
};

const deleteSection1E62 = {
  params: Joi.object().keys({
    Section1E62Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSection1E62,
  getAllSection1E62,
  getSection1E62,
  updateSection1E62,
  deleteSection1E62,
};
