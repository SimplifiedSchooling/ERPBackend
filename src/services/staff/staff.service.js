const httpStatus = require('http-status');
const { Staff } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a staff
 * @param {Object} staffBody
 * @returns {Promise<Staff>}
 */
const createStaff = async (staffBody) => {
  return Staff.create(staffBody);
};

/**
 * Query for Staff
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryStaff = async (filter, options) => {
  const Staffs = await Staff.paginate(filter, options);
  return Staffs;
};

/**
 * Get Staff by id
 * @param {ObjectId} _id
 * @returns {Promise<Staff>}
 */
const getStaffById = async (_id) => {
  return Staff.find({ _id });
};

/**
 * Update Staff by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<Staff>}
 */
const updateStaffById = async (StaffId, updateBody) => {
  const staff = await getStaffById(StaffId);
  if (!staff) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Staff not found');
  }
  Object.assign(staff, updateBody);
  await staff.save();
  return staff;
};

/**
 * Delete Staff by id
 * @param {ObjectId} staffId
 * @returns {Promise<Staff>}
 */
const deleteStaffById = async (staffId) => {
  const staff = await getStaffById(staffId);
  if (!staff) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Staff not found');
  }
  await staff.remove();
  return staff;
};

module.exports = {
  createStaff,
  queryStaff,
  getStaffById,
  updateStaffById,
  deleteStaffById,
};
