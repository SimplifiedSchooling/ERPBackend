const httpStatus = require('http-status');
const { Assect } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Assect
 * @param {Object} assectData
 * @returns {Promise<Assect>}
 */
const createAssect = async (assectData) => {
  return Assect.create(assectData);
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
// const updateAssectById = async (assectId, updateBody) => {
//   const assect = await getAssectById(assectId);
//   if (!assect) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Assect not found');
//   }
//   Object.assign(assect, updateBody);
//   await assect.save();
//   return assect;
// };

const updateAssectById = async (assectId, updateBody) => {
  // const assect = await getAssectById(assectId);
  // if (!assect) {
  //   throw new ApiError(httpStatus.NOT_FOUND, 'Assect not found');
  // }

  // // Calculate the updated quantity based on totalasset and totaldestroyed
  // const newTotalAsset = updateBody.totalasset || assect.totalasset;
  // const newTotalDestroyed = updateBody.totaldestroyed || assect.totaldestroyed;

  // const newQuantity = assect.quantity + (newTotalAsset - assect.totalasset) - (newTotalDestroyed - assect.totaldestroyed);

  // // Update the asset fields
  // assect.totalasset = newTotalAsset;
  // assect.totaldestroyed = newTotalDestroyed;
  // assect.quantity = newQuantity;

  // // Update other fields as needed
  // Object.assign(assect, updateBody);

  // await assect.save();
  // return assect;
  const assect = await getAssectById(assectId);
  if (!assect) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Assect not found');
  }

  // Calculate the changes in totalasset and totaldestroyed
  const newTotalAsset = updateBody.totalasset || assect.totalasset;
  const newTotalDestroyed = updateBody.totaldestroyed || assect.totaldestroyed;

  const assetChange = newTotalAsset - assect.totalasset;
  const destroyedChange = newTotalDestroyed - assect.totaldestroyed;

  // Remove the existing quantity
  const newQuantity = 0; // To reset the quantity, set it to 0

  // Update the asset fields
  assect.totalasset = newTotalAsset;
  assect.totaldestroyed = newTotalDestroyed;

  // Update the quantity value
  assect.quantity = newTotalAsset-newTotalDestroyed;

  // Update other fields as needed
  Object.assign(assect, updateBody);

  // Adjust the quantity based on changes in totalasset and totaldestroyed
 // assect.quantity += assetChange - destroyedChange;

  // Save the asset
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
