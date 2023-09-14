const httpStatus = require('http-status');
const { Attendance } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a chapter
 * @param {Object} attendance
 * @returns {Promise<Attendance>}
 */
const createAttendance = async (attendance) => {
  return Attendance.create(attendance);
};

/**
 * Query for Attendance
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllAttendance = async (filter, options) => {
  const allAttendance = await Attendance.paginate(filter, options);
  return allAttendance;
};

/**
 * Get Attendance by id
 * @param {ObjectId} attendanceId
 * @returns {Promise<Attendance>}
 */
const getAttendanceById = async (attendanceId) => {
  return Attendance.findById(attendanceId);
};

/**
 * Update Attendance by id
 * @param {ObjectId} attendanceId
 * @param {Object} updateBody
 * @returns {Promise<Attendance>}
 */
const updateAttendanceById = async (attendanceId, updateBody) => {
  const singleAttendance = await getAttendanceById(attendanceId);
  if (!singleAttendance) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Attendance not found');
  }
  Object.assign(singleAttendance, updateBody);
  await singleAttendance.save();
  return singleAttendance;
};

/**
 * Delete Attendance by id
 * @param {ObjectId} attendanceId
 * @returns {Promise<Attendance>}
 */
const deleteAttendanceById = async (attendanceId) => {
  const attendance = await getAttendanceById(attendanceId);
  if (!attendance) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Attendance not found');
  }
  await attendance.remove();
  return attendance;
};

module.exports = {
  createAttendance,
  getAttendanceById,
  getAllAttendance,
  updateAttendanceById,
  deleteAttendanceById,
};
