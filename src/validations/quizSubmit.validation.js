const Joi = require('joi');

const answerSchema = Joi.object({
  questionId: Joi.string().required(),
  selectedOptions: Joi.array().items(Joi.number().min(0).max(3)).required(),
});

const quizSubmit = Joi.object({
  studentId: Joi.string().required(),
  scode: Joi.string().required(),
  classId: Joi.string().required(),
  answers: Joi.array().items(answerSchema).required(),
  score: Joi.number().optional(), // If the score is optional
});

const getQuizSubmit = {
  query: Joi.object().keys({
    scode: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};
const getQuizResultByuser = {
  params: Joi.object().keys({
    studentId: Joi.string().required(),
  }),
};

module.exports = {
  quizSubmit,
  getQuizResultByuser,
  getQuizSubmit,
};
