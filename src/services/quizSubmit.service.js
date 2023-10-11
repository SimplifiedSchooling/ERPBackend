const httpStatus = require('http-status');
const { Quize, QuizSubmit } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a role
 * @param {Object} reqBody
 * @returns {Promise<Role>}
 */
const submitQuiz = async (reqBody) => {
  const submitedQuiz = await QuizSubmit.create(reqBody);
  return submitedQuiz;
};

/**
 * Get the total marks of a user's quiz submissions.
 * @param {string} userId - User ID.
 * @returns {Promise<number>} - Total marks.
 */
const resultQuiz = async (userId, subjectId) => {
  // eslint-disable-next-line
  const submissions = await QuizSubmit.find({ userId ,subjectId});
  if (!submissions || submissions.length === 0) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No quiz submissions found for the user');
  }
  let totalMarks = 0;
  let correctAnswersCount = 0;
  let incorrectAnswersCount = 0;
  /* eslint-disable no-restricted-syntax */
  /* eslint-disable no-await-in-loop */
  for (const submission of submissions) {
    const question = await Quize.findById(submission.questionId);
    if (!question) {
      throw new ApiError(httpStatus.NOT_FOUND, `Question not found for submission with ID: ${submission._id}`);
    }
    const correctOptions = question.correctOptions.map(String);
    const userSelectedOptions = submission.selectedOptions.map(String);
    const isCorrect = correctOptions.every((option) => userSelectedOptions.includes(option));
    if (isCorrect) {
      totalMarks += question.marks || 0;
      // eslint-disable-next-line no-plusplus
      correctAnswersCount++;
    } else {
      // eslint-disable-next-line no-plusplus
      incorrectAnswersCount++;
    }
  }
  /* eslint-enable no-await-in-loop */
  /* eslint-enable no-restricted-syntax */
  return {
    totalMarks,
    correctAnswersCount,
    incorrectAnswersCount,
  };
};
module.exports = {
  submitQuiz,
  resultQuiz,
};
