const httpStatus = require('http-status');
const { DepartmentUser } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<DepartmentUser>}
 */
const createDepUser = async (userBody) => {
  if (await userBody.isUserNameTaken(userBody.userName)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User Name already taken');
  }
  return DepartmentUser.create(userBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryDepUsers = async (filter, options) => {
  const users = await DepartmentUser.paginate(filter, options);
  return users;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<DepartmentUser>}
 */
const getDepUserById = async (id) => {
  return DepartmentUser.findById(id);
};

/**
 * Get user by userName
 * @param {string} userName
 * @returns {Promise<DepartmentUser>}
 */
const getDepUserByUserName = async (userName) => {
  return DepartmentUser.findOne({ userName });
};
/**
 * Get user by userName
 * @param {string} userName
 * @param {string} mobNumber
 * @returns {Promise<DepartmentUser>}
 */
const getDepUserByUserNameAndMob = async (userName, mobNumber) => {
  return DepartmentUser.findOne({ userName, mobNumber });
};
/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<DepartmentUser>}
 */
const updateDepUserById = async (userId, updateBody) => {
  const user = await getDepUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.userName && (await DepartmentUser.isUserNameTaken(updateBody.userName, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User Name already taken');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

/**
 * Update auto generated  password only for admin
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<DepartmentUser>}
 */
const updateDepUserPasswordById = async (userId, newPassword) => {
  const user = await getDepUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  Object.assign(user, { password: newPassword });
  await user.save();
  return user;
};
/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteDepUserById = async (userId) => {
  const user = await getDepUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return user;
};

module.exports = {
  createDepUser,
  queryDepUsers,
  getDepUserById,
  getDepUserByUserName,
  updateDepUserById,
  deleteDepUserById,
  updateDepUserPasswordById,
  getDepUserByUserNameAndMob,
};
