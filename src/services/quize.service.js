const httpStatus = require('http-status');
const { quize } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a quize
 * @param {Object} quizeBody
 * @returns {Promise<Quize>}
 */
const createQuize = async (quizeBody) => {  
  return quize.create(quizeBody);
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
  const  quizes = await quize.paginate(filter, options);
  return quizes;
};

/**
 * Get quize by id
 * @param {ObjectId} id
 * @returns {Promise<Quize>}
 */
const getQuizeById = async (id) => {
  return quize.findById(id);
};

/**
 * Update quize by id
 * @param {ObjectId} quizeId
 * @param {Object} updateBody
 * @returns {Promise<Quize>}
 */
const updateQuizeById = async (quizeId, updateBody) => {
  const quize = await getQuizeById(quizeId);
  if (!quize) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quize not found');
  }
  Object.assign(quize, updateBody);
  await quize.save();
  return quize;
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
  updateQuizeById,
  deleteQuizeById,
};
