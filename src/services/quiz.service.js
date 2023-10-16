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
 * Get quize by quizName
 * @param {ObjectId} quizName
 * @returns {Promise<Quize>}
 */
const getQuizeByQestion = async (quizName) => {
  return Quize.findOne({ quizName });
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

/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const shuffleArray = (array) => {
  // Implement a Fisher-Yates shuffle algorithm for a more reliable shuffling.
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const getQuizByclassIdAndDayWise = async (classId, maxQuestionsPerSubject = 15) => {
  // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const today = new Date().getDay();
  console.log(today);

  // Find subjects for the given class
  const subjects = await Subject.find({ classId });

  if (subjects.length === 0) {
    throw new Error('No subjects found for the given class');
  }

  // Calculate the maximum number of questions per subject
  const maxQuestionsPerSub = Math.floor(maxQuestionsPerSubject / subjects.length);

  // Initialize an array to hold questions
  const quizQuestions = [];
  for (const subject of subjects) {
    const questionsForSubject = await Quize.find({ subjectId: subject._id, classId });

    if (questionsForSubject && questionsForSubject.length > 0) {
      // Shuffle the questions for this subject
      shuffleArray(questionsForSubject);

      // Select questions up to the maximum allowed per subject
      quizQuestions.push(...questionsForSubject.slice(0, maxQuestionsPerSub));
    }
  }

  // Shuffle all selected questions
  shuffleArray(quizQuestions);

  // Return the first 15 questions or fewer if there aren't enough available
  return quizQuestions.slice(0, 15);
};

/* eslint-enable no-plusplus */
/* eslint-enable no-param-reassign */
/* eslint-enable no-console */
/* eslint-enable no-undef */
/* eslint-enable no-restricted-syntax */
/* eslint-enable no-await-in-loop */
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
  getQuizeByQestion,
};
