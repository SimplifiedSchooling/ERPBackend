const httpStatus = require('http-status');
const { Mapping } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a mapping
 * @param {Object} mappingBody
 * @returns {Promise<Mapping>}
 */
const createMapping = async (mappingBody) => {
  return Mapping.create(mappingBody);
};

/**
 * Query for mapping
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryMapping = async (filter, options) => {
  const mapping = await Mapping.paginate(filter, options);
  return mapping;
};

/**
 * Get mapping by id
 * @param {ObjectId} id
 * @returns {Promise<Mapping>}
 */
const getMappingById = async (id) => {
  return Mapping.findById(id);
};

/**
 * Update mapping by id
 * @param {ObjectId} mappingId
 * @param {Object} updateBody
 * @returns {Promise<Mapping>}
 */
const updateMappingById = async (mappingId, updateBody) => {
  const mapping = await getMappingById(mappingId);
  if (!mapping) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Mapping not found');
  }
  Object.assign(mapping, updateBody);
  await mapping.save();
  return mapping;
};

/**
 * Delete mapping by id
 * @param {ObjectId} mappingId
 * @returns {Promise<Mapping>}
 */
const deleteMappingById = async (mappingId) => {
  const mapping = await getMappingById(mappingId);
  if (!mapping) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Mapping not found');
  }
  await mapping.remove();
  return mapping;
};

module.exports = {
  createMapping,
  queryMapping,
  getMappingById,
  updateMappingById,
  deleteMappingById,
};
