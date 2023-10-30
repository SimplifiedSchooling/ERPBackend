const httpStatus = require('http-status');
const { Parent } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a parent
 *  * @param {Object} reqBody
 * @returns {Promise<Parent>}
 */
const createParent = async (reqBody) => {
  return Parent.create(reqBody);
};

/**
 * get all  parent
 * @returns {Promise<Parent>}
 */
const getAllParent = async () => {
  const parent = await Parent.find();
  return parent;
};

/**
 * Get parent by id
 * @param {ObjectId} id
 * @returns {Promise<Parent>}
 */
const getParentById = async (id) => {
  return Parent.findById(id);
};

/**
 * Update parent by id
 * @param {ObjectId} parentId
 * @param {Object} updateBody
 * @returns {Promise<Parent>}
 */
const updateParentById = async (parentId, updateBody) => {
  const parent = await getParentById(parentId);
  if (!parent) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Parent not found');
  }
  Object.assign(parent, updateBody);
  await parent.save();
  return parent;
};

/**
 * Delete role by id
 * @param {ObjectId} parentId
 * @returns {Promise<Role>}
 */
const deleteParentById = async (parentId) => {
  const parent = await getParentById(parentId);
  if (!parent) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Parent not found');
  }
  await parent.remove();
  return parent;
};

module.exports = {
  createParent,
  getAllParent,
  getParentById,
  updateParentById,
  deleteParentById,
};
