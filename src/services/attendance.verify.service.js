const httpStatus = require('http-status');
const { AttendanceVerify } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a attendanceVerify
 * @param {Object} attendanceBody
 * @returns {Promise<AttendanceVerify>}
 */
const createAttendanceVerify = async (attendanceVerifyBody) => {
  return AttendanceVerify.create(attendanceVerifyBody);
};

/**
 * Query for attendanceVerify
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryAttendanceVerify = async (filter, options) => {
  const attendanceVerify = await AttendanceVerify.paginate(filter, options);
  return attendanceVerify;
};

/**
 * Get board by id
 * @param {ObjectId} id
 * @returns {Promise<AttendanceVerify>}
 */
const getAttendanceVerifyById = async (id) => {
  return AttendanceVerify.findById(id);
};

/**
 * Update AttendanceVerify by id
 * @param {ObjectId} Id
 * @param {Object} updateBody
 * @returns {Promise<AttendanceVerify>}
 */
const updateAttendanceerifyById = async (Id, updateBody) => {
  const attendanceVerify = await getAttendanceVerifyById(Id);
  if (!attendanceVerify) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Attendance Verify not found');
  }
  Object.assign(attendanceVerify, updateBody);
  await attendanceVerify.save();
  return attendanceVerify;
};

/**
 * Delete board by id
 * @param {ObjectId} Id
 * @returns {Promise<AttendanceVerify>}
 */
const deleteAttendanceVerifyById = async (Id) => {
  const attendanceVerify = await getAttendanceVerifyById(Id);
  if (!attendanceVerify) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Attendance Verify not found');
  }
  await attendanceVerify.remove();
  return attendanceVerify;
};

module.exports = {
  createAttendanceVerify,
  queryAttendanceVerify,
  getAttendanceVerifyById,
  updateAttendanceerifyById,
  deleteAttendanceVerifyById,
};
