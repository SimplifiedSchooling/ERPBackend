const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createNewPlan = {
  body: Joi.object().keys({
    boardId: Joi.string().required(),
    mediumId: Joi.string().required(),
    classId: Joi.string().required(),
    subjectId: Joi.string().required(),
    bookId: Joi.string().required(),
    chapterId: Joi.string().required(),
    lessonId: Joi.string().required(),
    name: Joi.string().required(),
    date: Joi.string().required(),
    time: Joi.string().required(),
    type: Joi.string().required(),
    orderId: Joi.string().required(),
    studioName: Joi.string().required(),
    liveStreamingPath: Joi.string(),
  }),
};

const getSinglePlan = {
  params: Joi.object().keys({
    planId: Joi.string().custom(objectId),
  }),
};

const getAllPlan = {
  query: Joi.object().keys({
    title: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getTodayPlan = {
  query: Joi.object().keys({
    title: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const updatePlanById = {
  params: Joi.object().keys({
    planId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      status: Joi.string(),
      name: Joi.string(),
      date: Joi.string(),
      time: Joi.string(),
      type: Joi.string(),
      boardId: Joi.string(),
      mediumId: Joi.string(),
      classId: Joi.string(),
      subjectId: Joi.string(),
      bookId: Joi.string(),
      chapterId: Joi.string(),
      lessonId: Joi.string(),
      orderId: Joi.string(),
      studioName: Joi.string(),
      liveStreamingPath: Joi.string(),
    })
    .min(1),
};
const deletePlanById = {
  params: Joi.object().keys({
    planId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createNewPlan,
  getSinglePlan,
  getAllPlan,
  getTodayPlan,
  updatePlanById,
  deletePlanById,
};