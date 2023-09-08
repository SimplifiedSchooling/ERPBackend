const httpStatus = require('http-status');
const {InchargeType}  = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a InchargeType
 * @param {Object} inchargeType
 * @returns {Promise<InchargeType>}
 */
const createInchargeType = async (inchargeType) => {
  return InchargeType.create(inchargeType);
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
const getAllInchargeType = async () => {
  const AllInchargeType = await InchargeType.find({});
  return AllInchargeType;
};

/**
 * Get InchargeType by id
 * @param {ObjectId} id
 * @returns {Promise<InchargeType>}
 */
const getInchargeTypeById = async (id) => {
  return InchargeType.findById(id);
};

/**
 * Update InchargeType by id
 * @param {ObjectId} inChargeTypeId
 * @param {Object} updateBody
 * @returns {Promise<InchargeType>}
 */
const updateInchargeTypeyId = async (inChargeTypeId, updateBody) => {
  const InchargeType = await getInchargeTypeById(inChargeTypeId);
  if (!InchargeType) {
    throw new ApiError(httpStatus.NOT_FOUND, 'InchargeType not found');
  }
  Object.assign(InchargeType, updateBody);
  await InchargeType.save();
  return InchargeType;
};

/**
 * Delete InchargeType by id
 * @param {ObjectId} inChargeTypeId
 * @returns {Promise<InchargeType>}
 */
const deleteInchargeTypeById = async (inChargeTypeId) => {
  const InchargeType = await getInchargeTypeById(inChargeTypeId);
  if (!InchargeType) {
    throw new ApiError(httpStatus.NOT_FOUND, 'InchargeType not found');
  }
  await InchargeType.remove();
  return InchargeType;
};

module.exports = {
  createInchargeType,
  getAllInchargeType,
  getInchargeTypeById,
  updateInchargeTypeyId,
  deleteInchargeTypeById,
};
