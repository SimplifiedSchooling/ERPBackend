const httpStatus = require('http-status');
const { Assect } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Assect
 * @param {Object} assectData
 * @returns {Promise<Assect>}
 */
const createAssect = async (assectData) => {
  const assect = new Assect(assectData);
  assect.totalasset -= assect.quantity; // Subtract quantity from totalasset
  return assect.save();
};

/**
 * Query for Assect
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryAssect = async (filter, options) => {
  const result = await Assect.paginate(filter, options);
  return result;
};

/**
 * Get Assect by id
 * @param {ObjectId} id
 * @returns {Promise<Assect>}
 */
const getAssectById = async (id) => {
  return Assect.findById(id);
};

/**
 * Update Assect by id
 * @param {ObjectId} assectId
 * @param {Object} updateBody
 * @returns {Promise<Assect>}
 */
const updateAssectById = async (assectId, updateBody) => {
  const assect = await getAssectById(assectId);
  if (!assect) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Assect not found');
  }

  // Calculate the quantity difference
  const oldQuantity = assect.quantity;
  const newQuantity = updateBody.quantity;
  const quantityDiff = newQuantity - oldQuantity;

  // Update the totalasset field by subtracting the quantity difference
  assect.totalasset -= quantityDiff;

  // Update other fields as needed
  Object.assign(assect, updateBody);

  await assect.save();
  return assect;
};

/**
 * Delete Assect by id
 * @param {ObjectId} hostelId
 * @returns {Promise<Assect>}
 */
const deleteAssectById = async (assectId) => {
  const assect = await getAssectById(assectId);
  if (!assect) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Assect not found');
  }
  await assect.remove();
  return assect;
};

module.exports = {
  createAssect,
  queryAssect,
  getAssectById,
  updateAssectById,
  deleteAssectById,
};
