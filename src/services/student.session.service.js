const httpStatus = require('http-status');
const { StudentSession } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a chapter
 * @param {Object} studentSession
 * @returns {Promise<StudentSession>}
 */
const createStudentSession = async (studentSession) => {
  return StudentSession.create(studentSession);
};

/**
 * Query for StudentSession
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllStudentSession = async (filter, options) => {
  const allStudentSession = await StudentSession.paginate(filter, options);
  return allStudentSession;
};

/**
 * Get StudentSession by id
 * @param {ObjectId} studentSessionId
 * @returns {Promise<StudentSession>}
 */
const getStudentSessionById = async (studentSessionId) => {
  return StudentSession.findById(studentSessionId);
};

/**
 * Update StudentSession by id
 * @param {ObjectId} studentSessionId
 * @param {Object} updateBody
 * @returns {Promise<StudentSession>}
 */
const updateStudentSessionById = async (studentSessionId, updateBody) => {
  const singleStudentSession = await getStudentSessionById(studentSessionId);
  if (!singleStudentSession) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentSession not found');
  }
  Object.assign(singleStudentSession, updateBody);
  await singleStudentSession.save();
  return singleStudentSession;
};

/**
 * Delete StudentSession by id
 * @param {ObjectId} studentSessionId
 * @returns {Promise<StudentSession>}
 */
const deleteStudentSessionById = async (studentSessionId) => {
  const singleStudentSession = await getStudentSessionById(studentSessionId);
  if (!singleStudentSession) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentSession not found');
  }
  await singleStudentSession.remove();
  return singleStudentSession;
};

module.exports = {
  createStudentSession,
  getStudentSessionById,
  getAllStudentSession,
  updateStudentSessionById,
  deleteStudentSessionById,
};
