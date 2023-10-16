const httpStatus = require('http-status');
const { Quize, Subject } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a quize
 * @param {Object} quizeBody
 * @returns {Promise<Quize>}
 */
const createQuize = async (quizeBody) => {
  return Quize.create(quizeBody);
};
/**
 * Create Upload quize
 * @param {Object} quizeBody
 * @returns { Promise<Quize>}
 */
const uploadQuiz = async (quizeBody) => {
  const quizData = Quize.create(quizeBody);
  return quizData;
};
/**
 * Query for board
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryQuize = async (filter, options) => {
  const quizes = await Quize.paginate(filter, options);
  return quizes;
};

/**
 * Get quize by id
 * @param {ObjectId} id
 * @returns {Promise<Quize>}
 */
const getQuizeById = async (id) => {
  return Quize.findById(id);
};

/**
 * Query for board
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const QuizeNotSelected = async (filter, options) => {
  const updatedFilter = { ...filter, isVerified: true };
  const quizes = await Quize.paginate(updatedFilter, options);
  return quizes;
};

/**
 * create quize by id
 * @param {ObjectId} quizeId
 * @param {Object} updateBody
 * @returns {Promise<Quize>}
 */
const QuizeByIdSubmit = async (quizeId, updateBody) => {
  const quizes = await getQuizeById(quizeId);
  if (!quizes) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quize not found');
  }
  Object.assign(quizes, updateBody);
  await quizes.save();
  return quizes;
};
const CheckoutAnswer = async (correctOptions, answer) => {
  const quiz = await QuizeByIdSubmit(correctOptions);
  const correctAnswerSet = new Set(correctOptions);
  const allSelectedCorrect = answer.every((userAnswer) => correctAnswerSet.has(userAnswer));
  const atLeastOneCorrect = answer.some((userAnswer) => correctAnswerSet.has(userAnswer));
  if (allSelectedCorrect) {
    quiz.userAnswers = answer;
    await quiz.save();
    throw new ApiError(httpStatus.ACCEPTED, 'Correct answer!');
  }
  if (atLeastOneCorrect) {
    throw new ApiError(httpStatus.NOT_FOUND, 'At least one correct answer selected, but not all.');
  }
  throw new ApiError(httpStatus.NOT_FOUND, 'Incorrect answer.');
};

const getQuizByclassIdAndDayWise = async (classId) => {
  // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const today = new Date().getDay();

  // Find subjects for the given class
  const subjects = await Subject.find({ classId });
  if (subjects.length === 0) {
    throw new ApiError(httpStatus.NOT_FOUND, 'subject not found');
    // return [];
  }

  // Select a subject for the current day (using the day as an index, starting from 0)
  const selectedSubjectIndex = today % subjects.length;
  const selectedSubject = subjects[selectedSubjectIndex];

  const quizQuestions = await Quize.find({ subjectId: selectedSubject._id, classId });
  if (!quizQuestions) {
    throw new ApiError(httpStatus.NOT_FOUND, 'quiz not found');
  }
  const shuffledQuestions = quizQuestions.sort(() => Math.random() - 0.5); // Shuffle the questions
  return shuffledQuestions.slice(0, 15); // Return the first 10 questions
};

/**
 * Update quize by id
 * @param {ObjectId} quizeId
 * @param {Object} updateBody
 * @returns {Promise<Quize>}
 */
const updateQuizeById = async (quizeId, updateBody) => {
  const quizes = await getQuizeById(quizeId);
  if (!quizes) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quize not found');
  }
  Object.assign(quizes, updateBody);
  await quizes.save();
  return quizes;
};

/**
 * Delete quize by id
 * @param {ObjectId} quizeId
 * @returns {Promise<Quize>}
 */
const deleteQuizeById = async (quizeId) => {
  const quize = await getQuizeById(quizeId);
  if (!quize) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quize not found');
  }
  await quize.remove();
  return quize;
};

module.exports = {
  createQuize,
  queryQuize,
  getQuizeById,
  QuizeByIdSubmit,
  updateQuizeById,
  deleteQuizeById,
  QuizeNotSelected,
  uploadQuiz,
  CheckoutAnswer,
  getQuizByclassIdAndDayWise,
};
