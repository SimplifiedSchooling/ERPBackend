const httpStatus = require('http-status');
const { Student_session } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a chapter
 * @param {Object} student_session
 * @returns {Promise<Student_session>}
 */
const createStudent_session = async (student_session) => {
  return Student_session.create(student_session);
};

/**
 * Query for Student_session
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllStudent_session = async (filter, options) => {
  const allStudent_session = await Student_session.paginate(filter, options);
  return allStudent_session;
};

/**
 * Get Student_session by id
 * @param {ObjectId} student_session_Id
 * @returns {Promise<Student_session>}
 */
const getStudent_sessionById = async (student_session_Id) => {
  return Student_session.findById(student_session_Id);
};

/**
 * Update Student_session by id
 * @param {ObjectId} student_session_Id
 * @param {Object} updateBody
 * @returns {Promise<Student_session>}
 */
const updateStudent_sessionById = async (student_session_Id, updateBody) => {
  const singleStudent_session = await getStudent_sessionById(student_session_Id);
  if (!singleStudent_session) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student_session not found');
  }
  Object.assign(singleStudent_session, updateBody);
  await singleStudent_session.save();
  return singleStudent_session;
};

/**
 * Delete Student_session by id
 * @param {ObjectId} student_session_Id
 * @returns {Promise<Student_session>}
 */
const deleteStudent_sessionById = async (student_session_Id) => {
  const singleStudent_session = await getStudent_sessionById(student_session_Id);
  if (!singleStudent_session) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student_session not found');
  }
  await singleStudent_session.remove();
  return singleStudent_session;
};

module.exports = {
  createStudent_session,
  getStudent_sessionById,
  getAllStudent_session,
  updateStudent_sessionById,
  deleteStudent_sessionById,
};
