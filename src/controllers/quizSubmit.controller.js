const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { quizSubmitService } = require('../services');

const submitQuiz = catchAsync(async (req, res) => {
  const answer = quizSubmitService.submitQuiz(req.body);
  res.status(httpStatus.CREATED).send(answer);
});

const resultQuiz = catchAsync(async (req, res) => {
  const quiz = await quizSubmitService.resultQuiz(req.params.userId);
  if (!quiz) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quiz not found');
  }
  res.status(httpStatus.OK).json(quiz);
});

module.exports = {
  submitQuiz,
  resultQuiz,
};
