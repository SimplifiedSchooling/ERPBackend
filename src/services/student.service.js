const httpStatus = require('http-status');
const { Student } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Classes
 * @param {Object} studentData
 * @returns {Promise<Student>}
 */
const createStudent = async (studentData) => {
  return Student.create(studentData);
};

/**
 * Query for Classes
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllStudents = async (filter, options) => {
  const students = await Student.paginate(filter, options);
  return students;
};

/**
 * Get students by id
 * @param {ObjectId} id
 * @returns {Promise<Student>}
 */
const getStudentById = async (id) => {
  return Student.findById(id);
};

/**
 * Update Classes by id
 * @param {ObjectId} studentId
 * @param {Object} updateBody
 * @returns {Promise<Student>}
 */
const updateStudentById = async (studentId, updateBody) => {
  const student = await getStudentById(studentId);
  if (!student) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student not found');
  }
  Object.assign(student, updateBody);
  await student.save();
  return student;
};

/**
 * Delete Classes by id
 * @param {ObjectId} studentId
 * @returns {Promise<Student>}
 */
const deleteStudentById = async (studentId) => {
  const student = await getStudentById(studentId);
  if (!student) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student not found');
  }
  await student.remove();
  return student;
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};
