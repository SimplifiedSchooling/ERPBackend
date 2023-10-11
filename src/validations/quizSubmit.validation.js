const Joi = require('joi');

const quizSubmit = {
  body: Joi.object().keys({
    userId: Joi.number(),
    questionId: Joi.string(),
    subjectId: Joi.string(),
    selectedOptions: Joi.array(),
  }),
};

const getQuizResultByuser = {
  params: Joi.object().keys({
    userId: Joi.string().required(),
    subjectId: Joi.string().required(),
  }),
};

module.exports = {
  quizSubmit,
  getQuizResultByuser,
};
