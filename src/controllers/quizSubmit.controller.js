const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { quizSubmitService } = require('../services');

const submitQuiz = catchAsync(async (req, res) => {
  const submitedQuiz = await quizSubmitService.submitQuiz(req.body);
  res.status(httpStatus.CREATED).send(submitedQuiz);
});

const resultQuiz = catchAsync(async (req, res) => {
  const { userId, subjectId } = req.params;
  const quiz = await quizSubmitService.resultQuiz(userId, subjectId);
  if (!quiz) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quiz not found');
  }
  res.status(httpStatus.OK).json(quiz);
});

module.exports = {
  submitQuiz,
  resultQuiz,
};
