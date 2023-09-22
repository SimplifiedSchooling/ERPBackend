const httpStatus = require('http-status');
const StudentAttendanceSchema = require('../models/studentattendance.model');
const ApiError = require('../utils/ApiError');

/**
 * Create a StudentAttendanceSchema
 * @param {Object} StudentAttendanceSchemaBody
 * @returns {Promise<StudentAttendanceSchema>}
 */
const createStudentAttendance = async (StudentAttendanceSchemaBody) => {
  return StudentAttendanceSchema.create(StudentAttendanceSchemaBody);
};

/**
 * Query for StudentAttendance
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllStudentAttendance = async (filter, options) => {
  const StudentAttendance = await StudentAttendanceSchema.paginate(filter, options);
  return StudentAttendance;
};

/**
 * Get StudentAttendanceSchema by id
 * @param {ObjectId} id
 * @returns {Promise<StudentAttendanceSchema>}
 */
const getStudentAttendanceById = async (id) => {
  return StudentAttendanceSchema.findById(id);
};

/**
 * Update StudentAttendanceSchema by id
 * @param {ObjectId} StudentAttendanceId
 * @param {Object} updateBody
 * @returns {Promise<StudentAttendanceSchema>}
 */
const updateStudentAttendanceById = async (StudentAttendanceId, updateBody) => {
  const typeStudentAttendance = await getStudentAttendanceById(StudentAttendanceId);
  if (!typeStudentAttendance) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentAttendance not found');
  }
  Object.assign(typeStudentAttendance, updateBody);
  await typeStudentAttendance.save();
  return typeStudentAttendance;
};

/**
 * Delete StudentAttendanceSchema by id
 * @param {ObjectId} StudentAttendanceId
 * @returns {Promise<StudentAttendanceSchema>}
 */
const deleteStudentAttendanceById = async (StudentAttendanceId) => {
  const StudentAttendance = await getStudentAttendanceById(StudentAttendanceId);
  if (!StudentAttendance) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StudentAttendance not found');
  }
  await StudentAttendance.remove();
  return StudentAttendance;
};

module.exports = {
  createStudentAttendance,
  getAllStudentAttendance,
  getStudentAttendanceById,
  updateStudentAttendanceById,
  deleteStudentAttendanceById,
};
