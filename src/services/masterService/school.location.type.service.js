const httpStatus = require('http-status');
const { SchoolLocationType } = require('../../models/index');
const ApiError = require('../utils/ApiError');

/**
 * Create a SchoolLocationType
 * @param {Object} schoolLocation
 * @returns {Promise<SchoolLocationType>}
 */
const createStudio = async (schoolLocation) => {
  return SchoolLocationType.create(schoolLocation);
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
const getAllStudios = async (filter, options) => {
  const studios = await SchoolLocationType.paginate(filter, options);
  return studios;
};

/**
 * Get SchoolLocationType by id
 * @param {ObjectId} id
 * @returns {Promise<SchoolLocationType>}
 */
const getStudioById = async (id) => {
  return SchoolLocationType.findById(id);
};

/**
 * Update SchoolLocationType by id
 * @param {ObjectId} studioId
 * @param {Object} updateBody
 * @returns {Promise<SchoolLocationType>}
 */
const updateStudioById = async (studioId, updateBody) => {
  const studio = await getStudioById(studioId);
  if (!studio) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Studio not found');
  }
  Object.assign(studio, updateBody);
  await studio.save();
  return studio;
};

/**
 * Delete SchoolLocationType by id
 * @param {ObjectId} studioId
 * @returns {Promise<SchoolLocationType>}
 */
const deleteStudioById = async (studioId) => {
  const studio = await getStudioById(studioId);
  if (!studio) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Studio not found');
  }
  await studio.remove();
  return studio;
};

module.exports = {
  createStudio,
  getAllStudios,
  getStudioById,
  updateStudioById,
  deleteStudioById,
};
