const httpStatus = require('http-status');
const SaralInformation1 = require('../../models/saral/saral.information1.model');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Saral Information1
 * @param {Object} saralInfo1
 * @returns {Promise<SaralInformation1>}
 */
const createSaralInfo1 = async (saralInfo1) => {
  return SaralInformation1.create(saralInfo1);
};

/**
 * Query for Saral information1
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getAllSaralInfo1s = async (filter, options) => {
  const result = await SaralInformation1.paginate(filter, options);
  return result;
};

/**
 * Get Saral information1 by id
 * @param {ObjectId} id
 * @returns {Promise<SaralInformation1>}
 */
const getSaralInfo1ById = async (id) => {
  return SaralInformation1.findById(id);
};

/**
 * Update Saral Information1 by id
 * @param {ObjectId} saralInfo1Id
 * @param {Object} updateBody
 * @returns {Promise<SaralInformation1>}
 */
const updateSaralInfo1ById = async (saralInfo1Id, updateBody) => {
  const saral = await getSaralInfo1ById(saralInfo1Id);
  if (!saral) {
    throw new ApiError(httpStatus.NOT_FOUND, 'saral Information1 not found');
  }
  Object.assign(saral, updateBody);
  await saral.save();
  return saral;
};

/**
 * Delete Saral Information1 by id
 * @param {ObjectId} saralInfo1Id
 * @returns {Promise<SaralInformation1>}
 */
const deleteSaralInfo1ById = async (saralInfo1Id) => {
  const saral = await getSaralInfo1ById(saralInfo1Id);
  if (!saral) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Saral Information1 not found');
  }
  await saral.remove();
  return saral;
};

module.exports = {
  createSaralInfo1,
  getAllSaralInfo1s,
  getSaralInfo1ById,
  updateSaralInfo1ById,
  deleteSaralInfo1ById,
};
